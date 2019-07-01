import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
// import { AppContext } from '../app-context';

const DashboardTableItem = props => {

    const { name, username, index, loggedUser } = props;
    const onDelete = () => props.onDelete(username);
    return (
        <tr key={username}>
            <td>{index}</td>
            <td>{name}</td>
            <td>{username}</td>
            <td>
                {username !== loggedUser &&
                    <Button variant="danger" onClick={onDelete}>
                        Delete
                </Button>}
            </td>
        </tr>);
}

DashboardTableItem.propTypes = {
    index: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    loggedUser: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DashboardTableItem;