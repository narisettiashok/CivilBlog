
export const currencyFormatter = (params) => {
    return !params.value ? null : ("Rs. " + parseFloat(params.value).toFixed(2));
};

