"use client";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import useLocaleStorage from "./hooks/useLocaleStorage";

export default function Home() {
  const [id, setId] = useLocaleStorage("UserId", "");
  return (
    id ? <Dashboard id={id} /> : <SignIn onIdSubmit={setId} />
  
  );

}


