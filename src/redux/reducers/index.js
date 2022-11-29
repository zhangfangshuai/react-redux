/**
 * @func 该文件不是某个具体的reducer，而是用于汇总所有reducer
 * @desc 这种写法好处是可以固定store代码，增删reducer时无需改动store文件
 */

import count from './count'
import person from './person'

const reducer = {
    count,
    person
}

export default reducer
