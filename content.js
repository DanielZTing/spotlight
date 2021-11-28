let search = document.createElement('iframe');
search.style.position = 'fixed';
search.style.top = '10%';
search.style.left = '50%';
search.style.transform = 'translateX(-50%)';
search.style.width = '100%';
search.style.maxWidth = '50rem';
// search.style.border = 'none';
search.style.zIndex = '2000000';
search.style.display = 'none';
search.src = chrome.runtime.getURL('search.html');
document.body.appendChild(document.createElement('div'))
    .attachShadow({ mode: 'closed' }).appendChild(search);

chrome.runtime.onMessage.addListener(() => {
    if (search.style.display === 'none') {
        search.style.display = '';
    } else {
        search.style.display = 'none';
    }
});
