import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./compnents/List";

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Ernest Boamah Gaisie",
      url: "https://media-exp1.licdn.com/dms/image/C4E03AQFcfdTzltRfHw/profile-displayphoto-shrink_200_200/0/1652452120895?e=1660176000&v=beta&t=wqCGu9VZkxFlU5nV0ft6oTXtrUV0bdOZnjFmjmJ5yq8",
      age: 24,
      note: "Best programmer"
    }
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
