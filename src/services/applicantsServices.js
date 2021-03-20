import axios from 'axios'

const baseUrl = "http://localhost:8050/api/admin.v1/franchise"

export const getAllApplicant = async () => {
    const options = {
        url: `${baseUrl}`,
        method: "GET",
    }
    return await axios(options)
}

export const getApplicantById = async (payload) => {
    const options = {
        url: `${baseUrl}/${payload}`,
        method: "GET",
    }
    return await axios(options)
}

export const postApplicant = async (payload) => {
    const options = {
        url: `${baseUrl}`,
        method: "POST",
        data: payload,
    }
    return await axios(options)
}

export const deleteApplicant = async (payload) => {
    console.log(payload);
    const options = {
        url: `${baseUrl}/delete/${payload}`,
        method: "DELETE",
    }
    return await axios(options)
}

