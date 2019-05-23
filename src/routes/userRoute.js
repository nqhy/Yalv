import { getUserById, addUser, getUsers, updateUser, deleteUser } from '../controller/userController';

const routes = [{
  method: 'GET',
  url: '/api/users',
  handler: getUsers,
},
{
  method: 'GET',
  url: '/api/users/:id',
  handler: getUserById,
},
{
  method: 'POST',
  url: '/api/users',
  handler: addUser,
},
{
  method: 'PUT',
  url: '/api/users/:id',
  handler: updateUser,
},
{
  method: 'DELETE',
  url: '/api/users/:id',
  handler: deleteUser,
},
];

export default routes;
