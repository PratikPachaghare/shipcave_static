import { useState } from 'react';
import { X } from 'lucide-react';

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    ownerName: '',
    email: '',
    businessName: '',
    contact: '',
    shipments: '',
    source: ''
  });

  // Open popup after 5 seconds automatically
  // useEffect(() => {
  //   const timer = setTimeout(() => setIsOpen(true), 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your API call here (e.g., axios.post('/api/lead', formData))
    alert("Form submitted successfully!");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex overflow-hidden relative animate-fade-in">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 z-10"
        >
          <X size={24} />
        </button>

        {/* Form Side */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Get Started</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Owner Name</label>
              <input 
                name="ownerName" 
                required 
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-secondary focus:outline-none" 
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                <input name="businessName" required onChange={handleChange} className="w-full border px-4 py-2 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact No</label>
                <input name="contact" required onChange={handleChange} className="w-full border px-4 py-2 rounded-lg" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Daily Shipments</label>
              <select name="shipments" onChange={handleChange} className="w-full border px-4 py-2 rounded-lg bg-white">
                <option value="">Select an option</option>
                <option>Less than 10</option>
                <option>10 - 50</option>
                <option>100+</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-secondary transition">
              Submit
            </button>
          </form>
        </div>

        {/* Image Side */}
        <div className="hidden md:block w-1/2 bg-blue-50 relative">
          <img 
            src="/assets/images/Query.jpeg" 
            alt="Contact" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default LeadPopup;