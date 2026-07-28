from database import create_database
from memory import save_message, get_history
from bot import ask_llama


create_database()


while True:

    user = input("\nYou: ")

    if user.lower() == "exit":
        break


    # Load previous conversation
    history = get_history()


    context = ""

    for chat in history[-5:]:
        context += f"""
User: {chat[0]}
Assistant: {chat[1]}
"""


    prompt = f"""
You are a helpful AI assistant.

Previous conversation:
{context}

User:
{user}

Assistant:
"""


    answer = ask_llama(prompt)


    print("\nBot:", answer)


    save_message(
        user,
        answer
    )