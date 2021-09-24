subValues = document.querySelector(".subject-values");
disp = document.querySelector("#disp")
sscPaper = document.querySelector("#ssc");
hscPaper = document.querySelector("#hsc");
engineerPaper = document.querySelector("#engineer");
sscPaper.addEventListener("mouseover", function () {
  subValues.innerHTML = ""
  subValues.innerHTML = `<div id="ssc-subval">
      <button class="sub-pill-button" id="ssc2020">2020</button
      ><button class="sub-pill-button" id="ssc2019">2019</button
      ><button class="sub-pill-button" id="ssc2018">2018</button
      ><button class="sub-pill-button" id="ssc2017">2017</button
      ><button class="sub-pill-button" id="ssc2016">2016</button>
    </div>`
});
hscPaper.addEventListener("mouseover", function () {
  subValues.innerHTML = ""
  subValues.innerHTML = `<div id="hsc-subval">
      <button class="sub-pill-button" id="hsc2020">2020</button
      ><button class="sub-pill-button" id="hsc2019">2019</button
      ><button class="sub-pill-button" id="hsc2018">2018</button
      ><button class="sub-pill-button" id="hsc2017">2017</button
      ><button class="sub-pill-button" id="hsc2016">2016</button>
    </div>`
});
engineerPaper.addEventListener("mouseover", function(){
  subValues.innerHTML = ""
  subValues.innerHTML = `<div id="engineer-subval">
      <button class="sub-pill-button" id="mech">Mechanical</button
      ><button class="sub-pill-button" id="infotech">Information Technology</button
      ><button class="sub-pill-button" id="compsci">Computer Science</button
      ><button class="sub-pill-button" id="chem">Chemical</button
      ><button class="sub-pill-button" id="elec">Electrical</button>
    </div>`
})
let ssc2020 = document.querySelector("#ssc2020")
ssc2020.addEventListener("click")
