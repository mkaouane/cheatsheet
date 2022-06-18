const[searchTerm,setSearchTerm]=useState("");
return(
 <div className="App">
   <input
     type="text"
     placeholder="Search ..."
      onChange={(event)=>{
       setSearchTerm(event.target.value);
     }}
   {JSONDATA.filter((val)=>{
      if(searchTerm ==""){
        return val
       else if(val.first_name.toLowerCase().includes(searchTerm.to LowerCase())){
        return val
                    I
     }
   }).map((val,key)⇒>>{
      return(
       <div className="user"key=[key}>
          <p>{val.first_name}</p>
       </div>
   })}
   </div>