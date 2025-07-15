// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
// Force fresh deployment - static build to fix serverless function crashes
export default defineConfig({output: 'static', adapter: vercel({imageService: true,})});
