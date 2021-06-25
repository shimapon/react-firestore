import React from "react";
import { firebaseDb } from "./firebase.js";

const User: React.FC = () => {
  const collectionname: string = "User";
  const UserData = {
    statusID: ["agae", "eah"],
    tipsID: ["y2y", "j5u"],
  };

  const PushData = () => {
    firebaseDb
      .collection(collectionname)
      .add(UserData)
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
      <h1>UserData</h1>
      <button onClick={() => PushData()}>データを入れる</button>
      <button onClick={() => GetData()}>データをとってくる</button>
    </div>
  );
};

export default User;
