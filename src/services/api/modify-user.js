import { serviceResponse } from "../response-message";

function modifyUser(users, id, updatedData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Object.keys(updatedData).includes("id")) {
                return reject(new Error("ID cannot be updated"));
            }
            id = parseInt(id);
            let updatedUser = "";
            users.forEach((user) => {
                if (user.id === id) {
                    Object.keys(user).forEach((key) => {
                        if (updatedData[key]) user[key] = updatedData[key];
                    });
                    updatedUser = user;
                }
            });
            const UPDATED_USERS = users;
            const UPDATED_USER = updatedUser;
            const RESPONSE_MSG = serviceResponse("success");
            resolve([UPDATED_USERS, UPDATED_USER, RESPONSE_MSG]);
        }, 2000);
    });
}

export default async function doModifyUser(users, id, updatedData) {
    try {
        return await modifyUser(users, id, updatedData);
    } catch (error) {
        console.log(error);
    }
}
