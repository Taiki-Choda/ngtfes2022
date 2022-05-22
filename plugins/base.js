const noScroll = () => {
    document.addEventListener("mousewheel", scrollControl, { passive: false });
    document.addEventListener("touchmove", scrollControl, { passive: false });
}
const returnScroll = () => {
    document.removeEventListener("mousewheel", scrollControl, { passive: false });
    document.removeEventListener('touchmove', scrollControl, { passive: false });
}
const scrollControl = (event) => {
    // event.preventDefault();
}
export default ({app}, inject) => {
    inject('returnScroll', returnScroll);
    inject('noScroll', noScroll);
}
