import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/v1/createTodo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 200) {
        alert("Todo created successfully");
        setFormData({
          title: "",
          description: "",
        });
      } else {
        alert("Failed to create Todo");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <div className="app text-center">
        App
        <form
          action="submit"
          method="post"
          className="flex flex-col items-center m-auto w-2/3"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter Title"
            className="my-5 bg-cyan-200"
          />
          <textarea
            name="description"
            cols="30"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter Description"
            className="mb-5 bg-cyan-200"
          ></textarea>
          <button type="submit" className="bg-lime-700">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
