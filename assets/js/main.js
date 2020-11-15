function myFunction() {
  let togglePassword = document.getElementById('togglePassword');
  let password = document.getElementById('password');
  if (password.type === 'password') {
    password.type = 'text';
    togglePassword.src = './assets/image/eye-crossed.png';
  } else {
    password.type = 'password';
    togglePassword.src = './assets/image/eye-open.png';
  }
}

function getCodeBoxElement(index) {
  return document.getElementById('codeBox' + index);
}

function onKeyUpEvent(index, event) {
  const eventCode = event.which || event.keyCode;
  let confirm = document.getElementById('confirm');
  if (getCodeBoxElement(index).value.length === 1) {
    if (index !== 6) {
      getCodeBoxElement(index+ 1).focus();
    } else {
      getCodeBoxElement(index).blur();
      // Submit code
      confirm.classList="btn-1";
    }
  }
  if (eventCode === 8 && index !== 1) {
    getCodeBoxElement(index - 1).focus();
  }
}


function onKeyUpPin(index, event) {
  const eventCode = event.which || event.keyCode;
  let confirm = document.getElementById('confirm2');
  if (getCodeBoxElement(index).value.length === 1) {
    if (index !== 6) {
      getCodeBoxElement(index+ 1).focus();
    } else {
      getCodeBoxElement(index).blur();
      // Submit code
      confirm.classList="edit-btn1";
    }
  }
  if (eventCode === 8 && index !== 1) {
    getCodeBoxElement(index - 1).focus();
  }
}

function onFocusEvent(index) {
  for (item = 1; item < index; item++) {
    const currentElement = getCodeBoxElement(item);
    if (!currentElement.value) {
      currentElement.focus();
      break;
    }
  }
}

function onKeyUpForgot() {
  let confirm = document.getElementById('confirm1');
      confirm.classList="btn-1 change-btn";
}
// Get the modal
let modal = document.getElementById('modal-edit');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}