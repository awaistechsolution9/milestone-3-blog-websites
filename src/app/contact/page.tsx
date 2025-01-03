import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-teal-50 py-16 pt-28">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold text-teal-800 mb-8">
          Contact WeboraBlog
        </h1>
        <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
          We’re here to assist you! Whether you have questions about our services, want to collaborate, or need support, our team is always ready to help. Please reach out to us using the form below, and we will get back to you promptly.
        </p>

        <div className="grid md:grid-cols-2 gap-12 bg-gradient-to-r from-teal-700 to-teal-600 p-8 rounded-xl shadow-lg">
          <div className="flex flex-col justify-center items-center space-y-6 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-semibold text-teal-800 mb-4">
              Our Location
            </h2>
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_URL"
                frameBorder="0"
                style={{ border: 0 }}
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center space-y-6 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-3xl font-semibold text-teal-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              We value your feedback. Please fill out the form below, and our team at WeboraBlog will respond as soon as possible.
            </p>

            <form
              action="#"
              method="POST"
              className="space-y-6 w-full max-w-lg"
            >
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-teal-300 bg-transparent rounded-md"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-teal-300 bg-transparent rounded-md"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border border-teal-300 bg-transparent rounded-md"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-teal-300 bg-transparent rounded-md"
                  rows={6}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-teal-800 text-white font-semibold rounded-md hover:bg-teal-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 bg-teal-800 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Need Immediate Assistance?</h2>
          <p className="text-lg mb-4">
            If you require immediate assistance, our support team is available 24/7. Contact us directly using the details below, or fill out the form, and we’ll get back to you.
          </p>
          <div className="flex space-x-8 justify-center">
            <div className="text-lg">
              <p className="font-semibold">Email:</p>
              <p className="text-white">support@weborablog.com</p>
            </div>
            <div className="text-lg">
              <p className="font-semibold">Phone:</p>
              <p className="text-white">+1 987-654-3210</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
