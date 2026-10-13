(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=[{questionText:`What is a closure in JavaScript?`,questionAnswer:`A function that remembers its outer scope even after the outer function returns.`},{questionText:`What is the difference between == and ===?`,questionAnswer:`== compares with type coercion; === compares value and type strictly.`},{questionText:`What is the Event Loop?`,questionAnswer:`A mechanism that handles async tasks by processing the call stack, microtasks, and macrotasks.`},{questionText:`What is the difference between let, const, and var?`,questionAnswer:`var is function-scoped; let and const are block-scoped; const cannot be reassigned.`},{questionText:`What is a Promise and its states?`,questionAnswer:`An object for async results with states: pending, fulfilled, rejected.`}],t=document.getElementById(`flashcard`),n=document.getElementById(`delete-btn`),r=document.getElementById(`card-counter`),i=document.querySelector(`.card-front`),a=document.querySelector(`.card-back`),o=document.getElementById(`cards-list`),s=document.getElementById(`front-text`),c=document.getElementById(`back-text`),l=document.getElementById(`add-btn`),u=document.getElementById(`entry-error`),d=e.length-1,f=t=>{t<0||(e.splice(t,1),d=e.length===0?-1:Math.max(0,d-1))},p=()=>{if(r.textContent=`Cards Count: ${e.length}`,e.length<1){i.textContent=`Please add new question`,a.textContent=`Please add new answer`,o.innerHTML=`0`;return}i.textContent=`${e[d].questionText}`,a.textContent=`${e[d].questionAnswer}`;let t=``;e.map((e,n)=>{t+=`<button id="btn-${n}" data-index="${n}"  class="${n===d?`selected `:``}bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg mt-4 w-full">${e.questionText}</button><br>`}).join(``),o.innerHTML=t};class m extends Error{constructor(e){super(e),this.name=`InvalidUserInputError`}}o.addEventListener(`click`,e=>{let t=e.target.closest(`button[id^="btn-"]`);if(!t)return;let n=Number(t.id.replace(`btn-`,``));Number.isNaN(n)||(t.classList.toggle(`selected`),d=n,p())}),t.addEventListener(`click`,()=>{t.classList.toggle(`flipped`)}),n.addEventListener(`click`,()=>{f(d),p()}),l.addEventListener(`click`,()=>{try{let t={questionText:s.value.trim(),questionAnswer:c.value.trim()};if(!t.questionText||!t.questionAnswer)throw new m(`Question and Answer text cannot be empty`);e.push(t),d=e.length-1,s.value=``,c.value=``,u.textContent=``,p()}catch(e){e instanceof m?u.textContent=`⚠ `+e.message:console.error(e)}}),p()}document.querySelector(`#app`).innerHTML=`
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
`,e();