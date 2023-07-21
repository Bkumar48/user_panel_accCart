import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import toast from 'react-hot-toast';


const Passchange = () => {

    // fetch user details
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [decoded, setDecoded] = useState(null);

    // update user details
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [updated, setUpdated] = useState(false);

    const token = Cookies.get('token') || null;

    useEffect(() => {
        if (token) {
            setDecoded(jwt_decode(token));
        }
    }, [token]);

    useEffect(() => {
        // Fetch user details only when decoded.user_id is available
        if (decoded?.user_id) {
            const getUser = async () => {
                try {
                    setLoading(true);
                    const response = await axios.get(
                        `${process.env.REACT_APP_BASE_URL}/api/v1/user/getUser/?userId=${decoded.user_id}`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );
                    setData(response.data.data);
                    setFirstName(response.data.data.firstName);
                    setLastName(response.data.data.lastName);
                    setEmail(response.data.data.email);
                    setContact(response.data.data.mobile);
                    setLoading(false);
                } catch (error) {
                    setError(error);
                    setLoading(false);
                }
            };
            getUser();
        }
    }, [decoded?.user_id, token]); // Fetch user details when decoded.user_id or token changes

    // Update user details
    const handleDetailsChange = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            toast.loading('Updating details...', { autoClose: false });
            const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/v1/user/updateUser/?userId=${decoded.user_id}`, {
                firstname: firstName,
                lastname: lastName,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setData(response.data.data);
            setUpdated(true);
            setLoading(false);
            toast.dismiss();
            toast.success('Details updated successfully');
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    // Update user password
    const handlePasswordChange = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            toast.loading('Updating password...', { autoClose: false });
            const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/v1/user/updatePassword`, {
                oldpassword: currentPassword,
                newpassword: newPassword,
                cpassword: confirmPassword,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.dismiss();
            toast.success('Password updated successfully');
            setLoading(false);
            // Set input fields to their default values after success
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        } catch (error) {
            setError(error.response.data.massage);
            toast.dismiss();
            toast.error(error.response.data.massage);
            console.log(error.response.data.massage)
            setLoading(false);
        }
    };



    return (
        <main>

            <div className='passchange'>
                <h1>Change Details</h1>
                <form className='details-form' onSubmit={handleDetailsChange}>
                    <div className='form-group'>
                        <div className='firstname'>
                            <label htmlFor='firstname'>First Name</label>
                            <input type='text' id='firstname' value={firstName || ''} onChange={(e) => {
                                setFirstName(e.target.value);
                                console.log(firstName);
                            }} />
                        </div>
                        <div className='lastname'>
                            <label htmlFor='lastname'>Last Name</label>
                            <input type='text' id='lastname' value={lastName || ''} onChange={(e) => {
                                setLastName(e.target.value);
                            }} />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='firstname'>
                            <label htmlFor='email'>Email</label>
                            <input type='text' id='firstname' value={email || ''} disabled />
                        </div>
                        <div className='lastname'>
                            <label htmlFor='contact'>Contact</label>
                            <input type='text' id='lastname' value={contact || ''} disabled />
                        </div>
                    </div>
                    <button className='btn' style={{
                        position: 'relative',
                        left: '100%',
                        transform: 'translateX(-100%)',
                        marginTop: '20px'

                    }} >Save Changes</button>

                </form>

                <hr style={{
                    width: '100%',
                    height: '1px',
                    backgroundColor: 'black',
                    marginTop: '20px',
                    marginBottom: '20px'

                }} />

                <h1>Change Password</h1>
                <form onSubmit={handlePasswordChange}>

                    <div className='form-group'>
                        <label htmlFor='currentpassword'>Current Password</label>
                        <input type='password' id='currentpassword' value={currentPassword} onChange={(e) => {
                            setCurrentPassword(e.target.value);
                        }} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='newpassword'>New Password</label>
                        <input type='password' id='newpassword' value={newPassword} onChange={(e) => {
                            setNewPassword(e.target.value);
                        }} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='confirmpassword'>Confirm Password</label>
                        <input type='password' id='confirmpassword' value={confirmPassword} onChange={(e) => {
                            setConfirmPassword(e.target.value);
                        }} />
                    </div>
                    <button className='btn' style={{
                        position: 'relative',
                        left: '100%',
                        transform: 'translateX(-100%)',
                        marginTop: '20px'

                    }}>Save Changes</button>
                </form>

            </div>
        </main >
    )
}

export default Passchange
