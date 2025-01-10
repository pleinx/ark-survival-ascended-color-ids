// Visit: https://ark.wiki.gg/wiki/Color_IDs
// Put the code below into your code-inspector/dev tools
Array.from(document.querySelectorAll('.color-ids-list')).forEach((list) => {
    Array.from(list.querySelectorAll('li')).forEach((color) => {
	const colorId = color.querySelector('.color-id-name').innerText.replace('ID: ', '').split(' ')[0];
	console.log(colorId, '|', color.querySelector('.color-id-name').innerText.replace(colorId, '').replace('ID: ', '').replace(' ', ''), '|',color.querySelector('.color-id-infos > code').innerText)
    });
})
