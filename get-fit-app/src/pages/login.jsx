
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
});

function FormikForm() {
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

  return (
   <div className=" bg-gray-700 border-2 border-gray-500 bg-opacity-70 w-auto p-10 rounded-3xl flex  flex-col justify-self-center mt-36 relative justify-center h-auto shadow-2xl  ">
     <h1 className="text-white text-3xl font-extrabold text-center mb-7 ">Log In</h1>
     <Formik className="flex flex-col"
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // console.log(,values);
        const users = JSON.parse(localStorage.getItem('users')) || [];
        // console.log(users);
        const currentUser = users.find(user=>user?.name === values.username && user?.password === values.password);
        // console.log(currentUser);

        if (currentUser) {
            setSubmitted(true);
            setTimeout( ()=>navigate("/addWorkout", { replace: true }) , 1000);
           

            console.log(currentUser);
          } else {
             alert('incorrect Password or Username')
             setSubmitted(false);
          }


      }}
    >
      {() => (
        <Form>
          <div>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              className={`mt-2 mb-2 rounded-2xl border-2 font-semibold text-xl p-3 `}
            />
            <ErrorMessage className="text-red-400 text-xl font-semibold" name="username" component="p" />
          </div>


          <div>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className={`mt-2 mb-2 rounded-2xl border-2 font-semibold text-xl p-3 `}
            />
            <ErrorMessage className="text-red-400 text-xl font-semibold" name="password" component="p" />
          </div>

          <div className='flex justify-around mt-10'>
                <button className="  shadow-orange-600  shadow-sm hover:shadow-lg hover:shadow-orange-500 w-32 bg-gray-500 rounded-xl p-2 hover:bg-gray-800 transform duration-300 active:scale-95 text-white font-bold text-2xl hover:scale-105 " type='submit'>Log In</button>
                <Link to='/'> <button  className=" shadow-orange-600 hover:shadow-lg shadow-sm hover:shadow-orange-500 w-32 bg-gray-500 rounded-xl p-2 hover:bg-gray-800 transform duration-300 active:scale-95 text-white font-bold text-2xl hover:scale-105 ml-6" >Sign Up</button> </Link>


            </div>

          {submitted && <p className="uppercase text-center font-bold text-white text-3xl mt-5 transition ease-in duration-100 ">welcome back</p> }

        </Form>
      )}
    </Formik>
   </div>
  );
}

export default FormikForm;
