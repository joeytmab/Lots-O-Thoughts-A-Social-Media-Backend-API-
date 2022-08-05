const { Thought, User } = require('../models');

//here, we are exporting directly all functions connected to userRoutes

//just like our thoughtController, we will be exporting directly through module.exports

module.exports = {
  // Get all users
  getUsers(req, res) {
    console.log("getUsers function triggered")
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  // Get a single user
  getSingleUser(req, res) {
    console.log("getSingleUser function triggered")
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: 'No user with that ID' })
        } else {
          res.status(200).json(user)
        }
      })

      .catch((err) => res.status(500).json(err));
  },
  // Create new user.
  createUser(req, res) {
    console.log("createUser function triggered")

    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a User
  deleteUser(req, res) {
    console.log("deleteUser function triggered***")
    User.findOneAndDelete({ _id: req.params.courseId })
      .then((course) =>
        !course
          ? res.status(404).json({ message: 'No course with that ID' })
          : Student.deleteMany({ _id: { $in: course.students } })
      )
      .then(() => res.json({ message: 'Course and students deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // add friend (need to work on this)

  // remove friend (need to work on this too)
  
};
