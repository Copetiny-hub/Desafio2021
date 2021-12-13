import React,{useState, useEffect} from "react";


export const Usuarios = () => {


    const[nombre, setnombre] = useState('')
    const[apellidop, setapellidop] = useState('')
    const[apellidom, setapellidom] = useState('')
    const[rut, setrut] = useState('')
    const[edad, setedad] = useState('')
    const[sexo, setsexo] = useState('')
    const[nombreMed, setnombreMed] = useState('')
    const[fecha, setfecha] = useState('')
    const[hora, sethora] = useState('')
    const[correo, setcorreo] = useState('')
    const [usuario,setusuarios] = useState([])  

    const[numeroError,setnumeroError] = useState(0)
    const[numeroError1,setnumeroError1]= useState(0)
    const[numeroError2,setnumeroError2]= useState(0)
    const[numeroError3,setnumeroError3] = useState(0)
    const[emailError,setemailError] = useState(0)
    const[edadError,setedadError] = useState(0)
    const[dateError, setdateError] = useState(0)
    const[timeError, settimeError]= useState(0)
    const[runError,setrunError]= useState(0)




    const validarNombre = (e) =>{
        const value = e.target.value;
        console.log(value)
        const minValue=value.length >= 3
        const maxValue= value.length<= 20
        const onliLetra=/^[a-zA-Z\s]*$/g.test(value)

        if(onliLetra === false){
            setnumeroError(1)
        }else {
            if(!minValue){
                setnumeroError(2)
            }else{
                setnumeroError(3)
            }
        }
        if(onliLetra === true && minValue === true && maxValue === true){
            setnumeroError(0)
        }
        setnombre(value)
    }
    const validaraApellidop =(e) =>{
        const value = e.target.value;
        const minValue=value.length >= 3
        const maxValue= value.length<= 20
        const onliLetra=/^[a-zA-Z\s]*$/g.test(value)

        if(onliLetra === false){
            setnumeroError1(1)
        }else {
            if(!minValue){
                setnumeroError1(2)
            }else{
                setnumeroError1(3)
            }
        }
        if(onliLetra === true && minValue === true && maxValue === true){
            setnumeroError1(0)
        }
        setapellidop(value)
    }
    const validarApellidom = (e) =>{
        const value = e.target.value;
        const minValue=value.length >= 3
        const maxValue= value.length<= 20
        const onliLetra=/^[a-zA-Z\s]*$/g.test(value)

        if(onliLetra === false){
            setnumeroError2(1)
        }else {
            if(!minValue){
                setnumeroError2(2)
            }else{
                setnumeroError2(3)
            }
        }
        if(onliLetra === true && minValue === true && maxValue === true){
            setnumeroError2(0)
        }
        setapellidom(value)
    }
    const validarNombremed = (e) =>{
        const value = e.target.value;
        const minValue=value.length >= 3
        const maxValue= value.length<= 20
        const onliLetra=/^[a-zA-Z\s]*$/g.test(value)

        if(onliLetra === false){
            setnumeroError3(1)
        }else {
            if(!minValue){
                setnumeroError3(2)
            }else{
                setnumeroError3(3)
            }
        }
        if(onliLetra === true && minValue === true && maxValue === true){
            setnumeroError3(0)
        }
        setnombreMed(value)
    }

    const validarCorreo = (e) =>{
        const value = e.target.value
        const email = /(^[0-9a-zA-Z]+[-._+&])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/g.test(value)

        if(email === false){
            setemailError(1)
        }else{
            setemailError(0)
        }
        setcorreo(value)
    }

    const validarEdad = (e) => {
        const value = e.target.value
        if(value <= 0){
            setedadError(1)
        }else{
            if(value < 18){
            setedadError(2)
            }else{
                if(value < 111){
                    setedadError(0)
                }else{
                    setedadError(3)
                }
            }
        }

        
        setedad(value)
    }

    const validarFecha = (e) => {
        const value = e.target.value
        const date = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/g.test(value)

        if(date === false){
            setdateError(1)
        }else{
            setdateError(0)
        }
        setfecha(value)
    }

    const validarHora = (e) => {
        const value= e.target.value
        const hora = /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/g.test(value)

        if(hora === false){
            settimeError(1)
        }else{
            settimeError(0)
        }
        sethora(value)
    }
    const validarRut = (e) => {
        const value = e.target.value
        const run = /^[0-9\s]+[-|‐]{1}[0-9kK]{1}$/g.test(value)  
        const minlargo=value.length >= 9
        const maxlargo= value.length<=10

        if(run === false){
            setrunError(1)
        }else{
            if(!minlargo){
                setrunError(2)
            }else{
                setrunError(3)
            }
        }
        if(run === true && minlargo === true && maxlargo === true){
            setrunError(0)
        }
        setrut(value)
    }



    const handleSubmit= async (e) =>{
        e.preventDefault();  

        const res = await fetch(`http://localhost:5000/users`,{
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                nombre,
                apellidop,
                apellidom,
                rut,
                edad,
                sexo,
                nombreMed,
                fecha,
                hora,
                correo
                
            })
        })
        const data = await res.json();
        if(data){
            alert('HORA AGENDADA CON EXITO')
            window.location.reload();
        }
    }

    const getUsuarios = async () =>{ 
        const res = await fetch(`http://localhost:5000/users`)
        const data = await res.json();
        setusuarios(data)
    }

    useEffect(() => {
        getUsuarios();
    }, [])

    /*const email = async () =>{
        const res = await fetch(`http://localhost:5000/email`,{
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            }) 
    }*/



    return(
            <div className="row">
            <div className="col-md-4" class="wrapper" >
            
                <form onSubmit={handleSubmit} className=" card card-body" style={{backgroundColor:'#D6DBDF'}}>
                    <h3 style={{textAlignVertical: "center",textAlign: "center", }}>
                    <small class="text-muted" >Agende Su Hora</small>
                    </h3>
                    <div className= "form-group">
                        <input type="text" onChange={validarNombre} value = {nombre} className = "form-control" placeholder="Nombres" autoFocus name="nombre" required ></input>
                        {
                            (numeroError === 1) && (
                                <label className=" form-group">El nombre solo puede incluir letras</label>
                            )
                        }
                        {
                            (numeroError === 2) && (
                                <label className=" form-group">El nombre minimo es de 3 caracteres</label>
                            )
                        }
                        {
                            (numeroError === 3) && (
                                <label className=" form-group">El nombre maximo es de 30 caracteres</label>
                            )
                        }
                    </div>
                    <div className= "form-group">
                        <input type="text" onChange={validaraApellidop} value = {apellidop} className = "form-control" placeholder="Apellido Paterno" name="apellidop" required></input>
                    </div>
                    {
                        (numeroError1 === 1) && (
                            <label className=" form-group">El apellido paterno solo puede incluir letras</label>
                        )
                    }
                    {
                        (numeroError1 === 2) && (
                            <label className=" form-group">El el apellido paterno puede tener como minimo 3 caracteres</label>
                        )
                    }
                    {
                        (numeroError1 === 3) && (
                            <label className=" form-group">El apellido paterno puede tener como maximo 20 caracteres</label>
                        )
                    }

                    <div className= "form-group">
                        <input type="text" onChange={validarApellidom} value = {apellidom} className = "form-control" placeholder="Apellido Materno" autoFocus required></input>
                    </div>
                    {
                        (numeroError2 === 1) && (
                            <label className=" form-group">El apellido materno solo puede incluir letras</label>
                        )
                    }
                    {
                        (numeroError2 === 2) && (
                            <label className=" form-group">El apellido materno puede tener como minimo 3 caracteres</label>
                        )
                    }
                    {
                        (numeroError2 === 3) && (
                            <label className=" form-group">El apellido materno puede tener como maximo 20 caracteres</label>
                        )
                    }

                    <div className= "form-group">
                        <input type="string" onChange={validarRut} value = {rut} className = "form-control" placeholder="Rut" autoFocus required></input>
                    </div>
                    {
                        (runError === 1) && (
                            <label className=" form-group">Ingresar rut en formato 11111111-1</label>
                        )
                    }
                    {
                        (runError === 2) && (
                            <label className=" form-group">Rut invalido, minimo 9 caracteres</label>
                        )
                    }
                    {
                        (runError === 3) && (
                            <label className=" form-group">Rut invalido, maximo 10 caracteres</label>
                        )
                    }

                    <div className= "form-group">
                        <input type="number" onChange={validarEdad} value = {edad} className = "form-control" placeholder="Edad" autoFocus required></input>
                    </div>
                    {
                        (edadError === 1) && (
                            <label className=" form-group">Los numeros a ingresar deben ser mayor a 0</label>
                        )
                    }
        
                    {
                        (edadError === 2) && (
                            <label className=" form-group">Debes ser mayor de 18 años</label>
                        )
                    }
                    {
                        (edadError === 3) && (
                            <label className=" form-group">Numero fuera de rango</label>
                        )
                    }

                    <select class="form-select  mb-3" aria-label=".form-select-lg example" type="string" onChange={e => setsexo(e.target.value)} value = {sexo} className = "form-control" placeholder="Sexo" autoFocus required>
                        <option hidden selected required value ="">Sexo</option>
                        <option value="Masculino" >Masculino</option>
                        <option value="Femenino" >Femenino</option>
                    </select>
                    
                    <div className= "form-group">
                        <input type="text" onChange={validarNombremed} value = {nombreMed} className = "form-control" placeholder="Nombre del Medico" autoFocus required></input>
                    </div>
                    {
                        (numeroError3 === 1) && (
                            <label className=" form-group">El nombre del medico solo puede incluir letras</label>
                        )
                    }
                    {
                        (numeroError3 === 2) && (
                            <label className=" form-group">El nombre del medico puede tener como minimo 3 caracteres</label>
                        )
                    }
                    {
                        (numeroError3 === 3) && (
                            <label className=" form-group">El nombre del medico puede tener como maximo 20 caracteres</label>
                        )
                    }
                    <div className= "form-group">
                        <input type="string" onChange={validarFecha} value = {fecha} className = "form-control" placeholder="Fecha" autoFocus required></input>
                    </div>
                    {
                        (dateError === 1) && (
                            <label className=" form-group">Ingresar fecha en formato dd/mm/yyyy o dd-mm-yyyy</label>
                        )
                    }

                    <div className= "form-group">
                        <input type="string" onChange={validarHora} value = {hora} className = "form-control" placeholder="Hora" autoFocus required></input>
                    </div>
                    {
                        (timeError === 1) && (
                            <label className=" form-group">Ingresar hora en formato hh:mm</label>
                        )
                    }

                    <div className= "form-group">
                        <input type="email" onChange={validarCorreo} value = {correo} className = "form-control" placeholder="Correo" autoFocus required></input>
                    </div>
                    {
                        (emailError === 1) && (
                            <label className=" form-group">Correo invalido, ingresar en formato ejemplo@ejemplo.com</label>
                        )
                    }
                    <div style={{textAlignVertical: "center",textAlign: "center", }}>
                    <button disabled={numeroError>0 || numeroError1>0 || numeroError2>0||numeroError3>0|| emailError>0 || edadError>0 ||dateError>0|| timeError>0|| runError>0} /*onClick={email}*/ className="btn btn-primary btn-block" style={{ borderRadius: 20, width: 250}}>
                        Agendar Hora
                    </button>
                    </div>
                </form>
            </div>
            <div className="col md 8">
            </div>
        </div>
    
    )
}


