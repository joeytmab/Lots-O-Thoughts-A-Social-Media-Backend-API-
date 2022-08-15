<h1 align="center">Lotso Thoughts Social Media Platform</h1>

## Description

Social media platform backend, ultimately allowing for new and existing users to add/remove friends,post their thoughts of the day, and comment (via reactions) to other users' posted thoughts.

This repository focuses on backend functionality, with an emphasis on demonstrating the abilities of `MongoDB`. In contrast to `mySQL`, MongoDB is a much more flexible document-oriented database program. Social networks favor using this program in contrast to other relational databases due to MongoDB's ability to process large amounts of data quickly and its flexibility with unstructured data.

Technologies used include `Express.js` (for controller routes), and `Mongoose` ODM (for object data modeling with Node and MongoDB).

Demonstration of back-end functionality is to be done locally via Port 3001, as this repository is not deployed publicly. Routing addresses for APIs are listed here:

Get Users: `localhost:3001/api/users`<br/>
Get User by Id: `localhost:3001/api/users/:userId`<br/>
Create New User (via POST route): `localhost:3001/api/users`<br/>
Update User (via PUT route): `localhost:3001/api/users/:userId`<br/>
Delete User (via DELETE route): `localhost:3001/api/users/:userId`<br/>

Add Friend (via POST): `localhost:3001/api/users/:userId/friends/:friendId`<br/>
Remove Friend (via DELETE): `localhost:3001/api/users/:userId/friends/:friendId`<br/>

Get Thoughts: `localhost:3001/api/thoughts`<br/>
Get Thought by Id: `localhost:3001/api/thoughts/:thoughtId`<br/>
Create Thought (via POST): `localhost:3001/api/thoughts`<br/>
Delete Thought (via DELETE): `localhost:3001/api/thoughts/:thoughtId`<br/>

Add Reaction (via POST): `localhost:3001/api/thoughts/:thoughtId/reactions`<br/>
Remove Reaction (via DELETE): `localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId`<br/>

## Installation Parameters

Though not necessary, MongoDB Compass is a program used to properly visualize the database created with the application. Insomnia (or another API testing platform) is also needed to demonstrate proper routing of our APIs.

`npm i` allows for necessary installation of miscellaneous packages.

`npm run start` can be used after to initialize the app. If the app is not able to be run because the designated port is being used, `npx kill-port 3001` can be used to clear and prepare for proper utility.

No other requirements for installation are needed.

## Walkthrough Video (4 Parts)

Video link 1 demonstrates the routing parameters for getting all users, users by Id, and the creation and updating of new users.<br/>
[Link 1 of 4](https://www.youtube.com/watch?v=WB36cnkwuJU)<br/>

Video link 2 demonstrates delete pathway of removing a user, as well as functionality in the adding and removing of friends from a user. <br/>
[Link 2 of 4](https://www.youtube.com/watch?v=c1C5otEg2CM)<br/>

Video link 3 showcases the CRUD functionality for thoughts. Here, we can show getting thoughts (either all or by Id), creating new thoughts, and updating/deleting existing thoughts.<br/>
[Link 3 of 4](https://www.youtube.com/watch?v=CRkxU10U23w)<br/>

Video link 4 demonstrates all functionality of creating and removing reactions to thoughts within our database.<br/>
[Link 4 of 4](https://www.youtube.com/watch?v=bHWGPx3IgKw)<br/>

## Questions? Comments?

Contact me on Github or via email! </br>
Github: [github.com/joeytmab](github.com/joeytmab) </br>
Email: [joseph.t.binas@gmail.com](joseph.t.binas@gmail.com)
