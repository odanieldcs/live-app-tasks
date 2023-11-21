import app from './app';

export function initServer(port?: number) {
	try {
		app.listen(port, () => {
			console.log(`Servidor rodando na porta ${port}`);
		});
	} catch (error) {
		console.error(error);
	}
}

const port = Number(process.env.PORT) || 3001;

initServer(port);
