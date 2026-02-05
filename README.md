# 🐶💎 Diamond Dog -- Headless WordPress Demo (Vue 3 + Vite + Tailwind)

This project is a **demo headless CMS setup** showcasing how to build a
modern frontend using **Vue 3, Vite, and Tailwind CSS**, powered by a
**WordPress backend** acting purely as a content API.

The demo company, **Diamond Dog Capital Investments**, is inspired by
the *Diamond Dogs* group from *Ted Lasso* --- but reimagined with a
bold, over-the-top fintech/finance aesthetic for fun and visual impact.

> ⚠️ This is a demo/portfolio project. The company and content are
> fictional.

------------------------------------------------------------------------

## 🚀 Tech Stack

**Frontend** - Vue 3\
- Vite\
- Tailwind CSS\
- Vue Router

**Backend (Headless CMS)** - WordPress\
- Advanced Custom Fields (ACF Pro)\
- WordPress REST API

------------------------------------------------------------------------

## 🧠 Project Overview

The frontend consumes content from WordPress via REST endpoints.\
All page sections are built using **ACF Flexible Content blocks**,
allowing editors to reorder sections, swap layouts, and update content
without redeploying.

Each ACF block maps to a Vue component like: - HomeHeroBlock.vue\
- FeaturesBlock.vue\
- CTABlock.vue

------------------------------------------------------------------------

## ✨ Why This Exists

This project demonstrates:

-   Headless WordPress architecture\
-   CMS-driven layouts\
-   Component-based page building\
-   Modern frontend workflows

It also serves as a creative sandbox for bold design experiments.

------------------------------------------------------------------------

## 🔮 Future Enhancements

-   Blog posts powered by WordPress\
-   Live stock ticker component\
-   Market insights feed\
-   More ACF block types\
-   Page animations

------------------------------------------------------------------------

## 🛠 Local Setup

``` bash
npm install
npm run dev
```

.env example:

``` env
VITE_WP_API=https://your-wordpress-site.com/wp-json
```

------------------------------------------------------------------------

## 🐕 Inspiration

Inspired by the Diamond Dogs group from Ted Lasso with a bold fintech
twist.

------------------------------------------------------------------------

## 📄 Disclaimer

This project is for demonstration purposes only. All content is
fictional.
