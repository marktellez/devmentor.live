export async function GET() {
  const data = {
    stats: {
      yearsExperience: 26,
      sessions: 1000,
      rating: 5.0,
      reviews: 454
    },
    expertise: {
      webDev: {
        title: "Modern Web Development",
        description: "Expert in JavaScript (26 years), TypeScript, React (since fax.js), Next.js, Node.js, and modern frameworks. Specializing in functional programming patterns and clean, maintainable code architecture."
      },
      ai: {
        title: "AI & Machine Learning",
        description: "Extensive experience in AI integration, machine learning, and genetic algorithms. Build intelligent systems including chatbots, RAG systems, and voice applications. Expert in vector databases and ML model integration."
      },
      fullStack: {
        title: "Full-Stack & Architecture",
        description: "Deep expertise in database design (MongoDB, PostgreSQL, MySQL), system architecture, and scalable applications. Experience with microservices, distributed systems, and cloud-native development."
      },
      aiDev: {
        title: "AI-Powered Development",
        description: "Learn to leverage AI tools for 70% of your development work. Master prompt engineering, AI-assisted coding, and automated development workflows that dramatically increase productivity."
      }
    },
    technologies: {
      core: {
        title: "Core Technologies",
        list: "JavaScript, TypeScript, React, Next.js, Node.js, Python, Ruby, MongoDB, PostgreSQL, MySQL"
      },
      ai: {
        title: "AI & ML Tools",
        list: "Machine Learning Models, Vector Databases, RAG Systems, Chatbots, Voice AI, Genetic Algorithms"
      },
      dev: {
        title: "Development Tools",
        list: "Git, Docker, CI/CD, Testing Frameworks, Cloud Platforms, Performance Monitoring"
      },
      additional: {
        title: "Additional Skills",
        list: "Data Science, Stock Market Analysis, System Architecture, Technical Leadership"
      }
    }
  }

  return Response.json(data)
} 