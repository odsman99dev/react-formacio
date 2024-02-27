

interface User {
  id: number;
  username: string;
  name: string
  email: string;
}

interface Form {
  name: string;
  username: string,
  email: string,
}

const getUserProperty = <Key extends keyof User>(user: User, property: Key): User[Key] => {
  return user[property];
}

const updateUserProperty = <Key extends keyof User>(user: User, property: Key, value: User[Key]): User => {
  const newUser = {...user};
  newUser[property] = value;
  return newUser;
}

// Exhaustive check
const validateFields = (formData: Form, field: keyof Form): boolean => {
  switch(field) {
    case "name":
      return formData[field].length > 2;
    case "email":
      return formData[field].includes("@");
    case "username":
      return formData[field].length > 5;
    default:
      const _exhaustive: never = field;
      throw new Error("");
  }
}


const Oumar: User = {
  id: 7282,
  name: "oumar",
  username: "oumar",
  email: "oumar@oumar.com"
}

const userFormSampleData: Form = {
  name: "SampleName",
  username: "sampleName",
  email: "sample@sample.com"
}

validateFields(userFormSampleData, "email");

const oumarId = getUserProperty(Oumar, "username");

export default {};
