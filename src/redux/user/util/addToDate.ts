export const addToNow = (
	amount: number,
	scale: "minutes" | "hours" | "days",
) => {
	const date = new Date().getTime();
	switch (scale) {
		case "minutes":
			return date + amount * 60000;
		case "hours":
			return date + amount * 3600000;
		case "days":
			return date + amount * 86400000;
	}
	return date;
};
