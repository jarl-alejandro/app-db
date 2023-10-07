"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

const NewCategory = () => {
  const [newData, setNewData] = useState({
    name: "",
    site: ''
  });
  const params = useParams();
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const fetchAllData = async () => {
    const res = await fetch(`/api/study/${params.id}`);
    const data = await res.json();
    setNewData({ name: data.name, site: data.site });
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
      await createStudy();
    }

    router.push("/store/study");
  };

  const handleChange = ({ target: { value, name } }) => {
    setNewData(data => Object.assign({}, data, {
      [name]: value
    }))
  }

  const validate = () => {
    let errors = {};

    if (!newData.name) {
      errors.name = "name is required";
    }
    return errors;
  };

  const createStudy = async () => {
    try {
      await fetch("/api/study", {
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
        const res = await fetch(`/api/study/${params.id}`, {
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
      await fetch(`/api/study/${params.id}`, {
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
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          onChange={handleChange}
          value={newData.name}
          autoFocus
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
          ></input>

        <input
            type="text"
            placeholder="Sitio web"
            name="site"
            onChange={handleChange}
            value={newData.site}
            autoFocus
            className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
        ></input>

        <button className="bg-green-600 text-white font-semibold px-8 py-2 rounded-lg">
          {params.id ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
};

export default NewCategory;
