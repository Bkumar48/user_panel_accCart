import React from 'react'

const NewTicket = () => {
    return (
        <main>
            <div className='ticket-head'>
                <h1>New Ticket</h1>
            </div>
            <div className='new-ticket'>
                <form>
                    <div className='form-group ticket-form'>
                        <label htmlFor='subject'>Subject</label>
                        <input type='text' id='subject' name='subject' required/>
                        <label htmlFor='description'>Description</label>
                        <textarea id='description' name='description' required/>
                        <label htmlFor='attatchments'>Attatchments</label>
                        <input type='file' id='attatchments' name='attatchments' />
                        <button type='submit'>Submit</button>
                        </div>
                </form>


            </div>

        </main>
    )
}

export default NewTicket
