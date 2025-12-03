<script lang="ts">
    export let data;
</script>

<h1>Blog Posts</h1>
<ul>
    {#each data.posts as post}
        <li>
            <a href={`/blog/${post.slug}`}>{post.date} - {post.title}</a>
        </li>
    {/each}
</ul>