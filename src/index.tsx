import React, { ReactElement, useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import {
  JSWindow,
  ListView,
  ListHeaders,
  ListRow,
  ListHeader,
  ListItem
} from "@jswf/react";
import { WindowSimple } from "./Samples/WindowSimple";
import { WindowBasic } from "./Samples/WindowBasic";
import { WindowChild } from "./Samples/WindowChild";
import { SplitViewBasic } from "./Samples/SplitViewBasic";
import { ListViewBasic } from "./Samples/ListViewBasic";
import { TreeViewBasic } from "./Samples/TreeViewBasic";
import { SplitViewSimple } from "./Samples/SplitViewSimple";
import { TreeViewSimple } from "./Samples/TreeViewSimple";
import { ListViewSimple } from "./Samples/ListViewSimple";
import { SettingListViewTest } from "./Samples/SettingListViewTest";
let key = 0;
const Compornents: [() => JSX.Element, string, string][] = [
  [WindowSimple, "WindowSimple", "Simple Window usage"],
  [WindowBasic, "WindowBasic", "Basic Parameter Window usage"],
  [WindowChild, "WindowChild", "Child Window usage"],
  [SplitViewSimple, "SplitViewSimple", "Simple SplitBar usage"],
  [SplitViewBasic, "SplitViewBasic", "SplitBar usage"],
  [ListViewSimple, "ListViewSimple", "Simple ListView usage"],
  [ListViewBasic, "ListViewBasic", "ListView usage"],
  [TreeViewSimple, "TreeViewSimple", "Simple TreeView usage"],
  [TreeViewBasic, "TreeViewBasic", "Basic TreeView usage"],
  [SettingListViewTest, "SettingListViewTest", "Setting List UI Test"]
];
function CompornentList() {
  let count = 0;
  const [nodes, setNodes] = React.useState<ReactElement[]>([]);
  const [src, setSrc] = React.useState("");

  useEffect(() => {
    getSrc(`../src/index.tsx`);
  }, []);

  return (
    <>
      <JSWindow x={0} y={0} width={600} title="Sample list">
        <ListView onItemClick={onItemClick}>
          <ListHeaders>
            <ListHeader type="number">No</ListHeader>
            <ListHeader width={200}>Name</ListHeader>
            <ListHeader>Info</ListHeader>
          </ListHeaders>
          {Compornents.map((c, index) => (
            <ListRow key={index}>
              <ListItem>{++count}</ListItem>
              <ListItem>{c[1]}</ListItem>
              <ListItem>{c[2]}</ListItem>
            </ListRow>
          ))}
        </ListView>
      </JSWindow>
      {nodes}
      <pre>{src}</pre>
    </>
  );
  function onItemClick(row: number, col: number) {
    const newNodes = nodes.filter(node => {
      return node.type !== Compornents[row][0];
    });
    newNodes.push(React.createElement(Compornents[row][0], { key: key++ }));
    setNodes(newNodes.slice());
    getSrc(`../src/Samples/${Compornents[row][1]}.tsx`);
  }
  function getSrc(path: string) {
    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
      if (req.readyState == 4) {
        if (req.status == 200) setSrc(req.responseText);
        else setSrc(`Error:${req.readyState}`);
      } else setSrc("downloading･･･");
    };
    req.open("GET", path);
    req.send(null);
  }
}

function App() {
  return <CompornentList />;
}
ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
