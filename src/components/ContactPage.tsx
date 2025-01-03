import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-teal-50 to-teal-100 text-gray-800 py-16 px-6">

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row w-full bg-white rounded-lg shadow-lg overflow-hidden">

          {/* Google Map Section */}
          <div className="w-full md:w-1/2 h-60 md:h-[500px] p-4">
            <div className="h-full bg-gray-200 rounded-lg">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_URL"
                style={{ border: 0 }}
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-6">Contact Us</h1>
            <p className="text-lg text-gray-600 mb-8">
              We value your thoughts, questions, and feedback! Reach out to us using the form, and our team will get back to you shortly.
            </p>
            
            {/* Contact Form */}
            <form action="#" method="POST" className="space-y-6">
              {/* Name and Email */}
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-6 py-3 border border-gray-300 bg-white rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-6 py-3 border border-gray-300 bg-white rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-6 py-3 border border-gray-300 bg-white rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-6 py-3 border border-gray-300 bg-white rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
                  rows={6}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-teal-800 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
