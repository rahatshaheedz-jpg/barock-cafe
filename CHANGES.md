# BAROCK CAFÉ site — November 2026 improvements

Built from the live `gh-pages` branch (published 20 Oct 2026). All text, prices, menu pages,
phone numbers, email, address, hours and links are unchanged unless listed here.

## Faster
- Menu PDF: 60 MB -> 9.6 MB. Same 20 pages; text and prices stay sharp (vector).
- Menu page images re-rendered from the PDF: about 33% smaller, same sharpness.
- Reviews page no longer loads React, ReactDOM and Supabase from unpkg.com. It is plain HTML
  now, so it appears immediately and cannot break if unpkg is slow or down.
- The two main fonts are preloaded, so the headline appears sooner.

## Fixed
- Perfectfully Yours: the top bar was pushed half off the screen (its Instagram button was
  invisible), and the phone layout was wider than the screen and cut off on the right.
- Location: the map placeholder left a large empty black band under it.
- Opening hours card: no longer breaks into four lines on desktop.
- Canonical, social and sitemap URLs now use https://www.barockcafe.com (the address in CNAME).
- Search-engine data lists the Facebook page too (it is linked on the site).
- Phone number under the menu has a proper tap area.

## Refined
- Gallery ("Where Taste Meets Ambience") shows the café's own interior photos — entrance, bar,
  terrace, barista — which match its text, instead of repeating the drink photos shown above it.
  These photos were already in the site's assets (assets/brand-photography).
- Phones: Signature Sips and The BAROCK Experience are swipeable rails with a progress line.
  The homepage is about a third shorter on a phone, with every photo and caption still there.
- Menu category strip fades at its edge so it reads as scrollable; pages fade in when turned.
- Subtle press feedback on buttons; slightly deeper shade behind the hero headline.
- Reviews: when there are no reviews yet, an empty-state line replaces the 0/5 score.

## Tiffany Noir colour theme (2 Nov 2026)
- Palette: black (#050707), Tiffany blue (#81D8D0) and champagne gold (#D6B25E). The old
  warm browns became black, the teals became Tiffany, and the golds became champagne gold.
- New file `theme.css`, loaded last on every page. All palette colours are variables at the
  top of that file, so the whole site can be re-tinted from one place.
- Glass: the navigation is a glass pill, with a Tiffany-to-gold underline on the active
  link. Menu controls, social buttons, the contact form and the hours chip are glass surfaces.
  Photo cards have glass frames, a light sweep on hover and a Tiffany edge.
- The opening-hours card is a deep Tiffany "box" with gold lettering. Gold buttons get a sheen
  on hover, and a soft Tiffany light follows the pointer across the glass panels on desktop.
- Phones get the same look without live blur, so scrolling stays smooth (tested at a steady
  60 fps on a simulated mid-range phone).

## To publish
Replace the contents of the `gh-pages` branch with this folder (keep CNAME). Cache-busting
version strings were bumped, so visitors get the new files right away.

## Motion pass (motion.css, motion.js, navigation.js)

Both new files are loaded on all four pages after `theme.css`. There are no new libraries, and everything is vanilla JS.

- **Liquid glass nav (desktop):** a Tiffany "water drop" glides between nav links on hover and follows the section you're scrolled to. It stretches as it moves, wobbles at rest, leaves droplets behind, and sends a ripple from the click point.
- **Kinetic fullscreen menu (phones/tablets):** replaces the small dropdown. Three teal, gold and black panels sweep in. Big Bodoni links rise and tilt into place, and each link lights its own ambient line drawing. The footer shows the real address, hours, hotline and socials. It closes with Escape, traps focus, locks scrolling and keeps the scroll-spy.
- **Card fan carousel** (replaces the earlier 3D reel): a vanilla port of the card-fan-carousel component, using the local GSAP (`assets/vendor/gsap-3.15.0.min.js`, loaded on the home page only). Seven of the café's 12 photos are fanned like a hand of cards and deal in with an elastic bounce when the section comes into view. On hover, the neighbouring cards part. The arrows, dots, swipe, arrow keys, or tapping a side card cycle the photos. The motto "Every Moment, Perfectly Yours." sits underneath.
- **Menu tabs:** a vanilla port of the animated-tabs component. The category strip is a glass track, and a shared Tiffany pill springs to the active category. Each new menu page arrives with a soft slide, scale and blur (no blur on phones).
- **Marquee ribbon:** a tilted teal ribbon under the hero, built from existing copy (motto, hours, Gulshan-02).
- **Hero:** the letters of the title rise in after the loader. Gold and Tiffany dust motes drift up, and the photo has a subtle parallax.
- **Headings:** h2 words rise line by line as they scroll into view. Photos settle from a slight zoom.
- **Desktop extras:** a cursor ring, magnetic buttons and a scroll progress line.
- **Performance:** only transform and opacity are animated, and loops pause offscreen. Phones get fewer motes, fewer reel cards and no big shadows. Phone full-scroll test at 4× CPU slowdown: median frame 16.7 ms (60 fps).
- **Reduced motion:** turns all of this off.
