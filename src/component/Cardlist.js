import React from "react";
import Card from "./Card";
import tinubu from "../assets/images/bola-tinubu.jpg";
import atiku from "../assets/images/atiku-abubakar.jpg";
import goodluck from "../assets/images/goodluck-jonathan.jpeg";
import obafemi from "../assets/images/obafemi-awolowo.jpg";
import obasanjo from "../assets/images/olusegun-obasanjo.jpeg";

const Cardlist = () => {
  return (
    <div className="list">
      <Card
        name="Bola Ahmed Tinubu"
        party="APC"
        alias="emi lo kan"
        year="2015-2023"
        img={tinubu}
      />
      <Card
        name="Atiku Abubarkar"
        party="PDP"
        alias="big thief"
        year="1999-2007"
        img={atiku}
      />
      <Card
        name="Goodluck Jonathan"
        party="PDP"
        alias="big thief"
        year="2010-2015"
        img={goodluck}
      />
      <Card
        name="Obafemi Awolowo"
        party="PDP"
        alias="Greatest leader"
        year="2003-2008"
        img={obafemi}
      />
      <Card
        name="Olusegun Obasanjo"
        party="PDP"
        alias="OBJ"
        year="1999-2007"
        img={obasanjo}
      />
    </div>
  );
};

export default Cardlist;
