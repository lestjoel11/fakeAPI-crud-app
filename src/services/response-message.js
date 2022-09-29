export class authResponse {
    constructor(status, User) {
        this.status = status;
        this.User = User;
    }

    res() {
        return {
            data: {
                status: this.status,
                user: this.User,
            },
        };
    }
}

export function serviceResponse(status) {
    return { data: { status: status } };
}
