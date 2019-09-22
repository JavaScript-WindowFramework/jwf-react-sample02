import { SettingValue, SettingView } from "./SettingView";
import React, { useState } from "react";
import { SplitView, JSWindow } from "@jswf/react";

export function SettingListViewTest() {
  const [values, setValues] = useState<SettingValue[]>([
    { name: "テキスト", value: "テキスト入力", type: "text" },
    { name: "チェック", value: "", type: "check" },
    {
      name: "選択",
      value: "1",
      type: "select",
      options: [
        { label: "あいうえお", value: "1" },
        { label: "かきくけこ", value: "2" }
      ]
    },
    { name: "イメージ", value: "", type: "image" }
  ]);
  return (
    <JSWindow title="設定機能のテスト" width={800} height={600}>
      <SplitView pos={300}>
        <pre style={{overflow:"auto"}}>{JSON.stringify(values,null,' ')}</pre>
        <SettingView
          values={values}
          onChange={values => {
            setValues(values);
          }}
        />
      </SplitView>
    </JSWindow>
  );
}
