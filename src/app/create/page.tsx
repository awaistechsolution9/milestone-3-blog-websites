"use client";
import React, { useState, useEffect } from "react";
import { blogs } from "@/app/blogs/page";
import { IData } from "@/app/blogs/page";

const Page = () => {
  const [data, setData] = useState<IData[]>([]);

  const [formData, setFormData] = useState<IData>({
    id: blogs.length + 1, // Simple id increment
    title: "",
    image: null,
    description: "",
    author: "",
  });

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        image: imageUrl,
      }));

      setImageUrl(imageUrl);
      setImageName(file.name); // Set the image name
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.author) {
      alert("Please fill all required fields!");
      return;
    }

    setData((prevData) => [...prevData, formData]);

    // Saving updated blogs data to local storage
    const updatedBlogs = [...blogs, formData];
    localStorage.setItem("blogsData", JSON.stringify(updatedBlogs));

    // Reset form after submission
    setFormData({
      id: blogs.length + 1,
      title: "",
      image: null,
      description: "",
      author: "",
    });
  };

  useEffect(() => {
    if (data.length > 0) {
      blogs.push(...data);
    }
  }, [data]);

  return (
    <div>
      <section className="bg-gradient-to-r from-teal-50 to-teal-100 text-gray-600 py-24 px-8">
        <div className="container mx-auto text-center">
          <h1 className="sm:text-4xl text-3xl font-bold mb-6 text-teal-800">
            Create Your Blog and Publish
          </h1>
          <p className="lg:w-2/3 mx-auto text-lg mb-12">
            Share your research, thoughts, or any creative content with the world.
          </p>

          <div className="lg:w-1/2 md:w-2/3 mx-auto bg-white p-6 rounded-lg shadow-xl">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <label
                    htmlFor="title"
                    className="leading-7 text-sm text-gray-800 font-semibold"
                  >
                    Title
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={formData.title}
                    type="text"
                    id="title"
                    name="title"
                    className="w-full bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 text-base py-3 px-5 outline-none transition duration-300 ease-in-out"
                    required
                  />
                </div>

                <div className="p-2 w-full mt-4">
                  <label
                    htmlFor="image"
                    className="leading-7 text-sm text-gray-800 font-semibold"
                  >
                    Upload Image
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="image"
                      name="image"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleFileChange}
                    />
                    <button
                      type="button"
                      className="w-full bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 py-3 px-5 outline-none transition duration-300 ease-in-out text-gray-800"
                    >
                      {imageName ? imageName : "Upload Image"}
                    </button>
                    {imageUrl && (
                      <div className="mt-2 flex justify-center">
                        <img
                          src={imageUrl}
                          alt="Image preview"
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-2 w-full mt-4">
                  <label
                    htmlFor="description"
                    className="leading-7 text-sm text-gray-800 font-semibold"
                  >
                    Description
                  </label>
                  <textarea
                    onChange={handleInputChange}
                    value={formData.description}
                    id="description"
                    name="description"
                    className="w-full bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 py-3 px-5 outline-none h-36 resize-none transition duration-300 ease-in-out"
                    required
                  />
                </div>

                <div className="p-2 w-full mt-4">
                  <label
                    htmlFor="author"
                    className="leading-7 text-sm text-gray-800 font-semibold"
                  >
                    Author
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={formData.author}
                    type="text"
                    id="author"
                    name="author"
                    className="w-full bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 text-base py-3 px-5 outline-none transition duration-300 ease-in-out"
                    required
                  />
                </div>

                <div className="p-2 w-full mt-6">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-800 to-teal-600 text-white hover:bg-[#333333] py-3 px-6 rounded-lg text-lg font-semibold transition duration-300"
                  >
                    Publish
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
