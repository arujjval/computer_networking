<script>
    import { base } from "$app/paths";
    import { pages } from "./../../routes/data"
    import darkbtn from "$lib/assets/dark.png"
    import lightbtn from "$lib/assets/light.png"
    import darklogo from "$lib/assets/dark-logo.png"
    import lightlogo from "$lib/assets/light-logo.png"

    let changePage = true

    let theme = "dark"

    function toggle(){
      theme = theme === "light"? "dark": "light"
      console.log(theme)
    }

    function togglePages(){
      changePage = !changePage
    }
</script>

<div class="fixed bg-dark-bg w-full left-0">
    <div class="flex flex-row justify-between px-10 py-7">
      <div class="flex flex-row items-center text-2xl uppercase gap-2 font-semibold ">
        <a href="/" on:click={function def(){
          if(!changePage){
            togglePages()
          }
        }}><img src={theme === 'light'? lightlogo : darklogo} alt="logo" class="h-10"/></a>
        <div class="sm:flex hidden">Computer networking</div>
      </div>
      <div class="flex justify-center">
        <button on:click={toggle}><img src={theme === "light"? darkbtn : lightbtn} alt="toggle" class="fill-dark-text h-8 hover:rotate-[20deg] transition ease-in-out duration-300 hover:fill-dark-link"/></button>
      </div>
    </div>
    
    <div class="lg:hidden flex justify-center flex-col pb-3">
      <button on:click={togglePages}><h3 class="text-dark-link font-semibold">Go to</h3></button>
      <div class="flex justify-center overflow-y-auto z">
        <ul class={ (changePage? "hidden" : "")}>
          {#each pages as page}
            <li class="px-2 py-2 rounded-sm hover:bg-darker-bg hover:text-dark-link transition delay-100"><button on:click={togglePages}><a href={base + "/pages/" + page.href} class="capitalize">{page.title}</a></button></li>
          {/each}
        </ul>
      </div>
    </div>
</div>
  