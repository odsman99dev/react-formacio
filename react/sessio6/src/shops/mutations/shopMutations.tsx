import { useMutation } from "@tanstack/react-query";

import { Shop } from "../types";

export const useShopsDeleteMutation = () => {
	return useMutation({
		mutationFn: (shopId: Shop["id"]) => {
			return fetch(`${import.meta.env}/shops/${shopId}`);
		},
	});
};
