# Doorlight Publications — Next.js Website Package

This is a ready-to-deploy Next.js version of the Doorlight Publications website concept.

## What is included
- A homepage built with Next.js and Tailwind CSS
- Book cards for the featured titles
- Author section
- About section
- Contact section

## Before you deploy
You do **not** need to install anything if you use Vercel's browser upload method.

If you want to edit the site on your own computer first, you will need:
- Node.js 18 or newer
- A code editor such as Visual Studio Code

---

## Fastest deployment method: Vercel

### 1. Download and unzip this package
Save the zip file to your computer and unzip it.

### 2. Create a Vercel account
Go to Vercel and sign in.

### 3. Add a new project
In Vercel, click **Add New** → **Project**.

### 4. Import the folder
Upload the unzipped `doorlight-nextjs` folder.

### 5. Deploy
Vercel should detect that it is a Next.js project automatically.
You can leave the default settings as they are and click **Deploy**.

### 6. View your live website
After deployment finishes, Vercel will give you a live URL.

### 7. Add your custom domain later if you want
Inside the Vercel project, go to **Settings** → **Domains** and connect your domain name.

---

## How to run it on your computer first

Open a terminal inside the `doorlight-nextjs` folder and run:

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```

---

## How to edit the site

The main homepage is here:

```bash
app/page.tsx
```

Basic site-wide styles are here:

```bash
app/globals.css
```

The page title and description are here:

```bash
app/layout.tsx
```

---

## Easy edits you may want to make

### Change the contact email
In `app/page.tsx`, search for:

```tsx
mailto:info@doorlightpublications.com
```

Replace it with your real email address.

### Change book text or links
In `app/page.tsx`, the `books` array near the top holds the titles, descriptions, and Amazon links.

### Add real book cover images later
Right now the site uses styled book mockups instead of actual covers.
A later update can replace those with real images.

---

## If deployment fails
The most common fixes are:
- make sure you uploaded the whole folder, not just one file
- make sure the folder still contains `package.json`
- if editing locally, run `npm install` before `npm run dev`

---

## Suggested next improvements
- replace the mock book covers with real cover images
- add individual book pages
- add an About Doorlight page
- add a submissions or contact form
- connect a custom domain
