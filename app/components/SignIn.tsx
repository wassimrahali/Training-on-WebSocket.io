"use client";
import React, { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';


interface Props{
  onIdSubmit: (id: string) => void;
}

const SignIn:React.FC <Props>=({ onIdSubmit }) => {
  const idRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    if(idRef.current){
      onIdSubmit(idRef.current.value);
    }
  };
  
  const createNewId = () => {
    onIdSubmit(uuidv4());
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Your Id </label>
        <input type="text" ref={idRef} required />
        <button type="submit" className="m-20 bg-blue-800 p-4">
          Login
        </button>
        <button onClick={createNewId} className="bg-blue-800 p-4">
          Create a new Id
        </button>
      </form>
    </div>
  );
};

export default SignIn;
