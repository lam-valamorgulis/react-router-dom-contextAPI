import React from 'react';
import User from '../components/User';
import ButtonCreatForm from '../components/ButtonCreatForm';
import MainApp from '../components/MainApp';

function AppLayout() {
  return (
    <>
      <div className="bg-green-200 h-screen">
        <div className="text-center">This is a AppLayout </div>
        <User />
        <ButtonCreatForm />
        <MainApp />
      </div>
    </>
  );
}

export default AppLayout;
