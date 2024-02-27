type ResponseError = {
	name: string;
	message: string;
};

class ResponseErrorFormatter {
	format(error: Error): ResponseError {
		return {
			name: error.name,
			message: error.message,
		};
	}
}

export const responseErrorFormatter = new ResponseErrorFormatter();
