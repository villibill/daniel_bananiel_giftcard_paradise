const encryptedCode = "dVQFAQoZMBIPDwoaEQUoDQwGEQ=="; // Replace this!

// XOR decryption function
function xorDecrypt(encoded, key) {
    let decoded = atob(encoded); // Base64 decode
    let decrypted = "";
    for (let i = 0; i < decoded.length; i++) {
        decrypted += String.fromCharCode(decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return decrypted;
}

// Key for encryption (must match the one used during encryption)
const decryptionKey = "DanielBananiel"; 
const secretCode = xorDecrypt(encryptedCode, decryptionKey);

function redeemCode() {
    const userCode = document.getElementById("codeInput").value;
    if (userCode === secretCode) {
        document.getElementById("confirmation").classList.remove("hidden");
    } else {
        alert("Invalid code! Try again.");
    }
}

