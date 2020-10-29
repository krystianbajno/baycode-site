export const encryptXor = (text, key) => Array.from(text, (c, i) => String.fromCharCode(
    c.charCodeAt(0) ^ key.charCodeAt(i % key.length)
)).join('');
