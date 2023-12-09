How to start the service and use the application:

    Run npm i to install dependencies.
    Use npm start to initiate the service.
    To start chatting with the AI, click on the "Create New Chat" button. You can provide feedback for the AI responses.

Reasoning behind technical choices:

    I opted for basic modular CSS instead of using other themes like Material UI or Chakra, mainly due to unfamiliarity. Additionally, I believe any project should showcase the uniqueness of our brand, possessing its own distinct theme and color.

    Regarding storage, I encountered issues implementing a Redux store. Consequently, I used React state to store messages and chat sessions. However, I faced problems storing AI and overall conversation feedback.

Reasoning behind design choices:

    I selected basic themes from ChatGPT and Bard for their minimalistic appearance and user-friendly navigation options.

Trade-offs and potential improvements:

    One crucial aspect I couldn't implement was the view where users could see all conversation feedback. I thought of creating another state based on ID to store feedback in an object structure of ID and feedback values. Given more time, I would have implemented this feedback storage for overall conversations.

    Choosing UI themes and colors took a significant amount of time as it's subjective. If I had more knowledge of UI/UX, I believe I could have enhanced the project further.

    Another feature I couldn't implement due to time constraints was conversation sharing.

