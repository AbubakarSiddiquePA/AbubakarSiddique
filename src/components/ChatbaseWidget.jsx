import { useEffect } from "react";

export default function ChatbaseWidget() {
    useEffect(() => {
        // Avoid double loading
        if (document.getElementById("chatbase-embed-script")) return;

        const script = document.createElement("script");
        script.id = "chatbase-embed-script";
        script.src = "https://www.chatbase.co/embed.min.js";
        script.setAttribute("chatbotId", "QJeVsCcOYh1KYpbhm1oht");
        script.setAttribute("domain", "www.chatbase.co");
        document.body.appendChild(script);
    }, []);

    return null; // No visible DOM element needed
}
