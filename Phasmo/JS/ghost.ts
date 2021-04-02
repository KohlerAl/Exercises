namespace Phasmophobia {
    export class Spooky {
        public name: string;
        public evidenceOne: string;
        public evidenceTwo: string;
        public evidenceThree: string;
        public allEvidence: string[];
        public strength: string;
        public weakness: string;
        public power: string;
        public stillPossible: boolean;

        constructor(_name: string, _evidenceOne: string, _evidenceTwo: string, _evidenceThree: string, _all: string[], _strength: string, _weakness: string, _power: string) {
            //Creating a new instance of the class and giving it the properties written in the json 
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

        public createBoxes(_nameParent: HTMLDivElement, _infoParent: HTMLDivElement): void {
            //Creating the paragraph-element for the name which is shown on the left
            let nameTag: HTMLParagraphElement = document.createElement("p");
            nameTag.innerHTML = this.name;
            nameTag.classList.add("ghostName");
            nameTag.id = this.name;
            nameTag.addEventListener("click", toggleInfo);
            _nameParent.appendChild(nameTag);

            //Creating the container with the detailed information for the ghost which is shown on the right
            let ghostInfo: HTMLDivElement = document.createElement("div");
            ghostInfo.classList.add("ghostInfo");
            ghostInfo.classList.add("dontShow");
            ghostInfo.classList.add(this.name);
            ghostInfo.innerHTML = "<h3>Name</h3><p>" + this.name + "</p>" + "<h3>Evidences</h3><p>" + this.evidenceOne + "</br>" + this.evidenceTwo + "</br>" + this.evidenceThree + "</p>" +
                "<h3>Strengths</h3><p>" + this.strength + "</p>" + "<h3>Weaknesses</h3><p>" + this.weakness + "</p>" + "<h3>Power</h3><p>" + this.power + "</p>";
            _infoParent.appendChild(ghostInfo);
        }

        public checkEvidence(_evidence: string): boolean {
            //checking if the given evidence is a evidenve for the ghost and return true if yes and false if no
            if (_evidence == this.allEvidence[0] || _evidence == this.allEvidence[1] || _evidence == this.allEvidence[2]) {
                return true;
            }
            else {
                return false;
            }

        }
    }
}