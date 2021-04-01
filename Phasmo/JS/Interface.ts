namespace Phasmophobia {
    export interface Ghost {
        evidenceOne: string; 
        evidenceTwo: string; 
        evidenceThree: string; 
        allEvidence: string[]; 
        strength: string; 
        weakness: string; 
        power: string;
    }

    export interface Data {
        [name: string]: Ghost[]; 
    }
}