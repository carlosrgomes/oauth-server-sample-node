var db = require('redis').createClient({host:'localhost', port:'6379'});

db.multi()
  .hmset('users:username', {
    id: 'username',
    username: 'username',
    password: 'password'
  })
  .hmset('clients:client', {
    clientId: 'client',
    clientSecret: 'secret'
  })
  .exec(function (errs) {
    if (errs) {
      console.error(errs[0].message);

      return process.exit(1);
    }

    console.log('Client and user added successfully');
    process.exit();
  });