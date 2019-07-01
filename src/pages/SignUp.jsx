import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormField from '../components/shared/FormField';
import { Button, Form } from 'react-bootstrap';
import { validateEmpty, validateWhitespace, getFormErrors } from '../utils/validationUtils';
import { registerUser, checkUsernameUnique } from '../utils/userUtils';
import { withRouter } from 'react-router-dom';
import { PATHS } from '../constants/routeConstants';
import SimpleCard from '../components/shared/SimpleCard';

export const fieldShape = PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    validations: PropTypes.arrayOf(PropTypes.func.isRequired)
});

class SignUp extends Component {

    state = {
        name: "",
        password: "",
        username: "",
        errors: {}
    }

    updateInput = (field, value) => this.setState({ [field]: value });

    onSubmit = e => {
        e.preventDefault();
        const { fields } = this.props;
        const { errors, ...inputs } = this.state;
        const newErrors = getFormErrors(fields, inputs);
        if (Object.keys(newErrors).length) {
            this.setState({ errors: newErrors });
        } else {//register if no errors
            registerUser(inputs);
            this.props.history.push(PATHS.SIGN_IN);
        }
    }

    render() {
        const { fields } = this.props;

        return (
            <div className="col-md-2 margin-auto">
                <SimpleCard header="Sign up">
                    <Form onSubmit={this.onSubmit}>
                        {fields.map(f => (
                            <FormField
                                key={f.name}
                                field={f}
                                onChange={this.updateInput}
                                error={this.state.errors[f.name]}
                            />))}
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </SimpleCard>
            </div >);
    }

    static defaultProps = {
        fields: [
            {
                name: "name",
                label: "Name",
                type: "text",
                placeholder: "Name",
                validations: [validateEmpty]
            },
            {
                name: "password",
                label: "Password",
                type: "password",
                placeholder: "Password",
                validations: [validateEmpty, validateWhitespace]
            },
            {
                name: "username",
                label: "Username",
                type: "text",
                placeholder: "Enter username",
                validations: [validateEmpty, validateWhitespace, checkUsernameUnique]
            }
        ]
    }

    static propTypes = {
        fields: PropTypes.arrayOf(fieldShape).isRequired
    }
}

export default withRouter(SignUp);