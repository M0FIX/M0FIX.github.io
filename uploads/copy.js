function myFunction() {
  var copyText = document.getElementById("data");
  copyText.hidden = false;
  copyText.select();
  document.execCommand("copy");
  copyText.hidden = true;
}