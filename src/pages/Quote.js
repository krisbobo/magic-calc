import { useState, useEffect } from 'react';

function Quote() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const apiURL = 'https://api.api-ninjas.com/v1/quotes?category=happiness';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(apiURL, {
          headers: {
            'X-Api-Key': 'IIqM3uKC9z1T/vFchZOVBA==NVDLtgZ44VKXFzmN',
            'Content-Type': 'application/json',
          },
        });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) return <div className="quote">Something went wrong!</div>;

  if (isLoading) return <div className="quote">Loading Quote...</div>;

  return (
    <div className="quote">
      {data.map((item) => (
        <>
          <p id="item-quote" key={item.id}>{item.quote}</p>
          <p id="author">
            {item.author}
          </p>
        </>
      ))}
    </div>
  );
}

export default Quote;
