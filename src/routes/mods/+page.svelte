<script lang="ts">
    import {modCardRegistry} from "../../component/cardRegistry.js";
    import Card from "../../component/Card.svelte";

    const allCards = modCardRegistry();
</script>

<div class="flex flex-col items-center mt-5 text-4xl font-bold mx-48">
    <!--    <h1 class="mb-20">Welcome to the Subhaven</h1>-->
    <div class="flex flex-wrap text-center justify-center">
        {#each allCards as card}
            <Card {card}/>
        {/each}
    </div>

</div>
