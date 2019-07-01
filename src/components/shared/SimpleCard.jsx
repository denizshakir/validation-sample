import React from 'react';
import PropTypes  from 'prop-types';
import { Card } from 'react-bootstrap';

const SimpleCard = props => {
    return (
        <Card text="black">
            <Card.Header>{props.header}</Card.Header>
            <Card.Body>{props.children}</Card.Body>
        </Card>
    );
}

SimpleCard.propTypes = {
    header: PropTypes.string.isRequired,
}

export default SimpleCard;