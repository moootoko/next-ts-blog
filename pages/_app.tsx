import 'uikit/dist/css/uikit.min.css';
import BaseLayout from '../components/baselayout';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <BaseLayout>
    <Component {...pageProps} />
  </BaseLayout>
)

export default MyApp;