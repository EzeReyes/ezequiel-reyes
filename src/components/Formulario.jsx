import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import Swal from "sweetalert2";

const NUEVA_CONSULTA = gql`
  mutation nuevaConsulta($input: InputConsulta) {
    nuevaConsulta(input: $input)
  }
`;

const Formulario = () => {
  const [nuevaConsulta] = useMutation(NUEVA_CONSULTA);
  const [mensaje, setMensaje] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      consulta: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre es obligatorio"),
      apellido: Yup.string().required("El apellido es obligatorio"),
      email: Yup.string()
        .email("El email no es válido")
        .required("El email es obligatorio"),
      telefono: Yup.string().required("El teléfono es obligatorio"),
      consulta: Yup.string().required("El mensaje no puede ir vacío"),
    }),
    onSubmit: async (valores) => {
      setIsSubmitting(true);
      try {
        // Envío por GraphQL
        const { data } = await nuevaConsulta({
          variables: { input: valores },
        });
        setMensaje(data.nuevaConsulta);

        // Envío por REST al backend
        await fetch("https://landinggraphql.onrender.com/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(valores),
        });

        Swal.fire({
            title: '¡Mensaje enviado!',
            text: 'Tu consulta se generó exitosamente',
            icon: 'success',
        });

        formik.resetForm();
      } catch (error) {
        Swal.fire({
            title: 'Se ha producido!',
            text: error.message,
            icon: 'error',
        });
      } finally {
        setIsSubmitting(false);
        setTimeout(() => setMensaje(null), 3000);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      {mensaje && (
        <div className="bg-green-100 text-green-800 py-2 px-4 rounded mb-4 text-center">
          {mensaje}
        </div>
      )}

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formik.values.nombre}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="w-full mb-3 p-2 border rounded"
      />
      {formik.touched.nombre && formik.errors.nombre && (
        <p className="text-red-500 text-sm">{formik.errors.nombre}</p>
      )}

      <input
        type="text"
        name="apellido"
        placeholder="Apellido"
        value={formik.values.apellido}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="w-full mb-3 p-2 border rounded"
      />
      {formik.touched.apellido && formik.errors.apellido && (
        <p className="text-red-500 text-sm">{formik.errors.apellido}</p>
      )}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="w-full mb-3 p-2 border rounded"
      />
      {formik.touched.email && formik.errors.email && (
        <p className="text-red-500 text-sm">{formik.errors.email}</p>
      )}

      <input
        type="text"
        name="telefono"
        placeholder="Teléfono"
        value={formik.values.telefono}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="w-full mb-3 p-2 border rounded"
      />
      {formik.touched.telefono && formik.errors.telefono && (
        <p className="text-red-500 text-sm">{formik.errors.telefono}</p>
      )}

      <textarea
        name="consulta"
        placeholder="Tu mensaje"
        value={formik.values.consulta}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="w-full mb-3 p-2 border rounded h-32 resize-none"
      />
      {formik.touched.consulta && formik.errors.consulta && (
        <p className="text-red-500 text-sm">{formik.errors.consulta}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-2 px-4 rounded text-white ${
          isSubmitting ? "bg-gray-400" : "bg-black hover:bg-gray-800"
        }`}
      >
        {isSubmitting ? "Enviando..." : "Enviar consulta"}
      </button>
    </form>
  );
};

export default Formulario;