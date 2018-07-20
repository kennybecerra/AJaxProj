
/*
const sayHello = function() {
  console.log('Hello');
}

const sayHello2 = () => console.log('Hello');


sayHello();
sayHello2();

const users = ['Nathan', 'John', 'William'];
const nameLengths = users.map(function(name) {
  return name.length;
});

const nameLengths2 = users.map( name => name.length);
console.log(nameLengths2);

*/

const http = new EasyHttp;

//Get Users
http.get('http://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));

//User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

http.put('http://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err));

http.delete('http://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));