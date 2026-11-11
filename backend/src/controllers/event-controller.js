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