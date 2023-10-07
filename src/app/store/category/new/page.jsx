"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

const NewCategory = () => {
  const [newCategory, setNewCategory] = useState({
    name: ""
  });
  const params = useParams();
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const getCategory = async () => {
    const res = await fetch(`/api/categorys/${params.id}`);
    const data = await res.json();
    setNewCategory({ name: data.name });
  };

  useEffect(() => {
    if (params.id) {
      getCategory();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errs = validate();

    if (Object.keys(errs).length) return setErrors(errs);

    setIsSubmitting(true);

    if (params.id) {
      await updateCategory();
    } else {
      await createCategory();
    }

    router.push("/store/category");
  };

  const handleChange = (e) =>
    setNewCategory({ ...newCategory, [e.target.name]: e.target.value });

  const validate = () => {
    let errors = {};

    if (!newCategory.name) {
      errors.name = "name is required";
    }
    return errors;
  };

  const createCategory = async () => {
    try {
      await fetch("/api/categorys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
      });
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("¿Estás segura de que quieres eliminar este categoria ?")) {
      try {
        const res = await fetch(`/api/categorys/${params.id}`, {
          method: "DELETE",
        });
        router.push("/");
        router.refresh();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const updateCategory = async () => {
    try {
      await fetch(`/api/categorys/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
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
          placeholder="Category name"
          name="name"
          onChange={handleChange}
          value={newCategory.name}
          autoFocus
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
          ></input>

        <button className="bg-green-600 text-white font-semibold px-8 py-2 rounded-lg">
          {params.id ? "Actualizar" : "Crear"}
        </button>
      </form>
    </div>
  );
};

export default NewCategory;
