"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import SelectCategorys from "../../../../components/SelectCategorys";

const NewGame = () => {
  const [newGame, setNewGame] = useState({
    name: "",
    developed_by: "",
    minimum_age:"",
    categoryId: "",
    amount: ""
  });
  const params = useParams();
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const getGame = async () => {
    const res = await fetch(`/api/games/${params.id}`);
    const data = await res.json();
    setNewGame({
      name: data.name,
      data: data.amount || 0,
      developed_by: data.developed_by,
      minimum_age:data.minimum_age,
      categoryId: data.categoryId || null
    });
  };

  useEffect(() => {
    if (params.id) {
      getGame();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (params.id) {
      await updateGame();
    } else {
      await createGame();
    }

    router.push("/store/game");
  };

  const handleChange = (e) =>
    setNewGame({ ...newGame, [e.target.name]: e.target.value });

  const validate = () => {
    let errors = {};

    if (!newGame.name) {
      errors.name = "name is required";
    }
    if (!newGame.developed_by) {
      errors.developed_by = "developed by is required";
    }
    if (!newGame.minimum_age) {
      errors.minimum_age = "developed by is required";
    }
    return errors;
  };

  const createGame = async () => {
    try {
      await fetch("/api/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGame),
      });
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("¿Estás segura de que quieres eliminar este juego?")) {
      try {
        const res = await fetch(`/api/games/${params.id}`, {
          method: "DELETE",
        });
        router.push("/");
        router.refresh();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const updateGame = async () => {
    try {
      await fetch(`/api/games/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGame),
      });
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  const setCategory = (value) => {
    setNewGame({ ...newGame, categoryId: value });
  }


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
          placeholder="Game name"
          name="name"
          onChange={handleChange}
          value={newGame.name}
          autoFocus
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
          ></input>

        <textarea
          name="developed_by"
          placeholder="Game developed by"
          onChange={handleChange}
          value={newGame.developed_by}
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
          rows={3}
        ></textarea>

        <input
          type="number"
          placeholder="Game minimum age"
          name="minimum_age"
          onChange={handleChange}
          value={newGame.minimum_age}
          autoFocus
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
          ></input>

        <SelectCategorys
            setCategory={setCategory}
            categoryId={newGame.categoryId}
        />
        <input
          type="number"
          placeholder="Amount"
          name="amount"
          onChange={handleChange}
          value={newGame.amount}
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

export default NewGame;
