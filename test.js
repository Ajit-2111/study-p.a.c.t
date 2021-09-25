let subValues = document.querySelector(".subject-values");
let sscPaper = document.querySelector("#ssc");
let hscPaper = document.querySelector("#hsc");
let engineerPaper = document.querySelector("#engineer");
let dispresult = document.querySelector("#dispresult");
sscPaper.addEventListener("mouseover", function () {
  subValues.innerHTML = "";
  subValues.innerHTML = `<div id="ssc-subval">
      <button class="sub-pill-button" id="ssc2020" onclick="ssc2020()">2020</button
      ><button class="sub-pill-button" id="ssc2019" onclick="ssc2019()">2019</button
      ><button class="sub-pill-button" id="ssc2018" onclick="ssc2018()">2018</button
      ><button class="sub-pill-button" id="ssc2017" onclick="ssc2017()">2017</button
      ><button class="sub-pill-button" id="ssc2016" onclick="ssc2016()">2016</button>
    </div>`;
});
hscPaper.addEventListener("mouseover", function () {
  subValues.innerHTML = "";
  subValues.innerHTML = `<div id="hsc-subval">
      <button class="sub-pill-button" id="hsc2020" onclick="hsc2020()">2020</button
      ><button class="sub-pill-button" id="hsc2019" onclick="hsc2019()">2019</button
      ><button class="sub-pill-button" id="hsc2018" onclick="hsc2018()">2018</button
      ><button class="sub-pill-button" id="hsc2017" onclick="hsc2017()">2017</button
      ><button class="sub-pill-button" id="hsc2016" onclick="hsc2016()">2016</button>
    </div>`;
});
engineerPaper.addEventListener("mouseover", function () {
  subValues.innerHTML = "";
  subValues.innerHTML = `<div id="engineer-subval">
  <button class="sub-pill-button" id="firstyear" onclick="engife2019()">First Year</button>
      <button class="sub-pill-button" id="mech">Mechanical</button
      ><button class="sub-pill-button" id="infotech">Information Technology</button
      ><button class="sub-pill-button" id="compsci">Computer Science</button
      ><button class="sub-pill-button" id="chem">Chemical</button
      ><button class="sub-pill-button" id="elec">Electrical</button>
    </div>`;
});

// *************** BELOW THIS LINE THERE IS SSC PAPER DETAILS ***************

function ssc2020() {
  dispresult.innerHTML = "";
  dispresult.innerHTML = `
  <div style="overflow-x:auto;">
  <table class="qpdispresult">
    <tr>
      <th>Year</th>
      <th>Month</th>
      <th>Subject</th>
      <th>Preview</th>
      <th>Download</th>
    </tr>
    <tr>
      <td>2020</td>
      <td>December</td>
      <td>Mathematics</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2020</td>
      <td>December</td>
      <td>Science</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2020</td>
      <td>December</td>
      <td>History</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2020</td>
      <td>December</td>
      <td>Geography</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2020</td>
      <td>December</td>
      <td>English</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    </table>
    </div>`;
}
function ssc2019() {
  dispresult.innerHTML = "";
  dispresult.innerHTML = `<div style="overflow-x:auto;">
  <table class="qpdispresult">
    <tr>
      <th>Year</th>
      <th>Month</th>
      <th>Subject</th>
      <th>Preview</th>
      <th>Download</th>
    </tr>
    <tr>
      <td>2020</td>
      <td>December</td>
      <td>Mathematics</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2020</td>
      <td>December</td>
      <td>Science</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2020</td>
      <td>December</td>
      <td>History</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2020</td>
      <td>December</td>
      <td>Geography</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2020</td>
      <td>December</td>
      <td>English</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    </table>
    </div>`;
}
function ssc2018() {
  dispresult.innerHTML = "";
  dispresult.innerHTML = `<div style="overflow-x:auto;">
  <table class="qpdispresult">
    <tr>
      <th>Year</th>
      <th>Month</th>
      <th>Subject</th>
      <th>Preview</th>
      <th>Download</th>
    </tr>
    <tr>
      <td>2018</td>
      <td>December</td>
      <td>Mathematics</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2018</td>
      <td>December</td>
      <td>Science</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2018</td>
      <td>December</td>
      <td>History</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2018</td>
      <td>December</td>
      <td>Geography</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2018</td>
      <td>December</td>
      <td>English</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    </table>
    </div>`;
}
function ssc2017() {
  dispresult.innerHTML = "";
  dispresult.innerHTML = `<div style="overflow-x:auto;">
  <table class="qpdispresult">
    <tr>
      <th>Year</th>
      <th>Month</th>
      <th>Subject</th>
      <th>Preview</th>
      <th>Download</th>
    </tr>
    <tr>
      <td>2017</td>
      <td>December</td>
      <td>Mathematics</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2017</td>
      <td>December</td>
      <td>Science</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2017</td>
      <td>December</td>
      <td>History</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2017</td>
      <td>December</td>
      <td>Geography</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2017</td>
      <td>December</td>
      <td>English</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    </table>
    </div>`;
}
function ssc2016() {
  dispresult.innerHTML = "";
  dispresult.innerHTML = `<div style="overflow-x:auto;">
  <table class="qpdispresult">
    <tr>
      <th>Year</th>
      <th>Month</th>
      <th>Subject</th>
      <th>Preview</th>
      <th>Download</th>
    </tr>
    <tr>
      <td>2016</td>
      <td>December</td>
      <td>Mathematics</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2016</td>
      <td>December</td>
      <td>Science</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2016</td>
      <td>December</td>
      <td>History</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2016</td>
      <td>December</td>
      <td>Geography</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2016</td>
      <td>December</td>
      <td>English</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    </table>
    </div>`;
}

// *************** ABOVE THIS LINE THERE IS SSC PAPER DETAILS ***************

// *************** BELOW THIS LINE THERE IS HSC PAPER DETAILS ***************

function hsc2020() {
  dispresult.innerHTML = "";
  dispresult.innerHTML = `
  <div style="overflow-x:auto;">
  <table class="qpdispresult">
    <tr>
      <th>Year</th>
      <th>Month</th>
      <th>Subject</th>
      <th>Preview</th>
      <th>Download</th>
    </tr>
    <tr>
      <td>2020</td>
      <td>December</td>
      <td>Mathematics</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2020</td>
      <td>December</td>
      <td>Science</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2020</td>
      <td>December</td>
      <td>History</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2020</td>
      <td>December</td>
      <td>Geography</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2020</td>
      <td>December</td>
      <td>English</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    </table>
    </div>`;
}
function hsc2019() {
  dispresult.innerHTML = "";
  dispresult.innerHTML = `<div style="overflow-x:auto;">
  <table class="qpdispresult">
    <tr>
      <th>Year</th>
      <th>Month</th>
      <th>Subject</th>
      <th>Preview</th>
      <th>Download</th>
    </tr>
    <tr>
      <td>2019</td>
      <td>December</td>
      <td>Mathematics</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2019</td>
      <td>December</td>
      <td>Science</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2019</td>
      <td>December</td>
      <td>History</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2019</td>
      <td>December</td>
      <td>Geography</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2019</td>
      <td>December</td>
      <td>English</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    </table>
    </div>`;
}
function hsc2018() {
  dispresult.innerHTML = "";
  dispresult.innerHTML = `<div style="overflow-x:auto;">
  <table class="qpdispresult">
    <tr>
      <th>Year</th>
      <th>Month</th>
      <th>Subject</th>
      <th>Preview</th>
      <th>Download</th>
    </tr>
    <tr>
      <td>2018</td>
      <td>December</td>
      <td>Mathematics</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2018</td>
      <td>December</td>
      <td>Science</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2018</td>
      <td>December</td>
      <td>History</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2018</td>
      <td>December</td>
      <td>Geography</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2018</td>
      <td>December</td>
      <td>English</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    </table>
    </div>`;
}
function hsc2017() {
  dispresult.innerHTML = "";
  dispresult.innerHTML = `<div style="overflow-x:auto;">
  <table class="qpdispresult">
    <tr>
      <th>Year</th>
      <th>Month</th>
      <th>Subject</th>
      <th>Preview</th>
      <th>Download</th>
    </tr>
    <tr>
      <td>2017</td>
      <td>December</td>
      <td>Mathematics</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2017</td>
      <td>December</td>
      <td>Science</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2017</td>
      <td>December</td>
      <td>History</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2017</td>
      <td>December</td>
      <td>Geography</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2017</td>
      <td>December</td>
      <td>English</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    </table>
    </div>`;
}
function hsc2016() {
  dispresult.innerHTML = "";
  dispresult.innerHTML = `<div style="overflow-x:auto;">
  <table class="qpdispresult">
    <tr>
      <th>Year</th>
      <th>Month</th>
      <th>Subject</th>
      <th>Preview</th>
      <th>Download</th>
    </tr>
    <tr>
      <td>2016</td>
      <td>December</td>
      <td>Mathematics</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2016</td>
      <td>December</td>
      <td>Science</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2016</td>
      <td>December</td>
      <td>History</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2016</td>
      <td>December</td>
      <td>Geography</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2016</td>
      <td>December</td>
      <td>English</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    </table>
    </div>`;
}

// *************** ABOVE THIS LINE THERE IS HSC PAPER DETAILS ***************


// *************** BELOW THIS LINE THERE IS ENGINEEING PAPER DETAILS ***************

function engife2019() {
  dispresult.innerHTML = "";
  dispresult.innerHTML = `<div style="overflow-x:auto;">
  <table class="qpdispresult">
    <tr>
      <th>Year</th>
      <th>Month</th>
      <th>Subject</th>
      <th>Preview</th>
      <th>Download</th>
    </tr>
    <tr>
      <td>2019</td>
      <td>December</td>
      <td>Mathematics-1</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2019</td>
      <td>December</td>
      <td>Physics-1</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2019</td>
      <td>December</td>
      <td>Chemistry-1</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2019</td>
      <td>December</td>
      <td>Basic Electrical Engineering</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2019</td>
      <td>December</td>
      <td>Engineering Mechanics</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
    </tr>
    <tr>
    <td> </td>
    <td> </td>
    <td> </td>
    <td> </td>
    <td> </td>
  </tr>
  <tr>
  <td> </td>
  <td> </td>
  <td> </td>
  <td> </td>
  <td> </td>
</tr>
    <tr>
      <td>2019</td>
      <td>May</td>
      <td>Mathematics-1</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2019</td>
      <td>May</td>
      <td>Physics-1</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2019</td>
      <td>May</td>
      <td>Chemistry-1</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2019</td>
      <td>May</td>
      <td>Basic Electrical Engineering</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
    <tr>
      <td>2019</td>
      <td>May</td>
      <td>Engineering Mechanics</td>
      <td>Preview</td>
      <td>Download</td>
    </tr>
  </table>
</div>`;
}


// *************** ABOVE THIS LINE THERE IS ENGINEEING PAPER DETAILS ***************
