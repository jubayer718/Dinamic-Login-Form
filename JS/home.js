document.querySelector('.login').addEventListener('click', function (event) {
  event.preventDefault();
  const setBallance = document.getElementById('ballance').value; 
  const pussword = document.getElementById('password').value;
 
  if (pussword === '123') {
    const currentBallance = document.querySelector('.totalBallance').innerText
    const givenBallance = parseFloat(setBallance);
    const ballance = parseFloat(currentBallance);
    const newBallance = givenBallance + ballance;
    document.querySelector('.totalBallance').innerText = newBallance;
 
    
  } else {
    alert('wrong password you cannot add money')
  }
})