import * as React from "react";
import { JSWindow } from "@jswf/react";

export function BasicWindow() {
  return (
    <JSWindow
      title="Basic Window"
      x={100}
      y={100}
      width={600}
      height={400}
      titleSize={64}
      moveable={true}
      clientStyle={{ backgroundColor: "#CCFFCC" }}
    >
      <pre>{`
        title="Simple Window"
        x={100}
        y={100}
        width={600}
        height={400}
        titleSize={64}
        moveable={true}
        clientStyle={{ backgroundColor: "#CCFFCC" }}`}
      </pre>
    </JSWindow>
  );
}
