import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { MyAppProvider } from '@/contexts/TaskAppContext';
import { ReactQueryProvider } from '@/contexts/ReactQueryProvider';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MyAppProvider>
			<ReactQueryProvider>
				<Component {...pageProps} />
			</ReactQueryProvider>
		</MyAppProvider>
	);
}
