// para valores genricos
function identity<Type>(value: unknown): unknown {
  return value;
}


function getLongestElement<Type extends { length: number }>(value: Type[]): Type {
  return value.reduce((accomulator, element) =>
    accomulator.length > element.length ? accomulator : element
  );
}


const elems = ["aaaa", "bbbbbbb", "c", "ddddddd"]


const elem = getLongestElement(elems);

const algo = identity(3);

// ## GENERICOS EN INTERFACE
interface UserInt<IdUser> {
  id: IdUser;
  name: string;
}

const sample: UserInt<string> = {
  id: "sample",
  name: "Sample name";
}

class CsutomStorage<Type> {
  private readonly key = "value";


  getData(): Type {
    const value = localStorage.getItem(this.key);
    if (!value) {
      throw new Error();
    }
    return JSON.parse(value) as Type;
  }

  // setData(value: Type): void {
     localStorage.setItem(this.key, JSON.stringify(value));
  }
}
