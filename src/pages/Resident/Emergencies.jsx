import React, { useState } from 'react';
import ResidentView from "../../components/View/ResidentView";
import style from "./Emergencies.module.css";
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Mueve la función card aquí para que esté disponible en el componente Emergencies
const card = (garita, encargado, numero) => (
  <React.Fragment>
    <CardContent align="center">
      <Typography variant="h4" component="div">
        Garita {garita}
      </Typography>
      <Typography variant="body" align="center">
        Encargado: {encargado}
        <br />
        {'Numero: ' + numero}
        <br />
      </Typography>
      <Button size="medium">Llamar al {numero}</Button>
    </CardContent>
  </React.Fragment>
);

function BasicModal({ open, onClose }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAgendarCita = () => {
    // Agregar aquí la lógica para agendar la cita
    // Puedes utilizar la fecha seleccionada en 'selectedDate'
    // y realizar la acción necesaria
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={style.container}>
        <div className={style.content}>
          <h1 className={style.title}>AGENDAR CITA</h1>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              disablePast
              label="Fecha de la cita"
              value={selectedDate}
              onChange={handleDateChange}
            />
            <StaticTimePicker />
          </LocalizationProvider>
          <Button variant="contained" onClick={handleAgendarCita}>Agendar cita</Button>
        </div>
      </div>
    </Modal>
  );
}

const Emergencies = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ResidentView>
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
      <BasicModal open={open} onClose={handleClose} />
    </ResidentView>
  );
}

export default Emergencies;
