import { useState,useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  const [pacientes,setPacientes]= useState([]);
  const [paciente,serPaciente]  = useState([]);
  
  const eliminarPaciente =(id)=>{
    const pacienteActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacienteActualizados);
  }

  useEffect(()=>{
    const obtenerLS =()=>{
      const pacientesLS =JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
    }
    obtenerLS();
  },[])


  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes));
  },[pacientes])



  return (
  <div className="container mx-auto mt-20">
    <Header />
    <div className="mt-12 md:flex">
    <Formulario 
      pacientes    = {pacientes}
      setPacientes = {setPacientes} 
      paciente     = {paciente}
      setPaciente  = {serPaciente} 
    />
    <ListadoPacientes 
         pacientes        = {pacientes}
         setPaciente      = {serPaciente} 
         eliminarPaciente = {eliminarPaciente}
    />
    </div>
  </div>   
  )
}

export default App