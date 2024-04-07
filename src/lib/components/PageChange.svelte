<script>
    import { pages } from "./../../routes/data"
    import next from "$lib/assets/next.png"
    import prev from "$lib/assets/prev.png"
    import { goto } from "$app/navigation"
    import { page } from "$app/stores"


    // // @ts-ignore
    // let currentPage = 
    // $:currentPage = $page
    
    
    // console.log(currentPage)

    function prevPage() {
        // @ts-ignore
        // const index = currentPage.id - 1
        // if (index > 0) {
        //     const prevPage = pages[index - 1]
        //     goto(prevPage.href)
        // }
    }

    function nextPage() {

    }

</script>

<div class="flex flex-row justify-between">
    <div>
        <button class={`flex items-center text-lg bg-dark-bgpx-4 py-2 rounded-sm 
        hover:bg-darker-bg text-dark-link transition delay-100`}
        on:click={prevPage}>
        <img class="h-10 lg:h-16" src={prev} alt="prev">
        <div>Prev</div>
        </button>
    </div>
    <div>
        <button class="flex items-center text-lg bg-dark-bg px-4 py-2 rounded-sm 
            hover:bg-darker-bg text-dark-link transition delay-100"
            on:click={nextPage}>
            <div>Next</div>
            <img class="h-10 lg:h-16" src={next} alt="next">
        </button>
    </div>
</div>



