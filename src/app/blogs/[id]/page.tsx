"use client"
import React from 'react'
import BlogsPage from "@/components/BlogsPage"

interface Description {
  heading1: string;
  paragraph1: string;
  heading2?: string; 
  paragraph2?: string;
  heading3?: string;
  paragraph3?: string;
}

interface BlogsPageProps {
  id: number;
  title: string;
  writer: string;
  description: Description[];
  image: string;
}

const blogs: BlogsPageProps[] = [
  {
    id: 1,
    title: "The Rise of Artificial Intelligence",
    writer: "Salina Smith",
    description:[ 
      {
        heading1: "How AI is Transforming Everyday Life",
        paragraph1: "Artificial Intelligence (AI) has come a long way from being a concept in science fiction to becoming an integral part of our daily lives. From personalized recommendations on streaming platforms to advanced medical diagnostics, AI is revolutionizing how we live, work, and interact with the world. In this blog, we will explore the rise of AI, its impact on various industries, and what the future holds for this groundbreaking technology.",
        heading2: "Understanding Artificial Intelligence",
        paragraph2: "AI refers to the simulation of human intelligence in machines designed to think, learn, and make decisions. It encompasses various technologies such as machine learning, natural language processing (NLP), and computer vision. These systems are trained to analyze data, identify patterns, and solve complex problems—often faster and more accurately than humans.",
        heading3: "The Future of AI",
        paragraph3: "The potential of AI is limitless. Innovations in areas like generative AI (e.g., ChatGPT and DALL·E) are already shaping creative industries. In the future, AI may play a critical role in tackling global challenges such as climate change, disease prevention, and sustainable development."
      }
    ],
    image: "/blog1-AI.jpg",
  },
  {
    id: 2,
    title: "5 Must-Have Apps for Productivity",
    writer: "John Smith",
    description:[{
      heading1: "Staying productive in today's fast-paced world",
      paragraph1: "Staying productive in today's fast-paced world can be challenging, but the right tools can make all the difference. With countless apps available, finding the ones that truly enhance productivity is essential. In 2024, these five must-have productivity apps stand out for their innovative features, ease of use, and ability to help you stay organized and efficient.",
      heading2: "Notion: Your All-in-One Workspace",
      paragraph2: "Notion is the ultimate app for organizing your life and work. Whether you are managing personal projects, team tasks, or taking notes, Notion's customizable workspace allows you to design your workflow exactly how you want it.",
      heading3: "Trello: Visual Task Management",
      paragraph3: "Trello is a visual task management tool that uses boards, lists, and cards to help you organize projects. Perfect for both personal and team use, Trello's flexibility makes it a favorite for productivity enthusiasts.",
    }],
    image: "/blog2-Apps.jpg",
  },
  {
    id: 3,
    title: "The Future of Quantum Computing",
    writer: "Julis Brown",
    description: [ 
      {
        heading1: "What to Expect in the Next Decade",
        paragraph1: "Quantum computing, once a theoretical concept confined to academic research, has now become one of the most exciting and transformative fields of technology. With major advancements in hardware, software, and quantum algorithms, quantum computing is on the brink of revolutionizing industries ranging from healthcare to finance. But what does the next decade hold for this groundbreaking technology? Let's explore the possibilities.",
        heading2: "Understanding Quantum Computing",
        paragraph2: "Quantum computing leverages the principles of quantum mechanics, such as superposition and entanglement, to perform complex computations exponentially faster than classical computers. While classical computers use bits as the smallest unit of information (either 0 or 1), quantum computers use quantum bits, or qubits, which can exist in multiple states simultaneously.",
        heading3: "Quantum Cloud Computing",
        paragraph3: "Quantum computing will become more accessible through cloud-based platforms. Tech giants like IBM, Amazon, and Microsoft are already offering quantum computing as a service (QCaaS). In the coming decade."
      }
    ],
    image: "/blog4-CC.jpg",
  },
  {
    id: 4,
    title: "The Art of Mindfulness",
    writer: "Gabriel Cruise",
    description: [{
      heading1: "Understanding Mindfulness",
      paragraph1: "In today's fast-paced world, where distractions abound and stress levels are ever-increasing, mindfulness has emerged as a powerful tool to bring calm, focus, and balance to our lives. Rooted in ancient practices yet perfectly suited for modern challenges, mindfulness is the art of being fully present in the moment, without judgment or distraction. This guide explores the essence of mindfulness, its benefits, and how to incorporate it into your daily life.",
      heading2: "What is Mindfulness",
      paragraph2: "Mindfulness is the practice of deliberately focusing your attention on the present moment. It involves observing your thoughts, emotions, and physical sensations without judgment. Rather than dwelling on the past or worrying about the future, mindfulness encourages a deep awareness of the here and now.",
      heading3: "The Benefits of Mindfulness",
      paragraph3: "The art of mindfulness is a lifelong practice that can profoundly enhance your quality of life. By cultivating awareness and presence, you can navigate life's challenges with greater ease and appreciate its beauty in every moment. Start small, be consistent, and watch as mindfulness transforms your life, one breath at a time."
    }],
    image: "/blog4-Mind.jpg",
  },
  {
    id: 5,
    title: "Plant-Based Diets",
    writer: "Alizabeth Raef",
    description: [{
      heading1: "A Guide to Healthy Eating for a Sustainable Future",
      paragraph1: "In recent years, plant-based diets have gained significant popularity due to their numerous health benefits and positive environmental impact. Whether you are considering transitioning to a plant-based lifestyle or just curious about what it entails, this blog will provide you with a comprehensive overview of plant-based diets, their health benefits, and how to make the shift seamlessly.",
      heading2: "What is a Plant-Based Diet?",
      paragraph2: "A plant-based diet focuses primarily on whole, unprocessed plant foods, including fruits, vegetables, grains, legumes, nuts, and seeds. While it does not necessarily mean being 100% vegan or vegetarian, the goal is to minimize the consumption of animal products and prioritize plant-derived foods.",
      heading3: "Conclusion",
      paragraph3: "Plant-based diets offer a wealth of health benefits and contribute to a more sustainable future. By incorporating more plant-based foods into your diet, you can improve your well-being, reduce your environmental footprint, and enjoy a diverse and flavorful range of meals. Whether you choose to go fully plant-based or simply reduce your intake of animal products, every small step counts toward a healthier planet and a healthier you."
    }],
    image: "/blog5-Plant.jpg",
  },
  {
    id: 6,
    title: "Exercises for a Healthier Lifestyle",
    writer: "Sam Doe",
    description: [{
      heading1: "Stay Fit, Feel Great",
      paragraph1: "Maintaining a healthy lifestyle is essential for overall well-being, and one of the most effective ways to do so is through regular exercise. Exercise not only helps you stay in shape, but it also boosts your mental health, energy levels, and longevity. Whether you are just starting or are already an experienced fitness enthusiast, here are some exercises that can help you lead a healthier and more active lifestyle.",
      heading2: "Walking and Hiking",
      paragraph2: "If you prefer low-impact exercises, walking and hiking are excellent choices. Walking is easy on the joints and can be done daily. Hiking, especially on trails with varied terrain, provides a great cardio workout and strengthens the lower body.",
      heading3: "Conclusion",
      paragraph3: "Exercise is a cornerstone of a healthy lifestyle. It helps improve physical health, boosts mental well-being, and contributes to a long, fulfilling life. Whether you are looking to improve cardiovascular fitness, build strength, enhance flexibility, or boost energy, there is an exercise for everyone. The key is to find activities you enjoy and stay consistent with them. By making exercise a regular part of your life, you are investing in your health for the long term."
    }],
    image: "/blog6-Health.jpg",
  }
];

const Page = ({params}: any) => {
  const reqBlog = blogs && blogs.find((blog) => blog.id == params.id)
  const {title, writer, description, image}: any = reqBlog
  console.log(title, "destructuring the title")

  return (
    <div className="bg-light-teal">
      <BlogsPage id={params.id} title={title} writer={writer} description={description} image={image} />
    </div>
  )
}

export default Page
