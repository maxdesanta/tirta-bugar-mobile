export const checkMonth = (month) => {
    switch (month) {
        case "8x Pertemuan":
            return "1";
        case "1 Bulan":
            return "2";
        case "3 Bulan":
            return "3";
        default:
            return "Mana ada";
    }
}