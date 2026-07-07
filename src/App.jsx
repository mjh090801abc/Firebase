import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
    const signUp = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("회원가입 성공!");
      } catch (error) {
        alert(error.message);
      }
    };


  return (
    <div>
      <h1>Firebase 회원가입</h1>

      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={signUp}>회원가입</button>

      
      <button>로그인</button>
    </div>
  );
}

export default App;