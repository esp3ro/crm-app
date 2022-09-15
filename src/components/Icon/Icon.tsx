import Students from 'common/icons/students.svg'
import Tasks from 'common/icons/tasks.svg'
import Contacts from 'common/icons/contacts.svg'
import Grades from 'common/icons/grades.svg'
import News from "common/icons/news.svg"
import ToggleLeft from "common/icons/toggle-left.svg"
import ToggleRight from "common/icons/toggle-right.svg"

import { IIconProps } from './types'
import { ReactElement } from 'react'

const Icons: any = {
    students: Students
}


const Icon: React.FC<IIconProps> = ({name}) => {
switch(name){
    case "students":
        return <Students width="30" height="30"/>
    case "tasks":
        return <Tasks width="31" height="40"/>
    case "news":
        return <News width="30" height="30"/>
    case "contacts":
        return <Contacts width="30" height="30"/>
    case "grades":
        return <Grades width="30" height="33"/>
    case "toggleLeft":
        return <ToggleLeft width="30" height="30" fill="gray"/>
    case "toggleRight":
        return <ToggleRight width="30" height="30" fill="gray"/>
    
}
}

export {
    Icon
}