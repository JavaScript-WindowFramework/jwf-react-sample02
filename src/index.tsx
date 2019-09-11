import * as React from "react";
import * as ReactDOM from "react-dom";
import { JSWindow, ListView } from "@jswf/react";

function App() {
  let listViewRef = React.useRef<ListView>(null);
  const [message, setMessage] = React.useState("");
    let count = 1;
  return (
    <>
      <JSWindow title="情報表示用" x={0} y={0}>
        <button
          onClick={() => {
            //アイテムを動的に追加
            listViewRef.current!.addItem([count++, "馬<br/>糞", 0, 1]);
            listViewRef.current!.addItem([count++, <>馬<br/>糞</>, 0, 1]);
          }}
        >
          追加
        </button>
        <button
          onClick={() => {
            const items = listViewRef.current!.getSelectItems();
            items.sort((a,b)=>b-a);
            for(const item of items)
              listViewRef.current!.removeItem(item);
          }}
        >
          削除
        </button>
        <br/>
        {message}
      </JSWindow>
      <JSWindow title="ListViewの実装中">
        <ListView
          ref={listViewRef}
          onItemClick={(row, col) => {
            //アイテムの取得
            const item = listViewRef.current!.getItem(row, col);
            //クリックした場所のデータを読み出す
            if (item) setMessage(`「${item.toString()}」がクリックされました`);
          }}
        >
          <div>
            <div data-type="number">No</div>
            <div data-width={100}>武器の<br />名前</div>
            <div data-type="number">攻撃力</div>
            <div data-type="number">価格</div>
          </div>
          <div>
            <div>{count++}</div><div>竹槍</div><div>5</div><div>10</div>
          </div>
          <div>
            <div>{count++}</div><div>棍棒</div><div>10</div><div>40</div>
          </div>
          <div>
            <div>{count++}</div><div>銅の剣</div><div>18</div><div>120</div>
          </div>
          <div>
            <div>{count++}</div><div>鉄の槍</div><div>30</div><div>380</div>
          </div>
          <div>
            <div>{count++}</div><div>鉄の剣</div><div>40</div><div>700</div>
          </div>
        </ListView>
      </JSWindow>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
