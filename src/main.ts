import "./style.css";
import { initFlashCards } from "./index";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<body class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
    <div class="flashcard-panel">
      <div class="flashcard-body max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">
        Flash Card Quiz App
      </h1>
      <div class="flashcard-container flex flex-col items-center gap-6 mb-10">
        <div id="flashcard" class="flashcard relative">
          <div class="card-inner" id="current-card">
            <div class="card-front text-xl font-medium">

            </div>
            <div class="card-back text-xl font-medium">

            </div>
          </div>
        </div>

        <div class="controls-panel flex items-center gap-6">
          <p id="card-counter" class="text-gray-600 font-medium">
            
          </p>
          <div class="card-actions">
          <button
            id="delete-btn"
            class="delete-btn bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Delete Card
          </button>
          </div>
        </div>

        
        <p class="text-sm text-gray-500">Click to turn over</p>
        <div>
        <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">Cards List</h3>
        <div id="cards-list">
          
        </div>
        </div>
      </div>

      
      <div class="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
        <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          Card description
        </h3>

        <div class="space-y-4">
          <form id="entry-form" class="entry-form">
                      <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Question (Front)
            </label>
            <textarea
              id="front-text"
              rows="3"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 resize-none"
              placeholder="Enter your question here..."
            ></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Answer (Back)
            </label>
            <textarea
              id="back-text"
              rows="3"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 resize-none"
              placeholder="Enter your answer here..."
            ></textarea>
          </div>
          <p id='alert'></p>
          <button
            type="submit"
            id="add-btn"
            class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
          Add new Card
          </button>
          </form>


          <div id="entry-error" class="error text-sm text-red-500 font-medium min-h-[24px]"></div>
        </div>
      </div>
    </div>
    </div>
  </body>
`;
  initFlashCards()
