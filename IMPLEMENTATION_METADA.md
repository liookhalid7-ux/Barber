# Implementation Plan: Website Metadata & Social Previews

## Objective
Replace the current default Bolt (`bolt.new`) preview images with a customized snapshot of the Albasha Luxury Barber Shop website, and establish a complete, robust set of modern SEO and social media metadata. 

## Approach

We will achieve this by capturing a high-resolution screenshot of the application, placing it in the public assets directory, and then updating `index.html` with a comprehensive suite of HTML meta tags covering standard SEO, Open Graph (Facebook/LinkedIn), and Twitter Cards.

## Step-by-Step Execution Plan

### Step 1: Capture and Prepare the Website Snapshot
1. View the website locally (it is currently running via `npm run dev`).
2. Take a high-quality snapshot of the hero/home page section, ensuring it reflects the "luxury" aesthetic of Albasha Luxury Barber Shop.
3. Save or export the image into the project's public directory as `/public/og-image.jpg` (ideal resolution: 1200x630 pixels for optimal social network support).

### Step 2: Clean Up Existing Default Metadata
1. Open the `/index.html` file.
2. Remove the existing Bolt defaults:
   - `<meta property="og:image" content="https://bolt.new/static/og_default.png" />`
   - `<meta name="twitter:image" content="https://bolt.new/static/og_default.png" />`

### Step 3: Add Standard SEO Metadata
Inject core search engine optimization tags into the `<head>` of `/index.html`:
- **`description`**: A compelling summary of the business (e.g., "Experience premium grooming and styling at Albasha Luxury Barber Shop.").
- **`keywords`**: Relevant keywords (e.g., "barber, luxury barber shop, haircut, grooming, Albasha, stylist").
- **`author`**: "Albasha Luxury Barber Shop" or the owner's name.
- **`robots`**: "index, follow" to ensure search engines crawl the site.

### Step 4: Add Open Graph (OG) Metadata
Add Open Graph protocol tags to customize how the link appears when shared on Facebook, LinkedIn, Discord, etc.:
- `og:type`: "website"
- `og:url`: The canonical production URL of the site.
- `og:title`: "Albasha Luxury Barber Shop"
- `og:description`: Consistent with the standard SEO description.
- `og:image`: `/og-image.jpg` (pointing to our new snapshot).
- `og:site_name`: "Albasha Luxury Barber"

### Step 5: Add Twitter Cards Metadata
Add specific metadata for Twitter/X sharing:
- `twitter:card`: "summary_large_image"
- `twitter:url`: The canonical production URL.
- `twitter:title`: "Albasha Luxury Barber Shop"
- `twitter:description`: Consistent with the standard SEO description.
- `twitter:image`: `/og-image.jpg`

### Step 6: Favicon Alignment (Optional but Recommended)
- Ensure the `<link rel="icon" ...>` points to an appropriate logo or icon for the barber shop, replacing the default Vite SVG if necessary.

## Conclusion
Once these steps are completed, sharing the website link anywhere on the web or via messaging apps will present a beautiful, customized preview card representing the Albasha Luxury Barber Shop, enhancing brand presence and click-through rates.
