
export const checkExpired = (ex) => {
    const dateNow = new Date();
    const expired = new Date(ex);
    
    if(dateNow > expired){
        return true;
    } else {
        return false;
    }
}