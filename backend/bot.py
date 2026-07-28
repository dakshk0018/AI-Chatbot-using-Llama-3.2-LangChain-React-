import ollama

MODEL_NAME = "llama3.2"


def ask_llama(prompt, history):

    messages = [
        {
            "role": "system",
            "content":
            "You are a helpful AI assistant."
        }
    ]

    messages.extend(history)

    messages.append(
        {
            "role": "user",
            "content": prompt
        }
    )

    response = ollama.chat(
        model=MODEL_NAME,
        messages=messages
    )

    return response["message"]["content"]