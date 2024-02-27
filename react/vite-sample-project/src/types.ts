// noImplicityAny: true
// strictNullChecks: true
// useUnknownInCatchVariables: true

class CustomError extends Error {
	 patata: string;
}

try {
	// biome-ignore lint/correctness/noUnreachable: <explanation>
} catch (error) {
	if (error instanceof CustomError) {
		error.patata;
	}
}

// biome-ignore lint/style/useAsConstAssertion: <explanation>
const sampleUnionType: "a" = "a";


type Order = {
	id : number;
	date: Date;
	isSend: boolean;
}

// UnionType
type PaymentType = "Card" | "transfer" | "cash";

// EnumType
enum PaymentTypeEnum {
card = "Card",
transfer = "transfer",
cash = "cash",
}

const checkout = (order: Order, type: PaymentType) => {

}

const getOrder = (order: Order[], predicate: (id: number) =>  Order) => {};

getOrder([], (id: number) => {
	const order: Order = {
		id: 1,
		date: new Date(),
		isSend: true,
	};

	return order;
})


// Tipar objetos

//regla para marcar guia de estilo solo para usar interface o type : consistent-type-definitions "error", "interface"
interface User {
	id: Number;
	name: string;
	username: string;
}

type UserType = {
	id: Number;
	name: string;
	username: string;
}

const properties = (object: Record<string, User>): void => {
	// ..
}

properties({user1: {
	id: 1, name: "Sample", username: "sampleUsername"
}});


//Strict true
