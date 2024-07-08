export interface Repository {
  title: string
  englishDescription: string
  portugueseDescription: string
  image: string
  imageAlt: string
  video: string
  repositoryLink: string
  projectLink: string
  technologies: string[]
}

export const repositories: Array<Repository> = [
  {
    title: 'Starflix',
    englishDescription:
      'Starflix is your go-to website for movies currently in theaters, upcoming movie releases, and the best-rated films, all in one place. Plus, you can save your favorite movies and visit them anytime!',
    portugueseDescription:
      'Starflix é o seu destino ideal para filmes em cartaz, futuros lançamentos e os mais bem avaliados, tudo em um só lugar. Além disso, você pode salvar seus filmes favoritos e acessá-los a qualquer hora!',
    image: '/img/starflixpage.png',
    imageAlt: 'StarFlix home page',
    video: '/video/starflix.mkv',
    repositoryLink: 'https://github.com/claudinxch/star-flix',
    projectLink: 'https://star-flix.netlify.app',
    technologies: ['React', 'JavaScript', 'Router', 'CSS', 'RestAPI'],
  },
  {
    title: 'Lanterna Luminosa',
    englishDescription:
      'Volunteer project to create a landing page for a Non-governmental organization dedicated to supporting women who suffer from abuse. It is a user-friendly interface that highlights its mission, services, stories and events.',
    portugueseDescription:
      'Projeto open-source para criação de uma landing page para uma ONG dedicada a apoiar mulheres que sofrem abusos. É uma interface amigável que destaca a missão, serviços, histórias e eventos da ONG.',
    image: '/img/lanterna-luminosa.png',
    imageAlt: 'Lanterna Luminosa home page',
    video: '/video/lanternaluminosa.mkv',
    repositoryLink: 'https://github.com/bolodissenoura/lantera-luminosa',
    projectLink: 'https://www.lanternaluminosa.com.br',
    technologies: ['Next', 'JavaScript', 'TailwindCSS', 'Zustand'],
  },
  {
    title: 'Meal Map',
    englishDescription:
      'Meal Map brings you a world of culinary, offering any kind of recipe you desire! You can explore a vast collection of dishes from various cuisines and diets. Save your favorite recipes for later, and discover the perfect meal for any ocasion. Currently in Progress.',
    portugueseDescription:
      'Meal Map traz um mundo de gastronomia, oferecendo qualquer receita que você desejar! Explore uma vasta coleção de pratos de várias culinárias e dietas. Salve suas receitas favoritas e descubra a refeição perfeita para qualquer ocasião. Atualmente em progresso.',
    image: '/img/meal-map.png',
    imageAlt: 'Meal Map home page',
    video: '/video/mealmap.mkv',
    repositoryLink: 'https://github.com/claudinxch/meal-map',
    projectLink: '',
    technologies: ['React', 'Axios', 'Tailwindcss', 'React Query'],
  },
  {
    title: 'Pomodoro Buddy',
    englishDescription:
      'Website to track your pomodoro session. It allows you to choose between long and short breaks, ensuring optimal productivity and focus. The site will notify when the time ends. Perfect for studying and improving time management skills.',
    portugueseDescription:
      'Site para cronometrar suas sessões de pomodoro. Permite escolher entre pausas longas e curtas, garantindo produtividade e foco ideais. O site notificará quando o tempo acabar. Perfeito para estudar e melhorar suas habilidades de gerenciamento de tempo.',
    image: '/img/pomodorobuddy.png',
    imageAlt: 'Pomodoro Buddy home page',
    video: '/video/pomodorobuddy.mkv',
    repositoryLink: 'https://github.com/claudinxch/pomodoro-website',
    projectLink: 'https://pomodoro-buddy.netlify.app',
    technologies: ['React', 'JavaScript', 'CSS'],
  },
  {
    title: 'Token Generator',
    englishDescription:
      'Token Generator offers a quick and easy way to create unique tokens. It allows you to generate a token with just a few clicks. Whether you need tokens for basic authentication or simple security purposes, Token Generator offers the solution.',
    portugueseDescription:
      'Token Generator oferece uma maneira rápida e fácil de criar tokens únicos. Permite gerar um token com apenas alguns cliques. Seja para autenticação básica ou para fins de segurança simples, Token Generator é a solução ideal.',
    image: '/img/token-generator.png',
    imageAlt: 'Token Generator home page',
    video: '/video/tokengenerator.mkv',
    repositoryLink: 'https://github.com/claudinxch/token-generator',
    projectLink: 'https://token-generator-one.vercel.app',
    technologies: ['React', 'JavaScript', 'Material UI', 'CSS'],
  },
  {
    title: 'Weather Now',
    englishDescription:
      'This application provides real-time weather information, displaying the temperature, wind speed and humidity percentage for any location in the world. With its user-friendly interface, you can easily check the current weather conditions.',
    portugueseDescription:
      'Este aplicativo fornece informações meteorológicas em tempo real, exibindo temperatura, velocidade do vento e umidade de qualquer lugar do mundo. Com sua interface amigável, você pode facilmente verificar as condições climáticas atuais.',
    image: '/img/weatherapp.png',
    imageAlt: 'Weather Now home page',
    video: '/video/weatherapp.mkv',
    repositoryLink: 'https://github.com/claudinxch/weather-app',
    projectLink: 'https://claudinxch.github.io/weather-app/',
    technologies: ['JavaScript', 'RestAPI', 'HTML', 'CSS'],
  },
]
