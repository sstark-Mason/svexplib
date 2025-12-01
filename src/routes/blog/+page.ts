export async function load() {
    // Manually import or use import.meta.glob to get all posts
    // const modules = import.meta.glob('../../posts/*.svx');
    const modules = import.meta.glob('$lib/posts/*.svx');
    const posts = [];

    for (const [path, resolver] of Object.entries(modules)) {
        const mod: any = await resolver();
        posts.push({
            slug: (path.split('/').pop() ?? '').replace('.svx', ''),
            title: mod.metadata.title,
            date: mod.metadata.date
        });
        
        if (!mod.metadata?.title) {
            console.warn(`Missing metadata.title in ${path}`);
}
    }

    return { posts };
}