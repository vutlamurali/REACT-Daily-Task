import PropType from 'prop-types'
const Usergreetings=(props)=>{
    const welcome= <h2 className='userLogin'>Welcome {props.username}</h2>
    const notlogin=<h2 className='notLogin'>please Login to continue</h2>
    return ( 
        props.isLogin ? welcome : notlogin

    )
}
Usergreetings.propType={
 isLogin:PropType.bool,
 username:PropType.string
}
Usergreetings.defaultprops={
    isLogin:false,
    username:"guset"
}
export default Usergreetings;