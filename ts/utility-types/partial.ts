
type MayBe<Type> = Type | undefined;


interface User {
  id: number;
  username: string;
  name: string
  email: string;
  isAdmin: boolean;
}


const findUser = (user: User[], userData: Partial<User>): MayBe<User> => {
  const foundUser = user.find( f => {
    Object.entries(userData).every(([key, value]) => user[key as keyof User] === value);
  });

  return foundUser;
}

findUser
