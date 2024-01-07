import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './contactp.css';

const Contactp = () => {
  const { t } = useTranslation();
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [message, setMessage] = useState('');
  const [resumeName, setResumeName] = useState('');
  const [resumePhone, setResumePhone] = useState('');
  const [resumeEmail, setResumeEmail] = useState('');
  const [resume, setResume] = useState(null);

  const handleSendMessage = (event) => {
    event.preventDefault();
    // Implemente a lógica de envio de mensagem aqui
    console.log('Message sent:', { contactName, contactEmail, message });
    // Resetar os campos após o envio
    setContactName('');
    setContactEmail('');
    setMessage('');
  };

  const handleSendResume = (event) => {
    event.preventDefault();
    // Implemente a lógica de envio de currículo aqui
    console.log('Resume sent:', { resumeName, resumePhone, resumeEmail, resume });
    // Resetar os campos após o envio
    setResumeName('');
    setResumePhone('');
    setResumeEmail('');
    setResume(null);
  };

  return (
    <div className="contactp-section">
      <h2 className="contactp-title">{t('contactp.sectionTitle')}</h2>
      <div className="contactp-container">
        {/* Card de Informações de Contato */}
        <div className="contact-info">
          <h2>{t('contactp.contactInfo')}</h2>
          <p>4350 NW Front Ave, Portland, OR 97210</p>
          <p><a href="https://www.gbrx.com/" target="_blank" rel="noopener noreferrer">www.gbrx.com</a></p>
          <p>+1 (503) 972-5700</p>
          <p><a href="mailto:contact@gundersonmarine.com">contact@gundersonmarine.com</a></p>
        </div>
        {/* Card de Enviar Mensagem */}
        <div className="message-form">
          <h2>{t('contactp.sendMessage')}</h2>
          <form onSubmit={handleSendMessage}>
            <input 
              type="text" 
              placeholder={t('contactp.namePlaceholder')} 
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            />
            <input 
              type="email" 
              placeholder={t('contactp.emailPlaceholder')} 
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
            <textarea 
              placeholder={t('contactp.messagePlaceholder')}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">{t('common.send')}</button>
          </form>
        </div>
        {/* Card de Enviar Currículo */}
        <div className="resume-form">
          <h2>{t('contactp.submitResume')}</h2>
          <form onSubmit={handleSendResume}>
            <input 
              type="text" 
              placeholder={t('contactp.namePlaceholder')} 
              value={resumeName}
              onChange={(e) => setResumeName(e.target.value)}
            />
            <input 
              type="tel" 
              placeholder={t('contactp.phonePlaceholder')} 
              value={resumePhone}
              onChange={(e) => setResumePhone(e.target.value)}
            />
            <input 
              type="email" 
              placeholder={t('contactp.emailPlaceholder')} 
              value={resumeEmail}
              onChange={(e) => setResumeEmail(e.target.value)}
            />
            <input 
              type="file" 
              accept=".pdf"
              onChange={(e) => setResume(e.target.files[0])} 
            />
            <button type="submit">{t('common.submit')}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactp;
