// TypeScript permite la sobrecarga

function createButton(tag: "button") : HTMLButtonElement;
function createButton(tag: "a"): HTMLAnchorElement;
function createButton(tag: "button" | "a"): HTMLButtonElement | HTMLAnchorElement {
  return document.createElement(tag);
}

const button = createButton("button");
const anchor = createButton("a");

console.log(button)
console.log(anchor.href)


function identity(name: string): string;
function identity(names: string[]): string[];
function identity(nameOrNames: string | string[]): string | string[] {
  if (  typeof nameOrNames === "string" ) {
    return `Hello ${nameOrNames}`;
  }

  return nameOrNames.map( (name) => `Hello ${name}` );
}


const greeting = identity("Oumar");
const greetings = identity(["Oumar", "Pablo"]);

greeting.toUpperCase();
greetings.find(f => f === "Pablo");
