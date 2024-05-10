import adapter from '@sveltejs/adapter-static';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    trailingSlash: 'always',
    prerender: {
        default: true,
    },
    kit:{
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'build',
            assets: 'build',
            fallback: undefined,
            precompress: false,
            strict: true
        }),
        paths: {
            base: '/Absolemackdaw.github.io'
        }
    }

};

export default config;
