import moment from "moment";

export const converDate = (date) => {
    const format = moment(date).format('DD MMMM YYYY');
    return format;
}