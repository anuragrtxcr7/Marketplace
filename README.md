# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Overview of the project: -

- In this Project I made and deployed a website which showcases various Large Language and AI Models. Also, the models are characterized based on their use case and their Architecture. 
- I made various card components for different models through which the user can go either to the explore page (to know more about the model and its Use-cases and interact with its data) or rather to Try out page. 
- Instead of Hard-coding the Data I Created my personal JSON placeholder on my Own JSON server on my GitHub to enrich the user Interface.
- My JSON Placeholder is live at (https://my-json-server.typicode.com/anuragrtxcr7/data_json/models).

# Try it Out

- This Try out page was little special and tricky because here I read, interacted and observed various APIs of famous LLM’s and how they function. On understanding them, I Integrated these APIs into my webpage so that a preview could be used by the users on how these Models really function. After Integration I used users Responses to enable them to interact with the models through UI components bought to life by the API’s Endpoint and their Algorithm.

# React-Router-Linking

- I linked all these pages using React-Router as it reduces the number of times the application Renders. I created this Project with a JavaScript Framework known as ReactJs and deployed it using Vercel . Here I used the web Builder Bundler Vite over Create React App because it provides a faster spin-up off the development server.


# Packages/Dependencies

Here were all the libraries, frameworks and packages I used for creating this project: -
- @chatscope/chat-ui-kit-react : for designing and creating the chat components of the API integrated LLM models for users to interact.
- react and react-dom : for designing our Application in ReactJs
- react-router-dom : for routing all the webpages without unwanted rendering
- openai :  for installing the libraries needed for API integration of Various LLM models developed by OpenAI such GPT, DALL-E
- @google/generative-ai :  for installing the libraries needed for API integration of LLM model developed by Google such Gemini.
- @nextui-org/react : for designing our website and generating certain icon components from this library to better style the Website
- Tailwind-CSS : for styling our website with ease as it requires only inline CSS
- Dotenv :  for generating environment for storing environment variables storing the API_KEY of various API’s
- Axios for fetching the API’s

# Page Load Time

- Page load time measures how long it takes for the contents of a website to show up in the user’s browser. The loading process of a website will consist of multiple milestones, for example starting to show text or displaying a hero image.

- For this website I measured the Page Load time after deploying this website and measured its data from Google’s Page speed insights.
- The page load time of website depends on the Server Response time, download Sizes and Rendering Times. I did certain optimizations to decrease the load time of my applications some of them being: -

# Optimisations

1.	I used React-Router-DOM for routing instead of anchor tags to reduce rendering times.
2.	I downloaded low-resolution images instead of extracting them from the webserver contributing to a quicker load time.
3.	I used Vite Application very conservatively and deleted all the components that were not in use so that My website Size would reduce.
4.	I fetched the data quickly through Mock Backend JSON Server Made personally by me on my GitHub so that fast Fetching could take place.

