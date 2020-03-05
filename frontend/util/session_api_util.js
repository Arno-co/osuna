import { $CombinedState } from "redux"

export const signup = (user) => {
    return $.ajax({
        url: '/api/users',
        method: 'POST',
        data: {user: user}
    });
}

export const login = (session) => {
    return $.ajax({
        url: '/api/session',
        method: 'POST',
        data: {user: session}
    });
}

export const logout = () => {
    return $.ajax({
        url: '/api/session',
        method: 'DELETE'
    });
}