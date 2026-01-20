// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Ing. Adan Moo Lugo - Full Stack Developer',
			description: 'Portafolio de Adan - Full Stack Developer Jr | JavaScript | React | Node.js | TypeScript',
			tableOfContents: true,
			pagination: false,
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/AdanjML1' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'www.linkedin.com/in/adán-m-lugo-16a170312' },
			],
			sidebar: [
				{
					label: 'Inicio',
					items: [
						{ label: 'Inicio', slug: '' },
					],
				},
				{
					label: 'Sobre Mí',
					items: [
						{ label: 'Sobre Mí', slug: 'sobre-mi' },
					],
				},
				{
					label: 'Experiencia',
					items: [
						{ label: 'Experiencia Laboral', slug: 'experiencia' },
					],
				},
				{
					label: 'Habilidades',
					items: [
						{ label: 'Habilidades Técnicas', slug: 'habilidades' },
					],
				},
				{
					label: 'Proyectos',
					items: [
						{ label: 'Proyectos', slug: 'proyectos' },
					],
				},
				{
					label: 'Contacto',
					items: [
						{ label: 'Contacto', slug: 'contacto' },
					],
				},
			],
		}),
	],
});
