import React from 'react';
import { Outlet } from 'react-router-dom';

function ButtonCreatForm() {
  return (
    <div className="bg-blue-100 h-20 flex justify-center">
      <button className="text-[24px] rounded-full bg-green-100 px-5">
        Create new task
      </button>
    </div>
  );
}

export default ButtonCreatForm;
