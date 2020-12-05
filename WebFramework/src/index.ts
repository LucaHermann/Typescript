import { User } from './models/User';

const user = new User({ name: 'Carla', age: 26 });

console.log(user.get('name'))
user.set({ name: 'Jane', age: 12351235123 });
user.set({ name: 'luca' });