<script>
    import "../app.css";

    export const prerender = true;
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

<body class="h-screen w-screen backgroundImg dark:text-slate-300 text-slate-900">
<div class="foregroundImg">
    <nav class="bg-cyan-950 p-4 rounded shadow center items-center justify-center flex">
        <div class="rounded-2xl border-2 px-5 py-5 bg-blue-950 border-blue-500">
            <a href="/"
               class="shadow border-2 border-cyan-600 rounded-md bg-cyan-900 hover:bg-cyan-800 p-1 font-bold mr-5 text-2xl justify-center items-center">Home</a>
            <a href="/mods"
               class="shadow border-2 border-cyan-600 rounded-md bg-cyan-900 hover:bg-cyan-800 p-1 font-bold text-2xl justify-center items-center">Mods</a>
        </div>
    </nav>
    <div class="flex flex-col items-center">
        <slot/>
    </div>
</div>
</body>
