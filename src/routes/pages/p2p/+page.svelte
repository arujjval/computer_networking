<script>
    import data from "./data";
</script>

<div class="flex flex-col">
    <h1 class="font-bold text-4xl uppercase pt-10">{data.title}</h1>
    <div class="py-20">
        {#each data.sections as section}
            <div class="py-5">
                <h2 class={"uppercase text-xl font-bold pb-2"}>{section.title}</h2>
                <hr class={section.title === ' '? "hidden" : "opacity-30"}>
                <p class="pt-4">{@html section.content}</p>
            </div>
        {/each}
    </div>
</div>
