<script>
    import { base } from "$app/paths";
    import { pages } from "./../../routes/data"
    import darkbtn from "$lib/assets/dark.png"
    import lightbtn from "$lib/assets/light.png"
    import darklogo from "$lib/assets/dark-logo.png"
    import lightlogo from "$lib/assets/light-logo.png"
    import { page } from "$app/stores"

    $: currentPage = pages.find(p => p.href === $page.url.pathname.split("/")[2])
    $: currentPageIndex = currentPage? pages.indexOf(currentPage) : -1

    let currTheme = "dark"

    // function toggleTheme(){
    //   theme.toggle()
    //   currTheme = $theme
    //   console.log(currTheme)
    // }

    let changePage = true

    function togglePages(){
      changePage = !changePage
    }
</script>


<div class="fixed bg-dark-bg text-dark-text w-full left-0">
    <div class="flex flex-row justify-between px-10 py-7">
      <div class="flex flex-row items-center text-2xl uppercase gap-2 font-semibold ">
        <a href="/" on:click={function def(){
          if(!changePage){
            togglePages()
          }
        }}><img src={darklogo} alt="logo" class="h-10"/>
        </a>
        <div class="sm:flex hidden">Computer networking</div>
      </div>
      <!-- <div class="flex justify-center">
        <button on:click={toggleTheme}>
          <img src={currTheme === "light"? darkbtn : lightbtn} alt="toggle" 
          class="fill-{currTheme}-text h-8 hover:rotate-[20deg] transition ease-in-out duration-300 hover:fill-dark-link"
          />
        </button>
      </div> -->
    </div>
    
    <div class="lg:hidden flex justify-center flex-col pb-3">
      <button on:click={togglePages}>
        <h3 class="text-dark-link font-semibold">Go to</h3>
      </button>
      <div class="flex justify-center overflow-y-auto bg-{currTheme}-bg">
        <ul class={ (changePage? "hidden" : "pt-5")}>
          {#each pages as page, index}
            <li class={"px-2 py-2 rounded-sm  hover:bg-{currTheme}er-bg hover:text-dark-link transition delay-100" + (index==currentPageIndex && "bg-darker-bg text-dark-link scale-110")}>
              <button on:click={togglePages}>
                <a href={base + "/pages/" + page.href} class="capitalize bg-{currTheme}-bg">
                  {page.title}
                </a>
              </button>
            </li>
          {/each}
        </ul>
      </div>
    </div>
</div>
  