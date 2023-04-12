import React, { useEffect, useState } from "react";
import { LabelRecord } from "../types";
import { myExtendedApi } from "../../data/myExtendedApi";

const LifeCycle = () => {
    const [labelRecords, setLabelRecords] = useState<LabelRecord[]>([])
    const [userId, setUserId] = useState<number>(2)

    const getRandomInt = (min: number, max: number) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    useEffect(() => {
        async function fetchData() {
            const data: LabelRecord[] = (await myExtendedApi.fakeFetch(userId)) as LabelRecord[]
            setLabelRecords(data)
        }

        fetchData()
    }, [userId])

    const handleUserId = () => {
        const randomId = getRandomInt(1, 5)
        setUserId(prevValue => randomId)
    }

    return (
        <React.Fragment>
            <h3>useEffect - life cycle</h3>

            {
                labelRecords.length > 0 &&
                <ul>
                    {
                        labelRecords.map(label => <li key={label.label}>{label.label}</li>)
                    }
                </ul>
            }

            <br />

            <label>UserId: {userId}</label><br />
            <button
                onClick={handleUserId}
            >
                Random UserId
            </button>
        </React.Fragment>
    )
}

export default LifeCycle