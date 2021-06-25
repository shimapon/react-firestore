import React from "react";
import { firebaseDb } from "./firebase.js";

const Tip: React.FC = () => {
  const collectionname: string = "Tip";
  const TipData = {
    content: "contentName",
    recommenderIDs: ["reco1", "reco2"],
    done: false,
    doneContent: "",
    imageURL: "https://aaage.com/1fjwbvG.jpg",
  };

  const PushData = () => {
    firebaseDb
      .collection(collectionname)
      .add(TipData)
      .then(function () {
        console.log("Document successfully written!");
      });
  };

  const GetData = () => {
    firebaseDb
      .collection(collectionname)
      .get()
      .then((response) => {
        //forEach()でドキュメントの配列がとれる
        response.forEach((doc) => {
          console.log("DocumentIDは " + doc.id);

          //data()でドキュメントがとれる
          const document = doc.data();
          console.log(document);
        });
      });
  };

  return (
    <div>
      <h1>TipData</h1>
      <button onClick={() => PushData()}>データを入れる</button>
      <button onClick={() => GetData()}>データをとってくる</button>
    </div>
  );
};

export default Tip;
