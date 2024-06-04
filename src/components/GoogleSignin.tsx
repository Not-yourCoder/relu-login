import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../firebase"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

type Props = {
    label: string
}


const GoogleSignin = ({ label }: Props) => {
    const navigate = useNavigate()
    const signUpGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
            toast.success("Signed In")
            navigate("/home", {
                replace: true
            })
        } catch (error) {
            toast.error(String(error))
        }
    }
    return (
        <div onClick={signUpGoogle} className='p-4 bg-transparent border border-[#00C299] rounded text-center hover:bg-[#00C299] cursor-pointer'>
            <div className='text-white font-semibold text-lg capitalize'>{label}</div>
        </div>
    )
}

export default GoogleSignin