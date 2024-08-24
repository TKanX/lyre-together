var show = true;
var isMobile = "ontouchstart" in document.documentElement; // If mobile device

// Display textarea
function showTextarea(id) {
  let inputDiv = document.getElementById(id);
  if (show == false) {
    inputDiv.classList.remove("input-active");
    inputDiv.classList.add("input-inactive");
    show = true;
  } else {
    inputDiv.classList.remove("input-inactive");
    inputDiv.classList.add("input-active");
    show = false;
  }
}

// Add event listeners to play notes
for (let node of document.querySelectorAll(".triangle")) {
  let key = node.querySelector(".key").id;
  if (isMobile) {
    node.addEventListener("touchstart", (e) => {
      if (show != -1) play(key, true);
    });
  } else {
    node.addEventListener("mousedown", (e) => {
      if (show != -1) play(key, true);
    });
  }
  removeID(node.parentNode.childNodes[1]);
}

// Auto BPM update
let bpmField = document.getElementById("bpm");
bpmField.addEventListener("focusout", () => {
  updateBpm(bpmField.value);
});

// Switch to auto mode
document.getElementById("transpose-num").addEventListener("change", (e) => {
  transpose = parseInt(e.target.value);
});

function removeID(spread) {
  spread.addEventListener(
    "animationend",
    function () {
      spread.removeAttribute("id");
    },
    false
  );
}

// Switch mode
function selectMode(node) {
  mode = node.innerText;
  document.querySelector("#modeText").innerText = node.innerText;
}

let volumeSlider = document.getElementById("volume");
volumeSlider.addEventListener("change", (e) => {
  masterVolume.gain.value = Math.pow(volumeSlider.value / 100, 2);
});
