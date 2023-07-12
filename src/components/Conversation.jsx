import React from 'react'

const Conversation = () => {
    return (
        <main>
            <div className='ticket-head'>
                <h1>Conversation</h1>
            </div>
            <div className='conversation'>
                <div className='message'>
                    <div className='message-head'>
                        <div className='user'>
                            <div className='user-img'>
                                <img src='https://randomuser.me/api/portraits/men/1.jpg' alt='#' />
                            </div>
                            <div className='user-name'>
                                <h3>John Doe</h3>
                                <span>12/12/2020</span>
                            </div>
                        </div>
                        <div className='message-options'>
                            <span className='material-icons-sharp'>more_vert</span>
                        </div>
                    </div>
                    <div className='message-body'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    </div>
                </div>
                <div className='reply'>
                    <form>
                        <div className='form-group'>
                            <div className='label-inside-textarea'>
                                <label for='reply'>Reply</label>
                                <textarea id='reply' name='reply' required rows={4}></textarea>
                            </div>
                            <div className='buttons'>
                                <label for='file'>Any Attachements?</label>
                                <input type='file' id='file' name='file' />
                                <button type='submit'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Conversation
