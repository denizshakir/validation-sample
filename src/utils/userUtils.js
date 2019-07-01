import { USER_CONTANTS } from "../constants/userContants";

export const getUsers = () => {
    const users = JSON.parse(localStorage.getItem(USER_CONTANTS.USERS_KEY)) || [];
    return users;
}

export const checkUsernameUnique = (label, value) => {
    const users = getUsers();
    const usernameExists = users.some(u => {
        return u.username === value;
    });

    if (usernameExists) {
        return "Username already exists."
    };
};

export const registerUser = user => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem(USER_CONTANTS.USERS_KEY, JSON.stringify(users));
}

export const userMatching = user => {
    const users = getUsers();
    const userExists = users.some(u => {
        return u.username === user.username
            && u.password === user.password
    });

    return userExists;
}

export const getLoggedUser = () => {
    const loggedUser = localStorage.getItem(USER_CONTANTS.LOGGED_USER) || "";
    return loggedUser;
};