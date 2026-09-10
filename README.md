# Mensi Manvar Portfolio

Modern responsive portfolio website created with HTML, CSS and lightweight JavaScript.

## Files
- `index.html` – portfolio structure/content
- `style.css` – complete responsive styling
- `script.js` – menu, reveal animations, cursor glow, navbar state

## Run
Open `index.html` in a browser. For best results, use VS Code Live Server.

## Replace dummy photo
In `index.html`, find `.avatar-placeholder`. Replace that block with:

```html
<img src="your-photo.jpg" alt="Mensi Manvar" class="profile-photo">
```

Then add this to `style.css`:

```css
.profile-photo{width:100%;height:355px;object-fit:cover;border-radius:24px;display:block;}
```

## Customize
Update project URLs, LinkedIn URL, phone/email, or wording directly in `index.html`.
