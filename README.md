# shadcn-registry-template

[shadcn-ui v2.0](https://ui.shadcn.com/docs/changelog) introduced the possibility of fetching components from custom registries, that's why this template was born.

<img width="886" alt="image" src="https://github.com/user-attachments/assets/faa1ac0f-ca3b-4115-b9a8-31f2568e8e9e">

## Components 
As did by [shadcn-ui](https://github.com/shadcn-ui/ui), components are organized by styles under the `registry` folder.
Files are structured as follows:


```bash
registry
├── default
│   ├── hooks
│   ├── lib
│   ├── themes
│   └── ui
└── <your-style>
    ├── <custom-registry-name>
    └── ui
```

## Adding new components, hooks, lib, themes, etc.

1. As did for the accordion, add your component under the `registry` folder.
2. Register your component in the `registry-<scope>.ts` (eg. `registry-ui.ts` for components, `registry-themes.ts` for themes, etc.)
3. Run `pnpm build:registry` to generate the `registry.ts` file.

## Installing custom components

You can install your custom components by running 

```bash
npx shadcn-ui@latest add {app-url}/r/styles/{style-name}/{component-name}.json
```

## Running the app locally
This app simple homepage was thought for simplify the process of building the registry url. 

In order to see it in action locally, run `pnpm dev` and navigate to `http://localhost:3000`.


## Deploy it on Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ilyichv/shadcn-registry-template)
