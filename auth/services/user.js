const jwt = require('jsonwebtoken');
const Users = [
    {
      email:"shakeel@gmail.com",
      password:"password"
    }
  ]


class UserService{
    static async login(email,password){
  
        // Find the user by email
        const user =  Users.find((user)=>user.email == email && user.password == password);
        if (!user) {
          return res.status(401).send({ message: 'Invalid username or password' });
        }
      
        // Create a JWT token
        const token = jwt.sign({ userId: user.email }, process.env.JWT_SECRET_EKY);
        return token
    }
}

module.exports = UserService