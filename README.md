# Business Card and User Management System
### My first React App

# Welcome to the Business Card and User Management System!

This application allows users to manage their business cards and user profiles. Below are the key features and guidelines for using this system.

## Overview

The Business Card and User Management System is a web application designed in React for creating, editing, and organizing both business cards and users. It incorporates user authentication using JWT (JSON Web Tokens) and stores essential information securely.

## Features

    1. Token Handling:
    After a successful login, a token is generated using the JWT library and securely stored in localStorage. This token contains encrypted information about the user's permissions. Sensitive information such as email and password is not stored within the token.

    2. User Profile Page:
       - Displays the user's profile information.
       - Allows users to edit their profile details.

    3. Create New User Page:
      -  Provides a form for creating a new user profile.
      -  Ensures secure password creation using regex for complexity.

    4. Edit User Profile Page:
      -  Allows users to edit their existing profile details.
      -  Accessible from the User Profile page.

    5. My Cards Page:
       - Displays all user-created business cards.
       - Allows CRUD operations on the cards, including the ability to edit card details.

    6. Create New Business Card Page:
       - Provides a form for creating a new business card.
       - Only accessible to business users.

    7. Edit Business Card Page:
       - Allows users to edit the details of a previously created business card.
       - Accessible from the My Cards page.

    8. Favorites Functionality:
       - Enables users to mark a business card as a favorite.
       - Provides visual indicators for favorited cards.

    9. Favorites Page:
       - Displays all favorited business cards.
       - Allows users to remove cards from favorites.

    10. HTTP Requests:
       - Utilizes the axios library for making secure HTTP requests.
       - Implements try & catch mechanism for asynchronous server-side calls.

    11. Design and Responsiveness:
      - Utilizes Material-UI React components for a clean and responsive interface.

    12.Icons:
       - Recommends using standard icon libraries like Bootstrap Icons, Font Awesome, or Material Icons.

    13.Navigation Menu:
       - Dynamic navigation menu based on user permissions.
       - May include additional sections for managing user-related features.

    14.Accessibility:
       - Sets the application title in the main index file.
       - Includes a favicon with a meaningful alt attribute for accessibility.

    15.About Page:
       - Provides detailed information about the application and its functionality.

    16. Forms:
       - Ensures uniform design and validation for all forms.
       - Provides visual feedback for validation requirements.

Installation

To install and run the Business Card and User Management System locally, follow these steps:

    1.Clone the repository:git clone https://github.com/edward1Yadid/reactProject
    2.  Open the index.html file in your preferred web browser to start using the app.





   