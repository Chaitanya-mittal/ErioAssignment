export async function getUsers() {
    try {
        const response = await fetch('http://localhost:3000/api/users')
        const data = await response.json();
        return { users: data.users, count: data.count };
    }
    catch (err: any) {
        throw new Error(err.message)
    }
}


export async function createUser(user: any) {
    try {
        const response = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        if (data?.success) {
            return data.user;
        }
        throw new Error(data.message);
    }
    catch (err: any) {
        throw new Error(err.message)
    }
}

export async function deleteUser(id: string) {
    try {
        const response = await fetch('http://localhost:3000/api/users', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });
        const data = await response.json();
        if (data?.success) {
            return data.user;
        }
        throw new Error(data.message);
    }
    catch (err: any) {
        throw new Error(err.message)
    }
}

export async function getUserById(id: string) {
    try {
        const response = await fetch(`http://localhost:3000/api/users/${id}`)
        const data = await response.json();
        if (data?.success) {
            return data.user;
        }
        throw new Error(data.message);

    }
    catch (err: any) {
        throw new Error(err.message)
    }
}

export async function editUser(user: any) {
    try {
        const { id, ...newUser } = user;
        console.log(newUser);
        const response = await fetch(`http://localhost:3000/api/users?id=${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(newUser),
        });
        const data = await response.json();
        console.log(data);
        if (data?.success) {
            return data.user;
        }
        throw new Error(data.message);
    } catch (error: any) {
        throw new Error(error.message);

    }
}