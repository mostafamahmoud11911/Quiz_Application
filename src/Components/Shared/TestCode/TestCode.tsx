import { MouseEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { Button } from '@/Components'
import { AuthInput } from '../AuthInputs/AuthInputs'
import { IFormLogin } from '@/InterFaces/AuthInterFaces'
import { UseFormSetValue } from 'react-hook-form'
interface IProps {
  setValue: UseFormSetValue<IFormLogin>
}

const TestCode = ({ setValue }: IProps) => {

  const handleTestCode = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (testCode === "realmadrid") {
      setShow(true)
      toast.success("Choose account Kind", {
        autoClose: 2000,
        theme: "colored",
      });


    } else {
      setShow(false)
      toast.error("Wrong Code", {
        autoClose: 2000,
        theme: "colored",
      })
    }

  }
  const [radioCheckedAdmin, setRadioCheckedAdmin] = useState<boolean>(false);
  const [radioCheckedUser, setRadioCheckedUser] = useState<boolean>(false);

  const [testCode, setTestCode] = useState("")
  const [show, setShow] = useState(false)


  const handleRadioChangeAdmin = (e: MouseEvent<HTMLInputElement>) => {
    setRadioCheckedAdmin(e.currentTarget.checked);
    setValue("email", "mm0766633@gmail.com")
    setValue("password", "@Password123!")
  };

  const handleRadioChangeUser = (e: MouseEvent<HTMLInputElement>) => {
    setRadioCheckedUser(e.currentTarget.checked);
    setValue("email", "mostafamahmoudd04@gmail.com")
    setValue("password", "@Password123!")
  };
  return <>
    <form className="flex flex-col justify-center mt-2 lg:flex-row ">
      <div className='flex items-center justify-center space-x-5'>
        <AuthInput
          className='w-32'
          type="password"
          placeholder="test Code"
          onChange={(e) => {
            setTestCode(e.target.value)
          }}
        />
        <Button
          className='mt-2'
          onClick={handleTestCode}
        >
          Submit
        </Button>
      </div>
      <div
        className={`${show ? "flex items-center gap-[10px] ml-[10px]" : "hidden"} space-x-3 justify-center`}>
        <div className="flex items-center mt-2 space-x-2 ">
          <label htmlFor="admin" >Instructor</label>
          <input type="radio" name="check" id="admin"
            defaultValue={radioCheckedAdmin ? "true" : "false"}
            onClick={(e) => handleRadioChangeAdmin(e)}
            className="radioInput" />
        </div>
        <div className="flex items-center mt-2 space-x-2 ">
          <label htmlFor="user">Student</label>
          <input type="radio" name="check" id="user"
            defaultValue={radioCheckedUser ? "true" : "false"}
            onClick={(e) => handleRadioChangeUser(e)}
            className="radioInput" />
        </div>
      </div>
    </form>
  </>
}

export default TestCode