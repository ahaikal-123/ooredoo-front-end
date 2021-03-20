import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { data } from '../../data'
import { getAllApplicant } from '../../services/applicantsServices'
import Applicant from './applicant'
import './applicant.css'

const ApplicantsList = () => {
    const [test, setTest] = useState(null)
    console.log(test)

    useEffect(async() => {
        try {
            const res = await getAllApplicant()
            if(res.status === 200) {
                setTest(res.data)
            } else {
                setTest(null)
                window.alert("Can't load Applicant, please refresh the page")
            }
        } catch(e) {
            setTest(null)
            window.alert("Can't load Applicant, please refresh the page")
        }
    },[])

    return (
        <div className="allicant-list">
            {
                test && test.map(t => {
                    return <Applicant applicant={t}/>
                })
            }
        <Button color="primary" onClick={()=> {
            window.location.href= "/add"
        }}> Add Applicant </Button>
        </div>
    )
}

export default ApplicantsList
