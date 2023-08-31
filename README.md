# Tech-Blog

## Description

The Tech Blog CMS Application is a platform designed for developers to publish and share their insights, tutorials, and thoughts about various technical concepts, recent advancements, and new technologies. This application follows the Model-View-Controller (MVC) architectural pattern and offers a user-friendly interface for creating, editing, and commenting on blog posts.

Built from the ground up, the application uses Handlebars.js as the templating engine, Sequelize as the Object-Relational Mapping (ORM) library, and the express-session npm package for user authentication. The application emphasizes the importance of both creating and discussing technology, providing developers with a space to contribute to the tech community.

## User Story:

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria:

GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments


## Features

User authentication: Register, log in, and log out securely.
Create, edit, and delete blog posts.
Comment on other developers' blog posts.
View a dashboard with your own posts and comments.
User-friendly interface with responsive design.
Deployed to Heroku for easy access.

## Technologies Used:

HTML, CSS, JavaScript
Node.js, Express.js
Handlebars.js (Templating Engine)
Sequelize (ORM)
MySQL (Database)
express-session (User Authentication)
Heroku (Deployment)

## Installation

Clone the repository: git clone https://github.com/yourusername/tech-blog.git
Navigate to the project directory: cd tech-blog
Install the dependencies: npm install

## Usage

Start the application: npm start
Access the application in your browser at http://localhost:3001


## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

Compiled by Andres Solorio (https://github.com/ARS2989/Tech-Blog) - Inspired by the importance of sharing knowledge in the tech community.

*Code borrowed from Thomas Calle (https://github.com/ThomasCalle/Thomas-Model-View-Controller-MVC-Tech-Blog/tree/main)