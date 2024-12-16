import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
import { useState } from "react"
  

const ShowAlert = ({title,discription,goToStart}) => {
    const [open,setOpen] = useState(true);
    const onClickHandler = ()=>{
        setOpen(false);
        goToStart();
    }
  return (
    <AlertDialog open={open} >
      <AlertDialogContent className='w-3/4 md:w-full'>
          <AlertDialogHeader>
          <AlertDialogTitle className='text-xl'>{title}</AlertDialogTitle>
          <AlertDialogDescription>
              {discription}
          </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
          <AlertDialogAction 
              onClick={onClickHandler}>
              OK
          </AlertDialogAction>
          </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ShowAlert