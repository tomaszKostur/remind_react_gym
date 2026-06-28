import { useEffect, useState } from "react";

function CatApiImages() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCats() {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=10"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch cats");
        }

        const data = await response.json();
        setCats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCats();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="simple-content">
      <h2>Cats from The Cat API</h2>

      <ul className="cat-list">
        {cats.map((cat) => (
          <li key={cat.id} className="cat-item">
            <img src={cat.url} alt="Cat" className="cat-image" />
            <span>Cat ID: {cat.id}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CatApiImages;