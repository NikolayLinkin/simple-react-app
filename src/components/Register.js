import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class Register extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);

        this.name = null;
        this.email = null;
        this.password = null;
    }

    static propTypes = {
        updateFieldAuth: PropTypes.func,
        fetchRegister: PropTypes.func.isRequired,
        isFetching: PropTypes.bool,
        errors: PropTypes.shape({})
    };

    submitForm(e) {
        e.preventDefault();

        const {fetchRegister} = this.props;

        fetchRegister(this.name.value, this.email.value, this.password.value);
    }

    render() {
        const {
            isFetching,
            errors,
        } = this.props;

        return (
            <div className="auth">
                <Link to="/login" className="auth__link">
                    Have an account?
                </Link>

                <br/>
                {Object.keys(errors).length ? JSON.stringify(errors) : ''}

                <form className="auth__form"
                      onSubmit={this.submitForm}>
                    <input type="text"
                           ref={(node) => this.name = node}
                           className="auth__form__input"
                           placeholder="Name"/>

                    <input type="email"
                           ref={(node) => this.email = node}
                           className="auth__form__input"
                           placeholder="email"/>

                    <input type="password"
                           ref={(node) => this.password = node}
                           className="auth__form__input"
                           placeholder="password"/>

                    <button disabled={isFetching}
                            className="auth__form__btn">
                        Sign up
                    </button>
                </form>

            </div>
        )
    }
}

export default Register;