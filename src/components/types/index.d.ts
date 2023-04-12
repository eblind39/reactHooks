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

export {Person, LabelRecord, ExtendedLabelRecord}