# Shekel-Exchange

A cryptocurrency exchange platform for buying and selling digital assets with Israeli Shekel (ILS), built with [Next.js](https://nextjs.org) and bootstrapped with [v0](https://v0.app).

<a href="https://v0.app/chat/api/kiro/clone/lbe13929/Shekel-Exchange" alt="Open in Kiro"><img src="https://pdgvvgmkdvyeydso.public.blob.vercel-storage.com/open%20in%20kiro.svg?sanitize=true" /></a>

## Clone This Repository

To get a complete local copy of this project:

```bash
git clone https://github.com/lbe13929/Shekel-Exchange.git
cd Shekel-Exchange
```

## Mirror to Shekel-

This repository is automatically mirrored to [lbe13929/Shekel-](https://github.com/lbe13929/Shekel-) on every push to `main` via the [mirror workflow](.github/workflows/mirror.yml).

> **Note:** `Shekel-` (with a trailing hyphen) is the exact name of the target GitHub repository — `lbe13929/Shekel-`.

### Setup

To enable mirroring, add a repository secret named **`MIRROR_TOKEN`** in the Shekel-Exchange repository settings:

1. Create a [GitHub Personal Access Token](https://github.com/settings/tokens) (classic) with the `repo` scope, or a fine-grained token with **Contents: Read and write** access to `lbe13929/Shekel-`.
2. Go to **Settings → Secrets and variables → Actions** in this repository.
3. Click **New repository secret**, name it `MIRROR_TOKEN`, and paste the token value.

Once the secret is in place, every merge to `main` will automatically push all branches, tags, and history to `lbe13929/Shekel-`. You can also trigger the sync manually from the **Actions** tab using the **Mirror to Shekel-** workflow.

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [pnpm](https://pnpm.io/) (recommended), npm, or yarn

### Installation

Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
```

### Environment Variables

No environment variables are required for the default setup — the project runs out of the box. If you need to add custom configuration, create a `.env.local` file in the root directory.

## Getting Started

Run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below — start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_1yO7IB5LOD9VhyZwyRMdlb3lUiTO)

## Project Structure

```
Shekel-Exchange/
├── app/                # Next.js App Router pages and layouts
├── components/         # Reusable React components
│   └── ui/             # shadcn/ui base components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and translations
├── public/             # Static assets
└── styles/             # Global CSS styles
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start the development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start the production server |
| `pnpm lint` | Run ESLint |

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.
