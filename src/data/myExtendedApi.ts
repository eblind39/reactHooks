import { ExtendedLabelRecord, LabelRecord } from "../components/types"

const data: ExtendedLabelRecord[] = [
    { userId: 1, records: [{label: 'A'}, {label: 'B'}, {label: 'C'}, {label: 'D'}, {label: 'E'},] },
    { userId: 2, records: [{label: 'F'}, {label: 'G'}, {label: 'H'}, {label: 'I'}, {label: 'J'},] },
    { userId: 3, records: [{label: 'K'}, {label: 'L'}, {label: 'M'}, {label: 'N'}, {label: 'O'},] },
    { userId: 4, records: [{label: 'P'}, {label: 'Q'}, {label: 'R'}, {label: 'S'}, {label: 'T'},] },
    { userId: 5, records: [{label: 'U'}, {label: 'V'}, {label: 'X'}, {label: 'Y'}, {label: 'Z'},] },
]

export const myExtendedApi = {
    fakeFetch(userId: number) {
        return new Promise(resolve => {
            setTimeout(() => {
                const records: ExtendedLabelRecord[] = data.filter(labelRecord => labelRecord.userId === userId)
                resolve(records[0]?.records || [])
            }, 1000)
        })
    }
}