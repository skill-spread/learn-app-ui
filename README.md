## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Branch naming and Commit messages

### Branch naming:

For the sake of consistency and transparency of the work done, branches are to be called like that:

```<type>/some_description```

#### Meaning:

```<type>``` - type of the work [feature, bugfix, hotfix]. These are the most frequent types of work as of now. This list can be reiterated in the future, if needed.

```some_description``` - some brief description of what this changes is to implement

### Commit messages:

To be consistent with branch naming conventions, commit messages should follow similar rules.

The commit message should follow this pattern:

```<type>:some_description```

You can check out the ```commitlint.config.js``` file at the root of the project to get acquainted with all possible types