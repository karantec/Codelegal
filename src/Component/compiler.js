import { useState, useCallback } from "react";
import Editor from "@monaco-editor/react";
import { runCode } from "../services/piston";
import { runJava } from "../services/java.jdoodle";

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

        if (res?.error) {
          setOutput("❌ Error:\n" + res.error);
        } else if (res?.output) {
          setOutput("✅ Output:\n" + res.output);
        } else {
          setOutput("⚠️ No output generated");
        }

        return;
      }

      const res = await runCode(
        language.piston,
        language.version,
        code,
        input
      );

      if (res?.compile?.output) {
        setOutput("❌ Compilation Error:\n" + res.compile.output);
      } else if (res?.run?.stderr) {
        setOutput("❌ Runtime Error:\n" + res.run.stderr);
      } else if (res?.run?.stdout) {
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
      {/* Header */}
      <div className="relative backdrop-blur-lg bg-white/5 border-b border-white/10 shadow-2xl">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">CodeRunner Pro</h1>

          <div className="flex items-center gap-3">
            <button
              onClick={run}
              disabled={loading}
              className={`bg-gradient-to-r ${language.color} text-white px-6 py-2 rounded-lg font-bold disabled:opacity-50`}
            >
              {loading ? "Running..." : "▶ Run Code"}
            </button>

            <button
              onClick={() => {
                setCode(language.template);
                setInput("");
                setOutput("");
              }}
              className="bg-white/10 text-white px-5 py-2 rounded-lg"
            >
              🔄 Reset
            </button>

            <button
              onClick={() =>
                setTheme(theme === "vs-dark" ? "vs-light" : "vs-dark")
              }
              className="bg-white/10 text-white px-4 py-2 rounded-lg"
            >
              {theme === "vs-dark" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-[1400px] mx-auto p-6 grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-white/10 p-5 rounded-xl">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.name}
                onClick={() => {
                  setLanguage(lang);
                  setCode(lang.template);
                  setOutput("");
                }}
                className={`w-full p-3 mb-2 rounded-lg ${
                  language.name === lang.name
                    ? `bg-gradient-to-r ${lang.color}`
                    : "bg-white/5"
                } text-white`}
              >
                {lang.icon} {lang.name}
              </button>
            ))}
          </div>
        </div>

        {/* Editor */}
        <div className="col-span-12 lg:col-span-9 space-y-6">
          <div className="bg-white/10 rounded-xl overflow-hidden">
            <Editor
              height="500px"
              language={language.monaco}
              theme={theme}
              value={code}
              onChange={(v) => setCode(v || "")}
              options={{
                fontSize: 15,
                minimap: { enabled: true },
                scrollBeyondLastLine: false,
              }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <textarea
              className="bg-black/30 text-white p-4 rounded-xl h-40"
              placeholder="Standard Input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <pre className="bg-black/30 text-green-300 p-4 rounded-xl h-40 overflow-auto">
              {output || "Run your code to see output"}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
