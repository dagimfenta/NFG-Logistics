import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { FORMSPREE_FORM_ID } from '../constants/formspree';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID, {
    data: {
      _subject: 'NFG Logistics — Contact form',
      form: 'contact',
    },
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Page Header */}
      <section className="pt-12 pb-8 px-4 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-px h-12 bg-primary mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-[0.25em] text-navy uppercase">
            Contact NFG Logistics
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 px-4 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            {state.succeeded ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Thank you for contacting us!
                </h3>
                <p className="text-green-600 text-sm">
                  We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <ValidationError
                  field="name"
                  errors={state.errors}
                  className="text-sm text-red-600 -mt-3"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <ValidationError
                  field="email"
                  errors={state.errors}
                  className="text-sm text-red-600 -mt-3"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <ValidationError
                  field="phone"
                  errors={state.errors}
                  className="text-sm text-red-600 -mt-3"
                />
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
                <ValidationError
                  field="message"
                  errors={state.errors}
                  className="text-sm text-red-600 -mt-3"
                />
                <ValidationError errors={state.errors} className="text-sm text-red-600" />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full sm:w-auto bg-primary hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-12 py-3 rounded-sm transition-colors"
                >
                  {state.submitting ? 'Sending…' : 'Submit'}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="bg-gray-50 rounded-lg p-8 lg:p-10">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-600 leading-relaxed">
                  301 S. Perimeter Park Drive, Suite 100
                  <br />
                  Nashville, TN 37211
                </p>
              </div>
              <div className="w-full h-px bg-primary/30" />
              <div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  For all your shipping needs, contact NFGLogistics today!
                </p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-primary flex-shrink-0" />
                    <a href="mailto:info@nfglogistics.net" className="text-sm text-primary hover:text-primary-dark transition-colors">
                      info@nfglogistics.net
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-primary flex-shrink-0" />
                    <a href="tel:+1 629-345-1110" className="text-sm text-gray-600 hover:text-primary transition-colors">
                      +1 629-345-1110
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-gray-600">6am – 6pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
