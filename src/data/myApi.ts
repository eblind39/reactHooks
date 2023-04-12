import { LabelRecord } from "../types"

const labeldata: LabelRecord[] = [
    {label: 'A'},
    {label: 'B'},
    {label: 'C'},
    {label: 'D'},
    {label: 'E'},
]

export const myApi = {
    fakeFetch() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(labeldata)
            }, 1000)
        })
    }
}