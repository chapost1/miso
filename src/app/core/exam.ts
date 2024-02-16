export interface ExamAccessoriesRequirements {
    headphones: boolean;
    camera: boolean;
}

interface props {
    name: string;
    note: string;
    accessoriesRequirements: ExamAccessoriesRequirements;
    description: string;
    navigationLink: string;
    outsourceLink?: string;
    imageAssetSrc: string;
    studyPdfAssetSrc: string;
}

class Exam {
    public name: string;
    public note: string;
    public accessoriesRequirements: ExamAccessoriesRequirements;
    public description: string;
    public navigationLink: string;
    public outsourceLink?: string;
    public imageAssetSrc: string;
    public studyPdfAssetSrc: string;
    
    constructor({
        name,
        note,
        accessoriesRequirements,
        description,
        navigationLink,
        outsourceLink,
        imageAssetSrc,
        studyPdfAssetSrc,
    }: props) {
        this.name = name;
        this.note = note;
        this.accessoriesRequirements = accessoriesRequirements;
        this.description = description;
        this.navigationLink = navigationLink;
        this.outsourceLink = outsourceLink;
        this.imageAssetSrc = imageAssetSrc;
        this.studyPdfAssetSrc = studyPdfAssetSrc;
    }

    public get isAnyAccessoriesRequired(): boolean {
        return this.accessoriesRequirements.headphones || this.accessoriesRequirements.camera;
    }
}

export default Exam;
