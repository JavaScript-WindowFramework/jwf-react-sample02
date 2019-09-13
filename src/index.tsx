import * as React from "react";
import * as ReactDOM from "react-dom";
import { JSWindow, TreeView, TreeItem, SplitView } from "@jswf/react";

function App() {
  const [message,setMessage] = React.useState();
  const treeView = React.useRef<TreeView>(null);
  return (
    <>
      <JSWindow width={600} title="TreeViewの開発中">
        <SplitView>
          <div>
            <button onClick={()=>{
              const item = treeView.current!.getSelectItem();
              if(item)
                item.addItem({label:"追加"});
            }}>追加</button><br/><br/>
            <button onClick={()=>{
              const item = treeView.current!.getSelectItem();
                if(item)
                  item.remove();
              }}>選択を削除</button><br/><br/>
            <button onClick={()=>{
              const items = treeView.current!.getCheckItems();
              for(const item of items)
                  item.remove();
              }}>チェックを削除</button><br/><br/>
            {message}
          </div>

          <TreeView ref={treeView} onItemClick={(item)=>setMessage(item.getLabel())}>
            <TreeItem label="Root">
              <TreeItem label="Data2">
                <TreeItem label="Data3"><TreeItem label="Data4"></TreeItem></TreeItem>
              </TreeItem>
              <TreeItem label={<><b>太字</b></>}>
                <TreeItem label={<>改行を<br/>含む</>}></TreeItem>
              </TreeItem>
              <TreeItem label={<><input defaultValue="TextBoxも入る"/></>}/>
            </TreeItem>
          </TreeView>
        </SplitView>
      </JSWindow>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
