import LoadingSpinner from "../../components/LoadingSpinner";

function Button({ type, label, disabled, showLoadingSpinner }) {
    return (
        <>
            <button type={type}
                disabled={disabled}
                className="w-full shadow outline-none rounded mr-1 mb-1 px-6 py-3 bg-blue-800 text-white text-sm font-bold uppercase 
                    ease-linear transition-all duration-150
                    hover:shadow-lg focus:outline-none active:bg-blue-600 disabled:opacity-50"
            >
                {label} {showLoadingSpinner && <LoadingSpinner />}
            </button>
        </>
    );
}

export default Button;
