// import logo from "./logo.svg";

import "./App.css";
import { Hello } from "./Hello";
import { Title } from "./Title";
import Button from "./components/Button";
import Table from "./components/Table";

function App() {
  // const Hello = () => "Hello";
  // function Hello() {
  //   'Hello'
  // }
  // const Hello =function(){
  //   'Hello'
  // }

  // const users = ["yohannes", "ongki", "abu"];
  const users = [
    {
      _id: 1,
      name: "Dafa Shanrizki",
      age: 21,
      status: true,
    },
    {
      _id: 2,
      name: "Roy",
      age: 23,
      status: true,
    },
    {
      _id: 3,
      name: "Aldy",
      age: 31,
      status: false,
    },
  ];

  const isLogin = false;

  return (
    <>
      <h1>Welcome to React</h1>
      <ul>
        <li>Home</li>
        <li>Users</li>
        <li>{isLogin ? "Sudah Login" : "Login"}</li>
      </ul>
      <h1>
        <Hello />
      </h1>
      <Title name="Dafa Shanrizki" />
      {/* <br />
        <Title /> */}
      <br />
      <Button onClick={() => alert("click save")}>Save</Button>
      <Table users={users} />
      {/* <ul>
        {users.map((user, index) => {
          return (
            <>
              {user.status && (
                <li
                  key={index}
                >{`Nama Saya ${user.name} dan usia saya ${user.age} tahun`}</li>
              )}
            </>
          );
        })}
      </ul> */}
    </>
  );
}

export default App;
