import React from "react";

function Services() {
  return (
    <div id="service" className="services px-lg-5 px-3 py-5 ">
      <h5 className="text-center">Our features</h5>
      <div className="row">
        <div className="col-md-12">
          <div
            data-aos-delay="100"
            data-aos="fade-left"
            className="row serv-box rounded-4  py-5 px-1  px-lg-5 mx-1 mx-lg-5 my-3"
          >
            <div className="col-md-3 d-flex flex-column align-items-center justify-content-center">
            <i class="fa-solid fa-hourglass-end"></i>
              <h1 className="text-center">Time and Effort Saving</h1>
            </div>
            <div className="col-md-9 px-5 d-flex flex-column align-items-center">
              <p>
                By using our service, you can say goodbye to the hassle of
                manually filling out paperwork. With just a few clicks, you can
                generate the document you need, saving valuable time and effort
                that can be better spent on other tasks.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div
            data-aos-delay="200"
            data-aos="fade-right"
            className="row serv-box rounded-4 py-5 px-1  px-lg-5 mx-1 mx-lg-5 my-3"
          >
            <div className="col-md-3 d-flex flex-column align-items-center justify-content-center">
            <i class="fa-regular fa-file-lines"></i>
              <h1 className="text-center">Variety of Documents</h1>
            </div>
            <div className="col-md-9 px-5 d-flex flex-column align-items-center">
              <p>
                Whether you need to generate residence permits, birth
                certificates, or any other essential document, our service has
                you covered. We offer a comprehensive range of document
                templates, ensuring that you can access exactly what you need,
                when you need it.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div
            data-aos-delay="300"
            data-aos="fade-left"
            className="row serv-box rounded-4 py-5 px-1  px-lg-5 mx-1 mx-lg-5 my-3"
          >
            <div className="col-md-3 d-flex flex-column align-items-center justify-content-center">
            <i class="fa-solid fa-list-check"></i>
              <h1 className="text-center">Accuracy and Compliance</h1>
            </div>
            <div className="col-md-9 px-5 d-flex flex-column align-items-center">
              <p>
              We prioritize accuracy and compliance with Moroccan legal standards. Our templates are meticulously crafted to align with the latest regulations and requirements, giving you peace of mind that your documents meet all necessary criteria.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div
            data-aos-delay="400"
            data-aos="fade-right"
            className="row serv-box rounded-4 py-5 px-1  px-lg-5 mx-1 mx-lg-5 my-3"
          >
            <div className="col-md-3 d-flex flex-column align-items-center justify-content-center">
            <i class="fa-solid fa-shield-halved"></i>
              <h1 className="text-center">Secure and Confidential</h1>
            </div>
            <div className="col-md-9 px-5 d-flex flex-column align-items-center">
              <p>
              We take the security and confidentiality of your personal information seriously. Our platform employs robust encryption protocols to safeguard your data, ensuring that it remains private and protected at all times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
