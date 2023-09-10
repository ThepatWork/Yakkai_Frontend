import { useState } from 'react';
import '../../css/Login.css';
import '../../css/checkbox.css';
import { submitLogin } from "./HTTP_Request ";
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  // localStorage.clear();
  // sessionStorage.clear();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [emailInput, setEmail] = useState('');
  const [passwordInput, setPassword] = useState('');

  let data = {
    email: emailInput,
    password: passwordInput,
    role: 'User'
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleClick = (): void => {
    submitLogin(data, 'Login', navigate)
  };
  return (
    <div className='backgroundLogin'>
      <div>
        <div className="Login_Container">
          <form name="form1" className="box_login" onSubmit={handleFormSubmit}>
            <h4>
              YakKai
            </h4>
            <h5>โปรดเข้าสู่ระบบ</h5>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              value={emailInput}
              onChange={(event) => setEmail(event.target.value.toLowerCase())}
            />
            <i className="typcn typcn-eye" onClick={togglePasswordVisibility} id="eye"></i>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password" name="password"
              placeholder="Password"
              autoComplete="off"
              value={passwordInput}
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className="containercheckbox">
              <div className="checkbox-containercheckbox">
                <label htmlFor="showPassword" className="checkbox">
                  <input
                    type="checkbox"
                    id="showPassword"
                    name="showPassword"
                    checked={showPassword}
                    onChange={togglePasswordVisibility}
                  />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="text-containercheckbox" style={{ marginLeft: '10px', color: '#333' }}>แสดงรหัสผ่าน</div>
              <div className="link-containercheckbox">
                <Link to='/forget_password'> <p> Forget Password? </p> </Link>
              </div>
            </div>
            <div className='cover_btn1_login'>
              <input type="submit" value="Sign in" onClick={handleClick} className="btn1" />
            </div>
          </form>
          <div className='cover_btn1_login'>
            <Link to='/CreateUser'> <p> Don’t have an account? Sign up </p> </Link>
          </div>
        </div>
      </div>
    </div >
  );
}
export default Login;
