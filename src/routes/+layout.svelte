<script lang="ts">
    import "../app.css";
    import Navbar from "../component/Navbar.svelte";
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
    <Navbar/>
    <div class="flex flex-col items-center">
        <slot/>
    </div>
</div>
</body>
