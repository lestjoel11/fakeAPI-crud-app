import { User } from "../data/user";
import sliceData from "./slice-users";

class Users {
    constructor(page = 0, per_page = 0, total = 0, total_pages = 0, data = User) {
        this.page = page;
        this.per_page = per_page;
        this.total = total;
        this.total_pages = total_pages;
        this.data = data;
    }
}

function generateMeta(users = User) {
    const TOTAL_USERS = users.length;
    const PER_PAGE = 6;
    const USERS_BY_PAGE = TOTAL_USERS / PER_PAGE;
    const TOTAL_PAGES = USERS_BY_PAGE > 1 ? Math.ceil(USERS_BY_PAGE) : 1;

    const USER_RESULTS_META = new Users(0, PER_PAGE, TOTAL_USERS, TOTAL_PAGES, []);
    return USER_RESULTS_META;
}

export default function paginateUsers(users = []) {
    let result = [];
    let atEnd = false;
    let page = 1;
    while (!atEnd) {
        let paginationMeta = generateMeta(users);
        const PAGES = paginationMeta.total_pages;
        paginationMeta = splitData(users, page, PAGES, paginationMeta);
        result.push(paginationMeta);
        if (page === PAGES) atEnd = true;
        else page++;
    }

    return result;
}

function splitData(users = [], page = 0, pages = 0, paginationMeta) {
    paginationMeta.page = page;
    const DATA = sliceData(users, page, pages, paginationMeta.per_page);
    paginationMeta.data = DATA;
    return paginationMeta;
}
