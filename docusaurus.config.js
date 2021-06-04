/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'Docs For Developers',
	tagline: 'Make Developers life easier',
	url: 'https://docs-for-developers.github.io/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'docs-for-developers', // Usually your GitHub org/user name.
	projectName: 'docs-for-developers.github.io', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'Dev Docs',
			logo: {
				alt: 'My Site Logo',
				src: 'img/logo.png',
			},
			items: [
				{
					type: 'doc',
					docId: 'intro',
					position: 'left',
					label: 'Tutorial',
				},
				// { to: '/blog', label: 'Blog', position: 'left' },
				{
					href: 'https://github.com/facebook/docusaurus',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Tutorial',
							to: '/docs/intro',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Stack Overflow',
							href: 'https://stackoverflow.com/questions/tagged/docusaurus',
						},
						{
							label: 'Discord',
							href: 'https://discordapp.com/invite/docusaurus',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/docusaurus',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'Blog',
							to: '/blog',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/facebook/docusaurus',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
