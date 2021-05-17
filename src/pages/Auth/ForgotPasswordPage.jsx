import {Link} from 'react-router-dom';

import FormContainer from '../../components/FormContainer';

function ForgotPasswordPage() {
    return (
        <>
             {/* Construction Image */}
             <div className="w-full lg:w-3/6 px-4 hidden md:block">
                <img src={require("../../assets/images/construction.svg").default} alt="Construction"></img>
            </div>

            {/* Login Form */}
            <div className="w-full lg:w-2/6">
                <FormContainer>
                    <form>
                        <div className="form-group">
                            <h1 className="uppercase font-bold text-xl text-center pb-3">
                                Forgot Password?
                            </h1>
                            <p className="text-xs text-center pb-3">
                                Please enter your registered email ID and company name to reset password?
                            </p>
                        </div>

                        <div className="form-group">
                            <label className="form-label"
                                htmlFor="email">
                                Email
                            </label>
                            <input type="email"
                                id="email"
                                className="form-control"
                                placeholder="Email"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label"
                                htmlFor="companyName">
                                Company
                            </label>
                            <input type="text"
                                id="companyName"
                                className="form-control"
                                placeholder="Company Name"
                            />
                        </div>

                        <div className="text-center mt-6">
                            <Link className="bg-blue-800 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                type="button" to="/auth/reset-password">
                                Reset Password?
                            </Link>
                        </div>
                    </form>
                </FormContainer>
            </div>
        </>
    );
}

export default ForgotPasswordPage;