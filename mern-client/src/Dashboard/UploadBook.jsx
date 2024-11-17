import React, { useState } from 'react';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';

const UploadBook = () => {
  const bookCategories = [
    "Fiction", "Non-fiction", "Mystery", "Programming", "Science fiction", "Fantasy", "Horror", 
    "Biography", "Autobiography", "History", "Self-help", "Business", "Memoir", "Poetry", 
    "Children's books", "Travel", "Religion and spirituality", "Science", "Art and design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  const [bookCondition, setBookCondition] = useState(""); 
  const [bookAvailibility, setBookAvailibility] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleConditionChange = (event) => {
    setBookCondition(event.target.value); // Update state for bookCondition
  };

  const handleAvailibilityChange = (event) => {
    setBookAvailibility(event.target.value); // Update state for bookCondition
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookCondition = form.bookCondition.value; 
    const bookAvailibility = form.bookAvailibility.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookCondition,
      bookAvailibility,
    };

    console.log("Submitting book data:", bookObj); // Log the form data

    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data); // Log the response data
      alert("Book uploaded successfully!");
      form.reset();
      setBookCondition(""); // Reset bookCondition state
      setSelectedBookCategory(bookCategories[0]); // Reset category state
      setBookAvailibility("yes"); 
    })
    .catch((error) => {
      console.error("Error uploading book:", error); // Log any errors
      alert("Error uploading book. Please try again.");
    });
  };

  return (
    <div className='px-4 my-12 pt-20'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book!</h2>
      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleSubmit}>

        {/* First Row */}
        <div className='flex gap-8'>
          {/* Book Name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              placeholder="Book Title"
              required
              type="text"
              name='bookTitle'
              className='w-full'
            />
          </div>

          {/* Author Name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              placeholder="Author Name"
              required
              type="text"
              name='authorName'
              className='w-full'
            />
          </div>
        </div>

        {/* Second Row */}
        <div className='flex gap-8'>
          {/* Image URL */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              placeholder="Image URL"
              required
              type="text"
              name='imageURL'
              className='w-full'
            />
          </div>

          {/* Book Category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="categoryName" value="Book Category" />
            </div>
            <Select
              id="categoryName"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleCategoryChange}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>

          {/* Book Condition */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookCondition" value="Book Condition" />
            </div>
            <TextInput
              id="bookCondition"
              placeholder="Book Condition"
              required
              type="text"
              name='bookCondition'
              className='w-full'
              value={bookCondition} // Bind value to state
              onChange={handleConditionChange} // Update state on change
            />
          </div>

           {/* Book Condition */}
            <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookAvailibility" value="Book Availibility" />
            </div>
            <TextInput
              id="bookAvailibility"
              placeholder="Book Availibility"
              required
              type="text"
              name='bookAvailibility'
              className='w-full'
              value={bookAvailibility} // Bind value to state
              onChange={handleAvailibilityChange} // Update state on change
            />
          </div>

        </div>

        {/* Full Width Div for Book Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            placeholder="Book Description"
            required
            name='bookDescription'
            className='w-full'
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" className='mt-5 bg-black text-black hover:bg-gray-800 hover:text-yellow-500 transition-all duration-300'>
          Upload book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
