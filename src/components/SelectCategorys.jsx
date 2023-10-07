"use client";

import {useEffect, useState} from "react";

export function SelectCategories(props) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
    }, []);

    const getCategories = async () => {
        const res = await fetch(`/api/categories`);
        const data = await res.json();
        setCategories(data);
    };

    const handleChangeCategory = (value) => {
        props.setCategory(value.target.value)
    }

    return (
        <div>
          <div className="grid md:grid-cols-3 gap-2">
            <select id="countries_disabled"
                    value={!props.categoryId ? '' : props.categoryId}
                    onChange={handleChangeCategory}
                    className="bg-gray-800 border-2  my-4 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-slate-400 dark:focus:ring-gray-500 dark:focus:border-gray-500">
                <option>Seleciona una categoria</option>
                { categories.length && categories.map(item => (
                    <option value={item._id.toString()} key={item._id}>{ item.name }</option>
                )) }
            </select>
          </div>
        </div>
      );
}

export default SelectCategories;
