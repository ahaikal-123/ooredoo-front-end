import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { postApplicant } from '../../../services/applicantsServices';

export default function PostApplicants() {
    const [state, setState] = useState({
        applicantsName: "",
        idNumber: 0,
        contactEmail: "",
        investmentAmount: 0,
        additionalNotes: ""
    })
    const handleChange = (e) => {
        setState({ ...state, [e.target.id] : e.target.value})
    }
  return (
    <div style={{textAlign:"center"}}>
      <Typography variant="h6" gutterBottom>
        Add Applicant
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="applicantsName"
            name="name"
            label="Applicant Name"
            value={state.applicantsName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="idNumber"
            name="idNumber"
            label="ID Number"
            value={state.idNumber}
            type="number"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="contactEmail"
            name="contactEmail"
            label="Email"
            value={state.contactEmail}
            onChange={handleChange}
            type="email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="investmentAmount"
            name="investmentAmount"
            label="Investment amount"
            value={state.investmentAmount}
            onChange={handleChange}
            type="number"

          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="additionalNotes"
            name="additionalNotes"
            label="Additional notes"
            value={state.additionalNotes}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}><Button color="primary" onClick={async() => {
            if(state.idNumber < 9999) {
                window.alert("ID number must be 5 or more digits")
                return 0;
            }
                const body = state
                body.brandInterestDescription = "dis"
                body.birthDate = new Date('2020/03/01')
                body.idNumber = parseInt(body.idNumber)
                body.investmentAmount = parseFloat(body.investmentAmount)
            try {
                const res = await postApplicant(body)
                if(res.status === 201){
                    window.alert("Created")
                } else {
                    window.alert("Can't Create")
                }
            } catch(e) {
                window.alert("Can't Create")

            }

        }}>Add</Button></Grid>
      </Grid>
    </div>
  );
}