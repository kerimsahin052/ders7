import events from "../data/events.js";

export function getAllEvents(req, res) {
  res.status(200).json(events);
}

export function getEventById(req, res) {
  const { id } = req.params;

  const event = events.find((item) => item.id === id);

  if (!event) {
    return res.status(404).json({
      error: {
        message: "Etkinlik bulunamadı"
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
  } = req.body;

  if (
    !title ||
    !category ||
    !capacity ||
    !date ||
    !time ||
    !location ||
    !description
  ) {
    return res.status(400).json({
      error: {
        message: "Tüm alanlar zorunludur"
      }
    });
  }

  const newEvent = {
    id: `event-${Date.now()}`,
    title,
    category,
    capacity: Number(capacity),
    date,
    time,
    location,
    description
  };

  events.push(newEvent);

  res.status(201).json(newEvent);
}