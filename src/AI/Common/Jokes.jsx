const Jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "How does a programmer break the ice at a party? They say, 'Hello World!'",
  "Why do Java developers wear glasses? Because they don't see sharp!",
  "What did the computer do at the beach? It surfed the internet!",
  "Why did the database administrator leave their job? They couldn't handle too many relationships!",
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "What's a computer's favorite snack? Microchips!",
  "Why was the JavaScript developer sad? Because they lost their 'prototype'!",
  "How do you comfort a JavaScript bug? You console it!",
  "Why did the computer go to therapy? It had too many bytes of emotional baggage!",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "What's a programmer's favorite song? 'Hello World' by Adele!",
  "Why was the math book sad? Because it had too many problems!",
  "What's a computer's least favorite food? Spam!",
  "How do you organize a space party? You planet!",
  "Why did the smartphone go to therapy? It had too many apps-ssues!",
  "What's a computer's favorite dance move? The algorithm!",
  "Why did the coder stay home? They got a bit byte!",
  "What's a computer's favorite type of music? Electronica!",
  "Why did the computer cross the road? To get to the other website!",
  "Why did the computer keep its drink on top of the monitor? It wanted a bit to drink!",
  "What's a computer's favorite snack while coding? A byte of chocolate!",
  "Why did the programmer go broke? Because they used up all their cache!",
  "How many programmers does it take to change a light bulb? None, that's a hardware issue!",
  "Why was the JavaScript developer so good at dancing? They had great moves and knew how to handle callbacks!",
  "What's a programmer's favorite game? Hide and Seek. They love efficient algorithms!",
  "How do you comfort a JavaScript bug? You pat it on the console!",
  "Why don't programmers like nature? It has too many bugs!",
  "What's a programmer's favorite movie? The Social Network, because they love seeing things go viral!",
  "Why do programmers prefer dark mode? It's easier on the eyes and their code feels more mysterious!",
  "What's a computer's favorite dessert? Cookies!",
  "Why did the programmer quit their job? They didn't get arrays!",
  "How do you stop a computer from catching a virus? Put it in quarantine!",
  "Why did the coder get thrown out of school? They refused to take classes!",
  "What's a computer's favorite music genre? Heavy metal!",
  "How do you catch a computer mouse? Use a Python!",
  "Why did the database administrator break up with SQL? It had too many unresolved issues!",
  "What's a programmer's favorite exercise? The loop!",
  "Why did the computer go to therapy? It had too many bytes of emotional baggage!",
  "What do you call a computer that sings? Adele!",
  "Why don't programmers like to go outside? The sunlight causes too many reflections!",
  "What did one HTML tag say to another? 'I like your style!'",
  "Why did the programmer plant a light bulb? They wanted to grow a power plant!",
  "How do you organize a fantastic space party? You planet!",
  "Why did the computer eat its own file? It was hungry for data!",
  "What's a computer's favorite dance move? The algorithm!",
  "Why was the computer cold? It left its Windows open!",
  "What do computers eat for a snack? Microchips!",
  "Why did the computer go on a diet? It had too many bytes!",
  "How do you make a computer laugh? You give it a good byte!",
  "What do you call a group of musical programmers? A band-width!",
  "Why did the coder always carry a pencil? In case they needed to draw a byte!",
  "How does a programmer make a sandwich? They use 'if' statements to decide what ingredients to include!",
  "Why was the JavaScript developer so good at basketball? They had great shots and never missed a callback!",
  "What did one code file say to another? 'You've got great syntax!'",
  "Why did the computer start its own band? It had too many bytes for solo performance!",
  "How do you comfort a JavaScript bug? You console it!",
  "Why did the computer go to therapy? It had too many bits of emotional baggage!",
  "What's a computer's favorite type of sandwich? An algo-rhythm!",
  "Why did the computer cross the road? To get to the other website!",
  "What do you call a computer superhero? CAPTCHA!",
  "Why did the programmer break up with their calculator? It didn't add up!",
  "What's a computer's favorite beat? The download beat!",
  "How does a computer get around? It uses its data bus!",
  "Why was the computer cold? It left its Windows open!",
  "What do you call a computer that sings? Adele!",
  "Why don't programmers like nature? It has too many bugs!",
  "What's a computer's favorite dessert? Cookies!",
  "How do you catch a computer mouse? Use a Python!",
  "Why did the database administrator break up with SQL? It had too many unresolved issues!",
  "What's a programmer's favorite exercise? The loop!",
  "Why did the computer go to therapy? It had too many bytes of emotional baggage!",
  "What do you call a computer that sings? Adele!",
  "Why don't programmers like to go outside? The sunlight causes too many reflections!",
  "What did one HTML tag say to another? 'I like your style!'",
  "Why did the programmer plant a light bulb? They wanted to grow a power plant!",
  "How do you organize a fantastic space party? You planet!",
  "Why did the computer eat its own file? It was hungry for data!",
  "What's a computer's favorite dance move? The algorithm!",
  "Why was the computer cold? It left its Windows open!",
  "What do computers eat for a snack? Microchips!",
  "Why did the computer go on a diet? It had too many bytes!",
  "How do you make a computer laugh? You give it a good byte!",
  "What do you call a group of musical programmers? A band-width!",
  "Why did the coder always carry a pencil? In case they needed to draw a byte!",
  "How does a programmer make a sandwich? They use 'if' statements to decide what ingredients to include!",
  "Why was the JavaScript developer so good at basketball? They had great shots and never missed a callback!",
  "What did one code file say to another? 'You've got great syntax!'",
  "Why did the computer start its own band? It had too many bytes for solo performance!",
  "How do you comfort a JavaScript bug? You console it!",
  "Why did the computer go to therapy? It had too many bits of emotional baggage!",
  "What's a computer's favorite type of sandwich? An algo-rhythm!",
  "Why did the computer cross the road? To get to the other website!",
  "What do you call a computer superhero? CAPTCHA!",
  "Why did the programmer break up with their calculator? It didn't add up!",
  "What's a computer's favorite beat? The download beat!",
  "How does a computer get around? It uses its data bus!",
  "Why was the computer cold? It left its Windows open!",
  "What do you call a computer that sings? Adele!",
  "Why don't programmers like nature? It has too many bugs!",
  "What's a computer's favorite dessert? Cookies!",
  "How do you catch a computer mouse? Use a Python!",
  "Why did the database administrator break up with SQL? It had too many unresolved issues!",
  "What's a programmer's favorite exercise? The loop!",
  "Why did the computer go to therapy? It had too many bytes of emotional baggage!",
  "What do you call a computer that sings? Adele!",
  "Why don't programmers like to go outside? The sunlight causes too many reflections!",
  "What did one HTML tag say to another? 'I like your style!'",
  "Why did the programmer plant a light bulb? They wanted to grow a power plant!",
  "How do you organize a fantastic space party? You planet!",
];

export default Jokes;