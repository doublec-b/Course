import { post, get } from "../Index/Index"

const SCHOOL_BASE_URL = "userCourse/"

const saveOrUpdate = (data) => {
    return post(SCHOOL_BASE_URL + 'saveOrUpdate', data)
}

const del = (params) => {
    return get(SCHOOL_BASE_URL + 'delete', params)
}

const one = (params) => {
    return get(SCHOOL_BASE_URL + 'one', params)
}

const getCourseForSelectByUserId = (params) => {
    return get(SCHOOL_BASE_URL + 'getMyCourseVosByUserId', params)
}

export {
    del,
    one,
    saveOrUpdate,
    getCourseForSelectByUserId
}