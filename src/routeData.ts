import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context) => {
  const { entry } = context.locals.starlightRoute;

  // The default path would be 'src/content/docs/page-slug.md'
  const repoPath = 'https://github.com/encodeous/nylon/edit/main/docs';

  context.locals.starlightRoute.editUrl = new URL(
    `${entry.filePath.replace('src/content/', '')}`, 
    repoPath
  );
});