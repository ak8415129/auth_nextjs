
import * as React from 'react'
export default function UserProfile({params}:any){
    const { id }:any = React.use(params)
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1> Profile</h1>
            <hr />
            <p className="text-4xl"> Profile Page 
             {/* <span className=" p-2 rounded bg-black"> {params.id} </span>    */}
            <span className='p-2 rounded bg-black'> {id} </span>
            </p>
            

        </div>
    );
}