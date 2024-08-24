
import { toast } from "react-toastify";


 export const successToasts = (message,postion)=>{
    toast.success(message,{
        postion:postion,

    });
};

 export const errorToasts = (message,postion)=>{
    toast.error(message,{
        postion:postion,
    })
} 