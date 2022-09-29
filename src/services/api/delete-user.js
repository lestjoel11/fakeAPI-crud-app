function deleteUser(users = [], id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!users) {
                return reject(new Error("Failed deletion of User"));
            }
            users.forEach((user, index) => {
                if (user.id === id) {
                    users.splice(index, 1);
                } else {
                    return "Not Found";
                }
            });

            resolve(users);
        }, 2000);
    });
}

export default async function doDeleteUser(users, id) {
    try {
        return await deleteUser(users, id);
    } catch (error) {
        console.log(error);
    }
}
