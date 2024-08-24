const List=()=>{
   
    const arr=["murali","vutla","krishhna","mukundha"];
    arr.sort()
    const listiteams=arr.map(list=><li>{list}</li>)
    return(
    
        <ol>{listiteams}</ol>
     
    
    )
}
export default List;