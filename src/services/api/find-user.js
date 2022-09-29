function findUser(users = [], id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!users) {
                return reject(new Error("User not found"));
            }
            let searchResult = { data: {} };
            id = parseInt(id);
            users.forEach((user) => {
                if (user.id === id) {
                    searchResult.data = user;
                } else {
                    return "Not Found";
                }
            });
            resolve(searchResult);
        }, 2000);
    });
}

export default async function doFindUser(users, id) {
    try {
        return await findUser(users, id);
    } catch (error) {
        console.log(error);
    }
}
