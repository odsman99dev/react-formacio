

declare let data: string | number;

const isString = (data: string | number): data is string => {
  return typeof data === "string";
}

if ( isString(data) ) {
  data.toUpperCase();
}
else {
  data.toFixed();
}

type User = Customer | Admin;

interface UserBase {
  id: number;
  username: string;
  name: string
  email: string;
}


interface Customer extends UserBase {
  pin: string;
  registerDate: Date;
  hasOrder: boolean;
}

interface Admin extends UserBase {
  level: number;
  department: string;
  permission: ("post" | "update" | "delete")[];
  fingerPrint: string;
}

interface Guest extends UserBase {

}

const isAdmin = (user: User): user is Admin => {
  return "level" in user;
}
const isCustomer = (user: User): user is Customer => {
  return "pin" in user;
}

const checkUserIdentification = (user: User): boolean => {
  if( isAdmin(user)) {
    return user.fingerPrint === "sad";
  }else if(isCustomer(user)) {
    return user.pin === "1234";
  }
  const _exhaustiveCheck: never = user;
  return _exhaustiveCheck;
}

export default {};
