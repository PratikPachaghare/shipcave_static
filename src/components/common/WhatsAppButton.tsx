import { brandConfig } from '../../config/brandConfig';

const WhatsAppButton = () => {
  return (
    <a
      href={brandConfig.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.001.572 2.135.919 3.275.919 3.185 0 5.771-2.586 5.771-5.766s-2.587-5.766-5.771-5.766zM12 4.172c4.288 0 7.771 3.484 7.771 7.766 0 4.287-3.484 7.767-7.771 7.767-1.42 0-2.731-.387-3.876-1.049l-4.125 1.082 1.102-4.004c-.751-1.196-1.192-2.613-1.192-4.137C4.229 7.656 7.712 4.172 12 4.172z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;