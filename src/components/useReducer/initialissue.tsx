import React, { useEffect, useState } from "react";

const InitialIssueReducer = () => {
    const [user, setUser] = useState({
        name: '',
        age: 0,
        address: { address1: '', address2: '' },
        foo: {
            foo1: {
                foo2: {
                    name: '',
                    test: '',
                },
                new: {}
            }
        }
    })

    useEffect(() => {
        setUser({...user, foo: {...user.foo, foo1: {...user.foo.foo1, foo2: {...user.foo.foo1.foo2, name: 'test'}}}})
    }, [])

    return <label>`Example: ${JSON.stringify(user)}`</label>
}

export default InitialIssueReducer