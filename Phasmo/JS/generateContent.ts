namespace Phasmophobia {
    export function generateContent(_data: Data): void {
        let nameParent: HTMLDivElement | null = document.querySelector("#ghostNames");
        let infoParent: HTMLDivElement | null = document.querySelector("#ghostInfos");
        for (let type in _data) {
            let traits: Ghost = _data[type][0];
            let entry: Spooky = new Spooky(type, traits.evidenceOne, traits.evidenceTwo, traits.evidenceThree, traits.allEvidence, traits.strength, traits.weakness, traits.power);
            if (nameParent && infoParent) {
                entry.createBoxes(nameParent, infoParent);
                allGhosts.push(entry); 
            }
        }
    }
}