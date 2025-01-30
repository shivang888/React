import { useState } from "react";

function FormPage() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showData, setShowData] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (validation()) {
      let obj = {};
      obj.userName = userName;
      obj.email = email;
      obj.password = password;
      setShowData(obj);
      setEmail("");
      setUserName("");
      setPassword("");
    }
  }

  function validation() {
    let obj = {};
    let valid = true;
    //valid = false
    if (!userName.trim()) {
      // userName.trim()==false //false
      obj.userName = "Please Reqired Username";
      valid = false;
    }
    if (!email.trim()) {
      obj.email = "Please Reqired Email";
      valid = false;
    }
    if (!password.trim()) {
      obj.password = "Please Reqired Password";
      valid = false;
    }
    setError(obj);
    return valid;
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box">
        <div className="form-group">
          <label htmlFor="userName">User Name</label>
          <input
            id="userName"
            type="text"
            placeholder="Enter your username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="form-input"
          />
          <p style={{ color: "red" }}>{error && error.userName}</p>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
          <p style={{ color: "red" }}>{error && error.email}</p>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
          <p style={{ color: "red" }}>{error && error.password}</p>
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
        {showData && <p> {showData.userName}</p>}
        {showData && <p> {showData.email}</p>}
        {showData && <p> {showData.password}</p>}
      </form>
    </div>
  );
}

export default FormPage;