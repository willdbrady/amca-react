import React, { useState, useEffect } from "react";
import axios from "axios";
import EventForm from "./EventForm";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/amca");
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleEdit = (event) => {
    setSelectedEvent(event);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/amca/${id}`);
      fetchEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const handleSave = () => {
    setSelectedEvent(null);
    fetchEvents();
  };

  //Date handler
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(undefined);
  };

  return (
    <div>
      <h1>Manage Events</h1>
      <EventForm existingEvent={selectedEvent} onSave={handleSave} />
      <ul>
        {events
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((event) => (
            <li key={event._id}>
              <h3>{event.title}</h3>
              <p>{formatDate(event.date)}</p>
              <p>{event.description}</p>
              <button onClick={() => handleEdit(event)}>Edit</button>
              <button onClick={() => handleDelete(event._id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default EventList;
