<script>
    import { base } from "$app/paths";
    import { pages } from "./../../routes/data"
    import { page } from "$app/stores"

    $: currentPage = pages.find(p => p.href === $page.url.pathname.split("/")[2])
    $: currentPageIndex = currentPage? pages.indexOf(currentPage) : -1

</script>

<div class="lg:flex hidden pt-10 transition-opacity">
    <ul class="w-52 transition-opacity">
        {#each pages as page, index}
        <li class={"px-2 py-2 capitalize rounded-sm hover:bg-darker-bg hover:text-dark-link transition delay-100" + (index==currentPageIndex && "bg-darker-bg text-dark-link scale-110")}>
            <a href={base + "/pages/" + page.href}>
                {page.title}
            </a>
        </li>
        {/each}
    </ul>
</div>