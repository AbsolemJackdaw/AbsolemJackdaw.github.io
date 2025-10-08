<script lang="ts">
    import {mediaCardRegistry} from "../component/cardRegistry.js";
    import Card from "../component/Card.svelte";

    const allCards = mediaCardRegistry();
</script>

<svelte:head>
    <title>SubHaven</title> 
</svelte:head>

<div class="flex flex-col items-center mt-5 text-4xl font-bold">
    <h1 class="mb-20 p-5 backdrop-blur-sm rounded-2xl bg-[#000000aa]">Welcome to the SubHaven</h1>
    <div class="flex flex-wrap text-center justify-center">
        {#each allCards as card}
            <Card {card}/>
        {/each}
    </div>
    <div class="my-10 px-10 py-5 backdrop-blur-sm rounded-2xl bg-[#000000aa]">
        <h2 class="mb-10 border-b">Absolem Jackdaw</h2>
        <ul>
            <li><p>Programmer</p></li>
            <li><p>Artist</p></li>
            <li><p>Biker</p></li>
        </ul>
    </div>

</div>