<script>
    import "../app.css"
    import { pages } from "./data"
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


<div class="bg-dark-bg text-dark-text min-h-screen font-sans overflow-x-hidden">

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
      <!-- <div class="flex justify-center">
        <button on:click={toggle}><img src={theme === "light"? darkbtn : lightbtn} alt="toggle" class="fill-dark-text h-8 hover:rotate-[20deg] transition ease-in-out duration-300 hover:fill-dark-link"/></button>
      </div> -->
    </div>
    
    <div class="lg:hidden flex justify-center flex-col pb-3">
      <button on:click={togglePages}><h3 class="text-dark-link font-semibold">Go to</h3></button>
      <div class="flex justify-center overflow-y-auto z">
        <ul class={ (changePage? "hidden" : "")}>
          {#each pages as page}
            <li class="px-2 py-2 rounded-sm hover:bg-darker-bg hover:text-dark-link transition delay-100"><button on:click={togglePages}><a href={"/pages/" + page.href} class="capitalize">{page.title}</a></button></li>
          {/each}
        </ul>
      </div>
    </div>
    <hr class="opacity-20">
  </div>
  
  
  <div class="flex flex-row pt-40 px-10">
    <div class="lg:flex hidden pt-10 transition-opacity">
      <ul class="w-52 transition-opacity">
        {#each pages as page}
          <li class="px-2 py-2 capitalize rounded-sm hover:bg-darker-bg hover:text-dark-link transition delay-100"><a href={"/pages/" + page.href}>{page.title}</a></li>
        {/each}
      </ul>
    </div>
    <div class="in-pages lg:px-40 md:px-28">
      <slot />
    </div>
  </div>

  <div class="footer pt-10">
    <hr class="opacity-20">
    <div class="flex justify-center py-10">
      <div class="flex flex-col items-center gap-2">
        <div>to contribute, visit this </div>
        <!-- <a href="" target="_blank" class="underline"></a>repo</a> -->
        <div>made by <a href="https://twitter.com/arujjval" target="_blank">arujjval&#8482;</a></div>
      </div>
    </div>
  </div>

</div>


