import adapter from '@sveltejs/adapter-static';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    adapter: adapter({
        // default options are shown. On some platforms
        // these options are set automatically — see below
        pages: 'build',
        assets: 'build',
        fallback: undefined,
        precompress: false,
        strict: true
    }),
    preprocess: vitePreprocess(),
    prerender: {
        default: true,
    },
    trailingSlash: 'always',
    paths: {
        base: '/AbsolemJackdaw.github.io'
    }
};

export default config;
