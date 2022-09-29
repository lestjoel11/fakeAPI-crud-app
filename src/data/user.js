import { faker } from "@faker-js/faker";

export class User {
    constructor(_id, firstName = faker.name.firstName(), lastName = faker.name.lastName(), email = faker.internet.email(firstName, lastName), avatar = faker.internet.avatar()) {
        this.id = _id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;
    }
}

export function generateUsers(count) {
    let users = [];
    let index = count + 1;
    for (let i = 1; i < index; i++) {
        let user = new User(i);
        users.push(user);
    }
    return users;
}
