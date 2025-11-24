<script lang="ts">
    import { onMount } from 'svelte';
    import NavSidebar from '$lib/NavSidebar.svelte';
    
    let components: string[] = [];
    
    onMount(async () => {
        const modules = import.meta.glob('$lib/components/*.svelte', { eager: true });
        components = Object.keys(modules).map((path) => {
        const parts = path.split('/');
        return parts[parts.length - 1].replace('.svelte', '');
        });
    });
</script>