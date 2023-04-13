interface Person {
    name: string
    email: string
}

interface LabelRecord {
    label: string
}

interface ExtendedLabelRecord {
    userId: number
    records: LabelRecord[]
}

interface Food {
    id: number
    name: string
}

export {Person, LabelRecord, ExtendedLabelRecord, Food}