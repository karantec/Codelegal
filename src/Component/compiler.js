import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { runCode } from "../services/piston";

const LANGUAGES = [
  {
    name: "C++",
    piston: "cpp",
    version: "10.2.0",
    monaco: "cpp",
    template: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello World";
    return 0;
}`,
  },
  {
    name: "Java",
    piston: "java",
    version: "17.0.2",
    monaco: "java",
    template: `class Main {
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
    template: `print("Hello World")`,
  },
  {
    name: "JavaScript",
    piston: "javascript",
    version: "18.15.0",
    monaco: "javascript",
    template: `console.log("Hello World");`,
  },
];

export default function Compiler() {
  const [language, setLanguage] = useState(LANGUAGES[0]);
  const [code, setCode] = useState(language.template);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const run = async () => {
    setLoading(true);
    setOutput("Running...");
    try {
      const res = await runCode(language.piston, language.version, code, input);

      if (res.compile?.output) {
        setOutput("Compilation Error:\n" + res.compile.output);
      } else if (res.run?.stderr) {
        setOutput("Runtime Error:\n" + res.run.stderr);
      } else if (res.run?.output) {
        setOutput(res.run.output.trim());
      } else {
        setOutput("No output");
      }
    } catch {
      setOutput("Execution failed");
    }
    setLoading(false);
  };

  // Ctrl + Enter
  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.key === "Enter") run();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  return (
    <div className="h-screen flex flex-col">
      {/* Toolbar */}
      <div className="flex items-center gap-3 px-4 py-2 bg-[#111827] border-b border-gray-700">
        <select
          className="bg-[#1f2937] px-3 py-1 rounded border border-gray-600"
          value={language.name}
          onChange={(e) => {
            const lang = LANGUAGES.find((l) => l.name === e.target.value);
            setLanguage(lang);
            setCode(lang.template);
          }}
        >
          {LANGUAGES.map((l) => (
            <option key={l.name}>{l.name}</option>
          ))}
        </select>

        <button
          onClick={run}
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded"
        >
          ▶ Run
        </button>

        <button
          onClick={() => setCode(language.template)}
          className="bg-gray-700 hover:bg-gray-600 px-4 py-1 rounded"
        >
          Clear
        </button>

        <span className="ml-auto text-sm text-blue-400">
          {loading ? "Running..." : "Ready"}
        </span>
      </div>

      {/* Editor */}
      <div className="flex-1">
        <Editor
          height="100%"
          language={language.monaco}
          theme="vs-dark"
          value={code}
          onChange={(v) => setCode(v || "")}
        />
      </div>

      {/* Input / Output */}
      <div className="grid grid-cols-2 h-[30vh] border-t border-gray-700">
        <div className="p-3 bg-[#020617]">
          <p className="text-sm text-gray-400 mb-1">Input (stdin)</p>
          <textarea
            className="w-full h-full bg-black text-white p-2 font-mono outline-none resize-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className="p-3 bg-black">
          <p className="text-sm text-gray-400 mb-1">Output</p>
          <pre className="h-full overflow-auto text-green-400 font-mono">
            {output}
          </pre>
        </div>
      </div>
    </div>
  );
}
