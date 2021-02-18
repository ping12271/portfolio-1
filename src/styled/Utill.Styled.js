export const setBoxShadow = (level = 1) => {
    if (level === 1) {
        return '1px 1px 10px rgba(0,0,0,.15)'
    } else if (level === 2) {
        return '2px 2px 15px rgba(0,0,0,.2)'
    } else if (level === 3) {
        return '3px 3px 20px rgba(0,0,0,.25)'
    } else if (level === 4) {
        return '4px 4px 25px rgba(0,0,0,.3)'
    } else if (level === 5) {
        return '5px 5px 40px rgba(0,0,0,.4)'
    }
};