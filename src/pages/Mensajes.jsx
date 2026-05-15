import { useState } from "react"
import { supabase } from "../lib/supabaseClient" // ajusta la ruta si es necesario

export default function Mensajes() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  })

  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  async function guardarMensaje(e) {
    e.preventDefault()
    setLoading(true)

    try {

      // 1️⃣ Guardar en Supabase
      const { error } = await supabase
        .from("mensajes")
        .insert([{
          nombre: form.nombre,
          email: form.email,
          mensaje: form.mensaje
        }])

    if (error) throw error

    // 2️⃣ Enviar correos (Netlify Function)
    const response = await fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nombre: form.nombre,
        email: form.email,
        mensaje: form.mensaje
      })
    })

    if (!response.ok) {
      throw new Error("Error enviando correos")
    }

    // ✅ éxito
    alert("Mensaje enviado correctamente ✅")
    setForm({ nombre: "", email: "", mensaje: "" })

  } catch (err) {
    console.error(err)
    alert("Ocurrió un error al enviar el mensaje")
  }

  setLoading(false)
  }

  return (

    <div className="max-w-lg mx-auto my-10 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 mt-16">
      <h1 className="text-3xl font-bold text-sky-900 mb-6 text-center">Obten una cotización</h1>

      <form onSubmit={guardarMensaje} className="flex flex-col gap-4">
        {/* Campo Nombre */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-blue-500">¿Cuál es tu nombre?</span>
          </label>
          <input
            name="nombre"
            placeholder="Ej. Juan Pérez"
            className="input input-bordered input-primary w-full focus:ring-2 focus:ring-sky-500 bg-gray-50 text-black"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-blue-500">Correo electrónico</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="correo@ejemplo.com"
            className="input input-bordered input-primary w-full bg-gray-50 text-black"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo Mensaje */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-blue-500">Tu mensaje</span>
          </label>
          <textarea
            name="mensaje"
            placeholder="Cuéntanos en qué podemos ayudarte..."
            className="textarea textarea-bordered textarea-primary h-32 text-base bg-gray-50 text-black"
            value={form.mensaje}
            onChange={handleChange}
            required
          />
        </div>

        {/* Botón de Enviar */}
        <button 
          className={`btn bg-sky-900 hover:bg-sky-800 border-none mt-4 text-white font-medium rounded-lg ${loading ? 'loading' : ''}`}
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar Mensaje"}
        </button>
      </form>
    </div>
  )
}