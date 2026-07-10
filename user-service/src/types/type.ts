export type user = {
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string,
}

export type UserResponse = Omit<user, 'password'> & { id: string };