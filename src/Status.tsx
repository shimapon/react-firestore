import React from "react";
import { firebaseDb } from "./firebase.js";

const Status: React.FC = () => {
  const collectionname: string = "Status";
  const StatusData = {
    content: "contentName",
  };

  const PushData = () => {
    firebaseDb
      .collection(collectionname)
      .add(StatusData)
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
      <h1>StatusData</h1>
      <button onClick={() => PushData()}>データを入れる</button>
      <button onClick={() => GetData()}>データをとってくる</button>
    </div>
  );
};

export default Status;
