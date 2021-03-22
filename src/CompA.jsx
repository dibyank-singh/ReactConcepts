import React, { createContext } from 'react'
import CompB from './CompB'


const FirstName = createContext()
const LastName = createContext()


const CompA = () => {
    return (
        <>
            <FirstName.provider value={"Divyank"}>
                <LastName.provider value={"Singh"}>
                    <CompB></CompB>
                </LastName.provider >
            </FirstName.provider>
        </>
    );

};

export default CompA;
export { FirstName, LastName };