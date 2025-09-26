export class UsersService {
  users: { id: number; name: string; age: number; email: string }[] = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 25,
      email: 'jane.doe@example.com',
    },
  ];

  getUsers() {
    return this.users;
  }
  createUser(user: { name: string; age: number; email: string }) {
    const newUser = {
      id: this.users.length + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }
  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
