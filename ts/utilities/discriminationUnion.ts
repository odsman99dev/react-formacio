
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLenght: number;
}

interface Triangle {
  kind: "triangle";
  base: number
  height: number
}

type Shape = Circle | Square | Triangle;

function CalculateArea(shape: Shape): number {
  switch(shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLenght ** 2;
    case "triangle":
      return (shape.base * shape.height ) / 2;
  }
}
// --------------------------------------------

type IndividualCustomerData = {
  type: "individual";
  firstName: string;
  lastName: string;
  socialSecurityNum: string;
}

type CompanyCustomerData = {
  type: "company";
  companyName: string;
  companyTaxId: number;
}

type Customer = {
  id: number,
  acquisitionData: Date;
  data: IndividualCustomerData | CompanyCustomerData;
}

const getCustomerName = (customer: Customer): string => {
  switch(customer.data.type) {
    case "individual":
      return customer.data.firstName + " " + customer.data.lastName;
    case "company":
      return customer.data.companyName;
    default:
      const __exhaustive: never = customer.data;
      throw new Error("");
  }
}
