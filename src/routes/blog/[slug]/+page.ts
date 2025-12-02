import { error } from '@sveltejs/kit';
import { debugLib } from '$lib/imports.ts';
const debug = debugLib('svexplib:blog:[slug]:page');

export const prerender = true;

export async function load({ params }) {
    try {
        // Dynamically import the SVX file based on the slug
        // Use a glob so Vite knows about the files (matches files under blog/posts, including group folders)
        const modules = import.meta.glob('../posts/**/*.svx');

        // Find the module path that ends with the slug (handles nested/group folders)
        const match = Object.keys(modules).find((p) => p.endsWith(`${params.slug}.svx`));

        if (!match) {
            throw error(404, 'Post not found');
        }

        const resolver = (modules as Record<string, () => Promise<any>>)[match];
        const post = await resolver();

        return {
            content: post.default,
            metadata: post.metadata
        };
    } catch (e) {
        throw error(404, 'Post not found');
    }
}