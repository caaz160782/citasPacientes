import {useState} from 'react';

const Formulario = () => {
  const [nombre,setNombre]=useState('');
  const [propietario,setPropietario]=useState('');
  const [email,setEmail]=useState('');
  const [fecha,setFecha]=useState('');
  const [sintomas,setSintomas]=useState('');

  const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("enviado el form");
  }
  

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">
          Seguimiento Pacientes
        </h2>

        <p className="text-lg mt-5 text-center mb-10">Añade pacientes y {''}
          <span className="text-indigo-500 font-bold"> Administralos</span>
        </p>
        <form 
          className="bg-white shadow-md rounded-lg py-10 px-5  mb-10"
          onSubmit={handleSubmit}
        
        >
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
              Nombre Mascota
             </label>
            <input 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="mascota"
              type="text"
              placeholder="Nombre de la mascota"  
              value={nombre}
              onChange={(e)=>setNombre(e.target.value)}            
            />
          </div>
          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
              Nombre Propietiario
             </label>
            <input 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="propietario"
              type="text"
              placeholder="Nombre del Propietario"
              value={propietario}
              onChange={(e)=>setPropietario(e.target.value)}                          
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              Email
             </label>
            <input 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="email"
              type="email"
              placeholder="Email Propietario"     
              value={email}
              onChange={(e)=>setEmail(e.target.value)}        
            />
          </div>
          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
              Alta
             </label>
            <input 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="alta"
              type="date"  
              value={fecha}
              onChange={(e)=>setFecha(e.target.value)}            
            />
          </div>
          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
              Sintomas
             </label>
            <textarea 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="sintomas"
              placeholder="Describe los sintomas"    
              value={sintomas}
              onChange={(e)=>setSintomas(e.target.value)}                
            />
          </div>
          <div className="mb-5">
            <input
             type="submit"
             className="bg-indigo-600 w-full p-3 
                        text-white uppercase 
                         font-bold
                        hover:bg-indigo-700 
                         cursor-pointer
                         transition-all"
             value="Agregar Paciente"
            />
          </div>


        </form>
    </div>
  )
}

export default Formulario
