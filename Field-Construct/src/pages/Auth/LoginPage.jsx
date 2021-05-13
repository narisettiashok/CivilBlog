import { Link } from 'react-router-dom';

import FormContainer from '../../components/FormContainer';

function LoginPage() {
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
                                htmlFor="password">
                                Password
                            </label>
                            <input className="form-control"
                                type="password"
                                id="password"
                                placeholder="Password"
                            />
                        </div>
                        <div>
                            <label className="inline-flex items-center cursor-pointer">
                                <input className="form-checkbox border-0 rounded ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                    id="rememberMe"
                                    type="checkbox"
                                />
                                <span className="ml-2 text-sm font-semibold">
                                    Remember me
                                </span>
                            </label>
                        </div>

                        <div className="text-center mt-6">
                            <Link className="bg-blue-800 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                type="button" to="/home">
                                Login
                            </Link>
                        </div>
                    </form>
                </FormContainer>
                <div className="flex flex-wrap mt-6 relative justify-between">
                    <Link to="/auth/forgot-password">
                        <small>Forgot password?</small>
                    </Link>
                    <Link to="/auth/sign-up">
                        <small>Create new account</small>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
