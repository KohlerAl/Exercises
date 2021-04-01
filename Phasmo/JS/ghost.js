"use strict";
var Phasmophobia;
(function (Phasmophobia) {
    class Spooky {
        constructor(_name, _evidenceOne, _evidenceTwo, _evidenceThree, _all, _strength, _weakness, _power) {
            this.name = _name;
            this.evidenceOne = _evidenceOne;
            this.evidenceTwo = _evidenceTwo;
            this.evidenceThree = _evidenceThree;
            this.allEvidence = _all;
            this.strength = _strength;
            this.weakness = _weakness;
            this.power = _power;
            this.stillPossible = true;
        }
        createBoxes(_nameParent, _infoParent) {
            let nameTag = document.createElement("p");
            nameTag.innerHTML = this.name;
            nameTag.classList.add("ghostName");
            nameTag.id = this.name;
            nameTag.addEventListener("click", Phasmophobia.toggleInfo);
            _nameParent.appendChild(nameTag);
            let ghostInfo = document.createElement("div");
            ghostInfo.classList.add("ghostInfo");
            ghostInfo.classList.add("dontShow");
            ghostInfo.classList.add(this.name);
            ghostInfo.innerHTML = "<h3>Name</h3><p>" + this.name + "</p>" + "<h3>Evidences</h3><p>" + this.evidenceOne + "</br>" + this.evidenceTwo + "</br>" + this.evidenceThree + "</p>" +
                "<h3>Strengths</h3><p>" + this.strength + "</p>" + "<h3>Weaknesses</h3><p>" + this.weakness + "</p>" + "<h3>Power</h3><p>" + this.power + "</p>";
            _infoParent.appendChild(ghostInfo);
        }
        checkEvidence(_evidence) {
            if (_evidence == this.allEvidence[0] || _evidence == this.allEvidence[1] || _evidence == this.allEvidence[2]) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    Phasmophobia.Spooky = Spooky;
})(Phasmophobia || (Phasmophobia = {}));
//# sourceMappingURL=ghost.js.map