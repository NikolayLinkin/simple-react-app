import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import FormListErrors from "./FormsListErrors";

class Login extends Component {
    constructor(props) {
        super(props);

        this.email = null;
        this.password = null;

        this.submitForm = this.submitForm.bind(this);
    }

    static propTypes = {
        errors: PropTypes.shape({}).isRequired,
        isFetching: PropTypes.bool.isRequired,
    };

    submitForm (e) {
        e.preventDefault();

        const {fetchLogin} = this.props;

        fetchLogin(this.email.value, this.password.value);
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
                {errors ? <FormListErrors errors={errors}/> : ''}

                <form className="auth__form"
                      onSubmit={this.submitForm}>

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
        );
    };
}

export default Login;