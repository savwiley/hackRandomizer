const randomize = () => {
  const first = document.querySelector(".first");
  const second = document.querySelector(".second");
  const third = document.querySelector(".third");
  const wordsSpace = document.querySelector("#words");
  const words = [];

  /* call json data */
  async function populate() {
    const request = new Request('catalogue.json');
    const response = await fetch(request);
    const areas = await response.json();
    /* calls the functions */
    firstRand(areas["First"]);
    secondRand(areas["Second"]);
    thirdRand(areas["Third"]);
    finish();
  };
  populate();

  const firstRand = (places) => {
    const randNumb = Math.floor(Math.random() * places.length);
    first.textContent = `${places[randNumb]}`;
    words.push(places[randNumb]);
  }

  const secondRand = (places) => {
    const randNumb = Math.floor(Math.random() * places.length);
    second.textContent = `${places[randNumb]}`;
    words.push(places[randNumb]);
  }

  const thirdRand = (places) => {
    const randNumb = Math.floor(Math.random() * places.length);
    third.textContent = `${places[randNumb]}`;
    words.push(places[randNumb]);
  }

  const finish = () => {
    wordsSpace.textContent = words.join(" ");
  }
}