import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  email: string;
  name: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.email || !formData.name || !formData.subject || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Por favor, preencha todos os campos.'
      });
      return;
    }

    setStatus({
      type: 'loading',
      message: 'Enviando mensagem...'
    });

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'ish', // Your name
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso!'
      });

      // Reset form
      setFormData({
        email: '',
        name: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Erro ao enviar mensagem. Tente novamente.'
      });
    }
  };

  return (
    <div className="relative w-[688.82px] h-[900.21px] mb-[-265.62px]">
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col w-[689px] h-[631px] items-start absolute top-[92px] -left-px bg-basiconyx rounded-[9.53px] overflow-hidden border-[0.79px] border-solid border-[#383737] shadow-window-shadow"
      >
        <div className="relative self-stretch w-full h-[42.88px] bg-basiconyx rounded-[9.53px_9.53px_0px_0px] overflow-hidden shadow-[inset_0px_-0.79px_0px_#ffffff08]">
          <div className="absolute top-[calc(50.00%_-_7px)] left-[calc(50.00%_-_51px)] font-inter-16-medium font-[number:var(--inter-16-medium-font-weight)] text-white text-[length:var(--inter-16-medium-font-size)] text-center tracking-[var(--inter-16-medium-letter-spacing)] leading-[var(--inter-16-medium-line-height)] whitespace-nowrap [font-style:var(--inter-16-medium-font-style)]">
            Nova Mensagem
          </div>

          <div className="inline-flex h-[17px] items-center gap-[6.35px] absolute top-[13px] left-[13px]">
            <div className="relative w-[9.53px] h-[9.53px] bg-[#f63636] rounded-[4.76px] border-[0.79px] border-solid border-[#d52828]" />
            <div className="relative w-[9.53px] h-[9.53px] bg-[#f6c036] rounded-[4.76px] border-[0.79px] border-solid border-[#cea335]" />
            <div className="relative w-[9.53px] h-[9.53px] bg-[#68f636] rounded-[4.76px] border-[0.79px] border-solid border-[#52cc27]" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-[25.41px] px-[25.41px] py-[7.94px] relative flex-1 self-stretch w-full grow">
          <div className="flex flex-col items-start gap-[12.7px] relative self-stretch w-full flex-[0_0_auto]">
            {/* Email Field */}
            <div className="flex flex-col items-start gap-[12.7px] relative self-stretch w-full flex-[0_0_auto] bg-basiconyx">
              <div className="flex items-start gap-[6.35px] relative self-stretch w-full flex-[0_0_auto]">
                <label className="relative w-fit mt-[-0.79px] font-inter-16-medium font-[number:var(--inter-16-medium-font-weight)] text-basicwhite text-[length:var(--inter-16-medium-font-size)] tracking-[var(--inter-16-medium-letter-spacing)] leading-[var(--inter-16-medium-line-height)] whitespace-nowrap [font-style:var(--inter-16-medium-font-style)]">
                  Email:
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Insira o seu email"
                  className="relative flex-1 mt-[-0.79px] font-inter-16-regular font-[number:var(--inter-16-regular-font-weight)] text-basicwhite text-[length:var(--inter-16-regular-font-size)] tracking-[var(--inter-16-regular-letter-spacing)] leading-[var(--inter-16-regular-line-height)] [font-style:var(--inter-16-regular-font-style)] bg-transparent border-none outline-none placeholder-basicmedium-gray"
                  required
                />
              </div>
              <img className="relative self-stretch w-full h-px mb-[-1.00px]" alt="Line" src="/line-4-1.svg" />
            </div>

            {/* Name Field */}
            <div className="flex flex-col items-start gap-[12.7px] relative self-stretch w-full flex-[0_0_auto] bg-basiconyx">
              <div className="flex items-start gap-[6.35px] relative self-stretch w-full flex-[0_0_auto]">
                <label className="relative w-fit mt-[-0.79px] font-inter-16-medium font-[number:var(--inter-16-medium-font-weight)] text-basicwhite text-[length:var(--inter-16-medium-font-size)] tracking-[var(--inter-16-medium-letter-spacing)] leading-[var(--inter-16-medium-line-height)] whitespace-nowrap [font-style:var(--inter-16-medium-font-style)]">
                  Nome:
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Insira o seu nome"
                  className="relative flex-1 mt-[-0.79px] font-inter-16-regular font-[number:var(--inter-16-regular-font-weight)] text-basicwhite text-[length:var(--inter-16-regular-font-size)] tracking-[var(--inter-16-regular-letter-spacing)] leading-[var(--inter-16-regular-line-height)] [font-style:var(--inter-16-regular-font-style)] bg-transparent border-none outline-none placeholder-basicmedium-gray"
                  required
                />
              </div>
              <img className="relative self-stretch w-full h-px mb-[-1.00px]" alt="Line" src="/line-4-1.svg" />
            </div>

            {/* Subject Field */}
            <div className="flex flex-col items-start gap-[12.7px] relative self-stretch w-full flex-[0_0_auto] bg-basiconyx">
              <div className="flex items-start gap-[6.35px] relative self-stretch w-full flex-[0_0_auto]">
                <label className="relative w-fit mt-[-0.79px] font-inter-16-medium font-[number:var(--inter-16-medium-font-weight)] text-basicwhite text-[length:var(--inter-16-medium-font-size)] tracking-[var(--inter-16-medium-letter-spacing)] leading-[var(--inter-16-medium-line-height)] whitespace-nowrap [font-style:var(--inter-16-medium-font-style)]">
                  Assunto:
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  placeholder="Insira o assunto"
                  className="relative flex-1 mt-[-0.79px] font-inter-16-regular font-[number:var(--inter-16-regular-font-weight)] text-basicwhite text-[length:var(--inter-16-regular-font-size)] tracking-[var(--inter-16-regular-letter-spacing)] leading-[var(--inter-16-regular-line-height)] [font-style:var(--inter-16-regular-font-style)] bg-transparent border-none outline-none placeholder-basicmedium-gray"
                  required
                />
              </div>
            </div>
          </div>

          <img className="relative w-[686.82px] h-[4.76px] ml-[-25.41px] mr-[-25.41px]" alt="Line" src="/line-4.svg" />

          {/* Message Field */}
          <div className="flex items-start gap-[7.94px] p-[19.06px] relative flex-1 self-stretch w-full grow bg-darkmain-bg rounded-[9.53px] overflow-hidden shadow-window-shadow">
            <textarea
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Escreva a sua mensagem aqui"
              className="relative flex-1 self-stretch mt-[-0.79px] font-inter-16-regular font-[number:var(--inter-16-regular-font-weight)] text-basicwhite text-[length:var(--inter-16-regular-font-size)] tracking-[var(--inter-16-regular-letter-spacing)] leading-[var(--inter-16-regular-line-height)] [font-style:var(--inter-16-regular-font-style)] bg-transparent border-none outline-none resize-none placeholder-basicmedium-gray"
              rows={10}
              required
            />
          </div>

          {/* Status Message */}
          {status.type !== 'idle' && (
            <div className={`text-center text-sm ${
              status.type === 'success' ? 'text-green-400' : 
              status.type === 'error' ? 'text-red-400' : 
              'text-basicwhite'
            }`}>
              {status.message}
            </div>
          )}
        </div>

        <div className="relative self-stretch w-full h-[81.78px] bg-[#161616]">
          <div className="relative top-[23px] left-[540px] w-[109px] h-9">
            <button
              type="submit"
              disabled={status.type === 'loading'}
              className={`absolute top-0 left-0 w-[107px] h-9 rounded-[25.41px] transition-all duration-200 ${
                status.type === 'loading' 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-blue hover:bg-blue-600 active:scale-95'
              }`}
            >
              <span className="absolute top-2 left-[27px] [font-family:'Inter',Helvetica] font-extrabold text-white text-[16.7px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                {status.type === 'loading' ? 'Enviando...' : 'Enviar'}
              </span>
            </button>
          </div>
        </div>
      </form>

      <div className="absolute top-0 left-[114px] [font-family:'Inter',Helvetica] font-extrabold text-grey text-[47.6px] text-center tracking-[0] leading-[normal]">
        Entrar em Contacto
      </div>

      <img className="absolute top-[821px] left-7 w-[640px] h-[79px]" alt="Frame" src="/frame-2089.svg" />
    </div>
  );
};