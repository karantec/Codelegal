import { useState, useEffect, useCallback } from "react";
import Editor from "@monaco-editor/react";
import { runCode } from "../services/piston";
import { runJava, runJavaJDoodle } from "../services/java.jdoodle";

const LANGUAGES = [
  {
    name: "C++",
    piston: "cpp",
    version: "10.2.0",
    monaco: "cpp",
    icon: "⚡",
    color: "from-blue-500 to-cyan-500",
    template: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello World";
    return 0;
}`,
  },
  {
    name: "Java",
    monaco: "java",
    icon: "☕",
    color: "from-orange-500 to-red-500",
    template: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,
  },
  {
    name: "Python",
    piston: "python",
    version: "3.10.0",
    monaco: "python",
    icon: "🐍",
    color: "from-green-500 to-emerald-500",
    template: `print("Hello World")`,
  },
  {
    name: "JavaScript",
    piston: "javascript",
    version: "18.15.0",
    monaco: "javascript",
    icon: "⚡",
    color: "from-yellow-500 to-orange-500",
    template: `console.log("Hello World");`,
  },
];

export default function Compiler() {
  const [language, setLanguage] = useState(LANGUAGES[0]);
  const [code, setCode] = useState(LANGUAGES[0].template);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("vs-dark");

  const run = useCallback(async () => {
    setLoading(true);
    setOutput("🚀 Executing your code...");

    try {
      if (language.name === "Java") {
        const res = await runJava(code, input);

        if (res.error) {
          setOutput("❌ Error:\n" + res.error);
        } else if (res.output) {
          setOutput("✅ Output:\n" + res.output);
        } else {
          setOutput("⚠️ No output generated");
        }

        return;
      }

      const res = await runCode(language.piston, language.version, code, input);

      if (res.compile?.output) {
        setOutput("❌ Compilation Error:\n" + res.compile.output);
      } else if (res.run?.stderr) {
        setOutput("❌ Runtime Error:\n" + res.run.stderr);
      } else if (res.run?.stdout) {
        setOutput("✅ Output:\n" + res.run.stdout);
      } else {
        setOutput("⚠️ No output generated");
      }
    } catch (err) {
      console.error(err);
      setOutput("❌ Execution failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [language, code, input]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Header */}
      <div className="relative backdrop-blur-lg bg-white/5 border-b border-white/10 shadow-2xl">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 bg-gradient-to-br ${language.color} rounded-xl flex items-center justify-center font-bold text-2xl shadow-lg transform hover:scale-110 transition-transform`}
              >
                {language.icon}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">
                  CodeRunner Pro
                </h1>
                <p className="text-xs text-purple-300">
                  Compile, Run & Debug in Real-time
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={run}
                disabled={loading}
                className={`bg-gradient-to-r ${language.color} hover:scale-105 text-white px-6 py-2.5 rounded-lg font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Running...
                  </>
                ) : (
                  <>
                    <span className="text-lg">▶</span>
                    Run Code
                  </>
                )}
              </button>
              <button
                onClick={() => {
                  setCode(language.template);
                  setOutput("");
                  setInput("");
                }}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-lg font-semibold shadow-lg transition-all border border-white/20"
              >
                🔄 Reset
              </button>
              <button
                onClick={() =>
                  setTheme(theme === "vs-dark" ? "vs-light" : "vs-dark")
                }
                className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all backdrop-blur-sm border border-white/20"
              >
                {theme === "vs-dark" ? "🌙 Dark" : "☀️ Light"}
              </button>
              <span
                className={`px-4 py-2 rounded-full text-xs font-bold ${
                  loading
                    ? "bg-yellow-500/30 text-yellow-200 animate-pulse border border-yellow-400/50"
                    : "bg-green-500/30 text-green-200 border border-green-400/50"
                } backdrop-blur-sm`}
              >
                {loading ? "⚡ Running" : "✓ Ready"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-[1400px] mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar - Language Selection */}
          <div className="col-span-12 lg:col-span-3 space-y-4">
            <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 shadow-2xl p-6">
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                Select Language
              </h3>
              <div className="space-y-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.name}
                    onClick={() => {
                      setLanguage(lang);
                      setCode(lang.template);
                      setOutput("");
                    }}
                    className={`w-full p-4 rounded-xl text-left transition-all flex items-center gap-3 ${
                      language.name === lang.name
                        ? `bg-gradient-to-r ${lang.color} text-white shadow-lg scale-105`
                        : "bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10"
                    }`}
                  >
                    <span className="text-2xl">{lang.icon}</span>
                    <span className="font-semibold">{lang.name}</span>
                  </button>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30">
                <p className="text-purple-200 text-xs font-medium">
                  💡 Pro Tip
                </p>
                <p className="text-purple-100 text-xs mt-1">
                  Use Ctrl+Enter to run your code quickly!
                </p>
              </div>
            </div>
          </div>

          {/* Main Editor Area */}
          <div className="col-span-12 lg:col-span-9 space-y-6">
            {/* Editor Card */}
            <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-white/10 to-white/5 px-6 py-4 border-b border-white/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-lg"></div>
                  </div>
                  <span className="font-bold text-white text-sm ml-2">
                    Source Code Editor
                  </span>
                </div>
                <span className="text-xs text-white/60 font-mono">
                  {language.name}
                </span>
              </div>
              <div style={{ height: "500px" }}>
                <Editor
                  height="100%"
                  language={language.monaco}
                  theme={theme}
                  value={code}
                  onChange={(v) => setCode(v || "")}
                  options={{
                    fontSize: 15,
                    minimap: { enabled: true },
                    scrollBeyondLastLine: false,
                    lineNumbers: "on",
                    renderWhitespace: "none",
                    fontFamily:
                      "'Fira Code', 'JetBrains Mono', 'Consolas', monospace",
                    lineHeight: 24,
                    padding: { top: 20, bottom: 20 },
                    cursorBlinking: "smooth",
                    cursorSmoothCaretAnimation: true,
                    smoothScrolling: true,
                    fontLigatures: true,
                  }}
                />
              </div>
            </div>

            {/* Input/Output Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Input */}
              <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-6 py-3 border-b border-white/20">
                  <span className="font-bold text-white text-sm flex items-center gap-2">
                    📥 Standard Input
                  </span>
                </div>
                <div className="p-4">
                  <textarea
                    className="w-full h-48 bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-4 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-white/40"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter program input here..."
                  />
                </div>
              </div>

              {/* Output */}
              <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-6 py-3 border-b border-white/20">
                  <span className="font-bold text-white text-sm flex items-center gap-2">
                    📤 Standard Output
                  </span>
                </div>
                <div className="p-4">
                  {output ? (
                    <pre className="h-48 overflow-auto font-mono text-sm text-green-200 whitespace-pre-wrap bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                      {output}
                    </pre>
                  ) : (
                    <div className="h-48 flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-xl border border-dashed border-white/20">
                      <div className="text-center">
                        <div className="text-5xl mb-3 opacity-50">💻</div>
                        <p className="text-white/60 text-sm font-medium">
                          Run your code to see output
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
