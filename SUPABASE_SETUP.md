# Supabase Setup

This site now tries to load the exercise library from Supabase first. If Supabase is not configured or the request fails, it falls back to the current local `data.js` file.

## 1. Create The Database

Open your Supabase project, go to **SQL Editor**, and run `supabase-schema.sql`.

That creates:

- `categories`
- `exercises`
- public read policies for visitors
- the six current category rows

## 2. Add Your Supabase Keys

Open `supabase-config.js` and fill in:

```js
window.SUPABASE_CONFIG = {
  url: "https://YOUR-PROJECT.supabase.co",
  anonKey: "YOUR-ANON-PUBLIC-KEY",
  videoBucket: "exercise-videos"
};
```

Use the anon public key, not the service role key.

## 3. Add Exercises

To import the current library, run:

```sh
node tools/export-supabase-csv.mjs
```

Then import these files in Supabase:

- `supabase-import/categories.csv` into `categories`
- `supabase-import/exercises.csv` into `exercises`

If you add exercises manually, the important columns are:

- `name`
- `category`
- `sports`, as a Postgres text array like `{"Football","Soccer"}`
- `equipment`, as a Postgres text array like `{"Cones","Indoor Turf"}`
- `focus`
- `description`
- `coaching`
- `programming`
- `video_url` or `video_path`

## 4. Add Videos

For public demo videos:

1. Go to **Storage**.
2. Create a public bucket named `exercise-videos`.
3. Upload videos.
4. In the `exercises` table, set either:
   - `video_url` to a full public URL, or
   - `video_path` to the path inside the bucket, like `speed/ladder-in-in-out-out.mov`.

## 5. Publish The Website

Supabase provides the database and video storage, but this static website still needs hosting. Good simple choices are Netlify, Vercel, GitHub Pages, or any static file host.

Upload/deploy this folder with:

- `index.html`
- `category.html`
- `styles.css`
- `app.js`
- `data.js`
- `supabase-config.js`
- the `assets` folder

After that, other people can open the hosted URL and the site will read from Supabase.
