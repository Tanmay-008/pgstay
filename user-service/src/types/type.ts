export type user = {
    userName: string,
    fullName: string,
    email: string,
    phoneNumber: string,
    password: string,
    role?: string,
}

export type UserResponse = Omit<user, 'password'> & { id: string, role: string };