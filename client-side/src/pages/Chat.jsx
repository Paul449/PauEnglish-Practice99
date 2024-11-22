/*import react bootstrap components needed*/
import SearchBox from "../components/searchBox"
export default function Chat(){
    return(
    <>
      <div className="chat-layout">
        <div className="Saved">
          <h6>Saved Conversations</h6>
          <SearchBox/>
          <div className="conver-list">
            
          </div>
        </div>  
      </div> 
    </>
    )
}

