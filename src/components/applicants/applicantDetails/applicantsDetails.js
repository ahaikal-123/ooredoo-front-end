import React, { useEffect, useState } from 'react'
import { getApplicantById } from '../../../services/applicantsServices'

function ApplicantsDetails() {

    const [applicantData, setApplicantData] = useState(null)
    useEffect(() => {
        const callApplicantById = async () => {
            try {
                const res = await getApplicantById(window.location.pathname.split('/')[2])
                console.log(res);
                if(res.status === 200) {
                    setApplicantData(res.data)
                } else {
                    setApplicantData(null)
                }
            } catch(e) {
                setApplicantData(null)
            }
        }
        callApplicantById()
    }, [])
    console.log(applicantData);
    return (
        <div>
            {
                applicantData ? <div style={{margin: '20', padding: '20'}}>
                    <div>id : {applicantData.id}</div>
                    <div>name : {applicantData.applicantsName}</div>
                    <div>email : {applicantData.contactEmail}</div>
                    <div>id number : {applicantData.idNumber}</div>
                    <div>date : {`${applicantData.birthDate[0]}-${applicantData.birthDate[1]}-${applicantData.birthDate[2]}`}</div>
                    <div>description : {applicantData.brandInterestDescription}</div>
                    <div>investment Amount : {applicantData.investmentAmount}</div>
                    <div>notes : {applicantData.additionalNotes}</div>
                </div> 
                :
                <div>No data</div>
            }
        </div>
    )
}

export default ApplicantsDetails
