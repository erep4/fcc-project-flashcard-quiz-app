export function initFlashCards() {
  interface FlashCard {
    questionText: string;
    questionAnswer: string;
  }

  const currentCards: FlashCard[] = [
    {
      questionText: "What is a closure in JavaScript?",
      questionAnswer:
        "A function that remembers its outer scope even after the outer function returns.",
    },
    {
      questionText: "What is the difference between == and ===?",
      questionAnswer:
        "== compares with type coercion; === compares value and type strictly.",
    },
    {
      questionText: "What is the Event Loop?",
      questionAnswer:
        "A mechanism that handles async tasks by processing the call stack, microtasks, and macrotasks.",
    },
    {
      questionText: "What is the difference between let, const, and var?",
      questionAnswer:
        "var is function-scoped; let and const are block-scoped; const cannot be reassigned.",
    },
    {
      questionText: "What is a Promise and its states?",
      questionAnswer:
        "An object for async results with states: pending, fulfilled, rejected.",
    },
  ];

  const flashCard = document.getElementById("flashcard") as HTMLElement;
  const deleteBtn = document.getElementById("delete-btn") as HTMLButtonElement;
  const cardCounter = document.getElementById("card-counter") as HTMLElement;
  const frontText = document.querySelector(".card-front") as HTMLElement;
  const backText = document.querySelector(".card-back") as HTMLElement;
  const cardsList = document.getElementById("cards-list") as HTMLElement;
  const qFront = document.getElementById("front-text") as HTMLInputElement;
  const aBack = document.getElementById("back-text") as HTMLInputElement;
  const addBtn = document.getElementById("add-btn") as HTMLButtonElement;
  const alertElement = document.getElementById("entry-error") as HTMLElement;

  let currentCardsIndex: number = currentCards.length - 1;

  const del = (index: number) => {
    if (index < 0) return;
    currentCards.splice(index, 1);
    if (currentCards.length === 0) {
      currentCardsIndex = -1;
    } else {
      currentCardsIndex = Math.max(0, currentCardsIndex - 1);
    }
  };

  const display = () => {
    cardCounter.textContent = `Cards Count: ${currentCards.length}`;

    if (currentCards.length < 1) {
      frontText.textContent = `Please add new question`;
      backText.textContent = `Please add new answer`;
      cardsList!.innerHTML = "0";
      return;
    }

    frontText.textContent = `${currentCards[currentCardsIndex].questionText}`;
    backText.textContent = `${currentCards[currentCardsIndex].questionAnswer}`;

    let html: string = "";

    currentCards
      .map((card, i) => {
        const cls = i === currentCardsIndex ? "selected " : "";
        html += `<button id="btn-${i}" data-index="${i}"  class="${cls}bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg mt-4 w-full">${card.questionText}</button><br>`;
      })
      .join("");
    cardsList!.innerHTML = html;
  };

  class InvalidUserInputError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "InvalidUserInputError";
    }
  }

  cardsList.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const btn = target.closest(
      'button[id^="btn-"]',
    ) as HTMLButtonElement | null;
    if (!btn) return;

    const index = Number(btn.id.replace("btn-", ""));
    if (Number.isNaN(index)) return;
    btn.classList.toggle("selected");
    currentCardsIndex = index;
    display();
  });

  flashCard.addEventListener("click", () => {
    flashCard.classList.toggle("flipped");
  });

  deleteBtn.addEventListener("click", () => {
    del(currentCardsIndex);
    display();
  });

  addBtn.addEventListener("click", () => {
    try {
      const add = {
        questionText: qFront.value.trim(),
        questionAnswer: aBack.value.trim(),
      };
      if (!add.questionText || !add.questionAnswer)
        throw new InvalidUserInputError(
          "Question and Answer text cannot be empty",
        );
      currentCards.push(add);
      currentCardsIndex = currentCards.length - 1;
      qFront.value = "";
      aBack.value = "";
      alertElement.textContent = "";
      display();
    } catch (ex) {
      if (ex instanceof InvalidUserInputError) {
        alertElement.textContent = "⚠ " + ex.message;
      } else {
        console.error(ex);
      }
    }
  });

    display();
}
