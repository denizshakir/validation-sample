import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const styles = {
    group: { textAlign: "left" },
    label: { fontWeight: 600 }
};

const FormField = props => {
    const { field, onChange, error } = props;

    return (
        <Form.Group key={field.name} style={styles.group}>
            <Form.Label style={styles.label}>{field.label}</Form.Label>
            <Form.Control
                onChange={e => onChange(field.name, e.target.value)}
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                isInvalid={!!error} />
            {error && <Form.Control.Feedback type="invalid">
                {error}
            </Form.Control.Feedback>}
        </Form.Group>)
}

FormField.propTypes = {
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default FormField;