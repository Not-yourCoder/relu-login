import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';


const Home = () => {
  const navigate = useNavigate()
  const logOut = async () => {
    await signOut(auth);
    toast.success("Logged out success");
    navigate("/login", { replace: true });
    return true;
  };

  if (!auth.currentUser) {
    navigate("/login", {
      replace: true
    })
    return null
  }
  return (
    <div>
      <div className='text-4xl text-white font-semibold'>Hello, {auth.currentUser?.displayName}</div>
      <div className='mx-auto mt-4 w-[100px]'>
        <button className='bg-green-400 hover:bg-green-500 px-4 py-2 rounded-md text-white font-semibold' onClick={logOut}>Logout</button>
      </div>
    </div>
  )
}

export default Home