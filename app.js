let xp=0, gems=0;
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.style.display='none');
  document.getElementById(id).style.display='block';
}
function startQuiz(subject){
  showPage('quizzes');
  document.getElementById('quiz-box').innerHTML = `
  <h3>${subject}</h3>
  <p><b>Q1:</b> What is 12 x 8?</p>
  <button onclick="answer(true)">96</button>
  <button onclick="answer(false)">84</button>
  <button onclick="answer(false)">108</button>
  <p><small>[2023 CBC] • 30% SBA + 70% Exam Style</small></p>`;
}
function answer(correct){
  if(correct){ xp+=100; gems+=10; alert('Correct! +100 XP +10 Gems'); }
  else{ alert('Wrong. Try again. Correct answer is 96.'); }
  document.getElementById('xp').innerText=xp;
  document.getElementById('gems').innerText=gems;
}