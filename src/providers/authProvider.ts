import {AuthProvider, HttpError} from "react-admin";
import {BASE_URL} from "../constants/config";

/**
 * This authProvider is only for test purposes. Don't use it in production.
 */

export const authProvider: AuthProvider = {
    login: async ({username, password}) => {
        try {
            const resultJSON = await fetch(BASE_URL + "/book-auth", {
                method: "POST",
                body: JSON.stringify({
                    login: username,
                    password,
                }),
                headers: {
                    "Content-Type": "application/json",
                    client: "sd",
                    os: 'ios',
                },
            });

            const {errorCode, errorMessage, personData, sessionId} =
                await resultJSON.json();
            console.log(errorCode)
            if (errorCode === 0) {
                // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
                localStorage.setItem("ssid", sessionId);
                localStorage.setItem("user", JSON.stringify(personData));
                return Promise.resolve();
            } else {
                await Promise.reject(errorMessage);
            }
        } catch (e: any) {
            console.log(e, 'eeee')
            return Promise.reject(
                new HttpError(e || "Unauthorized", 401, {
                    message: "Invalid username or password",
                })
            );
        }
    },
    logout: () => {
        localStorage.removeItem("user");
        localStorage.removeItem("ssid");
        return Promise.resolve();
    },
    checkError: ({status}: { status: number }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem("user");
            localStorage.removeItem("ssid");
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: async () => {
        const session = localStorage.getItem("ssid");
        console.log()
        console.log({headers: {...(session ? {session} : {})}})
        const res = await fetch(BASE_URL + "/users/me", {
            headers: {...(session ? {session} : {})},
        });
        if (res.ok) {
            console.log('succ')
            return Promise.resolve();
        } else {
            console.log('erre')
            return Promise.reject();
        }


    },
    getPermissions: () => {
        return Promise.resolve(undefined);
    },
    getIdentity: async () => {
        const session = localStorage.getItem("ssid");
        try {
            const userInfoJSON = await fetch(BASE_URL + "/users/me", {
                headers: {...(session ? {session} : {})},
            });
            const userInfo = await userInfoJSON.json();

            return Promise.resolve(userInfo);
        } catch (e) {
            return Promise.resolve(null);
        }
    },
};

export default authProvider;
