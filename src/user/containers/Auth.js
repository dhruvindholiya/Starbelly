import React, { useState } from 'react';
import Button from '../ui/button/Button';

function Auth() {
    const [formType, setFormType] = useState('login');
    const handleSubmit = () => {
        localStorage.setItem('sbLoginStatus', JSON.stringify('sbUserActive'))
    }
    return (
        <div id="sb-dynamic-content" className="sb-transition-fade pb-5">
            <section className="sb-banner sb-banner-color">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="sb-contact-form-frame">
                                <div className="sb-illustration-9">
                                    <div className="sb-cirkle-1" />
                                    <div className="sb-cirkle-2" />
                                    <div className="sb-cirkle-3" />
                                </div>
                                <div className="sb-form-content">
                                    <div className="sb-main-content">
                                        <h3 className="sb-mb-30">{formType === 'login' ? 'Login' : formType === 'signup' ? 'Sign Up' : 'Forgot your password?'}</h3>
                                        <form id="form" method='post'>
                                            {
                                                formType === 'signup' ? <div className="sb-group-input">
                                                    <input type="text" name="name" required />
                                                    <span className="sb-bar" />
                                                    <label>Name</label>
                                                </div> : null
                                            }
                                            <div className="sb-group-input">
                                                <input type="email" name="email" required />
                                                <span className="sb-bar" />
                                                <label>Email</label>
                                            </div>
                                            {formType === 'forgot' ? null :
                                                <div className="sb-group-input mb-2">
                                                    <input type="password" name="pass" required />
                                                    <span className="sb-bar" />
                                                    <label>Password</label>
                                                </div>
                                            }
                                            <div className="text-end">
                                                {formType === 'login' ? <a href='#' onClick={() => setFormType('forgot')} style={{ color: '#F5C332', fontSize: '14px' }}>Forgot password</a> : null}
                                            </div>
                                            <Button onClick={handleSubmit} className='my-4' variant='iconBtn' imgPath="assets/img/ui/icons/arrow.svg"
                                                text={
                                                    formType === 'login' ? 'Login' : formType === 'signup' ? 'Sign Up' : 'Request reset link'} />
                                            <p className='mb-0' style={{ fontSize: '14px' }}> {
                                                formType === 'forgot' ?
                                                    <>
                                                        Back to login?
                                                        <a onClick={() => setFormType('login')} href='#' style={{ color: '#F5C332' }}> Login</a>
                                                    </>
                                                    : formType === 'signup' ?
                                                        <>
                                                            Have you already account?
                                                            <a onClick={() => setFormType('login')} href='#' style={{ color: '#F5C332' }}> Login</a>
                                                        </>
                                                        :
                                                        <>
                                                            Create an account?
                                                            <a onClick={() => setFormType('signup')} href='#' style={{ color: '#F5C332' }}> Sign Up</a>
                                                        </>}
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Auth;