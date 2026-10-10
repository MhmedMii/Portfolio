# Mohammed Mahmoud — Portfolio

**Software Engineer · Backend Development · Triple M**

Building reliable backend systems people can trust.

My personal portfolio brings together the projects I've contributed to, my professional experience, technical skills, and education. My work spans backend development, AI-powered web applications, software testing, and project delivery, supported by a background in cybersecurity.

[Visit the live portfolio](https://mohammed-mahmoud-portfolio.vercel.app/) · [GitHub](https://github.com/MhmedMii) · [Email me](mailto:Mohammed.kw97@icloud.com)

## Inside the portfolio

- **Introduction:** My engineering focus, core skills, and custom MM identity panel.
- **Projects:** A visual gallery with real screenshots, contribution summaries, website links, and case studies covering the problem, my contribution, and delivered work.
- **Experience:** Work with Navita Edu, GBG, NXTNOVA, 50Studios, and freelance clients.
- **Skills:** Backend development, databases, testing, cybersecurity, AI integration, and delivery tools.
- **About:** My background and approach to dependable, customer-focused software.
- **Education and credentials:** Computer engineering degrees and certifications.
- **Contact:** Direct email and phone links for opportunities and collaboration.

## Selected work

| Project | Contribution |
| --- | --- |
| **Waypoint — Student Services Platform** | Developed bilingual student intake, counselor assignment, follow-ups, visa and exam workflows and management screens. [Explore the public demo](https://waypoint-student-services-demo.vercel.app/) · [Source code](https://github.com/MhmedMii/waypoint-student-services-demo). |
| **FORM — Employee Request System** | Built a bilingual React and Next.js request workflow with conditional questions, validation, browser-based drafts and simulated receipts. [Try the public demo](https://form-request-demo.vercel.app/) · [Source code](https://github.com/MhmedMii/form-request-demo). |
| **ARCTEX — Design Solutions** | Developed a five-page bilingual architecture website with responsive layouts, RTL support, themes, project previews and a client enquiry form integration. [Explore the public demo](https://arctex-indol.vercel.app/) · [Source code](https://github.com/MhmedMii/arctex). |
| **GBG CRM** | Requirements review, test cases, functional testing, and business analysis. |
| **AI-Powered Websites** | Built and deployed three websites with AI integration, REST APIs, and databases at NXTNOVA. |
| **Motergy, Dawri Zain, and GoFeesha** | Coordinated software development and delivery at 50Studios. |
| **AUM MAGLEV** | Handled software and development for a university magnetic-levitation capstone project. |

## Website stack

The portfolio itself is a static website built with **HTML5**, **CSS3**, and **vanilla JavaScript ES modules**, hosted on **Vercel**. Manrope and JetBrains Mono are hosted locally, with their font licenses included in `assets/fonts/`. Project screenshots use WebP or PNG and are included locally.

The interface includes a compact introduction, visual project gallery, responsive grids, a mobile navigation drawer, smooth section navigation, hover feedback, visible keyboard focus, and a skip-to-content link. Case studies open in keyboard-accessible dialogs. The page respects system dark mode and reduced motion preferences. The MM artwork is drawn entirely with CSS.

Waypoint appears with the workspace overview screenshot from its GitHub README and a link to its public student-services demo. All student and staff records are fictional, changes stay in the visitor's browser, and production services and database connections are disabled. PostgreSQL is listed as a retained backend reference, consistent with the project's README.

FORM and ARCTEX link to their public portfolio demos and source repositories. FORM uses fictional data and browser-only submissions; ARCTEX's external enquiry delivery has not been independently verified. Their case-study descriptions are sourced from their public GitHub READMEs. The FORM screenshot comes from its repository, and the ARCTEX screenshot shows its public demo homepage.

No package installation or build step is required.

## Run locally

Clone the repository and serve it with Python 3:

```sh
git clone https://github.com/MhmedMii/Portfolio.git
cd Portfolio
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [http://localhost:8000](http://localhost:8000). Press `Ctrl+C` to stop the server.

Use a local HTTP server so the JavaScript modules load correctly. Fonts and screenshots are included in the repository, so the portfolio can also be viewed offline through a local server.

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
│   ├── gallery.css     # Approved gallery design and case-study layouts
│   ├── experience.css # Experience timeline
│   ├── credentials.css # Education and certification layouts
│   ├── contact.css     # Contact section and footer
│   └── responsive.css  # Tablet and mobile overrides
├── js/
│   ├── main.js         # Feature initialization
│   ├── nav.js          # Mobile drawer and keyboard interactions
│   ├── projects.js     # Case-study rendering and dialog interactions
│   └── project-data.js # Project contributions, screenshots, and public links
├── assets/             # Waypoint, FORM, ARCTEX and NXTNOVA screenshots
└── README.md
```

Update page content in `index.html` and case studies in `js/project-data.js`. Adjust the base palette in `css/variables.css`; the approved gallery refinements and dark-mode tokens live in `css/gallery.css`, which loads after the existing styles through `css/index.css`.

## Contact

I'm open to software engineering and backend development opportunities.

- **Email:** [Mohammed.kw97@icloud.com](mailto:Mohammed.kw97@icloud.com)
- **GitHub:** [@MhmedMii](https://github.com/MhmedMii)
- **Portfolio:** [mohammed-mahmoud-portfolio.vercel.app](https://mohammed-mahmoud-portfolio.vercel.app/)
