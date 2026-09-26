import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'El diario de la boticaria | Blog de Mery',
    description: 'Anotaciones de una boticaria aprendiz de Astro: hierbas, venenos y misterios del código.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es-MX</language>`,
  });
}