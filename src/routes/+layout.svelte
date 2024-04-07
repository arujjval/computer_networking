<script>
    import "../app.css"
    import Topbar from "./../lib/components/Topbar.svelte"
    import Footer from "./../lib/components/Footer.svelte"
    import Sidebar from "./../lib/components/Sidebar.svelte"
    import PageChange from "./../lib/components/PageChange.svelte"
</script>

<div class="bg-dark-bg text-dark-text min-h-screen font-sans overflow-x-hidden">
  <Topbar />
  <div class="flex flex-row pt-24 md:pt-16 px-10">
    <Sidebar />
    <div class="in-pages pt-8 lg:px-40 md:px-28">
      <slot />
      <!-- <PageChange /> -->
    </div>
  </div>
  <Footer />
</div>


