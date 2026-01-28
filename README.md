# Vyde — Personal Portfolio

Vyde is my personal portfolio site built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It showcases my top projects, resume, writing, and contact information — all in a clean, minimal layout inspired by platforms like Substack and other modern publishing sites.

## Features

- **About** — A brief introduction and background
- **Projects** — Highlighted work and case studies
- **Resume** — Downloadable resume and experience timeline
- **Journal** — Personal blog-style entries and thoughts
- **Contact** — Secure contact form with Google reCAPTCHA and Formspree integration

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Formspree](https://formspree.io/) (for contact form delivery)
- [Google reCAPTCHA v2 Invisible](https://www.google.com/recaptcha/about/)

## Contact Form Security

The contact form uses **Google reCAPTCHA v2 Invisible** to prevent spam and bots. The token is generated on the frontend and passed to the backend, which forwards it to Formspree for validation and email delivery.

## Deployment

The site is ready to be deployed on [Vercel](https://vercel.com/), with environment variables for:

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key