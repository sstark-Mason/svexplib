export async function load() {
    // match files under src/routes/blog/posts and any nested group folders like (posts)
    const modules = import.meta.glob('./posts/**/*.svx');
    const posts = [];

    for (const [path, resolver] of Object.entries(modules)) {
        const mod: any = await resolver();
        const filename = (path.split('/').pop() ?? '').replace(/\.svx$/, '');
        posts.push({
            slug: filename,
            title: mod.metadata?.title,
            date: mod.metadata?.date
        });

        if (!mod.metadata?.title) {
            console.warn(`Missing metadata.title in ${path}`);
        }
    }

    return { posts };
}

