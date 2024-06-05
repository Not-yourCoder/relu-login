/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import GoogleSignin from '../../components/GoogleSignin';
import Heading from '../../components/Heading';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';


interface SignupFormValues {
    email: string;
    password: string;
    confirm_password: string;
}
export const LoginForm = () => {
    const [showPassword, setShowpassword] = useState<boolean>(false)
    const navigate = useNavigate();
    const handleSubmit = async (values: SignupFormValues, { setSubmitting }: FormikHelpers<SignupFormValues>) => {
        try {
            await signInWithEmailAndPassword(auth, values.email, values.password);
            console.log(values);
            toast.success('Login successful!');
            navigate("/home", {
                replace: true
            })
        } catch (error) {
            const typedError = error as any;
            if (typedError.code === 'auth/user-not-found' || typedError.code === 'auth/wrong-password') {
                console.log(error);
                toast.error('Invalid email or password.');
            } else {
                toast.error('An error occurred. Please try again later.');
            }
        }
        setSubmitting(false);
    };

    return (
        <>
            <Heading heading="login into your account" />
            <div className='grid gap-10 items-center'>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        confirm_password: ""
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Email is Required'),
                        password: Yup.string()
                            .required('Password is Required'),
                    })}
                    onSubmit={handleSubmit}
                >
                    <Form className='w-[350px] flex flex-col gap-6 mx-auto'>
                        <div>
                            <Field
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="w-full p-4 bg-[#222222] rounded text-white font-extralight text-xl focus:outline-none focus:ring-0"
                            />
                            <div className='text-red-700'>
                                <ErrorMessage name="email" />
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center bg-[#222222] rounded'>
                                <Field
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="w-full p-4 bg-[#222222] rounded text-white font-extralight text-xl focus:outline-none focus:ring-0"
                                />
                                {showPassword ? <FaEye className='text-white mx-4 text-xl' onClick={() => setShowpassword(!showPassword)} /> : <FaEyeSlash className='text-white mx-4 text-xl' onClick={() => setShowpassword(!showPassword)} />}

                            </div>
                            <div className='text-red-700'>
                                <ErrorMessage name="password" />
                            </div>
                        </div>
                        <button type="submit" className="bg-[#00C299] p-2 rounded text-lg text-white font-semibold">
                            Login
                        </button>
                    </Form>
                </Formik>
                <div className='text-white text-4xl text-center'>or</div>
                <div>
                    <GoogleSignin label="Login with Google" />
                </div>

            </div>
            <div className='text-white mt-4 text-center '>
                Dont have an account? <Link to="/signup">SignUp</Link>
            </div>
        </>
    );
};
