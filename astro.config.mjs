// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	integrations: [
		mermaid({
			autoTheme: true
		}),
		starlight({
			title: 'nylon docs',
			routeMiddleware: './src/routeData.ts',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/encodeous/nylon' }],
			sidebar: [
				{
					label: 'Overview',
					link: '/',
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			logo: {
				light: './src/content/docs/assets/logo_light.svg',
				dark: './src/content/docs/assets/logo_dark.svg'
			}
		}),
	],
	vite: {
		server: {
			watch: {
				followSymlinks: true,
			},
		},
		resolve: {
			preserveSymlinks: true
		}
	}
});
