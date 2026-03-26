import React, { useState } from "react";
import { useInterview } from "../hooks/useInterview.js";
import Loading from "../../auth/components/Loading";

const Interview = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [activeTab, setActiveTab] = useState("technical");

  const { report } = useInterview();

  if (!report) {
    return (
      <Loading fullScreen={true} message="Loading your interview report..." />
    );
  }

  // Dummy data
  //   const report = {
  //     matchScore: 85,
  //     technicalQuestions: [
  //       {
  //         question:
  //           "Explain the event loop in Node.js and how it handles asynchronous operations.",
  //         intention:
  //           "To assess your understanding of Node.js core architecture and non-blocking I/O.",
  //         answer:
  //           "Describe the call stack, callback queue, and event loop phases, emphasizing how Node.js manages concurrency.",
  //       },
  //       {
  //         question: "How do you optimize a React application for performance?",
  //         intention:
  //           "To evaluate your knowledge of React rendering cycles and optimization techniques.",
  //         answer:
  //           "Mention techniques like memoization (useMemo, useCallback), code splitting, lazy loading, and avoiding unnecessary re-renders.",
  //       },
  //       {
  //         question:
  //           "What are the differences between SQL and NoSQL databases, and when would you choose one over the other?",
  //         intention:
  //           "To test your database design skills and decision-making capabilities.",
  //         answer:
  //           "Compare schema flexibility, scalability, and ACID compliance, providing examples of use cases for MongoDB vs MySQL.",
  //       },
  //       {
  //         question:
  //           "Explain the concept of RESTful API design and the importance of HTTP status codes.",
  //         intention:
  //           "To verify your ability to build clean, standard-compliant backend services.",
  //         answer:
  //           "Discuss resource-based URLs, standard HTTP methods (GET, POST, PUT, DELETE), and appropriate status code usage.",
  //       },
  //       {
  //         question:
  //           "How would you handle authentication and authorization in a MERN stack application?",
  //         intention: "To check your knowledge of security best practices.",
  //         answer:
  //           "Explain the use of JWT (JSON Web Tokens), secure cookie storage, and middleware for route protection.",
  //       },
  //     ],
  //     behavioralQuestions: [
  //       {
  //         question:
  //           "Tell me about a challenging technical problem you faced and how you solved it.",
  //         intention:
  //           "To evaluate your problem-solving process and technical depth.",
  //         answer:
  //           "Use the STAR method (Situation, Task, Action, Result) to describe a specific bug or performance issue you resolved.",
  //       },
  //       {
  //         question:
  //           "How do you handle disagreements with team members regarding technical decisions?",
  //         intention:
  //           "To assess your communication skills and ability to work in a team.",
  //         answer:
  //           "Emphasize active listening, data-driven arguments, and the willingness to compromise for the project's success.",
  //       },
  //       {
  //         question:
  //           "Describe a time you had to learn a new technology quickly to complete a project.",
  //         intention: "To gauge your adaptability and learning agility.",
  //         answer:
  //           "Provide a concrete example of a tool or framework you picked up, the resources used, and the outcome.",
  //       },
  //       {
  //         question:
  //           "How do you manage your time when working on multiple tasks or tight deadlines?",
  //         intention: "To check your organizational and prioritization skills.",
  //         answer:
  //           "Discuss tools like Jira or Trello, and techniques like breaking down tasks into smaller, manageable chunks.",
  //       },
  //       {
  //         question: "Why do you want to work at TechNova Solutions?",
  //         intention:
  //           "To see if you have researched the company and if your goals align with theirs.",
  //         answer:
  //           "Connect your interest in scalable systems with the company's products and mission.",
  //       },
  //     ],
  //     skillGaps: [
  //       { skill: "Cloud Infrastructure" },
  //       { skill: "CI/CD Pipelines" },
  //       { skill: "Testing Frameworks" },
  //     ],
  //     preparationPlan: [
  //       {
  //         day: 1,
  //         focus: "Cloud and DevOps",
  //         tasks: [
  //           "Learn basic AWS EC2 deployment and understand CI/CD concepts using GitHub Actions.",
  //         ],
  //       },
  //       {
  //         day: 2,
  //         focus: "Testing",
  //         tasks: [
  //           "Study Jest for unit testing React components and Supertest for API testing.",
  //         ],
  //       },
  //       {
  //         day: 3,
  //         focus: "System Design",
  //         tasks: [
  //           "Review concepts like load balancing, database sharding, and caching strategies.",
  //         ],
  //       },
  //       {
  //         day: 4,
  //         focus: "Mock Interviews",
  //         tasks: [
  //           "Practice explaining your projects and technical decisions clearly to prepare for behavioral rounds.",
  //         ],
  //       },
  //     ],
  //     overallFeedback:
  //       "You have a strong foundation in the MERN stack and good problem-solving skills. To improve your chances, focus on bridging the gap in cloud deployment and automated testing, as these are preferred requirements for the role.",
  //   };

  const toggleQuestion = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div id="interview" className="h-screen w-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 py-4 md:p-8 overflow-auto relative flex flex-col">

      <div className="relative max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-bold text-white">
            Interview Analysis Report
          </h1>
          <p className="text-slate-400 text-lg">
            Comprehensive AI-powered assessment of your interview readiness
          </p>
        </div>

        {/* Top Section: Match Score & Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Match Score Card */}
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center space-y-4">
            <div className="relative w-40 h-40">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 160 160"
              >
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-slate-700/50"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${(report.matchScore / 100) * 440} 440`}
                  className={`${getScoreColor(
                    report.matchScore,
                  )} transition-all duration-500`}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span
                  className={`text-4xl font-bold ${getScoreColor(report.matchScore)}`}
                >
                  {report.matchScore}%
                </span>
                <span className="text-slate-400 text-sm">Match Score</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-slate-300 font-medium">Overall Rating</p>
              <p
                className={`${getScoreColor(report.matchScore)} font-bold text-lg mt-1`}
              >
                {report.matchScore >= 80
                  ? "Excellent"
                  : report.matchScore >= 60
                    ? "Good"
                    : "Needs Improvement"}
              </p>
            </div>
          </div>

          {/* Skill Gaps Card */}
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-8 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-2xl">🎯</span> Skill Gaps
            </h3>
            <div className="space-y-3">
              {report.skillGaps?.map((gap, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-slate-800/50 border border-red-500/30 rounded-lg"
                >
                  <span className="text-red-500 text-xl">▲</span>
                  <span className="text-slate-200 text-sm">{gap.skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Overall Feedback Card */}
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-8 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-2xl">💡</span> Feedback
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {report.overallFeedback}
            </p>
          </div>
        </div>

        {/* Questions Section */}
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-slate-700/50">
            <button
              onClick={() => setActiveTab("technical")}
              className={`flex-1 py-4 px-6 cursor-pointer font-semibold transition-all duration-200 ${
                activeTab === "technical"
                  ? "bg-red-500/10 text-red-400 border-b-2 border-red-500"
                  : "text-slate-400 hover:text-slate-300"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <span className="text-lg">💻</span> Technical (
                {report.technicalQuestions?.length})
              </span>
            </button>
            <button
              onClick={() => setActiveTab("behavioral")}
              className={`flex-1 py-4 cursor-pointer px-6 font-semibold transition-all duration-200 ${
                activeTab === "behavioral"
                  ? "bg-red-500/10 text-red-400 border-b-2 border-red-500"
                  : "text-slate-400 hover:text-slate-300"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <span className="text-lg">🤝</span> Behavioral (
                {report.behavioralQuestions?.length})
              </span>
            </button>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {activeTab === "technical" &&
              report.technicalQuestions?.map((q, index) => (
                <div
                  key={index}
                  className="border border-slate-700/50 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-200"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full p-6 bg-slate-800/50 hover:bg-slate-800/70 transition-colors flex items-start justify-between gap-4"
                  >
                    <div className="text-left flex-1 cursor-pointer">
                      <h4 className="text-white font-semibold text-lg mb-2">
                        Q{index + 1}: {q.question}
                      </h4>
                      <p className="text-slate-400 text-sm">
                        <span className="text-red-400 font-medium">
                          Intention:{" "}
                        </span>
                        {q.intention}
                      </p>
                    </div>
                    <span className="text-2xl text-red-500 shrink-0">
                      {expandedQuestion === index ? "−" : "+"}
                    </span>
                  </button>

                  {expandedQuestion === index && (
                    <div className="p-6 bg-slate-900/50 border-t border-slate-700/50 space-y-3">
                      <div>
                        <h5 className="text-slate-300 font-semibold mb-2 flex items-center gap-2">
                          <span className="text-green-400">✓</span> Suggested
                          Answer
                        </h5>
                        <p className="text-slate-400 leading-relaxed">
                          {q.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}

            {activeTab === "behavioral" &&
              report.behavioralQuestions?.map((q, index) => (
                <div
                  key={index}
                  className="border border-slate-700/50 rounded-lg overflow-hidden hover:border-red-500/50 transition-all duration-200"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full p-6 bg-slate-800/50 hover:bg-slate-800/70 transition-colors flex items-start justify-between gap-4"
                  >
                    <div className="text-left flex-1 cursor-pointer">
                      <h4 className="text-white font-semibold text-lg mb-2">
                        Q{index + 1}: {q.question}
                      </h4>
                      <p className="text-slate-400 text-sm">
                        <span className="text-red-400 font-medium">
                          Intention:{" "}
                        </span>
                        {q.intention}
                      </p>
                    </div>
                    <span className="text-2xl text-red-500 shrink-0">
                      {expandedQuestion === index ? "−" : "+"}
                    </span>
                  </button>

                  {expandedQuestion === index && (
                    <div className="p-6 bg-slate-900/50 border-t border-slate-700/50 space-y-3">
                      <div>
                        <h5 className="text-slate-300 font-semibold mb-2 flex items-center gap-2">
                          <span className="text-green-400">✓</span> Suggested
                          Answer
                        </h5>
                        <p className="text-slate-400 leading-relaxed">
                          {q.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Preparation Plan */}
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-8 space-y-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <span className="text-4xl">📋</span> Preparation Plan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {report.preparationPlan?.map((day, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 space-y-4 hover:border-red-500/50 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center text-red-400 font-bold">
                    {day.day}
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs">Focus Area</p>
                    <p className="text-white font-semibold">{day.focus}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {day.tasks?.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex gap-3">
                      <span className="text-green-400 font-bold shrink-0">
                        ✓
                      </span>
                      <p className="text-slate-300 text-sm">{task}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center pb-8">
          <button className="px-8 py-3 bg-linear-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:shadow-lg hover:shadow-red-500/20 active:scale-95">
            📥 Download Report
          </button>
          <button className="px-8 py-3 bg-slate-800/50 border border-slate-700/50 text-white font-semibold rounded-lg hover:border-red-500/50 transition-all duration-200">
            🔄 Generate New Analysis
          </button>
        </div>
      </div>
    </div>
  );
};

export default Interview;
