# Professional E-Portfolio

A sleek, modern e-portfolio website designed to showcase professional work and PDF documents. Features a light-red theme and responsive design.

## Features

- Clean, modern design with a light-red color theme
- Responsive layout that works on all devices
- PDF document viewer for showcasing your work
- About section to introduce yourself and your skills
- Projects section to highlight your best work
- Contact information section
- Smooth scrolling and animations

## How to Use

1. Clone this repository to your local machine or download it as a ZIP file.
2. Customize the content in `index.html` to match your personal information and projects.
3. Replace the placeholder PDF files in the `pdfs/` directory with your actual documents.
4. Update the skills, project descriptions, and contact information.
5. Deploy the website to a hosting service of your choice (GitHub Pages, Netlify, Vercel, etc.).

## Customization

### Changing the theme color

To modify the color theme, edit the CSS variables in the `:root` section of `styles.css`:

```css
:root {
    --primary-color: #ff6b6b;  /* Main theme color */
    --primary-light: #ffa5a5;  /* Lighter shade for gradients */
    --primary-dark: #e74c4c;   /* Darker shade for hover states */
    /* Other colors can be modified here */
}
```

### Adding more projects

To add more projects, duplicate the project card structure in the HTML and update the content:

```html
<div class="project-card" id="project4">
    <div class="project-info">
        <h3>Your Project Title</h3>
        <p class="project-description">Description of your project.</p>
        <button class="view-pdf" data-pdf="pdfs/your-project-file.pdf">View Document</button>
    </div>
</div>
```

Don't forget to add your PDF file to the `pdfs/` directory.

### Customizing fonts

This portfolio uses Google Fonts. To change the font, update the link in the `<head>` section of `index.html` and then update the font-family in `styles.css`.

## PDF Requirements

For best results:
- Use PDF files that are optimized for web (reduced file size)
- Ensure PDFs are in a standard format that can be displayed in browsers
- Keep filenames simple without special characters or spaces (use hyphens or underscores instead)

## Browser Compatibility

This portfolio works on all modern browsers including:
- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge

## License

This project is available for personal and commercial use. 

## Credits

- Fonts from [Google Fonts](https://fonts.google.com/)
- Icons from [Font Awesome](https://fontawesome.com/) 