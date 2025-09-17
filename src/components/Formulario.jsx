import {useState} from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { gql } from "@apollo/client";
import { useMutation } from '@apollo/client/react'

const NUEVA_CONSULTA = gql`
mutation nuevaConsulta($input: InputConsulta) {
    nuevaConsulta(input: $input)
}`

const Formulario = () => {
    const [nuevaConsulta] = useMutation(NUEVA_CONSULTA);
    const [mensaje, setMensaje ] = useState(null);


    // Validación de formulario
    const formik = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            email: '', 
            telefono: '',
            consulta: ''
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required('El nombre es obligatorio'),
            apellido: Yup.string().required('El apellido es obligatorio'),
            email: Yup.string().email('El email no es válido').required('El email es obligatorio'),
            telefono: Yup.string().required('El telefono es obligatorio'),
            consulta: Yup.string().required('El mensaje no puede ir vacio')
        }),
        onSubmit: async valores => {

            const {nombre, apellido, email, telefono, consulta} = valores;
            console.log(nombre)
    try {
        const { data } = await nuevaConsulta({
            variables : {
                input : {
                    nombre,
                    apellido,
                    email,
                    telefono,
                    consulta
                }
            }
        });
        setMensaje(data.nuevaConsulta);
        setTimeout(() => {
            setMensaje(null);
            formik.resetForm();
        }, 3000);
    } catch (error) {
        setMensaje(error.message.replace('GraphQL error:', ''));
        setTimeout(() => {
            setMensaje(null);
        }, 3000);
    }
        }
    });

    const mostrarMensaje = () => {
        return (
        <div className='bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto'>
            <p>{mensaje}</p>
        </div> 
    )
    }    

    return (
        <>

{mensaje && mostrarMensaje() }


            <div className='flex flex-col items-center justify-center pt-5 text-white bg-gradient-to-t from-black to-gray-900 font-extrabold'  title="Envie sus datos y me contactaré con usted">
                    <h4 className='text-center text-2xl text-white font-light pb-6'>Realicé su consulta</h4>
                <div className='w-full max-w-sm'>
                    <form 
                        className='bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4'
                        onSubmit={formik.handleSubmit}
                    >

                    <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='nombre'>
                                Nombre
                            </label>

                            <input 
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id="nombre"
                                type='text'
                                value={formik.values.nombre}
                                placeholder='Su Nombre' 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                    </div>

                    {formik.touched.nombre && formik.errors.nombre ? (
                                <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                    <p className='font-bold'>Error</p>
                                    <p>{formik.errors.nombre}</p>
                                </div>
                            ): null }       

                    <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='apellido'>
                                Apellido
                            </label>

                            <input 
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id="apellido"
                                type='text'
                                value={formik.values.apellido}
                                placeholder='Su Apellido' 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                    </div>

                    {formik.touched.apellido && formik.errors.apellido ? (
                                <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                    <p className='font-bold'>Error</p>
                                    <p>{formik.errors.apellido}</p>
                                </div>
                            ): null }           

                    <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                                Email
                            </label>

                            <input 
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id="email"
                                type='email'
                                value={formik.values.email}
                                placeholder='Su email' 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                    </div>

                    {formik.touched.email && formik.errors.email ? (
                                <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                    <p className='font-bold'>Error</p>
                                    <p>{formik.errors.email}</p>
                                </div>
                            ): null }           

                    <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='telefono'>
                                Telefono
                            </label>

                            <input 
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id="telefono"
                                type='telefono'
                                value={formik.values.telefono}
                                placeholder='Su Telefono' 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                    </div>

                    {formik.touched.telefono && formik.errors.telefono ? (
                                <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                    <p className='font-bold'>Error</p>
                                    <p>{formik.errors.telefono}</p>
                                </div>
                            ): null }           

                    <div className='mb-4'>
                            <label className='block text-gray-800 text-sm font-bold mb-2' htmlFor='consulta'>
                                Tu mensaje
                            </label>

                            <textarea 
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id="consulta"
                                type='text'
                                value={formik.values.consulta}
                                placeholder='Escribe tu consulta' 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                    </div>
                    
                    {formik.touched.consulta && formik.errors.consulta ? (
                                <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                                    <p className='font-bold'>Error</p>
                                    <p>{formik.errors.consulta}</p>
                                </div>
                            ): null }        

                        <input 
                            type='submit'
                            value="Realizar Consulta"
                            title="Enviar Consulta"
                            className='bg-gray-800 w-full mt-5 p-2 text-white uppercas hover:bg-gray-900' 
                        />

                    </form>
                </div>
            </div>
        </>
    )
}

export default Formulario;