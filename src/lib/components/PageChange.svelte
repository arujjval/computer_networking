<script>
    // @ts-nocheck
    import { pages } from "./../../routes/data"
    import { base } from "$app/paths"
    import next from "$lib/assets/next.png"
    import prev from "$lib/assets/prev.png"
    import { goto } from "$app/navigation"
    import { page } from "$app/stores"
        
    $: currentPage = pages.find(p => p.href === $page.url.pathname.split("/")[2])
    $: currentPageIndex = currentPage? pages.indexOf(currentPage) : -1
    $: isFirst = currentPage? false : true
    $: isLast = currentPageIndex == pages.length - 1? true : false

    function prevPage() {
        if(isFirst) return
        else if(currentPageIndex == 0){
            goto('/')
        }
        else if(currentPage && currentPageIndex > 0) {
            goto(base + "/pages/" + pages[currentPageIndex - 1].href)
        }
    }

    function nextPage() {
        if(isLast) return
        else if(isFirst) {
            goto(base + "/pages/" + pages[0].href)
        }
        else if(currentPage && currentPageIndex < pages.length  - 1) {
            goto(base + "/pages/" + pages[currentPageIndex + 1 ].href)
        }
    }

</script>

<div class="flex flex-row justify-between">
    <div class={isFirst? 'hidden' : `flex items-center text-lg bg-dark-bg px-4 py-2 rounded-sm 
 text-dark-link transition delay-100 hover:scale-110`}>
        <button on:click={prevPage}>
            <div class="flex items-center">
                <img class="h-10 lg:h-16" src={prev} alt="prev">
                <div>Prev</div>
            </div>
        </button>
    </div>
    <div class={isLast? 'hidden' : `flex items-center text-lg bg-dark-bg px-4 py-2 rounded-sm 
 text-dark-link transition delay-100 hover:scale-110`}>
        <button on:click={nextPage}>
            <div class="flex items-center">
                <div>Next</div>
                <img class="h-10 lg:h-16" src={next} alt="next">
            </div>  
        </button>
    </div>
</div>



