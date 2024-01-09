export {};

declare global {
	namespace Express {
		export interface Request {
			pagination: {
				limit: Number;
				offset: Number;
			};
			filters: {
				startDate: Date | undefined;
				endDate: Date | undefined;
			};
		}
	}
}
