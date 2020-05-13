import React, { useState } from "react";

export default function HookCounterThree() {
  const [name, setName] = useState({ firstname: "", lastname: "" });

  return (
    <div>
      <input
        type="text"
        value={name.firstname}
        onChange={e => setName({ ...name, firstname: e.target.value })}
        placeholder="Enter FirstName"
      />
      <br />
      <input
        type="text"
        value={name.lastname}
        onChange={e => setName({ ...name, lastname: e.target.value })}
        placeholder="Enter LaststName"
      />

      <br />
      <h2>Your First Name is {name.firstname}</h2>
      <h2>Your Last Name is {name.lastname}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}
