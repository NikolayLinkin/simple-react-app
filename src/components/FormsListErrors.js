import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    errors: PropTypes.shape({}).isRequired,
};

const FormListErrors = ({errors}) => {
    return (
        <div className="form__errors">
            {Object.keys(errors).map(key =>
                <div className="form__error" key={key}>
                    {key} {errors[key]}
                </div>
            )}
        </div>
    );
};

FormListErrors.propTypes = propTypes;
export default FormListErrors;