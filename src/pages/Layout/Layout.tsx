import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className='flex flex-col min-h-[860px] mx-12 my-8'>
            <Header />
            <main className='flex-grow flex items-center justify-center'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout