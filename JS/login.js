// document.querySelector('.btn-login').addEventListener('click', function(event) {
  
//   event.preventDefault();
//   // console.log('we are developer')
//   const inputText = document.querySelector('#number').value;
//   console.log(inputText)
  
// })


document.querySelector('.btn-login').addEventListener('click', function (event) {
  event.preventDefault();
  const phoneNumber = document.querySelector('#number').value;
  phoneNumber.value = '';
  const pinNumber = document.querySelector('.pin-number').value;
  pinNumber.value = '';
  // console.log(phoneNumber,pinNumber);
  if (phoneNumber === '01753' && pinNumber === '2462') {
    console.log('you are logged in')
    window.location.href='home.html'
  } else {
    alert('you are wrong person')
  }
})