export const checkIdPacket = ({ duration,namePacket }) => {
    if (duration === "1" && namePacket === "regullar") {
        return 1;
    } else if (duration === "2" && namePacket === "regullar") {
        return 2;
    } else if (duration === "3" && namePacket === "regullar") {
        return 3;
    } else if (duration === "4" && namePacket === "regullar") {
        return 4;
    }
}