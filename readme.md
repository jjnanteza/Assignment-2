# Portfolio Site - Assignment 2

# Overview
- Using Node.js, ExpressJS, and the EJS templating engine, I created a professional dynamic portfolio website hosted live on a cloud service. The site highlights my academic background in Networking and IT Security, showcases practical projects I have done, and provides a contact form for visitors.

# Pages & Routing
- Home (`/` and `/home`): Welcome message, profile image, and cards with quick links to explore the rest of the site.
- About me (`/about`): Highlights where i go to school, and my major and a  list of some technical skills.
- Projects (`/projects`): Detailed project cards with descriptions and screenshots of networking topologies and python projects.
- Contact me (`/contact`): Visitor inquiry form with inputs for first name, last name, email, phone number, and comments, along with submit and reset buttons.

# Site Structure & Express Generator
The project follows the standard Express Generator format:
- `app.js`: Configures the Express application, EJS view engine, middleware (Morgan, cookie-parser, express.json/urlencoded), and static asset paths.
- `routes/index.js`: Defines all page routes using Express Router (`router.get()`) and `res.render()` methods to pass page titles.
- `views/`: Contains EJS page templates and a `partials/` folder.
- `public/`: Has stylesheets(`app.css`), client-side scripts (`app_2.js`), and project images.

# Layout Templates and Partials
- The site uses EJS layout partials to maintain a consistent structure across all views:
  - `header.ejs`: Contains global metadata, CSS stylesheets, and links to the required resources.
  - `main_nav.ejs`: Shared navigation bar.
  - `footer.ejs`: Shared footer containing links toGitHub and LinkedIn.

# External Code & Frameworks
- Twitter Bootstrap (v5.3.8): Used for responsive grid layouts, card components, form controls, and button styling.
- Font Awesome (v7.3.1): Used for icons
- Course Lectures: Code patterns and structure are adapted from classroom lectures on Express and EJS.

# Project Cards
The Projects page describes:
1. **Packet Tracer Project 1**: Multi building corporate network architecture connected via dedicated core and remote site routers with static/dynamic routing.
2. **Financial Literacy Game**: An interactive Python game teaching money management and decision making through gamification.
3. **Packet Tracer Project 2**: Enterprise network architecture spanning four core branch locations across North America.
4. **Event Management System**: A Python application built using Object-Oriented Programming (OOP) principles, inheritance, and encapsulation.

# GitHub repository  
- https://github.com/jjnanteza/Assignment-2 

# Live portfolio site (Cloud Deployment)
- https://assignment-2-thm5.onrender.com