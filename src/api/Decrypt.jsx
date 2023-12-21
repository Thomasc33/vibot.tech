import CryptoJS from 'crypto-js';

let k = 'a634b4d6cdf2f5600ca8eba1fd76470fd9925dc09a1b5b4db7c88ed0bfb70cfc'

const decryptData = encryptedData => {
    try {
        const key = CryptoJS.enc.Hex.parse(k); // Use Hex.parse if key is in hex format
        const iv = CryptoJS.enc.Hex.parse(encryptedData.iv); // Assuming iv is in hex format

        const decrypted = CryptoJS.AES.decrypt({ ciphertext: CryptoJS.enc.Hex.parse(encryptedData.content) }, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        
        const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
        return JSON.parse(decryptedText);
    } catch (error) {
        console.error('Decryption error:', error.message);
        return null;
    }
};


export default decryptData;