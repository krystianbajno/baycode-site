export const genPass = (n) => {
    let c = 'abcdefghijklmnopqrstuvwxyz';
    c += c.toUpperCase() + 1234567890 + "!@#$%^&*()_+";

    return '-'.repeat(n).replace(/./g, b => c[~~(Math.random() * (c.length - 1))])
}