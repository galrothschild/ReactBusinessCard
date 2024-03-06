# Business Card and User Management System
This is my first React App

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

    3. Sign Up Page:
      -  Provides a form for creating a new user profile.
      -  Ensures secure password creation using regex for complexity.

    4. Edit User Page:
      -  Allows users to edit their existing profile details.
      -  Accessible from the Nav bar or from the CRM page.

    5. My Cards Page:
       - Displays all user-created business cards.
       - Allows CRUD operations on the cards, including the ability to edit card details.

    6. Create New Business Card Page:
       - A form for creating a new business card.
       - Only accessible to business users.

    7. Edit Business Card Page:
       - Allows users to edit the details of a previously created business card.
       - Accessible from the My Cards page.

    8. Favorites Functionality:
       - Enables users to mark a business card as a favorite.
       - Provides visual indicators for favored cards.

    9. Favorites Page:
       - Displays all favored business cards.
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
       - Includes a favicon and images with a meaningful alt attribute for accessibility.

    15.About Page:
       - Provides detailed information about the application and its functionality.

    12. Forms:
       - Ensures uniform design and validation for all forms.
       - Provides visual feedback for validation requirements.

    13. Redux:
       - This App is using Redux for state management with redux toolkit
       - We also user persist-redux to keep important data from being deleted on refresh
    14. Typescript:
       - This whole app was written in Typescript as opposed to Javascript
       - Lets me have a pleasant coding experience with errors being caught before I get to them in runtime.
    15. User Management
       - Admin users have access to a user list, where then can view, edit and delete users
    16. react-viewport-list
       - I used react-viewport-list for the user list, since it needed to load a big amount of data and render it.
       - react-viewport-list renders only items of the list that are in the viewport, that way the app is still fast.
    17. Dark mode support
       - Dark mode and light mode available, it will take your default browser settings at first. 
    18. timeout and block:
       - A user that was trying to log in with the wrong password 3 times, will be blocked for 24 hours from logging in.
       - Session timeout if the user didn't do anything for 30 minutes



   