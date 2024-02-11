# Truth or Dare Game

Welcome to the [**Truth or Dare**](https://truth-and-dare.vercel.app) game! This React application allows you to enjoy a classic game with friends or family, all within the comfort of your web browser.

## Features

- **Multiple Categories**: Choose from various categories including Truth, Dare, Never Have I Ever, Paranoia, and Would You Rather.
- **Interactive Interface**: Engage with an intuitive user interface, making it easy to play and enjoy the game.
- **Dynamic Content**: Get random questions or dares fetched from external APIs to keep the game fresh and exciting.
- **Responsive Design**: Play the game seamlessly on any device with a responsive layout.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/bharatbhusal78/truth-or-dare.git
   ```

2. Navigate to the project directory:

   ```bash
   cd truth-or-dare
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:
   
   Create a copy of `.env.example` file in the root directory and provide the necessary API endpoints for the game. Example:
   ```
   REACT_APP_TRUTH_API=your_truth_api_endpoint
   REACT_APP_DARE_API=your_dare_api_endpoint
   REACT_APP_WYR_API=your_would_you_rather_api_endpoint
   REACT_APP_NHIE_API=your_never_have_i_ever_api_endpoint
   REACT_APP_P_API=your_paranoia_api_endpoint
   ```

5. Start the development app:

   ```bash
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or create a pull request.

## Credits

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- External APIs used for fetching questions/dares:
  - [Truth API](https://api.truthordarebot.xyz/v1/truth)
  - [Dare API](https://api.truthordarebot.xyz/api/dare)
  - [Would you Rather API](https://api.truthordarebot.xyz/api/wyr)
  - [Never have I ever API](https://api.truthordarebot.xyz/api/nhie)
  - [Paranoia API](https://api.truthordarebot.xyz/api/paranoia)
