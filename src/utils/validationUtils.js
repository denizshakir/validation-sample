export const validateEmpty = (label, value) => {
    if (!value) {
        return `${label} can not be empty`;
    }
}

export const validateWhitespace = (label, value) => {
    const rgx = /\s/;
    if (rgx.test(value)) {
        return `${label} can not contain whitespaces.`;
    }
}

export const getFormErrors = (fields, inputs) => {
    const errors = {};
    fields.forEach(f => {
        const { name, label } = f;
        let error = "";
        f.validations.some(validateFunc => {
            error = validateFunc(label, inputs[name]);
            return error;
        });

        if (error) {
            errors[name] = error;
        }
    });

    return errors;
};