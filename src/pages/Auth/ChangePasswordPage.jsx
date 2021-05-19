import {Link} from 'react-router-dom'; 

import FormContainer from '../../components/FormContainer';

function ChangePasswordPage() {
    return(
        <>
             {/* Construction Image */}
             <div className="w-full lg:w-3/6 px-4 hidden md:block">
                <img src={require("../../assets/images/construction.svg").default} alt="Construction"></img>
            </div>

            {/* Change Password Form */}
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
                                placeholder="Old Password"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label"
                                htmlFor="new-password">
                                New Password
                            </label>
                            <input type="password"
                                id="new-password"
                                className="form-control"
                                placeholder="New Password"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label"
                                htmlFor="confirm-password">
                                Confirm Password
                            </label>
                            <input type="password"
                                id="confirm-password"
                                className="form-control"
                                placeholder="Confirm Password"
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

export default ChangePasswordPage;