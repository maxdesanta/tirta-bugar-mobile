export const checkIdPacket = ({ duration }) => {
    if (duration === "1") {
        return 1;
    } else if (duration === "2") {
        return 2;
    } else if (duration === "3") {
        return 3;
    }
}