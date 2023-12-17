import React from 'react';
import { useTranslation } from 'react-i18next';
import './ContactPreview.css';

const ContactPreview = () => {
  const { t } = useTranslation();

  return (
    <div className="main-contact">
      <div className="contact-column">
        <form className="message-form">
          <h3>{t('ContactPreview.sendMessage')}</h3>
          <input type="text" placeholder={t('ContactPreview.fullName')} />
          <input type="text" placeholder={t('ContactPreview.emailOrPhone')} />
          <textarea placeholder={t('ContactPreview.yourMessage')}></textarea>
          <button type="submit">{t('ContactPreview.send')}</button>
        </form>
      </div>

      <div className="contact-column">
        <h3>{t('ContactPreview.contactInfo')}</h3>
        <p>{t('ContactPreview.phoneNumber')}</p>
        <p>{t('ContactPreview.address')}</p>
      </div>

      <div className="contact-column">
        <form className="career-form">
          <h3>{t('ContactPreview.submitResume')}</h3>
          <input type="text" placeholder={t('ContactPreview.fullName')} />
          <input type="email" placeholder={t('ContactPreview.email')} />
          <textarea placeholder={t('ContactPreview.whyWorkWithUs')}></textarea>
          <input type="file" accept=".pdf, .doc, .docx" />
          <button type="submit">{t('ContactPreview.submit')}</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPreview;
