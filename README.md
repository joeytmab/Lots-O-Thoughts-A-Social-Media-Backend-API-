<h1 align="center">Lotso Thoughts Social Media Platform</h1>

## Description

Social media platform backend, ultimately allowing for new and existing users to add/remove friends,post their thoughts of the day, and comment (via reactions) to other users' posted thoughts.

This repository focuses on backend functionality, with a emphasis on demonstrating the abilities of `MongoDB`. In contrast to `mySQL`, MongoDB is a much more flexible document-oriented database program. Social networks favor using this program in contrast to other relational databases due to MongoDB's ability to process large amounts of data quickly and its flexibility with unstructured data.

Technologies used include `Express.js` (for controller routes), and Mongoose ODM (for object data modeling with Node and MongoDB).

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

`npm i` allows for necessary installation of miscellaneous packages. Doing so will install Express, Dotenv, Bcrypt, and Handlebars.js.

A MySQL Workbench is also used, but not required, for proper database function. `mysql -u root -p`, followed by `source db/schema.sql` will also ensure proper results.

Finally, `node seeds/seed.js` will be used to seed user, post, and comment data for visualization. `npm run start` can be used after to initialize the app.

Note: if running the application locally (instead of on the Heroku environment), `http://localhost:3001/` will be the target address for application access.

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
