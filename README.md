# tailwindcss-storybook

This repository shows how to integrate Tailwind CSS components with Storybook.

## Running Storybook

```sh
npm ci
npm run dev
```

## Issues

Changes to the React components or changes to `tailwind.config.js`, both require
a restart of the `npm run dev` command. This happens although both postcss is
running in `watch` mode.
