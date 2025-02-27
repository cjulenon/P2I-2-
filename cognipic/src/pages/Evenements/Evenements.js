import "./Evenements.css"; 
import photo1 from "/Users/julenon/Desktop/P2I part 2/P2I-2-/cognipic/src/components/images/WEI/photo1.JPG";
import photo2 from "/Users/julenon/Desktop/P2I part 2/P2I-2-/cognipic/src/components/images/WEI/photo2.JPG";
import photo3 from "/Users/julenon/Desktop/P2I part 2/P2I-2-/cognipic/src/components/images/WEI/photo3.JPG";
import photo4 from "/Users/julenon/Desktop/P2I part 2/P2I-2-/cognipic/src/components/images/WEI/photo4.JPG";
import photo5 from "/Users/julenon/Desktop/P2I part 2/P2I-2-/cognipic/src/components/images/WEI/photo5.JPG";
import g1 from "/Users/julenon/Desktop/P2I part 2/P2I-2-/cognipic/src/components/images/Gala/g1.JPG";
import g2 from "/Users/julenon/Desktop/P2I part 2/P2I-2-/cognipic/src/components/images/Gala/g2.jpg";
import g3 from "/Users/julenon/Desktop/P2I part 2/P2I-2-/cognipic/src/components/images/Gala/g3.JPG";

const eventsData = [
  {
    title: "WEI",
    date: "5 octobre 2024",
    images: [photo1, photo2, photo3, photo4, photo5],
  },
  {
    title: "Gala",
    date: "11 novembre 2024",
    images: [g1, g2, g3],
  }
];

const Evenements = () => {
  return (
    <div className="evenements-container">
      <h1>📅 Nos Événements</h1>
      {eventsData.map((event, index) => (
        <div key={index} className="event-section">
          <h2>{event.title}</h2>
          <p className="event-date">📆 {event.date}</p>
          <div className="event-images">
            {Array.isArray(event.images) ? (
              event.images.map((image, i) => (
                <img key={i} src={image} alt={`Photo de ${event.title}`} />
              ))
            ) : (
              <p>Aucune image disponible</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Evenements;
