import { User } from "../../data/user";
import { serviceResponse } from "../response-message";

function createUser(users = [], userDetails) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!users) {
                return reject(new Error("Database empty"));
            }

            const ID = users.length + 1;

            const NEW_USER = new User(ID, userDetails.firstName, userDetails.lastName, userDetails.email, userDetails.avatar);
            users.push(NEW_USER);
            const UPDATED_USERS = users;
            const RESPONSE_MSG = serviceResponse("success");
            resolve([UPDATED_USERS, NEW_USER, RESPONSE_MSG]);
        }, 2000);
    });
}

export default async function doCreateUser(users = [], firstName, lastName, email, avatar) {
    try {
        return await createUser(users, firstName, lastName, email, avatar);
    } catch (error) {
        console.log(error);
    }
}
