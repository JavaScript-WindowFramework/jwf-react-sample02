import React, { ReactElement } from "react";
import * as ReactDOM from "react-dom";
import { JSWindow, ListView } from "@jswf/react";
import { SimpleWindow } from "./Samples/SimpleWindow";
import { BasicWindow } from "./Samples/BasicWindow";
import { SplitBar } from "./Samples/SplitBar";
import { ListViewTest } from "./Samples/ListViewTest";
import { TreeViewTest } from "./Samples/TreeViewTest";

let key = 0;
const Compornents: [() => JSX.Element, string][] = [
  [SimpleWindow, "Simple Window usage"],
  [BasicWindow, "Basic Parameter Window usage"],
  [SplitBar, "SplitBar usage"],
  [ListViewTest, "ListView usage"],
  [TreeViewTest, "TreeView usage"]
];
function CompornentList() {
  let count = 0;
  const [nodes, setNodes] = React.useState<ReactElement[]>([]);
  return (
    <>
      <JSWindow x={0} y={0} width={600} title="Sample list">
        <ListView onItemClick={onItemClick}>
          <div>
            <div data-type="number">No</div>
            <div data-width={200}>Name</div>
            <div>Info</div>
          </div>
          {Compornents.map((c, index) => (
            <div key={index}>
              <div>{++count}</div>
              <div>{c[0].name}</div>
              <div>{c[1]}</div>
            </div>
          ))}
        </ListView>
      </JSWindow>
      {nodes}
    </>
  );
  function onItemClick(row: number, col: number) {
    const newNodes = nodes.filter(node => {
      return node.type !== Compornents[row][0];
    });
    newNodes.push(React.createElement(Compornents[row][0], { key: key++ }));
    setNodes(newNodes.slice());
  }
}

function App() {
  return <CompornentList />;
}
ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
