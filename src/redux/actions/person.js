import { ADDPERSON } from '../constant'

// 创建增加一个人的action
export const addPerson = personObj => ({ type: ADDPERSON, data: personObj })