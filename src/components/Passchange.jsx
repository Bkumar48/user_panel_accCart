import React from 'react'

const Passchange = () => {
    return (
        <main>

            <div className='passchange'>
                <h1>Change Details</h1>
                <form>
                    <div className='form-group'>
                        <div className='firstname'>
                            <label htmlFor='firstname'>First Name</label>
                            <input type='text' id='firstname' />
                        </div>
                        <div className='lastname'>
                            <label htmlFor='lastname'>Last Name</label>
                            <input type='text' id='lastname' />
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='currentpassword'>Current Password</label>
                        <input type='password' id='currentpassword' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='newpassword'>New Password</label>
                        <input type='password' id='newpassword' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='confirmpassword'>Confirm Password</label>
                        <input type='password' id='confirmpassword' />
                    </div>
                    <button className='btn'>Save Changes</button>
                </form>

            </div>
        </main>
    )
}

export default Passchange
