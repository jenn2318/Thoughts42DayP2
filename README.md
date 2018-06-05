# Overview

Thoughts42Day is an application created to be a safe interactive space for entrepreneurs to collaborate on business venture and creative ideas without being subjected to negative comenets, destructive criticism or cyber-bullying from other users. The creative idea behind Thoughts42Day, is that this app provides an innovative way to be a digital notepad allowing users to create and archive their thoughts and retrieve them at their leisure for meetings or general purposes.

# Application Use
Users can click on the user login to sign into the app or directly bypass and take a look at the live feed of user thought comments, which will allow the option to Like or Comment on other user posts in a collaborative environment. We believe a future version of Thoughts42Day will give the user the option to choose to post 2, 4 or 42, thoughts in a day and highlight the options by color for Creative or Business ideas. An initial feature target we wanted to meet was to have interactive capability, where users can comment on other user posts, and display live feed thought comment activity by users.

## Group Members
Jennifer Ponder
Sarah Shelden
Joe Kim

## Tech Stack Used

JavaScript ES6
jQuery 3.2.1
HTML5/CSS
Materialize
Sequelize
Handlebars
Docker

# Development Process
1. Concept

2. Initial Planning

3. Challenges and Successes

4. Future Additions

## 1. Concept
The concept came about after brainstorming on idea of an interactive thought tank, where a user would be able to post their thoughts and not be subjected to negative or harmful feedback, which has been experienced at a rapid rate in mainstream social media sites today. While brainstorming the type of information that users would be able to store, we decided that providing busy entrepreneurs, that are always on the go, with a faster way to jot down business venture thoughts or ideas within an environment that offers a safe space for collaboration would be a great way to bring a resolution to this massive problem.

## 2. Initial Planning

A major challenge was making the sequelize database update correctly with the associations that needed to be made between a user table and a thought table.
Another challenge was getting the information to post correctly inside the modal for making the live feed interactive.

Since a major objective of our project was to familiarize ourselves with new concepts to make this project work in a short amount of time, our application does not fully account for the implementation of future features.

Some Post API routes presented an issue. We also had problems with the manipulating materialize default css styling. However, that was corrected by overwriting the default styling with an !important attribute. Submitting the data to the back end has been challenging, functionality wise. Their are functions that will have to be refactored to make this part work the way first intended.

Sometimes the smallest, most subtle features caused the most unexpected challenges. For example, determining the z-index of elements or adding an image to a div in materialize would cause an error in the console, which would cause issues for the parallax to work. That was not an easy fix at first glance. Moving elements within the page presented a similar challenge, having the overwrite several materialize default styles.

Both issues were fixed by inspecting our home html page elements in the developer tools, and checking to see what other elements could be overwritten and taking out an external css file that was initially written to handle other styling. As materialize works with inline styling. Also, routes were refactored to grab the correct pages once the user sends a request or wants to post data on a specific route.

## 3. Future Additions

If we had more time, we would...

Improve interaction functionality 
Allow users to interact with the like and comments features
Create interactive archive feature for other users to comment on archived thought posts
Add handlebars or EJS templating to build out the html pages
Add more users to the database
Make API calls to business related or creative related websites for thought ideas and emojis

Add Passport.js or Auth0 functionality for user authentication for user sign in with Google 
