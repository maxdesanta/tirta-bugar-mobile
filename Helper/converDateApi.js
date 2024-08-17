import moment from "moment";

export const convertDateApi = (date) => {
    if (date) {
        return moment(date).format('YYYY-MM-DD');   
    } else {
        return null;
    }
}