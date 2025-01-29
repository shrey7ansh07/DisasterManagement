import React,{ useState } from "react";

const ToggleSwitch = (id) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
        id={id}
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isOn ? "bg-green-500" : "bg-gray-800"}`}
      onClick={() => setIsOn(!isOn)}
    >
      <div
        id={id}
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isOn ? "translate-x-6" : "translate-x-0"}`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;