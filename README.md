# Power BI Theme Studio - Version 2

Version 2 keeps every feature of version 1 and improves the page layout: a header bar, grouped sidebar tabs (Canvas, Brand, Page, Landing, Saved), a download bar that is always visible, a preview that stays in view, and a How to use / Theme JSON panel under the preview. It also works on phones and in dark mode.

A single-page tool that builds a Power BI theme (.json), a text-free dashboard background (.png) and an optional landing page background (.png), at the canvas size you pick (16:9, 4:3, Letter, Full HD, Tooltip or custom px). It is plain HTML, CSS and JavaScript, so it runs on GitHub Pages with no build step.

Files: `index.html` (the app), `config.js` (your settings), `firestore.rules` (database rules to paste into Firebase), `.nojekyll`.

## Color themes

The **Brand** tab has 10 complete color themes (page, bands, cards, text, status colors and chart colors): My brand (red), Ocean, Forest, Sunset, Royal purple, Fresh teal, Amber, Slate, Mono and Midnight (dark). **Surprise me** makes a random one. Enter your own three brand colors and click **Use these colors for the whole theme** to build a theme from them, then **Save as my brand** to keep it in this browser. The look people start with is `defaultTheme` in `config.js`.

## 1. Put it on GitHub Pages (free)

1. On github.com click **New repository**, name it (for example `powerbi-theme-studio`), keep it **Public**, then **Create repository**.
2. Click **uploading an existing file**, drag in `index.html`, `config.js`, `firestore.rules` and `README.md`, then **Commit changes**. (Unzip first. GitHub cannot read a zip.)
3. **Settings > Pages > Build and deployment**: choose **Deploy from a branch**, branch `main`, folder `/ (root)`, **Save**.
4. After a minute the site is at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

Never share a GitHub password or access token with anyone, including chat assistants.

## 2. Can GitHub be the database?

No. GitHub Pages only serves static files; it cannot run a database, and the browser cannot safely write to a repo on a visitor's behalf. The usual setup is: GitHub hosts the page, and a free database service stores the data. This project uses **Firebase** (Authentication + Firestore). The page talks to Firebase directly from the browser, so you do not need your own server.

## 3. Optional login that saves designs

Everything works without login. Without Firebase, the **My saved designs** section already saves designs in the visitor's own browser (that device only). If you set Firebase up, the **Log in** button (top right) lets people save designs to their account and load them on any device. Saved data is the design settings only (colors, layout, text, sizes). Logos over about 300 KB are not saved.

1. Go to console.firebase.google.com and **Add project**.
2. **Build > Authentication > Get started > Sign-in method**: enable **Google** and **Email/Password**.
3. **Authentication > Settings > Authorized domains > Add domain**: `YOUR-USERNAME.github.io`.
4. **Build > Firestore Database > Create database** (choose a location near your users, start in production mode).
5. In Firestore open the **Rules** tab, paste the contents of `firestore.rules`, and **Publish**. This makes each user able to read and write only their own designs.
6. **Project settings > Your apps > Web (</>)**: register an app and copy `apiKey`, `authDomain`, `projectId` and `appId` into `config.js`. These values are meant to be public.
7. Commit the change, wait a minute, and refresh the site with Ctrl+Shift+R. Test: log in, save a design, refresh, load it.

Firebase has a free plan with daily limits. Check Firebase's pricing page for the current numbers before you share the site widely.

## 4. Free downloads, then login (optional, currently OFF)

In `config.js`, `gate: false` means every download is free. Set `gate: true` to allow `freeDesigns` different designs per visitor, then require login. Downloading the theme, background and landing files of the same design counts once.

## Important limits

- The free-download counter lives in the visitor's browser. Clearing site data or using a private window resets it, and anyone who edits the JavaScript can skip it. It is a friendly gate, not security. Real enforcement needs a small server that checks the login and builds the files.
- Firestore rules protect saved designs, but they cannot cap how many designs one user saves.
- The login and database code has not been tested against a live Firebase project. Test it on your site before sharing the link.

## Credits

KPI icons are from Feather (MIT licence). Fonts in the preview use your device's installed fonts.
