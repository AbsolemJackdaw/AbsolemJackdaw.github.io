<script lang="ts">
    export const prerender = true;
    import "../app.css";
    import {page} from '$app/stores';

    const root = "/"
    const mods = "/mods"
    const software = "/software"

    $:url = $page.url.pathname

    $: isSelected = url;

</script>
<style>
    .backgroundImg {
        background-image: url("/bg.svg");
        background-repeat: repeat;
        background-position: bottom;
        background-attachment: fixed;
    }

    .foregroundImg {
        background-image: url("/fg.svg");
        background-repeat: repeat;
        background-attachment: scroll;
    }
</style>

<body class="h-screen scroll backgroundImg dark:text-slate-300 text-slate-900">
<div class="foregroundImg">
    <nav class="bg-gradient-to-b from-indigo-500 from-20% via-purple-500 via-80% to-pink-400 flex items-center justify-center p-6 mx-auto text-green-300 capitalize text-2xl">
        <div class="">
            <a href={root} on:click={() => isSelected = root}
               class="hover:border-b-4 border-amber-200 mx-1.5 sm:mx-3 {isSelected === root ? 'border-b-4':''}">Home</a>
            <a href={mods} on:click={() => isSelected = mods}
               class="hover:border-b-4 border-amber-200 mx-1.5 sm:mx-3 {isSelected === mods ? 'border-b-4':''}">Mods</a>
            <a href={software} on:click={() => isSelected = software}
               class="hover:border-b-4 border-amber-200 mx-1.5 sm:mx-3 {isSelected === software ? 'border-b-4':''}">Software</a>
        </div>
    </nav>
    <div class="flex flex-col items-center">
        <slot/>
    </div>
</div>
</body>
