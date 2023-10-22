$.getJSON('http://numbersapi.com/50/trivia?json').then(data => console.log(data))

$.getJSON(`http://numbersapi.com/${[8,9,10]}/trivia?json`).then(data => {
    console.log(data);
  });

  Promise.all(
    Array.from({ length: 4 }, () => {
      return $.getJSON(`http://numbersapi.com/50/trivia?json`);
    })
  ).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
  });

