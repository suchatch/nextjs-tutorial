import AllStudents from '@/components/AllStudents'
import {StudentContext} from '@/store/StudentProvider'

export default function StudentConsumer() {
    return (
        
        
        <StudentContext.Consumer>
        {
            (value) => {
                return <AllStudents students={value} />
            }
        }
        </StudentContext.Consumer>
    )
}
