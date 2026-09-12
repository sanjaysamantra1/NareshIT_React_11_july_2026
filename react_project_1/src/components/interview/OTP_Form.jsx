import { useState,useRef } from 'react';
const styles = {
  wrapper: { textAlign: "center", padding: "40px" },
  otpContainer: { display: "flex", justifyContent: "center", gap: "10px", margin: "20px 0" },
  input: { width: "45px", height: "50px", fontSize: "22px", textAlign: "center", border: "1px solid #ccc", borderRadius: "8px", outline: "none" }
};
export default function OTP_Form() {
    const length = 6;
    let arr = Array(length).fill("");
    const [otp, setOtp] = useState(arr);
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const digit = e.target.value.replace(/\D/g, "").slice(-1);
        const updatedOtp = [...otp];
        updatedOtp[index] = digit;
        setOtp(updatedOtp);
        if (digit && index < length - 1)
            inputRefs.current[index + 1]?.focus();
        if (updatedOtp.join("").length === length)
            console.log("OTP:", updatedOtp.join(""));
    };
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            if (otp[index]) {
                const updatedOtp = [...otp];
                updatedOtp[index] = "";
                setOtp(updatedOtp);
            } else if (index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        }
        if (e.key === "ArrowLeft" && index > 0)
            inputRefs.current[index - 1]?.focus();
        if (e.key === "ArrowRight" && index < length - 1)
            inputRefs.current[index + 1]?.focus();
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const value = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
        if (!value) return;
        const updatedOtp = [...value].concat(Array(length).fill("")).slice(0, length);
        setOtp(updatedOtp);
        inputRefs.current[Math.min(value.length, length - 1)]?.focus();
        if (value.length === length) console.log("OTP:", value);
    };

    return (
        <div style={styles.wrapper}>
            <h2>Enter OTP</h2>

            <div style={styles.otpContainer}>
                {otp.map((digit, index) =>
                    <input key={index} ref={el => inputRefs.current[index] = el} type="text"
                        inputMode="numeric" maxLength={1} value={digit}
                        onChange={e => handleChange(e, index)} onKeyDown={e => handleKeyDown(e, index)}
                        onPaste={handlePaste} onFocus={e => e.target.select()} style={styles.input} />)}
            </div>

            <button onClick={() => {
                const value = otp.join("");
                value.length === length ? console.log("Verifying OTP:", value) : alert("Please enter complete OTP");
            }}>
                Verify OTP
            </button>
        </div>
    );
}
