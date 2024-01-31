# Millstream Web Software Astro Starter Kit

## 🛠️ Setup

First create a new astro project with this template:

```sh
npm create astro@latest -- --template millstreamwebsoftware/_template_astro_project
```

When prompted, set the project directory. If you are running the command from a new empty project directory already, use `.`

Use default settings for everything else:

```sh
    ts   Do you plan to write TypeScript?
         Yes

   use   How strict should TypeScript be?
         Strict

  deps   Install dependencies?
         Yes

   git   Initialize a new git repository?
         Yes
```

Then add the submodule:

```sh
git submodule add https://github.com/millstreamwebsoftware/mws-astro src/mws-astro
```

Create a new github repository:

```sh
gh repo create
```

```sh
? What would you like to do? Push an existing local repository to GitHub
? Path to local repository .
? Repository name
? Repository owner millstreamwebsoftware
? Description
? Visibility Private
✓ Created repository on GitHub
? Add a remote? Yes
? What should the new remote be called? origin
✓ Added remote
```

Stage & Commit waiting changes to Github

```sh
git add .
git commit -m "Initial Commit"
git push -u origin main
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
