
let url = window.location.toString();
let layoutMatches = url.match(/^.+[?&]layout=([a-z]+)([?&]|$)/i);
let layout = layoutMatches ? layoutMatches[1] : 'handcam';

document.getElementsByTagName("html")[0].classList.add('layout-' + layout);

export default layout;