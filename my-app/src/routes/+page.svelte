<script lang="ts">
    import {mediaCardRegistry} from "../component/cardRegistry.js";
    import Card from "../component/Card.svelte";

    const allCards = mediaCardRegistry();
</script>
<div class="h-screen flex flex-col items-center mt-5 text-4xl font-bold m-48">
    <h1 class="mb-20">Welcome to the SubHaven</h1>
    <div class="flex flex-wrap text-center justify-center">
        {#each allCards as card}
            <Card {card}/>
        {/each}
    </div>
    <p class="my-10 border-b ">Absolem Jackdaw</p>
    <p>
        Programmer<br/>
        Artist<br/>
        Biker<br/>
    </p>

</div>