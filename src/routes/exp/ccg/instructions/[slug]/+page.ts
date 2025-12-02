import { error } from '@sveltejs/kit';
import debug from "debug";
const log = debug("app:Instructions:[slug]:page");

export async function load({ params }) {
    try {
        // Dynamically import the SVX file based on the slug
        const post = await import(`$lib/ccg/instructions/${params.slug}.svx`);
        return {
            content: post.default,
            metadata: post.metadata
        };
    } catch (e) {
        throw error(404, 'Page not found');
    }
}