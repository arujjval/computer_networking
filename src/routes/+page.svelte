<script>
    import { goto } from "$app/navigation"
    import { pages } from "./../routes/data"
    import next from "$lib/assets/next.png"

    function startReading() {
        goto('/pages/' + pages[0].href)
    }

</script>

<div class="flex flex-col md:px-28 lg:px-16">
    <h1 class="font-bold text-4xl uppercase pt-10">Learn Computer Networking</h1>
    <div class="py-20">
        <div>
            This resource is created to help grasp important concepts of Computer Networking. It covers basic terminologies like DNS & IP addresses and also goes to deeper concepts like OSI Model, TCP IP Model and much more.
        </div>
        <div class="py-10">
            This is an open source project and if you want to contribute or suggest an improvement, please visit our repo <a href="https://github.com/arujjval/computer_networking" target="_blank">here</a> and raise an issue.
            And if you found this helpful, please consider giving it a star⭐.
        </div>
    </div>
    <div class="flex justify-center items-center">
        <button on:click={startReading} class="flex items-center text-dark-link gap-2 hover:scale-110 transition delay-100">
            <div>Start Reading</div>
            <img src={next} alt="next" class="h-14">
        </button>
    </div>
</div>
