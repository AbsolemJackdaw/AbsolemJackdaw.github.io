<script>
    import {page} from '$app/stores';

    $:url = $page.url.pathname
    $: isSelected = url

    const root = "/"
    const mods = "/mods"
    const software = "/software"
    const about = "/about"

</script>

<nav class="z-10 items-center justify-center flex fixed w-full bg-gradient-to-b from-indigo-500 from-20% via-purple-500 via-80% to-pink-400 p-6 mx-auto text-green-300 capitalize text-2xl">
    <div class="">
        <a href={root} on:click={() => isSelected = root}
           class="hover:border-b-4 border-amber-200 mx-1.5 sm:mx-3 {isSelected === root ? 'border-b-4':''}">Home</a>
        <a href={mods} on:click={() => isSelected = mods}
           class="hover:border-b-4 border-amber-200 mx-1.5 sm:mx-3 {isSelected === mods ? 'border-b-4':''}">Mods</a>
        <a href={software} on:click={() => isSelected = software}
           class="hover:border-b-4 border-amber-200 mx-1.5 sm:mx-3 {isSelected === software ? 'border-b-4':''}">Software</a>
        <a href={about} on:click={() => isSelected = about}
           class="hover:border-b-4 border-amber-200 mx-1.5 sm:mx-3 {isSelected === about ? 'border-b-4':''}">About</a>
    </div>
</nav>