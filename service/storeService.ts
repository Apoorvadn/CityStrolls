export const getDataFromServer = async (endpoint: string) => {
    const URL = `https://663a17741ae792804bee0669.mockapi.io/${endpoint}`

    const res = await fetch(URL);
    const tasks = await res.json();
    return tasks;
}

export const setDataFromServer = async (data: string) => {
    const URL = `https://663a17741ae792804bee0669.mockapi.io/${data}`

    const res = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const tasks = await res.json();
    return tasks;
}

export const deleteDataFromServer = async (id) => {
    const URL = `https://663a17741ae792804bee0669.mockapi.io/${id}`;

    const res = await fetch(URL, {
        method: 'DELETE',
    });
}

export const updateDataToServer = async (data, id) => {
    const URL = `https://663a17741ae792804bee0669.mockapi.io/${id}`;
    console.log(id);

    const response = await fetch(URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const updatedData = await response.json();
    return updatedData;
};

