# Mohammed Mahmoud — Portfolio

**Software Engineer · Backend Development · Triple M**

Building reliable backend systems people can trust.

My personal portfolio brings together the projects I've contributed to, my professional experience, technical skills, and education. My work spans backend development, AI-powered web applications, software testing, and project delivery, supported by a background in cybersecurity.

[Visit the live portfolio](https://mohammed-mahmoud-portfolio.vercel.app/) · [GitHub](https://github.com/MhmedMii) · [Email me](mailto:Mohammed.kw97@icloud.com)

## Inside the portfolio

- **Introduction:** My engineering focus, core skills, and custom MM identity panel.
- **Projects:** Hands-on contributions across development, testing, and delivery.
- **Experience:** Work with Navita Edu, GBG, NXTNOVA, 50Studios, and freelance clients.
- **Skills:** Backend development, databases, testing, cybersecurity, AI integration, and delivery tools.
- **About:** My background and approach to dependable, customer-focused software.
- **Education and credentials:** Computer engineering degrees and certifications.
- **Contact:** Direct email and phone links for opportunities and collaboration.

## Selected work

| Project | Contribution |
| --- | --- |
| **Navita Edu Walk-In** | Designed and built a reception platform for client intake, follow-ups, visa applications, live progress updates, and management KPIs. |
| **GBG CRM** | Requirements review, test cases, functional testing, and business analysis. |
| **AI-Powered Websites** | Built and deployed three websites with AI integration, REST APIs, and databases at NXTNOVA. |
| **Motergy, Dawri Zain, and GoFeesha** | Coordinated software development and delivery at 50Studios. |
| **AUM MAGLEV** | Handled software and development for a university magnetic-levitation capstone project. |

## Website stack

The portfolio itself is a static website built with **HTML5**, **CSS3**, and **vanilla JavaScript ES modules**, hosted on **Vercel**. It uses Manrope and JetBrains Mono through Google Fonts.

The interface includes a light blue palette, responsive grids, a mobile navigation drawer, smooth section navigation, hover feedback, visible keyboard focus, and a skip-to-content link. The MM artwork is drawn entirely with CSS.

No package installation or build step is required.

## Run locally

Clone the repository and serve it with Python 3:

```sh
git clone https://github.com/MhmedMii/Portfolio.git
cd Portfolio
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [http://localhost:8000](http://localhost:8000). Press `Ctrl+C` to stop the server.

Use a local HTTP server so the JavaScript modules load correctly. Fonts require an internet connection; system fallback fonts are available when offline.

## Project structure

```text
Portfolio/
├── index.html          # Portfolio content and page structure
├── css/
│   ├── index.css       # Stylesheet entry point and import order
│   ├── variables.css   # Colors and shared design tokens
│   ├── base.css        # Reset, utilities, backgrounds, and focus styles
│   ├── nav.css         # Header and mobile drawer
│   ├── hero.css        # Introduction, buttons, and MM identity panel
│   ├── sections.css    # Shared headings, about, and skills
│   ├── projects.css    # Project cards and technology tags
│   ├── experience.css # Experience timeline
│   ├── credentials.css # Education and certification layouts
│   ├── contact.css     # Contact section and footer
│   └── responsive.css  # Tablet and mobile overrides
├── js/
│   ├── main.js         # Feature initialization
│   └── nav.js          # Mobile drawer interactions
└── README.md
```

Update content in `index.html`, adjust the palette in `css/variables.css`, and edit each component's stylesheet for layout changes. Responsive overrides load last through `css/index.css`.

## Contact

I'm open to software engineering and backend development opportunities.

- **Email:** [Mohammed.kw97@icloud.com](mailto:Mohammed.kw97@icloud.com)
- **GitHub:** [@MhmedMii](https://github.com/MhmedMii)
- **Portfolio:** [mohammed-mahmoud-portfolio.vercel.app](https://mohammed-mahmoud-portfolio.vercel.app/)
