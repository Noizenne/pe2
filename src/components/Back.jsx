import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledBack } from '../styles/Back.styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Back() {
    let navigate = useNavigate();

    return (
        <>
          <StyledBack onClick={() => navigate(-1)}><ArrowBackIcon sx={{color: 'blue', width: 30}} /> Back</StyledBack> 
        </>
    );
}

export default Back