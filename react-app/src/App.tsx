import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import ToferButton from "./components/ToferButton";
import { useState } from "react";
import PostList from "./components/PostList";
import GamesGrid from "./components/GamesGrid";

function App() {
  const items = ["New York", "San Francisco", "Milwaukee"];
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {/* {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Hello<span>World</span>
        </Alert>
      )}
      <ToferButton
        text="Tofer Button"
        color="danger"
        onClick={() => setAlertVisible(true)}
      /> */}
      {/* <PostList></PostList> */}
      <GamesGrid></GamesGrid>
    </div>
  );
}

export default App;
