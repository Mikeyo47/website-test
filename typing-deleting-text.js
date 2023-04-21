// source - https://www.html-code-generator.com/html/typewriter-text-scroller


(() => {
    let CharacterPos = 0;
    let MsgBuffer = "";
    let TypingSpeed = 50; // Millisecond
    let NxtMsgDelay = 1000; // Millisecond
    let MsgIndex = 0;
    let delay;
    let deletePos = 1;
    let deleteSpeed = 5; // Millisecond
    let id = document.getElementById("typing-deleting-text");

    let messages = [
      "HTML",
      "CSS",
      "JavaScript",
      "More to follow..."
    ];

    const StartTyping = () => {
        if (CharacterPos != messages[MsgIndex].length) {
            MsgBuffer += messages[MsgIndex].charAt(CharacterPos);
            id.value = MsgBuffer + (CharacterPos != messages[MsgIndex].length - 1 ? "_" : "");
            delay = TypingSpeed;
            id.scrollTop = id.scrollHeight; //auto scroll bottom
        } else {
            deletePos = 1;
            setTimeout(deleteTyping, NxtMsgDelay);
            return;
        }
        CharacterPos++;
        setTimeout(StartTyping, delay);
    };
    const deleteTyping = () => {
        if (deletePos != messages[MsgIndex].length) {
            id.value = messages[MsgIndex].slice(0, -deletePos);
        } else {
            MsgBuffer = "";
            CharacterPos = 0;
            if (MsgIndex != messages.length - 1) {
                MsgIndex++;
            } else {
                MsgIndex = 0;
            }
            StartTyping();
            return;
        }
        deletePos++;
        setTimeout(deleteTyping, deleteSpeed);
    };
    StartTyping();
})();