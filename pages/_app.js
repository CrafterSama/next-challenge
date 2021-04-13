import { StateProvider } from '../context';
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  )
}

export default MyApp
