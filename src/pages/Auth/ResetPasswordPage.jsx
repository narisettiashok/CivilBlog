import React, {useState} from 'react'

import {Link} from 'react-router-dom';

import FormContainer from '../../components/FormContainer';


function ResetPasswordPage() {

    const [showPassword, setShowPassword] = useState(false);

    function togglePasswordVisibilty() {
        return (
            setShowPassword(showPassword => !showPassword)
        )
    };

    return(
        <>
             {/* Construction Image */}
             <div className="w-full lg:w-3/6 px-4 hidden md:block">
                <img src={require("../../assets/images/construction.svg").default} alt="Construction"></img>
            </div>

            {/* Reset Password Form */}
            <div className="w-full lg:w-2/6">
                <FormContainer>
                    <form>
                        <div className="form-group">
                            <h1 className="uppercase font-bold text-xl text-center pb-3">
                                Reset Password
                            </h1>
                            <p className="text-xs text-center pb-10">
                                Please enter new password to reset your password
                            </p>
                        </div>

                        <div className="form-group">
                            <label className="form-label"
                                htmlFor="old-password">
                                Old Password
                            </label>
                            <input type="password"
                                id="old-password"
                                className="form-control"
                                placeholder="Old password"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label"
                                htmlFor="new-password">
                                New Password
                            </label>
                            <input type={showPassword ? "text" : "password"}
                                id="new-password"
                                className="form-control"
                                placeholder="New password"
                            />
                            <i className="absolute right-1 top-9 cursor-pointer" onClick={togglePasswordVisibilty}>
                                <svg className="h-5 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 
                                5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <svg className="h-5 w-6 absolute top-0 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 
                                19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 
                                4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 
                                9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                </svg>
                            </i>
                        </div>

                        <div className="form-group">
                            <label className="form-label"
                                htmlFor="re-enter-new-password">
                                Re Enter New Password
                            </label>
                            <input type="password"
                                id="re-enter-new-password"
                                className="form-control"
                                placeholder="Re Enter New password"
                            />
                        </div>

                        <div className="text-center mt-6">
                            <Link className="bg-blue-800 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                type="button" to="/auth/login">
                                Reset Password
                            </Link>
                        </div>
                    </form>
                </FormContainer>
            </div>
        </>
    )
}

export default ResetPasswordPage;