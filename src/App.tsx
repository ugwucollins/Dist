import { useState } from "react";
import "./App.css";
import Alert from "./project/alert";
import Button from "./project/button";
import List from "./project1/List";
import Input from "./project2/Input";
import Card from "./project3/card";
import Profile from "./project3/profile";
import Phone from "./project3/Phone";
import Email from "./project3/Email";

function App() {
  // Alert const
  const [alert, setAlert] = useState(false);
  const [active, setActive] = useState(true);
  // show
  const [email, setemail] = useState(false);
  const [number, setnumber] = useState(false);

  const list = [
    "Button One",
    "Button Two",
    "Button Three",
    "Button Four",
    "Button Five",
  ];

  return (
    <div>
      <div className="alert-code">
        {alert && (
          <Alert
            message="My Alert Message(Pop Up)"
            onClose={() => {
              setActive(true);
              setAlert(false);
            }}
          />
        )}
        <Button
          call={active ? "button" : "active"}
          onActive={() => setActive(false)}
          OnClicked={() => setAlert(true)}
        ></Button>
      </div>

      <div className="List-code">
        <List list={list} />
      </div>

      <div className="Input-code">
        <Input />
      </div>

      <div className="card-Profile">
        <Card />
        {email && (
          <Email
            active={active ? "close-btn" : "active"}
            onCloseE={() => {
              setemail(false);
              setActive(true);
            }}
            name="laura-smith@gmail.com"
          />
        )}

        {number && (
          <Phone onCloseP={() => setnumber(false)} call="+23468670658" />
        )}

        <Profile
          onClickE={() => {
            setemail(true);
            setActive(false);
          }}
          onClickP={() => setnumber(true)}
        />
      </div>
    </div>
  );
}

export default App;
