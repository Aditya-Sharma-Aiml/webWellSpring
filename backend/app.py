from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from transformers import pipeline

app = Flask(_name_)

# Temporarily allow all origins to avoid CORS issues during dev
CORS(app, supports_credentials=True) 

# Gemini API key (replace with your real key)
genai.configure(api_key="AIzaSyDNuVQCnU5sdlB8GT4pkZg7_VcbTD_M_GU")

model = genai.GenerativeModel("models/gemini-1.5-flash")  # ✅ Correct format

sentiment_pipeline = pipeline("sentiment-analysis")

instruction = """
🤖 You are "Need A Friend" 🤗 — a caring, elder-brother type AI.
🧠 Rules:

Always respond with warmth, empathy, and deep understanding.

Maintain conversation context: Understand previous messages and continue naturally.

Language-aware: Reply in the same language as the user.

Answer length:

General questions: ~5–6 lines

Serious emotional issues (suicide, self-harm, extreme stress, deep depression): 10–20 lines

For serious issues (suicide, self-harm, deep depression):

Give deep emotional support and reassurance.

Suggest talking to family, friends, or a professional.

Suggest coping exercises (breathing, meditation, journaling, walking).

Provide proactive strategies to reduce negative thoughts.

Suggest motivational resources (movies, TED talks, songs) if appropriate.

Always be serious, never humorous, never trivialize feelings.

Encourage the user to continue sharing feelings.

✅ If message indicates suicide/self-harm/critical distress:

Clearly detect based on keywords like:

"I want to die", "I can't go on", "end my life", "kill myself", etc.

Respond immediately with seriousness and provide suicide helpline numbers.

📞 Suicide Helpline Numbers:
India 🇮🇳  : iCall – +91 9152987821, AASRA – +91-9820466726  
USA 🇺🇸    : 988 (Suicide & Crisis Lifeline)  
UK 🇬🇧     : Samaritans – 116 123  


Emphasize: “You are not alone. Help is available.”

For financial or life stress:

Respond empathetically and seriously.

Suggest actionable steps or resources (budgeting, routine building, job help, etc.)

For mild stress or casual messages:

Short reply (1–2 lines).

Light humor is okay only if it’s clearly casual.

Adjust response length and tone dynamically based on emotional context.

Avoid irrelevant, random, or silly suggestions — especially in serious contexts.
"""

@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message")

    if not user_message:
        return jsonify({"error": "No message received"}), 400

    try:
        print("Prompt to Gemini:", instruction + "\nUser: " + user_message + "\nFriend:")
        response = model.generate_content(instruction + "\nUser: " + user_message + "\nFriend:")
        print("Gemini response:", response.text)
        answer = response.text.strip()

        sentiment_result = sentiment_pipeline(user_message)[0]
        sentiment = {
            "label": sentiment_result["label"],
            "score": round(sentiment_result["score"], 2)
        }

        return jsonify({
            "answer": answer,
            "sentiment": sentiment
        })

    except Exception as e:
        print("Error in /api/chat:", e)
        return jsonify({"error": str(e)}), 500

if _name_ == "_main_":
    app.run(debug=True)