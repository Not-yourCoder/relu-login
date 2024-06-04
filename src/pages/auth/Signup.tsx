/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import GoogleSignin from '../../components/GoogleSignin';
import Heading from '../../components/Heading';
import { createUserWithEmailAndPassword } from 'firebase/auth';


interface SignupFormValues {
    email: string;
    password: string;
    confirm_password: string;
}
export const SignupForm = () => {

    const navigate = useNavigate();
    const submit = async (values: { email: string, password: string }, { setSubmitting }: FormikHelpers<SignupFormValues>) => {
        try {
            await createUserWithEmailAndPassword(auth, values.email, values.password)
            toast.success("Registered Successfully")
            console.log("sign up success");
            navigate("/login", {
                replace: true
            })
        } catch (error) {
            const typedError = error as any;
            if (typedError.code === "auth/email-already-in-use") {
                toast.error("Email already in use")
                return null;
            }
        }
        setSubmitting(false);
    };
    return (
        <>
            <Heading heading='sign up to you account' />
            <div className='gap-10 items-center grid'>


                <Formik
                    initialValues={{

                        email: '',
                        password: '',
                        confirm_password: '',
                    }}
                    validationSchema={Yup.object({

                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Email is Required'),
                        password: Yup.string()
                            .required('Password is Required'),
                        confirm_password: Yup.string()
                            .required('Confirm Password is Required')
                            .oneOf([Yup.ref('password')], 'Passwords must match'),
                    })}
                    onSubmit={submit}
                >

                    <Form className='w-[350px] flex flex-col gap-6 mx-auto'>
                        <div>
                            <Field
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="w-full p-4 bg-[#222222] rounded text-white font-extralight text-xl"

                            />
                            <div className='text-red-700'>
                                <ErrorMessage name="email" />
                            </div>
                        </div>

                        <div>
                            <Field
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="w-full p-4 bg-[#222222] rounded text-white font-extralight text-xl"
                            />
                            <div className='text-red-700'>
                                <ErrorMessage name="password" />
                            </div>
                        </div>

                        <div>
                            <Field
                                name="confirm_password"
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full p-4 bg-[#222222] rounded text-white font-extralight text-xl"
                            />
                            <div className='text-red-700'>
                                <ErrorMessage name="confirm_password" />
                            </div>
                        </div>

                        <button type="submit" className="bg-[#00C299] p-2 rounded text-lg text-white font-semibold">
                            Sign Up
                        </button>
                    </Form>
                </Formik >
                <div className='text-white text-4xl text-center'>or</div>
                <div>
                    <GoogleSignin label='Sign up with Google' />
                </div>
            </div>
            <div className='text-white mt-8 text-center'>Already have an account?{" "}<Link to="/login">Login</Link></div>
        </>
    );
};
