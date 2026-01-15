const API_URL = "https://emkc.org/api/v2/piston/execute";

export async function runCode(language, version, code, input) {
  // 🔒 FORCE SUPPORTED JAVA VERSION
  if (language === "java") {
    version = "17.0.1";
  }

  console.log("PISTON REQUEST:", { language, version });

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      language,
      version,
      files: [
        {
          name: getFileName(language),
          content: code,
        },
      ],
      stdin: input,
    }),
  });

  return await res.json();
}

function getFileName(language) {
  switch (language) {
    case "python":
      return "main.py";
    case "java":
      return "Main.java";
    case "cpp":
      return "main.cpp";
    case "javascript":
      return "main.js";
    default:
      return "main.txt";
  }
}
