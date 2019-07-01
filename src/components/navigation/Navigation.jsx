import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { PATHS } from '../../constants/routeConstants';
import NavigationLink from './NavigationLink';
import { AppContext } from '../../app-context';

const Navigation = props => {
    const { history } = props;
    const navOnSelect = selected => history.push(selected);

    return (<AppContext.Consumer>
        {({ loggedUser, updateLoggedUser }) => {
            const isLogged = !!loggedUser;
            return (<Card>
                <Card.Header>
                    <Nav variant="tabs" activeKey={history.location.pathname} onSelect={navOnSelect}>
                        <NavigationLink to={PATHS.HOME} title="Home" />
                        {isLogged ?
                            <>
                                <NavigationLink to={PATHS.DASHBOARD} title="Dashboard" />
                                <NavigationLink to={PATHS.LOGOUT} title="Log out" onClick={() => updateLoggedUser("")} />
                            </>
                            : <>
                                <NavigationLink to={PATHS.SIGN_IN} title="Sign in" />
                                <NavigationLink to={PATHS.SIGN_UP} title="Sign up" />
                            </>}
                    </Nav>
                </Card.Header>
            </Card>);
        }}
    </AppContext.Consumer>);
}

export default withRouter(Navigation);