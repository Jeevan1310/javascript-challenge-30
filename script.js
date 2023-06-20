const challenges = [
    {
      title: "Day 1: Hello, World!",
      description: "Create a 'Hello, World!' program in JavaScript.",
      githubLink: "https://github.com/your-username/day1-hello-world",
      liveDemoLink: "https://your-website.com/day1"
    },
    // Add the rest of the challenge objects here...
  ];
  
  const challengeContainer = document.getElementById("challenge-container");
  
  challenges.forEach(challenge => {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.textContent = challenge.title;
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.textContent = challenge.description;
  
    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");
  
    const githubButton = document.createElement("a");
    githubButton.classList.add("button");
    githubButton.href = challenge.githubLink;
    githubButton.textContent = "GitHub";
  
    const demoButton = document.createElement("a");
    demoButton.classList.add("button");
    demoButton.href = challenge.liveDemoLink;
    demoButton.textContent = "Live Demo";
  
    cardFooter.appendChild(githubButton);
    cardFooter.appendChild(demoButton);
  
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
  
    challengeContainer.appendChild(card);
  });
  