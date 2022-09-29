import paginateUsers from "../paginate-users";

function getUsers(users) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!users) {
                return reject(new Error("No users found"));
            }
            const USERS = paginateUsers(users);
            resolve(USERS);
        }, 2000);
    });
}

export default async function doGetUsers(users) {
    try {
        return await getUsers(users);
    } catch (error) {
        console.log(error);
    }
}
