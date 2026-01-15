export async function runJava(code, input) {
  const res = await fetch(
    "https://javacompiler-t4ca.onrender.com/api/run/java",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        input,
      }),
    }
  );

  return res.json();
}
