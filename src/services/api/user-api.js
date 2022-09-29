import { generateUsers } from "../../data/user";
import doLogin from "../login";
import doCreateUser from "./create-user";
import doDeleteUser from "./delete-user";
import doFindUser from "./find-user";
import doGetUsers from "./get-users";
import doModifyUser from "./modify-user";

export const genUsers = (count) => generateUsers(count);
export const getUsers = (users) => doGetUsers(users);
export const searchUser = (users, id) => doFindUser(users, id);
export const deleteUser = (users, id) => doDeleteUser(users, id);
export const createUser = (users, firstName, lastName, email, avatar) => doCreateUser(users, firstName, lastName, email, avatar);
export const updateUser = (users, id, updatedData) => doModifyUser(users, id, updatedData);
export const login = (users, emai, password) => doLogin(users, emai, password);
