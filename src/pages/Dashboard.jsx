import React, { useState, useContext } from 'react';
import { Table } from 'react-bootstrap';
import { getUsers } from '../utils/userUtils';
import { USER_CONTANTS } from '../constants/userContants';
import DashboardTableItem from '../components/dashboard/DashboardTableItem';
import SimpleCard from '../components/shared/SimpleCard';

import { AppContext } from '../app-context';

const Dashboard = props => {

    const context = useContext(AppContext);
    const [users, setUsers] = useState(getUsers());
    const onDelete = username => {
        const updatedUsers = users.filter(u => u.username !== username);
        localStorage.setItem(USER_CONTANTS.USERS_KEY, JSON.stringify(updatedUsers));
        setUsers(updatedUsers);
    }

    return (
        <div className="col-md-6 margin-auto">
            <SimpleCard header="User dashboard">
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u, index) => (
                            <DashboardTableItem
                                key={u.username}
                                index={index + 1}
                                username={u.username}
                                name={u.name}
                                onDelete={onDelete}
                                loggedUser={context.loggedUser} />
                        ))}
                    </tbody>
                </Table>
            </SimpleCard>
        </div>);
}

export default Dashboard;