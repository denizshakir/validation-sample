import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Alert } from 'react-bootstrap';
import { userMatching } from '../utils/userUtils';
import { fieldShape } from './SignUp';
import { AppContext } from '../app-context';
import { withRouter } from 'react-router-dom';
import { PATHS } from '../constants/routeConstants';
import FormField from '../components/shared/FormField';
import SimpleCard from '../components/shared/SimpleCard';

class SignIn extends React.Component {

    state = {
        username: "",
        password: "",
        errors: {}
    }

    updateInput = (field, value) => this.setState({ [field]: value });

    onSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;
        const isUserMatching = userMatching({ username, password });
        if (isUserMatching) {//sign in if user is matching
            this.context.updateLoggedUser(username);
            this.props.history.push(PATHS.DASHBOARD);
        } else {
            const globalError = "Incorrect username or password";
            this.setState({ errors: { globalError } });
        }
    }

    render() {
        const { errors } = this.state;
        const { fields } = this.props;
        const fieldsPopulated = fields.every(f => this.state[f.name]);

        return (
            <div className="col-md-2 margin-auto">
                <SimpleCard header="Sign in">
                    <Form onSubmit={this.onSubmit}>
                        {fields.map(f =>
                            (<FormField
                                key={f.name}
                                field={f}
                                onChange={this.updateInput} />))}
                        {errors.globalError && <Alert variant="danger">{errors.globalError}</Alert>}
                        <Button variant="primary" type="submit" disabled={!fieldsPopulated}>Submit</Button>
                    </Form>
                </SimpleCard>
            </div>);
    }

    static defaultProps = {
        fields: [
            {
                name: "username",
                label: "Username",
                type: "text",
                placeholder: "Enter username",
            },
            {
                name: "password",
                label: "Password",
                type: "password",
                placeholder: "Password"
            }
        ]
    }

    static propTypes = {
        fields: PropTypes.arrayOf(fieldShape).isRequired
    }

    static contextType = AppContext;
}

export default withRouter(SignIn);