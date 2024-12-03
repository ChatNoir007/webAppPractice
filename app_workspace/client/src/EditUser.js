import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

function EditUser() {
  let { id } = useParams();

  const updateData = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:8000/users/edit/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        email: e.target.email.value,
        gender: e.target.gender.value,
        city: e.target.city.value,
      }),
    });
    window.location.href = "/users";
  };

  return (
    <>
      <h1>Edycja</h1>
      <div className="centerContainer">
        <form onSubmit={updateData}>
          <input type="text" name="first_name" placeholder="imie" />
          <input type="text" name="last_name" placeholder="nazwisko" />
          <input type="text" name="email" placeholder="email" />
          <input type="text" name="gender" placeholder="płeć" />
          <input type="text" name="city" placeholder="miasto" />
          <button type="submit" className="btnSubmit">
            Zaktualizuj
          </button>
        </form>
      </div>
    </>
  );
}
export default EditUser;
