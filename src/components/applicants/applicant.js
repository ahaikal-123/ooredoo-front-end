import { Button } from '@material-ui/core';
import React from 'react'
import { deleteApplicant ,getApplicantById} from '../../services/applicantsServices';

function Applicant(props) {
    const { applicantsName, id, contactEmail } = props.applicant;

    return (
        <div className="applicant-row">
            <div className="applicant-content">{applicantsName}</div>
            <div className="applicant-content">{id}</div>
            <div className="applicant-content">{contactEmail}</div>
            <Button color="primary" onClick={async() => {
                try {
                    const res = await deleteApplicant(id)
                    console.log(res);
                    if(res.status === 200) {
                        window.location.href = '/'
                    } else {
                        window.alert("can't delete")
                    }
                } catch (e) {
                    window.alert("can't delete")
                }
                
            }}>Delete</Button>
            <Button  onClick={() => {
                window.location.href = `/apllicant/${id}`   
            }}color="primary">View</Button>
        </div>
    )
}

export default Applicant
