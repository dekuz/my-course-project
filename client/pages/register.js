import { useState } from "react";


const Register = ()=>{

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.table({name,email,password})
    };
    return(
        <>
            <h1 className="p-5 big-header text-center bg-primary square">Register </h1>
            
            <div className="container col-md-4 offset-md-4 pb-5">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text" 
                        className="form-control mb-4 p-1" 
                        value={name} 
                        onChange={e=>setName(e.target.value)}
                        placeholder="Enter name" 
                        required
                    />

                    <input
                        type="email" 
                        className="form-control mb-4 p-1" 
                        value={email} 
                        onChange={e=>setEmail(e.target.value)}
                        placeholder="Enter email" 
                        required
                    />

                    <input
                        type="password" 
                        className="form-control mb-4 p-1" 
                        value={password} 
                        onChange={e=>setPassword(e.target.value)}
                        placeholder="Enter password" 
                        required
                    />
                    
                    {/* <div class="d-grid"> */}
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    {/* </div> */}
                </form>
            </div>
        </>
    )
}

export default Register;