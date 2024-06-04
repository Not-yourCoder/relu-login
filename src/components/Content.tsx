import React from 'react'

type Props = {
    children: React.ReactNode
}

const Content = ({ children }: Props) => {
    return (
        <div className=''>
            {children}
        </div>
    )
}

export default Content