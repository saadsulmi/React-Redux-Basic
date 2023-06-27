import React from "react";
import { Provider } from "react-redux";
import {store} from "./redux/store";
import HooksCakeContainer from "./Container/HooksCakeContainer";
import BookContainer from "./Container/BookContainer";
import CakeContainer from "./Container/CakeContainer";
import UserContainer from "./Container/UserContainer";

function App() {

  return (
    <Provider store={store}>
      <div>
        {/* <HooksCakeContainer/>
        <CakeContainer/>
        <BookContainer/> */}
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
