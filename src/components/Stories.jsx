import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, getDoc, updateDoc, setDoc, onSnapshot } from "firebase/firestore";

export default function Stories() {
  const baseStories = [
    {
      id: "story1",
      title: "Important Notes 🌿",
      full: `
Cherish the moments with those who have always been there for you — your family, your best friends, your life partner, your guardian — whoever they are.
Respect them, show kindness, and love them sincerely from the bottom of your heart, not with expectations in return.

This is where most of us fail — we often give with the hope of receiving back. But true kindness means giving without expecting anything in return.

Be kind, but don’t give too much of yourself to everyone.
Set limits with others, but be limitless with your dreams, hard work, and dedication — these are the greatest gifts you can give yourself.

Believe in the Almighty — He always has a more beautiful plan for you.
Say Alhamdulillah for what you have today, and In Sha Allah for all that you hope and pray for in the future. 🌙`,
    },
    {
      id: "story2",
      title: "Code, Coffee & Clarity ☕",
      full: "One quiet morning, as my code crashed yet again, I realized that clarity doesn’t come from success — it comes from slowing down and reflecting.",
    },
    {
      id: "story3",
      title: "When Silence Spoke Louder 🤍",
      full: "In moments of silence, I found lessons that no mentor could ever teach. Sometimes growth begins where noise ends.",
    },
  ];

  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Load stories and sync likes live
    const unsubscribers = baseStories.map((s) => {
      const ref = doc(db, "stories", s.id);

      // Realtime listener
      return onSnapshot(ref, (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          setStories((prev) => {
            const exists = prev.find((x) => x.id === s.id);
            if (exists) {
              return prev.map((x) =>
                x.id === s.id
                  ? { ...x, likes: data.likes, expanded: x.expanded || false }
                  : x
              );
            } else {
              return [
                ...prev,
                { ...s, likes: data.likes, expanded: false },
              ];
            }
          });
        } else {
          // If doesn't exist, create it with 0 likes
          setDoc(ref, { likes: 0 });
          setStories((prev) => [...prev, { ...s, likes: 0, expanded: false }]);
        }
      });
    });

    return () => unsubscribers.forEach((u) => u());
  }, []);

  const handleLike = async (id) => {
    const ref = doc(db, "stories", id);
    const snap = await getDoc(ref);
    if (snap.exists()) {
      const currentLikes = snap.data().likes || 0;
      await updateDoc(ref, { likes: currentLikes + 1 });
    }
  };

  const toggleRead = (id) => {
    setStories((prev) =>
      prev.map((s) => (s.id === id ? { ...s, expanded: !s.expanded } : s))
    );
  };

  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      link: "https://jamesclear.com/atomic-habits",
      description: "Learn how small habits compound into big changes.",
      bookImage: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
      authorImage: "https://jamesclear.com/wp-content/uploads/2023/10/footer-pens@2x.jpg",
    },
    {
      id: 2,
      title: "Can't Hurt Me",
      author: "David Goggins",
      link: "https://davidgoggins.com/book/",
      description:
        "Master your mind and defy the odds — a story of resilience and discipline.",
      bookImage: "https://davidgoggins.com/wp-content/uploads/2022/10/cant-hurt-me-group.jpg",
      authorImage: "https://upload.wikimedia.org/wikipedia/commons/e/e3/DavidGogginsMay08.jpg",
    },
    {
      id: 3,
      title: "Ikigai",
      author: "Héctor García & Francesc Miralles",
      link: "https://www.penguinrandomhouse.com/books/566247/ikigai-by-hector-garcia-and-francesc-miralles/",
      description: "Discover the Japanese secret to a long and happy life.",
      bookImage: "https://m.media-amazon.com/images/I/71tbalAHYCL._AC_UF1000,1000_QL80_.jpg",
      authorImage: "https://m.media-amazon.com/images/I/51BzU09UjsL._SX379_CR0%2C0%2C379%2C379_.jpg",
      authorImage2: "https://hectorgarcia.org/wp-content/uploads/2024/05/IMG_2218-2-1024x818.jpeg",
    },
  ];



  return (
    <main className="site-main container">
      {/* 🌿 Life Stories Section */}
      <section className="card stories-section">
        <h2 className="section-title">🌿 Life Stories</h2>
        <p className="section-subtitle">
          Small reflections, big lessons — from my personal and professional journey.
        </p>

        <div className="stories-grid">
          {stories.map((story) => (
            <div
              key={story.id}
              className={`story-card glassy-card ${story.expanded ? "expanded" : ""}`}
            >
              <h3>{story.title}</h3>

              <div className="story-text">
                <p style={{ whiteSpace: "pre-line" }}>
                  {story.expanded
                    ? story.full
                    : story.full.length > 200
                      ? story.full.slice(0, 200) + "..."
                      : story.full}
                </p>
              </div>

              {story.full.length > 200 && (
                <button
                  className="read-btn"
                  onClick={() => toggleRead(story.id)}
                >
                  {story.expanded ? "Read Less ▲" : "Read More ▼"}
                </button>
              )}

              <button
                onClick={() => handleLike(story.id)}
                className="like-btn"
                aria-label="Like this story"
              >
                ❤️ {story.likes ?? 0}
              </button>
            </div>

          ))}
        </div>
      </section>

      {/* 📚 Books Section */}
      <section className="card books-section">
        <h2 className="section-title">📚 Books to Read</h2>
        <p className="section-subtitle">
          Books that shaped my mindset, focus, and creativity — I recommend these to everyone.
        </p>

        <div className="books-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card glassy-card">
              {/* 📘 Book Cover */}
              <img
                src={book.bookImage}
                alt={book.title}
                className="book-cover"
                onError={(e) =>
                (e.target.src =
                  "https://placehold.co/160x240/2d2d2d/ffffff?text=No+Cover")
                }
              />

              {/* 👤 Author(s) Photos */}
              <div className="authors">
                {book.authorImage && (
                  <img
                    src={book.authorImage}
                    alt={book.author}
                    className="author-photo"
                    onError={(e) =>
                    (e.target.src =
                      "https://placehold.co/80x80/2d2d2d/ffffff?text=👤")
                    }
                  />
                )}
                {book.authorImage2 && (
                  <img
                    src={book.authorImage2}
                    alt={book.author}
                    className="author-photo"
                    onError={(e) =>
                    (e.target.src =
                      "https://placehold.co/80x80/2d2d2d/ffffff?text=👤")
                    }
                  />
                )}
              </div>

              {/* 👤 Author Name */}
              <p className="author">by {book.author}</p>


              {/* 💬 Description */}
              <p>{book.description}</p>

              {/* 🔗 View Book Button */}
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn glassy"
              >
                View Book
              </a>
            </div>


          ))}
        </div>
      </section>

      <div className="center-btn">
        <a href="/" className="btn glassy">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
