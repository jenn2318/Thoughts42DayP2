# Overview

Thoughts42Day is an application created to be a safe interactive space for entrepreneurs to collaborate on business venture ideas and creative ideas without being subjected to negative comenets or cyber-bullying from other users. The creative idea behind thoughts42Days is that this app provides an innovative way to be a digital notepad.

Users can click on the user login to sign into the app or directly bypass and take a look at the live feed of user thought comments, which will allow the option to Like or Comment on other user posts in a collaborative environment. We believe a future version of Thoughts42Day will be have give the user the option to choose to post 2, 4 or 42 thougths in a day and hightlight the options as Creative or Business while being interactive where users can comment on other user posts and share images and business proposals as well as host more space for thoughts in the cloud.

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

# Develpopment Process
1. Concept
2. Initial Planning
3.Challenges and Successes
4. Future Additions

## 1. Concept
Our idea with the idea of an interactive thought tank, where a user would be able to post their thoughts and not be subjected to negative feedback, which has been experienced in mainstream social media sites of today. While brainstorming the type of information that users would be able to store, we decided that providing busy entreprenuers, that are always on the go, with a faster way to jot down business venture thoughts or ideas within an environment that offers safe space for collaboration.

## 2. Intial Planning

A major challenge was making the sequelize database update correctly with the associations that needed to be made between a user table and a thought table.
Another challenge was getting the information to post correctly inside the modal for making the live feed interactive.

Since a major objective of our project was to familiarize ourselves with new concepts to make this project work in a shiort amount of time, our application does not fully account for the implementation of future features.

Some Post API routes presented an issue. We also had problems with the manipulating materialize default css styling. However, that was corrected by overwriting the default styling with an !important attribute. Submitting the data to the back end has been challenging, functionality wise. Their are functions that will have to be refactored to make this part work the way first intended.

Sometimes the smallest, most subtle features caused the most unexpected challenges. For example, determining the z-index of elements or adding an image to a div in materialize would cause an error in the console, which would cause issues for the parallax to work. That was not an easy fix at first glance. Moving elements within the page presented a similar challenge, having the overwrite several materialize default styles.

Both issues were fixed by inspecting our home html page elements in the developer tools, and checking to see what other elements could be overwritten and taking out an external css file that was initally written to handle other styling. As materialize works with inline styling.

5. Future Additions

If we had more time, we would...

Improve interaction functionality 
Allow users to interact with the like and comments features
Create interactive archive feature for other users to comment on archived thought posts
Add handlebars or EJS templating to build out the html pages
Add more users to the database
Make API calls to business related or creative related websites for thought ideas
Add Passportjs functionality for user authentication for user sign in with Google 
