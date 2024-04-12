import React from "react";
import { useTranslation } from "react-i18next";
  
function Services() {
  const [t, i18n] = useTranslation();
  return (
    <div id="service" className="services px-lg-5 px-3 py-5 ">
      <h5 className="text-center">{t('services.title')}</h5>
      <div className="row">
        <div className="col-md-12">
          <div
            data-aos-delay="100"
            data-aos="fade-left"
            className="row serv-box rounded-4  py-5 px-1  px-lg-5 mx-1 mx-lg-5 my-3"
          >
            <div className="col-md-3 d-flex flex-column align-items-center justify-content-center">
            <i className="fa-solid fa-hourglass-end"></i>
              <h1 className="text-center">{t('services.time_effort_saving')}</h1>
            </div>
            <div className="col-md-9 px-5 d-flex flex-column align-items-center">
              <p>{t('services.time_effort_saving_description')}
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
            <i className="fa-regular fa-file-lines"></i>
              <h1 className="text-center">{t('services.variety_of_documents')}</h1>
            </div>
            <div className="col-md-9 px-5 d-flex flex-column align-items-center">
              <p>
              {t('services.variety_of_documents_description')}
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
            <i className="fa-solid fa-list-check"></i>
              <h1 className="text-center">{t('services.accuracy_compliance')}</h1>
            </div>
            <div className="col-md-9 px-5 d-flex flex-column align-items-center">
              <p>
              {t('services.accuracy_compliance_description')}
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
            <i className="fa-solid fa-shield-halved"></i>
              <h1 className="text-center">  {t('services.secure_confidential')}</h1>
            </div>
            <div className="col-md-9 px-5 d-flex flex-column align-items-center">
              <p>
              {t('services.secure_confidential_description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
