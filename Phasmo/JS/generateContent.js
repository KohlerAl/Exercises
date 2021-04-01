"use strict";
var Phasmophobia;
(function (Phasmophobia) {
    function generateContent(_data) {
        let nameParent = document.querySelector("#ghostNames");
        let infoParent = document.querySelector("#ghostInfos");
        for (let type in _data) {
            let traits = _data[type][0];
            let entry = new Phasmophobia.Spooky(type, traits.evidenceOne, traits.evidenceTwo, traits.evidenceThree, traits.allEvidence, traits.strength, traits.weakness, traits.power);
            if (nameParent && infoParent) {
                entry.createBoxes(nameParent, infoParent);
                Phasmophobia.allGhosts.push(entry);
            }
        }
    }
    Phasmophobia.generateContent = generateContent;
})(Phasmophobia || (Phasmophobia = {}));
//# sourceMappingURL=generateContent.js.map