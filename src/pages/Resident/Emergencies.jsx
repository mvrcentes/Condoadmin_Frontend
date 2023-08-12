import React from 'react'
import ResidentView from "../../components/View/ResidentView"

//css
import style from "./Emergencies.module.css"

import Button from '@mui/material/Button'

import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticTimePicker } from '@mui/x-date-pickers';

import Fab from '@mui/material/Fab';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



function BasicModal() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // garita
  // seguridad
  // mantenimiento
  // 

  const card = (garita, encargado, numero) => (
    <React.Fragment>

      <CardContent align="center">

        <Typography variant="h4" component="div">
          Garita {garita}
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <Typography variant="body" align="center" >
          Encargado: {encargado}
          <br />
          {'Numero: ' + numero}
          <br />
        </Typography>
        <Button size="medium">Llamar al {numero}</Button>

      </CardContent>

    </React.Fragment>
  );

  return (
    <div>

      <div className={style.tarjetas}>
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card("Miraflores", "Jorge Lujan", "2400 - 3000")}</Card>
        </Box>

        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card("Tulipanes", "Byron Aldana", "2600 - 2000")}</Card>
        </Box>

        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card("Orquideas", "Edwin Castellanos", "2444 - 4000")}</Card>
        </Box>

        <Button variant="contained" onClick={handleOpen}>Agendar cita</Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={style.container}>
          <div className={style.content}>
            <h1 className={style.title}>AGENDAR CITA</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker disablePast label="Basic date picker" />
              <StaticTimePicker ></StaticTimePicker>
            </LocalizationProvider>
          </div>
        </div>



        {/* <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}
      </Modal>
    </div>
  );
}

const Emergencies = () => {
  return (
    <ResidentView>



      {/* <Fab variant="extended" size="small">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab> */}

      <BasicModal />


      {/* <Button variant="contained">AGENDAR CITA</Button> */}
    </ResidentView>
  )

}

export default Emergencies
