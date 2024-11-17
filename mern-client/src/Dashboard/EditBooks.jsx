import React, { useEffect, useState } from "react";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useLoaderData, useParams } from "react-router-dom";

const EditBooks = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookCondition } = useLoaderData();

  const bookCategories = [
    "Fiction",
    "Non-fiction",
    "Mystery",
    "Programming",
    "Science fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Business",
    "Memoir",
    "Poetry",
    "Children's books",
    "Travel",
    "Religion and spirituality",
    "Science",
    "Art and design",
  ];

  const [bookData, setBookData] = useState({
    bookTitle: "",
    authorName: "",
    imageURL: "",
    category: "",
    bookDescription: "",
    bookCondition: "",
  });

  // Initialize state with loader data
  useEffect(() => {
    setBookData({
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookCondition,
    });
  }, [bookTitle, authorName, imageURL, category, bookDescription, bookCondition]);

  const handleUpdate = (event) => {
    event.preventDefault();

    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update book");
        return res.json();
      })
      .then((data) => {
        alert("Book updated successfully!");
      })
      .catch((err) => {
        console.error("Error updating book:", err);
      });
  };

  return (
    <div className="px-4 my-12 pt-20">
      <h2 className="mb-8 text-3xl font-bold">Edit Book</h2>
      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleUpdate}>
        {/* Book Title */}
        <div className="lg:w-1/2">
          <Label htmlFor="bookTitle" value="Book Title" />
          <TextInput
            id="bookTitle"
            required
            value={bookData.bookTitle}
            onChange={(e) => setBookData({ ...bookData, bookTitle: e.target.value })}
          />
        </div>
        {/* Author Name */}
        <div className="lg:w-1/2">
          <Label htmlFor="authorName" value="Author Name" />
          <TextInput
            id="authorName"
            required
            value={bookData.authorName}
            onChange={(e) => setBookData({ ...bookData, authorName: e.target.value })}
          />
        </div>
        {/* Image URL */}
        <div className="lg:w-1/2">
          <Label htmlFor="imageURL" value="Image URL" />
          <TextInput
            id="imageURL"
            required
            value={bookData.imageURL}
            onChange={(e) => setBookData({ ...bookData, imageURL: e.target.value })}
          />
        </div>
        {/* Category */}
        <div className="lg:w-1/2">
          <Label htmlFor="inputState" value="Category" />
          <Select
            id="inputState"
            value={bookData.category}
            onChange={(e) => setBookData({ ...bookData, category: e.target.value })}
          >
            {bookCategories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </div>
        {/* Book Condition */}
        <div className="lg:w-1/2">
          <Label htmlFor="bookCondition" value="Book Condition" />
          <TextInput
            id="bookCondition"
            placeholder="Enter the condition of the book"
            required
            value={bookData.bookCondition}
            onChange={(e) => setBookData({ ...bookData, bookCondition: e.target.value })}
          />
        </div>
            {/* Book Availibility */}
        <div className="lg:w-1/2">
          <Label htmlFor="bookAvailibility" value="Book Availibility" />
          <TextInput
            id="bookAvailibility"
            placeholder="Is the book availabe?"
            required
            value={bookData.bookAvailibility}
            onChange={(e) => setBookData({ ...bookData, bookAvailibility: e.target.value })}
          />
        </div>

        {/* Book Description */}
        <div>
          <Label htmlFor="bookDescription" value="Description" />
          <Textarea
            id="bookDescription"
            value={bookData.bookDescription}
            onChange={(e) => setBookData({ ...bookData, bookDescription: e.target.value })}
          />
        </div>
        {/* Submit Button */}
        <Button type="submit" className="mt-5 bg-black text-black hover:bg-gray-800 hover:text-yellow-500 transition-all duration-300">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
