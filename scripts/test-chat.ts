import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function testChat() {
  const questions = [
    "Who is Mashood Basharat?",
    "What projects has Mashood built?",
    "How can I contact Mashood?",
  ];

  for (const question of questions) {
    console.log(`\nQ: ${question}`);

    const response = await fetch("http://localhost:3000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [
          {
            id: "test-user",
            role: "user",
            parts: [{ type: "text", text: question }],
          },
        ],
      }),
    });

    console.log(`Status: ${response.status}`);

    if (!response.ok) {
      console.log(await response.text());
      continue;
    }

    const text = await response.text();
    const preview = text.slice(0, 400).replace(/\n/g, " ");
    console.log(`Response preview: ${preview}...`);
  }
}

testChat().catch((error) => {
  console.error(error);
  process.exit(1);
});
