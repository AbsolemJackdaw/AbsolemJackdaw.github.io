<script lang="ts">
    import type {ICard} from "./cardRegistry";

    export let card: ICard;
</script>
<div class="bg-black w-[10rem] m-3 p-1 rounded-2xl hover:scale-110 justify-items-center">
    <a href={card.link} class="decoration-0">
        <img src={card.image} alt={card.altTxt} class="rounded-tl-2xl rounded-tr-2xl w-40 h-40"/>
        <div class="pt-2 pb-1 text-slate-100 font-bold [font-size:1rem] [line-height:1.25rem] [font-family:monospace]">{card.text}</div>
    </a>
</div>