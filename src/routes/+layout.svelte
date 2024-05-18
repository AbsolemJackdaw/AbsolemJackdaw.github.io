<script lang="ts">
    import "../app.css";
    import Navbar from "../component/Navbar.svelte";
</script>
<style>
    .backgroundImg {
        background-image: url("/bg.svg");
        background-repeat: repeat-x;
        background-position: bottom;
        background-attachment: fixed;
    }

    .foregroundImg {
        background-image: url("/fg.svg");
        background-repeat: repeat;
        background-attachment: scroll;
    }
</style>

<body class="min-h-screen scroll backgroundImg text-slate-300">
<div class="min-h-screen foregroundImg">
    <Navbar/>
    <div class="flex flex-col items-center pt-20">
        <slot/>
    </div>
</div>
</body>
