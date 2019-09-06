import * as React from "react";
import * as ReactDOM from "react-dom";
import { JSWFWindow, SplitView } from "@jswf/react";

function App() {
  return (
    <>
      <JSWFWindow >aaa
        <SplitView></SplitView>
      </JSWFWindow>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
