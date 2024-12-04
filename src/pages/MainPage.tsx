
import React from "react";
import TrondheimMap from "../components/TrondheimMap";

const MainPage: React.FC = () => {
  return (
    <div className="bg-slate-200">
      <h1>Welcome to Trondheim</h1>
      <TrondheimMap />
    </div>
  );
};

export default MainPage;
