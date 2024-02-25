import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const input = document.getElementsByName("delay");

form.addEventListener("submit", submitHandler);

import error from '../img/error.png';
import success from '../img/success.png';

function submitHandler(event) {
  event.preventDefault();
  const delay = input[0].value;
  const option = document.querySelector('input[name="state"]:checked').value;
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (option === "fulfilled") {
        res(`Fulfilled promise in ${delay}ms`);
      } else {
        rej(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  })

  promise.then(res => {
    iziToast.success({
      title: 'OK',
      message: res,
      iconUrl: success,
      fontSize: 'large',
      close:	true,
      position:	'topRight',
      messageColor: 'white',
      titleColor: 'white',
      theme: 'dark',
      timeout:	5000,
      backgroundColor: '#59A10D',
      progressBar: false,
    })
  })
    .catch(rej => {
      iziToast.error({
        title: 'Error',
        message: rej,
        iconUrl: error,
        fontSize: 'large',
        position:	'topRight',
        messageColor: 'white',
        titleColor: 'white',
        theme: 'dark',
        timeout:	5000,
        backgroundColor: '#EF4040',
        progressBar: false,
      })
    });
};