import { Avatar } from "./components/Avatar";
import { MessageText } from "./components/MessageText";

function App() {
  return <div>
    <Avatar text="DOM" backgroundColor="lime" />
    <MessageText displayName="Domagoj Štrekelj" time="20:13">
      Ready for the trip? I'm so excited I couldn't sleep!
    </MessageText>
  </div>
}

export default App;
