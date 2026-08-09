import MyReact, { useState } from 'react'

export default function Assignment7() {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const characterCount = text.length;
    const wordCount = text.trim() === ""
        ? 0
        : text.trim().split(/\s+/).length;

    const remainingCharacters = 100 - characterCount;

    return (
        <div>
            <h2>Text Counter</h2>
            <textarea
                value={text}
                onChange={handleChange}
                maxLength={100}
                placeholder="Type something..."
                rows={5}
                cols={40}
            />

            <p>Characters: {characterCount}</p>
            <p>Words: {wordCount}</p>
            <p>Remaining Characters: {remainingCharacters}</p>
        </div>
    );
}
