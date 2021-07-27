exports.createUser = (req,res) => {
  try 
  {
    const user = {
      username: req.body.user,
      email: req.body.email,
      pass: req.body.pass
    };
    res.status(200).send(user);
  }
  catch (error)
  {
    res.status(500).send({ message: 'No user created'});
  }
}

exports.getOneUser = (req,res) => {
  try
  {
    const user = {
      user: req.params.username,
    };
    res.status(200).send(user);
  }
  catch
  {
    res.status(400).send({ message: 'User not found'});
  }
}