import { authResponse } from "./response-message";

function login(users, email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!users) return reject(new Error("Users not found"));

            if (!email) return reject(new Error("Please enter email"));
            if (!password) return reject(new Error("Please enter password"));
            let authRes = "";
            users.forEach((user) => {
                if (user.email === email) {
                    const AUTH = new authResponse("success", user);
                    authRes = AUTH.res();
                }
            });
            resolve(JSON.stringify(authRes));
        }, 2000);
    });
}

export default async function doLogin(users, email, password) {
    try {
        return await login(users, email, password);
    } catch (error) {
        console.log(error);
    }
}
