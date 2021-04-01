namespace Phasmophobia {
    window.addEventListener("load", handleLoad);

    export let allGhosts: Spooky[] = [];

    let placeholder: HTMLHeadingElement;
    let lastTarget: string;
    let exclude: HTMLDivElement;
    let include: HTMLDivElement;

    async function handleLoad(): Promise<void> {
        let answer: Response = await fetch("JSON/ghosts.json");
        let response: string = await answer.text();
        let ghosty: Data = JSON.parse(response);

        placeholder = <HTMLHeadingElement>document.querySelector("#placeholder");
        exclude = <HTMLDivElement>document.querySelector("#exclude");
        include = <HTMLDivElement>document.querySelector("#include");

        include.addEventListener("change", changeStatus);
        exclude.addEventListener("change", changeStatus);

        generateContent(ghosty);
        
        insertBreaks(); 
    }

    export function toggleInfo(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        let id: string = target.id;

        let info: HTMLElement = <HTMLElement>document.querySelector("." + id);

        let allInfos: NodeListOf<HTMLDivElement> = document.querySelectorAll(".ghostInfo");
        if (lastTarget != id) {
            for (let i: number = 0; i < allInfos.length; i++) {
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

    function changeStatus(_event: Event): void {
        let undo: boolean = false;

        let target: HTMLElement = <HTMLElement>_event.target;
        let classes: string = target.classList.toString();

        let parent: HTMLElement = <HTMLElement>target.parentNode;
        let parentID: string = parent.id;

        if (parentID == "exclude") {
            let otherBox: HTMLInputElement = <HTMLInputElement>document.querySelector("#include ." + classes);

            if (otherBox.disabled == false) {
                otherBox.disabled = true;
            }
            else {
                otherBox.disabled = false;
                undo = true;
            }
        }
        else if (parentID == "include") {
            let otherBox: HTMLInputElement = <HTMLInputElement>document.querySelector("#exclude ." + classes);

            if (otherBox.disabled == false) {
                otherBox.disabled = true;
            }
            else {
                otherBox.disabled = false;
                undo = true;
            }
        }

        for (let ghost of allGhosts) {
            let isEvidence: boolean = ghost.checkEvidence(classes);

            if (isEvidence == true && parentID == "exclude" || isEvidence == false && parentID == "include") {
                let ghostName: HTMLParagraphElement = <HTMLParagraphElement>document.querySelector("#" + ghost.name);
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

    function insertBreaks(): void {
        let labels: NodeListOf<HTMLLabelElement> = document.querySelectorAll("label.evidence"); 

        for (let i: number = 0; i < labels.length; i++) {
            labels[i].innerText += "\n"; 
        }
    }
}