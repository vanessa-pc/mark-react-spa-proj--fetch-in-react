import { useState } from "react";

interface Dog {
  message: string;
  status: string;
}

function App() {
  const [dog, setDog] = useState<string[]>([]);

  // const handleGetDog = async () => {
  //   const response = await fetch(
  //     "https://official-joke-api.appspot.com/jokes/general/random"
  //   );
  //   const jsonBody: Joke[] = await response.json();
  //   setJoke(jsonBody[0]);
  // };

  const handleGetDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((jsonBody: Dog) => setDog([...dog, jsonBody["message"]]));
  };

  if (dog.length>0) {
    return (
      <div>
        <h1>Dog app</h1>
        <details>
          {console.log(dog)}
          <summary> <img src={dog[dog.length-1]} alt="" /></summary>
          <p> Previous pictures: { dog.slice(0, dog.length-1).map(function (photo, index) {
            return <img key={index} src={photo} alt="" />})}
            </p>
        </details>
        <hr />
        <button onClick={handleGetDog}>Get another photo</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Dog app</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          dog photo from an API!
        </p>
        <button onClick={handleGetDog}>Get photo</button>
      </div>
    );
  }
}

export default App;
