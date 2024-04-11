import React from 'react'
import image from '../img/HowToUse.jpeg'
function HowToUse() {
  return (
    <div
    id="howtouse"
    className="about  px-5 py-5 d-flex flex-column justify-content-center align-items-center"
  >
    <h5>How to use ?</h5>
    <p data-aos="fade-up">
    To use our document generator, simply enter your information in the provided input field. Specify the type of document you need, whether it's a national identity card (CNI), residence permit, birth certificate, or any other document required. Fill in the relevant details such as your full name, date of birth, address, and any other necessary information. Once you've entered all your information, click the 'Generate' button. Our system will process your data and generate the requested document in PDF format. You can then download and print the document for your records or use it as needed.
    </p>
    <img src={image} className='img-fluid rounded-4' alt="" />
  </div>
  )
}

export default HowToUse