const config = {

    // mongodb location
    db: 'mongodb://localhost/blog-api',
  
    // port
    port: process.env.PORT || 3000,
  
    // test environment
    test_env: 'test',
    test_db: 'blog-api-test',
    test_port: 3001,
  
    // secret for jwt
    secret: 'secret'
  };
module.exports = config;