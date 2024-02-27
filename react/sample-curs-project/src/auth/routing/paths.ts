export const authPaths = {
	root: "access",
	login: "login",
	register: "register",
};

export const fullAuthPaths = {
	root: `/${authPaths.root}`,
	login: `/${authPaths.root}/${authPaths.login}`,
	register: `/${authPaths.root}/${authPaths.register}`,
};
