const data = [
  {
    title: "Głosy z Niebios",
    results: [
      { name: "Buszon bek", votes: 3 },
      { name: "Antole Zacinaka", votes: 3 },
      { name: "Pomóż mi", votes: 2 }
    ]
  },
  {
    title: "Plays Roku",
    results: [
      { name: "Decoy", votes: 4 },
      { name: "Agenci", votes: 3 },
      { name: "Ulti rolka", votes: 1 }
    ]
  },
  {
    title: "Krzyk Roku",
    results: [
      { name: "Maja Skinwalker", votes: 6 },
      { name: "Dobra buszon", votes: 1 },
      { name: "Julka", votes: 1 }
    ]
  },
  {
    title: "Outplay Roku",
    results: [
      { name: "Buszon Arena", votes: 4 },
      { name: "Malzahar Szej", votes: 2 },
      { name: "Szejszako", votes: 1 },
      { name: "Buszon Penta Samira", votes: 1 }
    ]
  },
  {
    title: "Szej Activity",
    results: [
      { name: "Szejmaj PowPowPow", votes: 6 },
      { name: "Szej Attack", votes: 2 }
    ]
  },
  {
    title: "Teledysk",
    results: [
      { name: "Rolekbuszko", votes: 3 },
      { name: "Bombsite A", votes: 3 },
      { name: "Jekru", votes: 2 }
    ]
  },
  {
    title: "Mądry Człowiek",
    results: [
      { name: "Co najmniej buzie", votes: 4 },
      { name: "Zależy od miejsca i czasu", votes: 1 },
      { name: "Twoja mama", votes: 1 },
      { name: "Dziwk", votes: 1 }
    ]
  },
  {
    title: "300 IQ",
    results: [
      { name: "Kupiłeś bilety", votes: 3 },
      { name: "Trzymaj Maja", votes: 3 },
      { name: "No debilu", votes: 2 }
    ]
  },
  {
    title: "Losowy Ahh Moment",
    results: [
      { name: "Buszon", votes: 4 },
      { name: "Rzut cegłą", votes: 4 }
    ]
  }
];

const container = document.getElementById("results");

data.forEach(cat => {
  const div = document.createElement("div");
  div.className = "category";

  const h2 = document.createElement("h2");
  h2.textContent = cat.title;
  div.appendChild(h2);

  const maxVotes = Math.max(...cat.results.map(r => r.votes));

  cat.results.forEach(r => {
    const row = document.createElement("div");
    row.className = "result";

    if (r.votes === maxVotes) {
      row.classList.add("winner");
    }

    row.innerHTML = `
      <span>${r.name}</span>
      <span class="votes">${r.votes} głosów</span>
    `;

    div.appendChild(row);
  });

  container.appendChild(div);
});
