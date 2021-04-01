"use strict";
var Phasmophobia;
(function (Phasmophobia) {
    window.addEventListener("load", handleLoad);
    Phasmophobia.allGhosts = [];
    let placeholder;
    let lastTarget;
    let exclude;
    let include;
    async function handleLoad() {
        let answer = await fetch("JSON/ghosts.json");
        let response = await answer.text();
        let ghosty = JSON.parse(response);
        placeholder = document.querySelector("#placeholder");
        exclude = document.querySelector("#exclude");
        include = document.querySelector("#include");
        include.addEventListener("change", changeStatus);
        exclude.addEventListener("change", changeStatus);
        Phasmophobia.generateContent(ghosty);
        insertBreaks();
    }
    function toggleInfo(_event) {
        let target = _event.target;
        let id = target.id;
        let info = document.querySelector("." + id);
        let allInfos = document.querySelectorAll(".ghostInfo");
        if (lastTarget != id) {
            for (let i = 0; i < allInfos.length; i++) {
                if (!allInfos[i].classList.contains("dontShow")) {
                    allInfos[i].classList.add("dontShow");
                }
            }
            if (info.classList.contains("dontShow")) {
                info.classList.remove("dontShow");
                placeholder.style.display = "none";
                lastTarget = id;
            }
            else if (!info.classList.contains("dontShow")) {
                info.classList.add("dontShow");
                placeholder.style.display = "inital";
                lastTarget = id;
            }
        }
        else {
            placeholder.style.display = "block";
            info.classList.add("dontShow");
            lastTarget = "";
        }
    }
    Phasmophobia.toggleInfo = toggleInfo;
    function changeStatus(_event) {
        let undo = false;
        let target = _event.target;
        let classes = target.classList.toString();
        let parent = target.parentNode;
        let parentID = parent.id;
        if (parentID == "exclude") {
            let otherBox = document.querySelector("#include ." + classes);
            if (otherBox.disabled == false) {
                otherBox.disabled = true;
            }
            else {
                otherBox.disabled = false;
                undo = true;
            }
        }
        else if (parentID == "include") {
            let otherBox = document.querySelector("#exclude ." + classes);
            if (otherBox.disabled == false) {
                otherBox.disabled = true;
            }
            else {
                otherBox.disabled = false;
                undo = true;
            }
        }
        for (let ghost of Phasmophobia.allGhosts) {
            let isEvidence = ghost.checkEvidence(classes);
            if (isEvidence == true && parentID == "exclude" || isEvidence == false && parentID == "include") {
                let ghostName = document.querySelector("#" + ghost.name);
                if (undo == false) {
                    ghostName.classList.add("notPossible");
                    ghost.stillPossible = false;
                }
                else if (undo == true) {
                    ghostName.classList.remove("notPossible");
                    ghost.stillPossible = true;
                }
            }
        }
    }
    function insertBreaks() {
        let labels = document.querySelectorAll("label.evidence");
        for (let i = 0; i < labels.length; i++) {
            labels[i].innerText += "\n";
        }
    }
})(Phasmophobia || (Phasmophobia = {}));
//# sourceMappingURL=main.js.map