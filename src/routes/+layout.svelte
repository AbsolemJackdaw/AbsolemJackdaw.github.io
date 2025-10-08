<script lang="ts">
    import "../app.css";
    import Navbar from "../component/Navbar.svelte";
</script>
<style>
    .mountainImg {
        background-image: url("/mountain.svg");
        background-repeat: repeat-x;
        background-position: bottom;
        background-attachment: fixed;
    }

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

<div class="min-h-screen scroll backgroundImg text-slate-300">
    <div class="min-h-screen mountainImg">
        <div class="min-h-screen foregroundImg">
            <Navbar/>
            <main id="main" class="flex flex-col items-center scroll-pt-40">
                <slot/>
            </main>
        </div>
    </div>
</div>
