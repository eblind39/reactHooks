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
    Completed = 2
}

interface TODO {
    id: number
    title: string
    status: TodoStatus
}

interface ThemeStyles {
    color: string
    background: string
}

interface Theme {
    name: string
    theme: ThemeStyles
}

export {Person, LabelRecord, ExtendedLabelRecord, Food, TODO, TodoStatus, ThemeStyles, Theme}