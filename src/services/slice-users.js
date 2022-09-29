export default function sliceData(users = [], currentPage, totalPages, perPage) {
    let noOfUsers = users.length;
    let start = currentPage === 1 ? 0 : startIndex(perPage, currentPage);
    let end = totalPages === 1 ? users.length : endIndex(start, noOfUsers, perPage, currentPage);
    return users.slice(start, end);
}

function startIndex(perPage, currentPage) {
    return (currentPage - 1) * perPage;
}

function endIndex(start, noOfUsers, perPage) {
    return start + perPage > noOfUsers ? noOfUsers : start + perPage;
}
