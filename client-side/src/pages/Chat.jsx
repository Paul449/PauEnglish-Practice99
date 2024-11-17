/*import bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Chat(){
    return(
    <>
      <header>
        <i id="chatBot"></i>
        <h4>ChatBot</h4>
        <p>Online</p>
        <div className="topic-time">
            <p>Selected topic:</p>
            <p>Remaining Time:</p>
        </div>
      </header>
      <aside>
        <h3>Saved Conversations</h3>
        <div className="Prev-Chats">
            <div className=''></div>
        </div>
      </aside>
      <section className="Chat-layout">

      </section>
      <section id="PushToTalk">
        <button></button>
      </section>
        
    </>
    )
}

