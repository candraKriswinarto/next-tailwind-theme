import Head from "next/head"
import Header from "../sections/Header"
import Footer from "../sections/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next Tailwind Theme</title>
        <meta name="description" content="Create dark mode in next and tailwind" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout