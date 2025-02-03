import React, { useState } from "react";
import datas from "../datass";
console.log(datas);

const Listcard = () => {
  const [person, setPerson] = useState(datas);
  const clearList = () => {
    setPerson([]);
  };
  const reloadList = () => {
    setPerson(datas);
  };
  const deletePerson = (id) => {
    const newPerson = person.filter((persons) => persons.id !== id);
    setPerson(newPerson);
  };
  return (
    <section>
      <p>list of data</p>
      <ul>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <span key={id}>
              <li>{name}</li>
              <button onClick={() => deletePerson(id)}>delete</button>
            </span>
          );
        })}
      </ul>
      <button onClick={clearList}>clear</button>
      <button onClick={reloadList}>reload</button>
    </section>
  );
};

export default Listcard;
