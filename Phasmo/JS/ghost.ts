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
            let nameTag: HTMLParagraphElement = document.createElement("p");
            nameTag.innerHTML = this.name;
            nameTag.classList.add("ghostName");
            nameTag.id = this.name; 
            nameTag.addEventListener("click", toggleInfo); 
            _nameParent.appendChild(nameTag);

            let ghostInfo: HTMLDivElement = document.createElement("div");
            ghostInfo.classList.add("ghostInfo");
            ghostInfo.classList.add("dontShow");
            ghostInfo.classList.add(this.name); 
            ghostInfo.innerHTML = "<h3>Name</h3><p>" + this.name + "</p>" + "<h3>Evidences</h3><p>" + this.evidenceOne + "</br>" + this.evidenceTwo + "</br>" + this.evidenceThree + "</p>" + 
            "<h3>Strengths</h3><p>" + this.strength + "</p>" + "<h3>Weaknesses</h3><p>" + this.weakness + "</p>" + "<h3>Power</h3><p>" + this.power + "</p>"; 
            _infoParent.appendChild(ghostInfo); 
        }

        public checkEvidence(_evidence: string): boolean {
            if (_evidence == this.allEvidence[0] || _evidence == this.allEvidence[1] || _evidence == this.allEvidence[2]) {
                return true; 
            }
            else {
                return false; 
            }

        }
    }
}