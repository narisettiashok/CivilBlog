import AuthContainer from '../../components/AuthContainer';
import FormContainer from '../../components/FormContainer';

function SignUpPage() {
    return (
        <>
            <AuthContainer>
                {/* Construction Image */}
                <div className="w-full lg:w-3/6 px-4 hidden md:block">
                    <img src={require("../../assets/images/construction.svg").default} alt="Construction"></img>
                </div>

                {/* Sign up Form */}
                <div className="w-full lg:w-2/6">
                    <FormContainer>
                        <form>
                            <div className="form-group">
                                <label className="form-label"
                                    htmlFor="firstName">
                                    First Name
                                </label>
                                <input type="text"
                                    id="firstName"
                                    className="form-control"
                                    placeholder="First Name"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label"
                                    htmlFor="lastName">
                                    Last Name
                                </label>
                                <input type="text"
                                    id="lastName"
                                    className="form-control"
                                    placeholder="Last Name"
                                />
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
                                <button className="bg-blue-800 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                    type="button">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </FormContainer>
                </div>
            </AuthContainer>
        </>
    );
}

export default SignUpPage;