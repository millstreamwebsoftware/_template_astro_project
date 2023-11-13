# Millstream Web Software Astro Starter Kit

## 🛠️ Setup

> ⚠️ Ensure the `--recurse-submodules` flag is set when cloning this repository.
> If it wasn't, you can clone the git submodule in an extra step with
>
> ```sh
> git submodule init
> git submodule update
> ```

Install node modules

```sh
npm i
```

Then run the development server:

```sh
npm run dev
```

## 🚀 Project Structure

Pages are stored in the 'pages' content collection inside `content/pages`.

Components, layouts and default styles are stored in the `src/mws-astro` submodule. Changes within the submodule must be committed and pulled separately to the base repository and are shared between all sites.

Any site-specific styles, including font imports, are defined in `styles/custom.scss`.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run bookshopbuild`   | Run astro build then the bookshop post-build     |
| `ncu -u`                  | Update npm packages                              |

## 📖 Documentation

🚀 [Astro Docs](https://docs.astro.build)

☁️ [Cloudcannon Astro Bookshop Guide](https://cloudcannon.com/documentation/guides/bookshop-astro-guide/)

☁️ [Cloudcannon Docs](https://cloudcannon.com/documentation/articles/)
