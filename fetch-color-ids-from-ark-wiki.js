// Visit: https://ark.wiki.gg/wiki/Color_IDs
// Put the code below into your code-inspector/dev tools
Array.from(document.querySelectorAll('.color-ids-list')).forEach(list => {
    Array.from(list.querySelectorAll('li')).forEach(color => {
       console.log(color.querySelector('.color-id-name').innerText.replace('ID: ', '').split(' ')[0], '|', color.querySelector('.color-id-name').innerText.replace('ID: ', '').split(' ')[1], '|',color.querySelector('.color-id-infos > code').innerText)
    });
})
