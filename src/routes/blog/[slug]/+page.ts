import { error } from '@sveltejs/kit';
import { debugLib } from '$lib/imports.ts';
const debug = debugLib('svexplib:blog:[slug]:page');

export const prerender = true;

export async function load({ params }) {
    try {
        // Dynamically import the SVX file based on the slug
        const post = await import(`$lib/posts/${params.slug}.svx`);
        return {
            content: post.default,
            metadata: post.metadata
        };
    } catch (e) {
        throw error(404, 'Post not found');
    }
}