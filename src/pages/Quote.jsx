import { useState } from 'react';

export default function Quote() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: '',
    origin: '',
    destination: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Header */}
      <section className="pt-12 pb-8 px-4 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-px h-12 bg-primary mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-[0.25em] text-navy uppercase">
            Get A Quote
          </h1>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you with a customized
            quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="pb-20 px-4 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Quote Request Received!
              </h3>
              <p className="text-green-600 text-sm">
                Thank you! We'll review your request and send you a detailed quote
                within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone *"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <select
                name="serviceType"
                value={form.serviceType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors text-gray-500"
              >
                <option value="">Select Service Type *</option>
                <option value="trucking">Long/Short-Haul Trucking</option>
                <option value="consulting">Logistics Consulting</option>
                <option value="forwarding">Freight Forwarding</option>
                <option value="warehousing">Warehousing &amp; Distribution</option>
              </select>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="origin"
                  placeholder="Origin City/State"
                  value={form.origin}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="text"
                  name="destination"
                  placeholder="Destination City/State"
                  value={form.destination}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <textarea
                name="details"
                placeholder="Additional details about your shipment..."
                rows={5}
                value={form.details}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 rounded-sm transition-colors"
              >
                Request Quote
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
