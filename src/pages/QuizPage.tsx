import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function QuizPage() {
  const { id } = useParams();

  const [questions, setQuestions] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    loadQuiz();
  }, [id]);

  async function loadQuiz() {

  setLoading(true);
  const { data, error } = await supabase
    .from("quiz_questions")
    .select("*")
    .order("question_order");

  if (error) {
    setLoading(false);
    return;
  }

  if (!data) {
    setLoading(false);
    return;
  }

const filtered = data;
setQuestions(filtered);

  setQuestions(filtered);

  setLoading(false);
}

  function selectAnswer(letter: string) {
    setAnswers({
      ...answers,
      [current]: letter,
    });
  }

  function nextQuestion() {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      return;
    }

    finishQuiz();
  }

  function finishQuiz() {
    let correct = 0;

    questions.forEach((q, index) => {
      if (answers[index] === q.correct_answer) {
        correct++;
      }
    });

    const percentage = Math.round(
      (correct / questions.length) * 100
    );

    setScore(percentage);
    setFinished(true);
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020817] text-white flex items-center justify-center">
        Cargando Quiz...
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-[#020817] text-white flex items-center justify-center">
        No se encontraron preguntas.
      </div>
    );
  }

  if (finished) {
    return (
      <div className="min-h-screen bg-[#020817] text-white flex items-center justify-center">
        <div className="bg-slate-900 p-10 rounded-2xl text-center">
          <h1 className="text-4xl font-bold mb-6">
            Resultado Final
          </h1>

          <div className="text-7xl text-cyan-400 font-bold mb-6">
            {score}%
          </div>

          <div
            className={`text-2xl font-bold ${
              score >= 80
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {score >= 80
              ? "APROBADO"
              : "REPROBADO"}
          </div>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <div className="max-w-4xl mx-auto px-8 py-16">

        <div className="text-cyan-400 mb-4">
          Pregunta {current + 1} de {questions.length}
        </div>

        <h1 className="text-4xl font-bold mb-10">
  {q.question}
</h1>

        <div className="space-y-4">
          {[
            ["A", q.option_a],
            ["B", q.option_b],
            ["C", q.option_c],
            ["D", q.option_d],
          ].map(([letter, text]) => (
            <button
              key={letter}
              onClick={() => selectAnswer(letter)}
              className={`
                w-full
                text-left
                p-5
                rounded-xl
                border
                transition
                ${
                  answers[current] === letter
                    ? "bg-cyan-500 border-cyan-400"
                    : "bg-slate-900 border-slate-700 hover:border-cyan-400"
                }
              `}
            >
              <strong>{letter}.</strong> {text}
            </button>
          ))}
        </div>

        <button
          onClick={nextQuestion}
          className="
            mt-10
            bg-cyan-500
            hover:bg-cyan-600
            px-8
            py-3
            rounded-xl
            font-semibold
          "
        >
          {current === questions.length - 1
            ? "Finalizar Quiz"
            : "Siguiente"}
        </button>

      </div>
    </div>
  );
}