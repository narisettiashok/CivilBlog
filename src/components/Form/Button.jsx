import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

function Button({ type, label, showLoadingSpinner, isLink, to, color, widthClass, children, ...rest }) {
    
    const defaultButtonClass = `shadow outline-none rounded px-6 py-3 bg-blue-800 text-white text-sm font-bold uppercase text-center
                            ease-linear transition-all duration-150
                            hover:shadow-lg focus:outline-none active:bg-blue-600 disabled:opacity-50`;
    let buttonClasses = ``;

    switch(color) {
        case 'primary':
            buttonClasses = defaultButtonClass;
            break;
        case 'muted':
            buttonClasses = `shadow outline-none rounded mb-1 px-6 py-3 border border-gray-500 hover:bg-blue-800 ease-linear transition-all duration-150 hover:text-white hover:shadow-lg focus:outline-none disabled:opacity-50`;
            break;
        default:
            buttonClasses = defaultButtonClass;
            break;
    }

    if(!widthClass) {
        widthClass = 'w-full';
    }

    buttonClasses = `${widthClass} ${buttonClasses}`;

    const [classes] = useState(buttonClasses);

    return (
        <>
            {isLink ?
                (
                    <Link className={classes}
                        to={to}
                    >
                        {children}
                    </Link>
                )
                : (
                    <button type={type}
                        className={classes}
                        {...rest}
                    >
                        {children} {showLoadingSpinner && <LoadingSpinner />}
                    </button>
                )
            }
        </>
    );
}

export default Button;





// bg-blue-800 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded shadow
//                                             hover:shadow-lg outline-none focus:outline-none ml-2 ease-linear transition-all duration-150 disabled:opacity-50

// w-full shadow outline-none rounded mr-1 mb-1 px-6 py-3 bg-blue-800 text-white text-sm font-bold uppercase text-center
//     ease-linear transition-all duration-150
//     hover:shadow-lg focus:outline-none active:bg-blue-600 disabled:opacity-50