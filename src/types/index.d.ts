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

enum TodoStatus {
    Active = 1,
    Pending = 2,
    Closed = 3
}

interface TODO {
    id: number
    title: string
    status: TodoStatus
}

export {Person, LabelRecord, ExtendedLabelRecord, Food, TODO, TodoStatus}