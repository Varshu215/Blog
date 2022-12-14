import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton" onClick={()=>alert("Please wait ! Your page is processing")}>Login</button>
      </form>
        {/* <button className="loginRegisterButton">Register</button> */}
    </div>
  );
}