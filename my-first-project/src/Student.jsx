import PropTypes from 'prop-types'
const Student=(props)=>{
    return(
        <div className="student">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isstudent ? "YES":"NO"}</p>
        </div>
    )
}
Student.propTypes ={
    name: PropTypes.string,
    age:PropTypes.number,
    isstudent:PropTypes.bool
}
Student.defaultProps={
    name:"guest",
    age:0,
    isstudent:false
}

export default Student;