const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {
   const {id,nombre,propietario,email,fecha,sintomas}=paciente;
  
   const handleEliminar =()=>{
       const respuesta= confirm('Deseas eliminar este paciente?');
       if(respuesta){
         eliminarPaciente(id);
       }

   }
   return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
          <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Mascota: {' '} 
             <span className="font-normal normal-case" >{nombre}</span>             
          </p>
          
          <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Propietario: {' '} 
             <span className="font-normal normal-case" >{propietario}</span>             
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '} 
             <span className="font-normal normal-case" >{email}</span>             
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {' '} 
             <span className="font-normal normal-case" >{fecha}</span>             
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '} 
             <span className="font-normal normal-case" >{sintomas}</span>             
          </p>
          <div className=" flex justify-center mt-10">
            <button 
               className="m-2 py-2 px-10 bg-yellow-300 hover:bg-yellow-400 rounded-xl text-red-400 font-bold uppercase"
               type="button"
               onClick={()=>setPaciente(paciente)}
             > Editar</button>

            <button 
               className="m-2 py-2 px-10 bg-red-300 hover:bg-red-400 rounded-xl text-yellow-100 font-bold uppercase"
               type="button"
               onClick={handleEliminar} 
             > Eliminar</button>
            

          </div>
      </div>

  )
}

export default Paciente
