export const checkMonth = (month) => {
    switch (month) {
        case "1 bulan":
            return "1";
        case "3 bulan":
            return "2";
        case "6 bulan":
            return "3";
        case "12 bulan":
            return "4";
        default:
            return "Mana ada";
    }
}