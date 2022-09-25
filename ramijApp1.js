// Javascript file for :

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /*      Javascript(+html, and css) simple special-purposes                    */
    /* text-processing web-application made fullstack from scratch               */
    /* (designed and implemented between 20/May/2022 and 22/May/2022)           */
    /* by Rami Al-Saadi in May 2022 for showcase and educational purposes.     */
    /*          © 2022 Rami Al-Saadi | All Rights Reserved                    */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    // This app mainly takes two URLs as input, processes, and produces git commands as output (output can be used to to update connected online remote repositories)
// Instead of seeking commands manually and copying them line by line, you can copy them as a bunch depending on your need.
// The following includes code for the js. program and the frontend interactions and dom manipulations.

let url1 = "REPO1_PLACEHOLDER!";
let url2 = "REPO2_PLACEHOLDER!";
let result = "result";
let text = document.getElementById("resultDiv").innerHTML;
let text2 ="";
var range = document.createRange();
var input = document.getElementById("form1");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    processURLs();
  }
});

function processURLs() {
  document.getElementById("resultDiv").style.display="block";
  url1 = document
    .getElementById("repo11")
    .value.toString().trim()
    .replace(/(<([^>]+)>)/gi, "") ;
  if(url1 == "" || !url1.startsWith("git@github.com:") || !url1.endsWith(".git"))
  {
    document.getElementById("repo11").style.setProperty("--a", "red");
    url1 = "<span class='redColor'>REPO1_PLACEHOLDER!</span>";
    document.getElementById("err1").innerHTML = "&#128533 &#10071;";
  } else {
    url1 = "<span class='greenColor'>" + url1 + "</span>";
    document.getElementById("err1").innerHTML = " &#128077;";
  }
  text2 = text.replace(/remote_1_url/g, url1);
  url2 = document
    .getElementById("repo22")
    .value.toString().trim()
    .replace(/(<([^>]+)>)/gi, "");
  if (
    url2 != "" &&
    url2.startsWith("git@github.com") &&
    url2.endsWith(".git")
  ) {
    url2 = "<span class='yellowGreenColor'>" + url2 + "</span>";
    result = text2.replace(/remote_2_url/g, url2);
    result = result.toString();
    document.getElementById("resultDiv").innerHTML = result;
    document.getElementById("err2").innerHTML = "&#128077;";
    document.getElementById("paste1").innerHTML =
      "paste the following git commands in your Terminal:";
    if (url1.startsWith("<span class='green")) {
      document.getElementById("paste2").innerHTML =
        "paste the following git commands in your Terminal:";
        range.selectNode(document.getElementById("addRepoText").parentNode);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        showNotification({
          html: "<div>&#9989;</div>",
          className: "copied",
        });
    }
    else{        range.selectNode(document.getElementById("switchRepoText").parentNode);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    showNotification({
      html: "<div>&#9989;</div>",
      className: "copied",
    });
    }
  } else {
    url2 = "<span class='redColor'>REPO2_PLACEHOLDER!</span>";
    result = text2.replace(/remote_2_url/g, url2);
    result = result.toString();
    document.getElementById("resultDiv").innerHTML = result;
    document
      .getElementById("repo22")
      .style.setProperty("--c", "orangered");
    document.getElementById("err2").innerHTML = "&#128534 &#10071; ";
    range.selectNode(document.getElementById("addFirst").parentNode);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  }
  return false;
}

function copyDivToClipboard(e) {
  range.selectNode(e.target.parentNode);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  showNotification({
    html: "<div>Copied</div>",
    className: "copied",
  });
}

function showNotification({ top = 2, right = 2, className, html }) {
  let notification = document.createElement("div");
  notification.className = "notification";
  if (className) {
    notification.classList.add(className);
  }
  notification.style.top = top + "px";
  notification.style.right = right + "px";
  notification.innerHTML = html;
  document.body.append(notification);
  setTimeout(() => notification.remove(), 1000);
  let id = 0;
  let pos = 4;
  let op = 1;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 90) {
      clearInterval(id);
    } else {
      pos++;
      op -= 0.015;
      notification.style.top = pos + "px";
      notification.style.opacity = op;
    }
  }
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/*      Javascript(+html, and css) simple special-purposes                    */
/* text-processing web-application made fullstack from scratch               */
/* (designed and implemented between 20/May/2022 and 22/May/2022)           */
/* by Rami Al-Saadi in May 2022 for showcase and educational purposes.     */
/*          © 2022 Rami Al-Saadi | All Rights Reserved                    */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

 // This app mainly takes two URLs as input, processes, and produces git commands as output (output can be used to to update connected online remote repositories)
// Instead of seeking commands manually and copying them line by line, you can copy them as a bunch depending on your need.