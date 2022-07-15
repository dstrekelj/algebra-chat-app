import { Message } from "./components/Message";

function App() {
  return (
    <Message
      avatarBackgroundColor="red"
      avatarText="DŠ"
      displayName="Domagoj Štrekelj"
      time="20:50"
    >
      Ready for the trip? I'm so excited I couldn't sleep!
    </Message>
  );
}

export default App;
