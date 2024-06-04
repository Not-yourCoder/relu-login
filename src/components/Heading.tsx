
type Props = {
    heading: string
}

const Heading = ({ heading }: Props) => {
    return (
        <>
            <div className='capitalize text-4xl font-bold text-white mb-6 text-center'>
                {heading}
            </div>
            <div className='text-[rgba(255,255,255,0.7)] text-xl mb-16 text-center'>
                Choose from 156,000 online video courses with new additions <br /> published every second month.
            </div>
        </>
    )
}

export default Heading