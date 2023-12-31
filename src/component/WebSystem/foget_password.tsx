import { useState } from 'react';
import '../../css/Login.css';
import '../../css/checkbox.css';
import '../../css/foget_password.css';

import Swal from 'sweetalert2';
import { sendEmaiChangePassword, getUserByEmail } from './HTTP_Request ';

function ForgetPassword() {
    const [email, setEmail] = useState('');
    const handleSubmit = async () => {
        const check_user: [] = await getUserByEmail({ email: email });
        if (!/\S+@\S+\.\S+/.test(email)) {
            Swal.fire({
                icon: 'warning',
                title: 'ขออภัยคุณกรอก Email ไม่ถูกต้อง',
                text: 'โปรดตรวจสอบ Email และกรอกอีกครั้ง'
            })
        } else {
            if (check_user.length === 0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'ไม่พบ Email ในระบบ',
                    text: 'โปรดตรวจสอบ Email ของของคุณอีกครั้ง',
                    showCancelButton: true,
                    confirmButtonText: 'สมัครสมาชิกใหม่',
                    cancelButtonText: 'ตรวจสอบ Email อีกครั้ง',
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/CreateUser"
                    }
                })

            } else {
                sendEmaiChangePassword(email);
            };
        }
    }
    return (
        <center>
            <div className='contentPage' style={{ height: '100%', width: '90%', backgroundColor: '#fff' }}>
                <div className='foget_pass_container' >
                    <div className='foget_pass_left'>
                        <img src="https://firebasestorage.googleapis.com/v0/b/yakkai.appspot.com/o/images%2FSystem%2FforgetPassword.jpg?alt=media&token=e1b3389f-09e1-4c0f-9a61-cc42464171aa"
                            width="90%"
                        />
                    </div>

                    <div className='foget_pass_right'>
                        <h1>กรุณาป้อน Email ของคุณ</h1>
                        <h4>เราจะทำการส่งลิงค์ไปยัง Email ของคุณเพื่อทำการกำหนดรหัสผ่าน</h4>
                        <div className="input_resetpass_container" style={{}}>
                            <input
                                style={{ height: '80%' }}
                                className='ThepatforInput'
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email Address'
                                required
                            />
                            <div className="button-container">
                                <button className="btn_edit" style={{width:'fit-content',padding:'0 20px'}} onClick={handleSubmit}>ดำเนินการต่อ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </center>
    );
}
export default ForgetPassword;
