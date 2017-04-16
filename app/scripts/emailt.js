var omfl;

var validator = function() {
  var email = document.getElementById('email');
  omfl = email.value;
  console.log(omfl);
  if (email.value === "") {
    alert('write something');
  } else {
    var gg = (/([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})/).test(email.value);
    if (gg === true) {
      alert('Thank you for your submittion!');
      mail = email.value;
    } else if (gg === false) {
      alert('That entry was incorrect');
    }
  }
};

module.exports = {
  //validator: validator,
  omfl: omfl
};
