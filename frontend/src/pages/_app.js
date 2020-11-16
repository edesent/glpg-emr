import awsExports from '../aws-exports'
import { Amplify } from 'aws-amplify'
import '../assets/styles/tailwind.css'
import '../assets/styles/globals.css'

Amplify.configure({ ...awsExports, ssr: true })

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
