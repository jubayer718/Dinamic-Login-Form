document.getElementById('cashOut').addEventListener('click', function (event) {
  event.preventDefault();
  const cashOutBallance = document.getElementById('cash-out-form').value;
  const round = parseFloat(cashOutBallance);
  const pin = document.getElementById('cashOut-pin').value;
  if (pin === '1234') {
    const ballance = document.getElementById('previous-ballance').innerText;
    const round2 = parseFloat(ballance);
    const newBallance = round2 - round;
    document.getElementById('previous-ballance').innerText = newBallance;
  } else {
    alert('failed to cash out. Please try again')
  }
})