'use client'
import SignIn from "./components/SignIn";
import useLocaleStorage from "./hooks/useLocaleStorage";

export default function Home() {
  const [id, setId] = useLocaleStorage("user-id", ""); // Providing key and initial value
  return (
    <div>
      {id}
      <SignIn onIdSubmit={setId}/>
    </div>

  );
}
