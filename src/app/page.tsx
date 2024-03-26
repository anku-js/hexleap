"use client"
import { useState } from "react";
import Players from "./components/Players";
import {players} from "../../db"
import { advertisement } from "../../db";
export default function Home() {
  const [playersData, setPlayersData] = useState(players)
  return (
    <div className="bg-[#F7F7F8]">
      <Players playersData={playersData} advertisement={advertisement}/>
    </div>
  );
}

