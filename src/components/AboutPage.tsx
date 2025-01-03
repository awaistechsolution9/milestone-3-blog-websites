import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-teal-50 to-teal-100 text-gray-800 min-h-screen py-16 px-6">

      {/* Hero Section */}
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-teal-800 mb-6">About Us</h1>
        <p className="max-w-3xl mx-auto text-xl font-medium text-gray-600">
          Empowering creators to share their stories with the world. Our mission is to simplify the publishing process and offer a seamless experience for both new and seasoned bloggers.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap justify-between items-center mt-12">
        {/* Hero Image */}
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <Image
            height={600}
            width={600}
            alt="Blog Hero Image"
            className="rounded-lg shadow-lg object-cover w-full h-[400px] lg:h-auto"
            src="/bloghero.jpg"
          />
        </div>

        {/* Description */}
        <div className="lg:w-1/2 w-full lg:pl-10 space-y-6">
          <h2 className="text-3xl font-semibold text-teal-800">A Platform Built for Creators</h2>
          <p className="text-lg text-gray-600">
            We provide the tools and features needed to easily publish and share content with a global audience. Whether you're a writer, artist, photographer, or influencer, our platform is designed to make your creative journey easier.
          </p>
          <p className="text-lg text-gray-600">
            From customizable themes to powerful SEO tools, we help you get the most out of your content. Start your journey today and connect with your audience.
          </p>

          <Link href="/blogs">
            <button className="bg-teal-800 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
              Explore Blogs
            </button>
          </Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16 container mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-800 mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-teal-800 mb-4">Intuitive Design</h3>
            <p className="text-lg text-gray-600">
              Our platform offers a clean, user-friendly interface designed to make blogging a seamless experience. Easily navigate through features and manage your content effortlessly.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-teal-800 mb-4">SEO Tools</h3>
            <p className="text-lg text-gray-600">
              Maximize the visibility of your blog with our built-in SEO tools. Optimize your content with ease and ensure your posts reach a wider audience.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-teal-800 mb-4">Customizable Themes</h3>
            <p className="text-lg text-gray-600">
              Choose from a variety of beautiful themes that you can fully personalize to match your brand and style. Make your blog truly yours.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16 container mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-800 mb-8">What Our Users Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Testimonial 1 */}
          <div className="bg-teal-800 text-white p-8 rounded-lg shadow-lg max-w-md">
            <p className="text-lg mb-4">
              "WeboraBlog has revolutionized how I share my ideas. It's simple to use, and the SEO tools are incredibly helpful."
            </p>
            <p className="text-md font-semibold">Sarah Johnson</p>
            <p className="text-sm">Blogger & Content Creator</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-teal-800 text-white p-8 rounded-lg shadow-lg max-w-md">
            <p className="text-lg mb-4">
              "As a photographer, WeboraBlog has given me the platform to showcase my work beautifully and reach a global audience."
            </p>
            <p className="text-md font-semibold">David Lee</p>
            <p className="text-sm">Photographer & Visual Artist</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 bg-teal-800 text-white text-center py-12">
        <h2 className="text-3xl font-semibold mb-4">Ready to Share Your Story?</h2>
        <p className="text-lg mb-6">
          Join our community of creators today and take the first step towards building your online presence.
        </p>
        <Link href="/signup">
          <button className="bg-teal-50 hover:bg-teal-900 text-gray-800 hover:text-white font-semibold py-3 px-8 rounded-full shadow-md transition-transform transform hover:scale-105">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  )
}

export default AboutPage
