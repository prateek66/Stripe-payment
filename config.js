const config = {

    // mongodb location
<<<<<<< HEAD
    db: 'mongodb+srv://user_001:andwemetuseronepassword@cluster0.aqf9x.mongodb.net/default_db?retryWrites=true&w=majority',
=======
    //db: 'mongodb://localhost/blog-api',
    db:'mongodb+srv://user_001:andwemetuseronepassword@cluster0.aqf9x.mongodb.net/default_db?retryWrites=true&w=majority',
    
>>>>>>> e85925573cc4c025feb5afe5c13b79a79201e7aa
  
    // port
    port: process.env.PORT || 3005,
  
    // test environment
    test_env: 'test',
    test_db: 'blog-api-test',
    test_port: 3001,
  
    // secret for jwt
    secret: 'secret'
  };
module.exports = config;