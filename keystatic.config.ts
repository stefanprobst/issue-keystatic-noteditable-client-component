import { config, collection, fields } from '@keystatic/core';
import { figure } from "@/components/component-blocks/figure";

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: './content/posts/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.document({
          label: 'Content',
          dividers: true,
          formatting: true,
          images: {
            directory: './public/assets/',
            publicPath: '/assets/'
          },
          links: true,
          tables: true,
          componentBlocks: {
            figure,
          }
        }),
      },
    }),
  },
});
