import { post, get } from "../Index/Index"

const SCHOOL_BASE_URL = "course/"

const add = (data) => {
    return post(SCHOOL_BASE_URL + 'add', data)
}

const del = (params) => {
    return get(SCHOOL_BASE_URL + 'delete', params)
}

const edit = (data) => {
    return post(SCHOOL_BASE_URL + 'edit', data)
}

const al = () => {
    return get(SCHOOL_BASE_URL + 'all')
}

const one = (params) => {
    return get(SCHOOL_BASE_URL + 'one/' + params.id)
}

const getCoursesByName = (params) => {
    return get(SCHOOL_BASE_URL + 'getCourses/' + params.name)
}

const checkCourseName = (params) => {
    return get(SCHOOL_BASE_URL + 'checkCourseName/' + params.courseName)
}

const checkCourseNo = (params) => {
    return get(SCHOOL_BASE_URL + 'checkCourseNO/' + params.courseNo)
}

const getCoursesBySchoolAndDepartAndMajorForSelect = (params) => {
    return get(SCHOOL_BASE_URL + 'getCoursesBySchoolAndDepartAndMajorForSelect/' + params.school + '/' + params.depart + '/' + params.major)
}


const allSchool = () => {
    return get('school/all')
}


const getDepartsForSelectBySchoolId  = (params) => {
    return get('department/getDepartsForSelect/' + params.schoolId)
}

const getMajorForSelectByDepartId  = (params) => {
    return get('major/getMajorsForSelect/' + params.departId)
}

const allDepart = () => {
    return get('department/all')
}


const allMajor = () => {
    return get('major/all')
}

export {
    al,
    edit,
    del,
    add,
    one,
    checkCourseName,
    checkCourseNo,
    getCoursesBySchoolAndDepartAndMajorForSelect,
    allDepart,
    allMajor,
    allSchool,
    getDepartsForSelectBySchoolId,
    getMajorForSelectByDepartId,
    getCoursesByName
}