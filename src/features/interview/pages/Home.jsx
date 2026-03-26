import React, { useState, useRef } from "react";
import Loading from "../../auth/components/Loading";
import { useInterview } from "../hooks/useInterview.js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { loading, generateReport, reports } = useInterview();

  const [jobDescription, setJobDescription] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const [resumeFile, setResumeFile] = useState(null);

  const resumeInputRef = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resumeFile = resumeInputRef.current.files[0];

    if (!resumeFile || !jobDescription.trim() || !selfDescription.trim()) {
      alert("Please fill all fields");
      return;
    }

    const data = await generateReport({
      resumeFile: resumeFile,
      jobDescription,
      selfDescription,
    });
    if (data) {
      navigate(`/interview/${data._id}`);
    }
  };

  if (loading) {
    return <Loading fullScreen={true} message="Analyzing your resume..." />;
  }

  // Helper function to determine color theme based on match score
  const getScoreTheme = (score) => {
    if (score >= 80) {
      return {
        border: "border-green-500/40",
        bg: "bg-green-500/10",
        hoverBg: "hover:bg-green-500/20",
        shadow: "hover:shadow-green-500/20",
        accent: "text-green-400",
        barGradient: "from-green-600 to-green-500",
        icon: "🟢",
      };
    } else if (score >= 60) {
      return {
        border: "border-yellow-500/40",
        bg: "bg-yellow-500/10",
        hoverBg: "hover:bg-yellow-500/20",
        shadow: "hover:shadow-yellow-500/20",
        accent: "text-yellow-400",
        barGradient: "from-yellow-600 to-yellow-500",
        icon: "🟡",
      };
    } else {
      return {
        border: "border-red-500/40",
        bg: "bg-red-500/10",
        hoverBg: "hover:bg-red-500/20",
        shadow: "hover:shadow-red-500/20",
        accent: "text-red-400",
        barGradient: "from-red-600 to-red-500",
        icon: "🔴",
      };
    }
  };

  return (
    <div
      id="home"
      className="h-screen w-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 relative  flex flex-col overflow-auto"
    >
      {/* Main content container - side by side layout */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center px-4">
        <div className="w-full h-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
          {/* LEFT SIDE - Form Section (2/3 width) */}
          <div className="lg:col-span-2 flex justify-center items-center m-4 py-8">
            <div className="w-full max-w-xl">
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-8 space-y-8">
                {/* Header */}
                <div className="space-y-3 text-center">
                  <h1 className="text-4xl font-bold text-white">
                    Resume Analyzer
                  </h1>
                  <p className="text-slate-400 text-sm">
                    Get AI-powered insights tailored to your target job
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* File Upload */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                      Upload Resume (PDF)
                    </label>
                    <label className="relative cursor-pointer block">
                      <input
                        type="file"
                        accept=".pdf"
                        className="hidden"
                        onChange={(e) => setResumeFile(e.target.files[0])}
                        ref={resumeInputRef}
                        required
                      />
                      <div className="w-full px-4 py-3 bg-slate-800/50 border-2 border-dashed border-slate-600/50 rounded-lg text-slate-400 hover:border-red-500/50 hover:bg-slate-800/70 transition-all duration-200 text-center">
                        {resumeFile ? (
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-lg">📄</span>
                            <span className="text-white font-medium truncate text-sm">
                              {resumeFile.name}
                            </span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-2">
                            <span className="text-2xl">📤</span>
                            <span className="text-xs">
                              Click to upload or drag your PDF
                            </span>
                          </div>
                        )}
                      </div>
                    </label>
                  </div>

                  {/* Job Description */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                      Job Description
                    </label>
                    <textarea
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                      placeholder="Paste the job description..."
                      className="w-full h-24 px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all duration-200 resize-none"
                      required
                    />
                  </div>

                  {/* Self Description */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">
                      About You
                    </label>
                    <textarea
                      value={selfDescription}
                      onChange={(e) => setSelfDescription(e.target.value)}
                      placeholder="Describe your skills and experience..."
                      className="w-full h-24 px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all duration-200 resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full cursor-pointer bg-linear-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:shadow-lg hover:shadow-red-500/20 active:scale-95 text-sm"
                  >
                    Analyze Resume
                  </button>
                </form>

                {/* Info Section */}
                <div className="pt-4 border-t border-slate-700/50">
                  <p className="text-slate-400 text-xs text-center">
                    📊 Get detailed analysis on match score
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Reports Section (1/3 width, screen height) */}
          {reports.length > 0 ? (
            <div className="lg:col-span-1 h-screen flex flex-col items-center justify-center m-4 py-4">
              <div className="w-full h-full flex flex-col">
                <div className="shrink-0 space-y-2 pb-4">
                  <div className="text-center lg:text-left">
                    <h2 className="text-2xl font-bold text-white mb-1">
                      Your Reports
                    </h2>
                    <p className="text-slate-400 text-xs">
                      Your analysis history
                    </p>
                  </div>
                </div>

                <div
                  id="reports"
                  className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar  "
                >
                  {reports.map((report) => {
                    const theme = getScoreTheme(report.matchScore);
                    return (
                      <div
                        key={report._id}
                        className={`group ${theme.bg} ${theme.border} hover:${theme.hoverBg} border rounded-xl p-5 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${theme.shadow}`}
                        onClick={() => navigate(`/interview/${report._id}`)}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-white mb-1">
                              {report.title}
                            </h3>
                          </div>
                          <span className="text-2xl">{theme.icon}</span>
                        </div>

                        <div className="space-y-3">
                          {/* Progress Bar */}
                          <div className="space-y-1">
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-slate-300">
                                Match Score
                              </span>
                              <span className={`font-bold ${theme.accent}`}>
                                {report.matchScore}%
                              </span>
                            </div>
                            <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                              <div
                                className={`bg-linear-to-r ${theme.barGradient} h-full transition-all duration-300`}
                                style={{ width: `${report.matchScore}%` }}
                              ></div>
                            </div>
                          </div>

                          {/* Status Badge */}
                          <div className="flex items-center gap-2">
                            {report.matchScore >= 80 && (
                              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                                ✓ Excellent Match
                              </span>
                            )}
                            {report.matchScore >= 60 &&
                              report.matchScore < 80 && (
                                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
                                  → Good Match
                                </span>
                              )}
                            {report.matchScore < 60 && (
                              <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">
                                ⚡ Needs Work
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-700/50">
                          Click to view full analysis →
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="lg:col-span-1 h-full flex items-center justify-center">
              <div className="text-center">
                <p className="text-slate-400 text-sm">
                  💡 Your analysis reports will appear here
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
