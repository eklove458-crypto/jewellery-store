import speech_recognition as sr
import pyttsx3
import webbrowser
import os
import datetime
import wikipedia

engine = pyttsx3.init()
engine.setProperty('rate', 185)

def speak(text):
    print("Jarvis:", text)
    engine.say(text)
    engine.runAndWait()

def listen():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        r.pause_threshold = 1
        audio = r.listen(source)

    try:
        query = r.recognize_google(audio, language="en-in")
        print("User:", query)
        return query.lower()
    except:
        return ""

# ---------------- SMART PARSER ----------------
def extract_query(command, keywords):
    for word in keywords:
        if word in command:
            return command.split(word)[-1]
    return ""

# ---------------- MAIN HANDLER ----------------
def handle(command):

    print("DEBUG:", command)

    # 🚀 YouTube
    if "youtube" in command:
        speak("YouTube open kar raha hoon")
        webbrowser.open("https://youtube.com")

        # YouTube search inside app
        if "search" in command:
            q = extract_query(command, ["search", "youtube"])
            if q:
                speak(f"YouTube par search: {q}")
                webbrowser.open(f"https://www.youtube.com/results?search_query={q}")

    # 🌐 Google search
    elif "google" in command or "search" in command:
        q = extract_query(command, ["google", "search"])
        speak("Google par search kar raha hoon")
        webbrowser.open(f"https://www.google.com/search?q={q}")

    # 📚 Wikipedia
    elif "wikipedia" in command:
        q = extract_query(command, ["wikipedia"])
        speak("Wikipedia se result la raha hoon")
        try:
            result = wikipedia.summary(q, sentences=2)
            speak(result)
        except:
            speak("Wikipedia se kuch nahi mila")

    # 💻 Apps
    elif "open notepad" in command:
        speak("Notepad open kar raha hoon")
        os.system("notepad")

    elif "open chrome" in command:
        speak("Chrome open kar raha hoon")
        os.system("start chrome")

    elif "calculator" in command:
        speak("Calculator open kar raha hoon")
        os.system("calc")

    # ⏰ Time
    elif "time" in command:
        t = datetime.datetime.now().strftime("%I:%M %p")
        speak(f"Abhi time hai {t}")

    # ❌ Exit
    elif "exit" in command or "stop" in command:
        speak("Jarvis shutdown ho raha hai")
        exit()

    # 🧠 AI fallback
    else:
        speak("Main samajh nahi paaya, main search kar raha hoon")
        webbrowser.open(f"https://www.google.com/search?q={command}")

# ---------------- MAIN LOOP ----------------
def jarvis():
    speak("Jarvis AI Brain activated")

    while True:
        print("Listening...")
        command = listen()

        if command:
            handle(command)

# ---------------- RUN ----------------
jarvis()
































