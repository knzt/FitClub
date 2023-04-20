import React, { useRef } from 'react'
import './Join.css'
// import emailjs from '@emailjs/browser'

const Join = () => {

    // const form = useRef()

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //   };

  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr/>
            <div>
                <span className='stroke-text'>PRONTO PARA</span>
                <span> SUBIR O</span>
            </div>

            <div>
                <span>NÍVEL COM </span>
                <span className='stroke-text'>A GENTE</span>?
            </div>

        </div>

        <div className="right-j">
            <form
            // ref={form} onSubmit={sendEmail}
            action="" className="email-container" >
                <input type="email" name='user-email' placeholder='Insira seu email'/>

                <button disabled className='btn btn-j'>registar</button>
            </form>
        </div>
    </div>
  )
}

export default Join
