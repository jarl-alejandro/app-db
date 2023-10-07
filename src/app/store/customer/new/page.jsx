"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

const COMPONENT = 'customer';
const fields = [
  { code: 'name', label: 'Nombre' },
  { code: 'phone', label: 'Telefono' },
  { code: 'email', label: 'Email' },
]

const initialValues = {};

fields.forEach(field => {
  initialValues[field.code] = '';
});

export default function NewData () {
  const [newData, setNewData] = useState(initialValues);
  const params = useParams();
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const fetchAllData = async () => {
    const res = await fetch(`/api/${COMPONENT}/${params.id}`);
    const data = await res.json();

    const form = fields.reduce((json, field) => {
      json[field.code] = data[field.code];
      return json;
    }, {})

    setNewData(form);
  };

  useEffect(() => {
    if (params.id) {
      fetchAllData();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errs = validate();

    if (Object.keys(errs).length) return setErrors(errs);

    setIsSubmitting(true);

    if (params.id) {
      await updateStudy();
    } else {
      await create();
    }

    router.push(`/store/${COMPONENT}`);
  };

  const handleChange = ({ target: { value, name } }) => {
    setNewData(data => Object.assign({}, data, {
      [name]: value
    }))
  }

  const validate = () => {
    let errors = {};

    fields.forEach(field => {
      if (!newData[field.code]) {
        errors[field.code] = `${field.label} is required`;
      }
    });
    return errors;
  };

  const create = async () => {
    try {
      await fetch(`/api/${COMPONENT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("¿Estás segura de que quieres eliminar?")) {
      try {
        const res = await fetch(`/api/${COMPONENT}/${params.id}`, {
          method: "DELETE",
        });
        router.push("/");
        router.refresh();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const updateStudy = async () => {
    try {
      await fetch(`/api/${COMPONENT}/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="min-h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <header className="flex justify-between">
          <h1 className="font-bold text-3xl text-slate-600">
            {!params.id ? "Crear" : "Actualizar"}
          </h1>
          {params.id && (
            <button
              className="bg-red-500 px-3 py-1 rounded-md"
              onClick={handleDelete}
            >
              Eliminar
            </button>
          )}
        </header>

        { !!Object.values(errors).length && (
            <div>
              { Object.keys(errors).map((item => (
                  <h6 key={item} className="font-bold text-3xl text-slate-600">
                    { errors[item] }
                  </h6>
              ))) }
            </div>
        )}

        <div>
          { Object.keys(newData).map((f) => {
            const field = fields.find(item => item.code === f);

            return (
                <input
                    key={field.code}
                    type="text"
                    placeholder={field.label}
                    name={ field.code }
                    onChange={handleChange}
                    value={newData[field.code]}
                    className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                />
            )
          }) }
        </div>


        <button className="bg-green-600 text-white font-semibold px-8 py-2 rounded-lg">
          {params.id ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
};

