import "./style.css";

type Student = { id: number; name: string; scores: number[] };

function safeParse(json: string): unknown {
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

function isStudent(value: unknown): value is Student {
  if (typeof value !== "object" || value === null) return false;

  const student = value as Record<string, unknown>;
  return (
    typeof student.id === "number" &&
    Number.isFinite(student.id) &&
    typeof student.name === "string" &&
    student.name.trim().length > 0 &&
    Array.isArray(student.scores) &&
    student.scores.length > 0 &&
    student.scores.every((score) => typeof score === "number" && Number.isFinite(score))
  );
}

function average(nums: number[]): number {
  return nums.reduce((total, num) => total + num, 0) / nums.length;
}

function runChecks(): void {
  const valid = safeParse('{"id":1,"name":"Hermione","scores":[95,100,98]}');
  const invalid = safeParse('{"id":"1","name":"Hermione","scores":[95]}');
  console.assert(isStudent(valid), "El estudiante válido debe pasar la validación.");
  console.assert(!isStudent(invalid), "El estudiante inválido debe rechazarse.");
}

const json = '{"id":1,"name":"Hermione","scores":[95,100,98]}';
const data = safeParse(json);
const app = document.querySelector<HTMLDivElement>("#app");

if (!app) throw new Error("No se encontró el contenedor de la aplicación.");

runChecks();

if (isStudent(data)) {
  const result = average(data.scores);
  app.innerHTML = `
    <section class="card" aria-labelledby="student-name">
      <p class="eyebrow">Respuesta de API validada</p>
      <h1 id="student-name">${data.name}</h1>
      <p class="label">Promedio de scores</p>
      <p class="score">${result.toFixed(2)}</p>
      <p class="detail">ID: ${data.id} · Scores: ${data.scores.join(", ")}</p>
    </section>`;
} else {
  app.innerHTML = `
    <section class="card error" role="alert">
      <p class="eyebrow">Error de validación</p>
      <h1>No se pudo validar la respuesta de la API.</h1>
      <p>El JSON no cumple con la estructura esperada para un estudiante.</p>
    </section>`;
}
