import events from "../data/events.js";

export function getAllEvents(req, res) {
  const { category } = req.query;

  const list = category
    ? events.filter((event) => event.category === category)
    : events;

  res.status(200).json(list);
}

export function getEventById(req, res) {
  const event = events.find((item) => item.id === req.params.id);

  if (!event) {
    return res.status(404).json({
      error: {
        message: "Event not found"
      }
    });
  }

  res.status(200).json(event);
}

export function createEvent(req, res) {
  const {
    title,
    category,
    capacity,
    date,
    time,
    location,
    description
  } = req.body ?? {};

  if (!title || !category || !date) {
    return res.status(400).json({
      error: {
        message: "title, category and date are required"
      }
    });
  }

  const newEvent = {
    id: `event-${Date.now()}`,
    title,
    category,
    capacity: Number(capacity) || 0,
    date,
    time: time ?? "",
    location: location ?? "",
    description: description ?? ""
  };

  events.push(newEvent);

  res.status(201).json(newEvent);
}