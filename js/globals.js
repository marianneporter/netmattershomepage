const mainContent = document.querySelector('.all-content');

const currentScroll = () => {
    let scrollTop = mainContent.scrollTop;
    let scrollTopPX = `${scrollTop}px`;
   
    return {scrollTop, scrollTopPX}
}
