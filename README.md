# Bandage — E-Commerce Landing Page

## Project Overview

This is a fully responsive e-commerce landing page built with React, TypeScript,
Redux Toolkit, and RTK Query, using the provided Figma design as guide. The page includes
a hero banner, a Bestseller Products section that fetches live data from the
DummyJSON API, a services section, featured posts,
customer testimonial, a call-to-action banner, and a footer.

The project was initially the shopping cart page as seen in the brief. During the Q&A session, we were asked to build just the landing page. See "Assumptions & Implementation Notes" below for more detail.

## Installation

1. Clone the repository:

   git clone https://github.com/makuachukwu-dev/ecommerce-web-app.git
   cd ecommerce-web-app-Makua

2. Install dependencies:

   npm install


## Running Locally


npm run dev


The app will be available at `http://localhost:5173`.

## Build & Deployment

To create a production build:


npm run build

This runs a TypeScript check followed by a Vite production build, which produces the dist folder.

This project is deployed on Netlify, with automatic deployments triggered on
every push to the branch. 

**Live site:** [https://melodious-monstera-4694e5.netlify.app/]

## Assumptions & Implementation Notes

- The original written brief described a shopping cart page task. After a
  call with the instructor, we were asked to build the landing page only
  only the landing page shown in the Figma design. Earlier commit history
  reflects the original cart-page work before this correction.
- The Bestseller Products section uses the card style shown directly in
  the landing page Figma design that was provided(image, category, title, price) instead of
  more detailed card design from a separate Product Card Figma file. This was to ensyre the design matches the figma file.
- Product images returned by the DummyJSON API have plain white backgrounds, therefore
  a rotating background color palette gotten from existing colours in the design was added behind each product so that the cards will be visible.
- Shipping/pricing logic beyond what's shown in the Figma (e.g. discount
  percentages) reflects the real values returned by the DummyJSON API.

## Tech Stack

- React + TypeScript (Vite)
- Redux Toolkit & RTK Query
- Vanilla CSS
- Netlify (deployment)