import { post, get } from "../Index/Index"

const SCHOOL_BASE_URL = "major/"

const add = (data) => {
    return post(SCHOOL_BASE_URL + 'add', data)
}

const getMajorsForSelectBySchoolId = (params) => {
    return get(SCHOOL_BASE_URL + 'getMajorsForSelect/' +  params.schoolId)
}

const getMajorForSelectByDepartId = (params) => {
    return get(SCHOOL_BASE_URL + 'getMajorsForSelect/' +  params.departId)
}

const del = (params) => {
    return get(SCHOOL_BASE_URL + 'delete/' + params.id)
}

const edit = (data) => {
    return post(SCHOOL_BASE_URL + 'edit', data)
}

const allMajor = () => {
    return get(SCHOOL_BASE_URL + 'all')
}

const one = (params) => {
    return get(SCHOOL_BASE_URL + 'one/' + params.id)
}


export {
    edit,
    del,
    getMajorsForSelectBySchoolId,
    getMajorForSelectByDepartId,
    add,
    one,
    allMajor
}