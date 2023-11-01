import "./App.css";
import { useState } from "react";

export default function App() {
  {/*Quotes bank- you could add more quotes if preferred*/}
  const quotes = [
    {
      quote: "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu",
    },
    {
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote:
        "Your time is limited, so don't waste it living someone else's life.",
      author: "Steve Jobs",
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote:
        "If you don't like something, change it. If you can't change it, change your attitude.",
      author: "Maya Angelou",
    },
    {
      quote:
        "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      author: "Mother Teresa",
    },
    {
      quote:
        "When you reach the end of your rope, tie a knot in it and hang on.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote:
        "Always remember that you are absolutely unique. Just like everyone else.",
      author: "Margaret Mead",
    },
    {
      quote:
        "Don't judge each day by the harvest you reap but by the seeds that you plant.",
      author: "Robert Louis Stevenson",
    },
  ];
  {/*colors bank- you could add more quotes if preferred*/}
  const colors = [
    "red",
    "blue",
    "green",
    "purple",
    "orange",
    "#00ff",
    "#2f2f2f",
    "#002f",
  ];
  const [state, setState] = useState(0);
  const [color, setColor] = useState(0);

  const stateIndex = () => {
    setState(Math.floor(Math.random() * quotes.length));
    setColor(Math.floor(Math.random() * colors.length));
  };

  return (
    <main style={{ backgroundColor: colors[color] }}>
      <div className="card" style={{ color: colors[color] }}>
        <div className="card-header">Quotes</div>
        <div id="quote-box" className="card-body">
          <blockquote className="blockquote mb-0">
            <p id="text">{quotes[state].quote}</p>
            <footer id="author" className="blockquote-footer">
              {" "}
              <cite title="Source Title">{quotes[state].author}</cite>
            </footer>
          </blockquote>
          <div className="d-grid gap-2 d-md-block but">
            <button
              style={{ backgroundColor: colors[color] }}
              type="button"
              className="btn"
            >
              <a
                id="tweet-quote"
                href="https://www.twitter.com/intent/tweet"
                target="_blank"
                rel="noreferrer"
              >
                <i style={{ color: "white" }} className="bi bi-twitter"></i>
              </a>
            </button>
            <button
              style={{ backgroundColor: colors[color] }}
              type="button"
              className="btn"
              
            >
              <i style={{ color: "white" }} className="fa fa-tumblr"></i>
            </button>
            <button
              style={{ backgroundColor: colors[color], color: "white" }}
              type="button"
              className="btn"
              id="new-quote"
              onClick={stateIndex}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>

      <p id="creator" style={{ color: "white" }}>
        By Broyoung
      </p>
    </main>
  );
}
