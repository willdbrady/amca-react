import React, { useState } from "react";
import axios from "axios";

const EventForm = ({ existingEvent, onSave }) => {
  const [title, setTitle] = useState(existingEvent?.title || "");
  const [date, setDate] = useState(existingEvent?.date || "");
  const [description, setDescription] = useState(
    existingEvent?.description || ""
  );
  const [imageUrl, setImageUrl] = useState(existingEvent?.imageUrl || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const event = { title, date, description, imageUrl };
    try {
      if (existingEvent) {
        await axios.put(`/api/amca/${existingEvent._id}`, event);
      } else {
        await axios.post("/api/amca", event);
      }
      onSave(); // Callback to refresh the event list
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Event Title"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Event Description"
        required
      />
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Image URL"
      />
      <button type="submit">
        {existingEvent ? "Update Event" : "Create Event"}
      </button>
    </form>
  );
};

export default EventForm;
