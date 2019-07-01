import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';

const NavigationLink = props => {
    const { to, title, onClick } = props;
    return (
        <Nav.Item>
            <Nav.Link eventKey={to} onClick={onClick}>{title}</Nav.Link>
        </Nav.Item>)
}

NavigationLink.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default NavigationLink;