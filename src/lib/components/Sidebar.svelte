<script>
    import { base } from "$app/paths";
    import { pages } from "./../../routes/data"
</script>

<div class="lg:flex hidden pt-10 transition-opacity">
    <ul class="w-52 transition-opacity">
        {#each pages as page}
        <li class="px-2 py-2 capitalize rounded-sm hover:bg-darker-bg hover:text-dark-link transition delay-100">
            <a href={base + "/pages/" + page.href}>
                {page.title}
            </a>
        </li>
        {/each}
    </ul>
</div>