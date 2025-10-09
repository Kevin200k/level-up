import React from "react";

const features = [
  {
    title: "Smart Roadmap",
    description: "Follow a structured learning path tailored to your goals — from beginner to pro step-by-step.",
    icon: "🗺️",
    color: "from-green-400 to-green-600",
  },
  {
    title: "Personalized Learning",
    description: "Our AI adapts lessons and resources based on your progress and preferred learning style.",
    icon: "🤖",
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Real-Time Progress",
    description: "Track your growth with visual progress bars and achievements that keep you motivated.",
    icon: "📊",
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Interactive Challenges",
    description: "Test your understanding with engaging quizzes and coding exercises.",
    icon: "⚡",
    color: "from-orange-400 to-orange-600",
  },
];

const CourseSlider = () => {
  return (
    <section className="w-full py-12 bg-white flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Why Choose <span className="text-green-600">LevelUp?</span>
      </h2>

      <div className="flex gap-6 overflow-x-auto px-6 pb-4 scrollbar-hide">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-[280px] bg-gradient-to-br ${feature.color} rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-all`}
          >
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseSlider;
