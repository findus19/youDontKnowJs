'use strict'

let books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book'),
    adv = document.querySelector('.adv'),
    tagUl = document.getElementsByTagName('ul'),
    tagIl = document.getElementsByTagName('li');

adv.style.display = 'none';

console.log(books, book);
books[0].insertBefore(book[1], book[0]);  
books[0].insertBefore(book[4], book[2]);
books[0].insertBefore(book[2], null);


let bookRename = book[4].children[0];
bookRename.innerHTML = "Книга 3. this и Прототипы Объектов";
bookRename.style.color = 'darkkhaki';

const replaceBackground = function() {
    document.body.style.backgroundImage = 'url(../image/you-dont-know-js.jpg)';
}
replaceBackground();

console.log(tagUl, tagIl);

tagUl[1].insertBefore(tagUl[1].children[3], tagUl[1].children[2]);
tagUl[1].insertBefore(tagUl[1].children[6], tagUl[1].children[4]);
tagUl[1].insertBefore(tagUl[1].children[8], tagUl[1].children[5]);
tagUl[1].insertBefore(tagUl[1].children[3], tagUl[1].children[10]);

tagUl[4].insertBefore(tagUl[4].children[9], tagUl[4].children[2]);
tagUl[4].insertBefore(tagUl[4].children[3], tagUl[4].children[6]);
tagUl[4].insertBefore(tagUl[4].children[6], tagUl[4].children[9]);


let newLi = document.createElement('li');
newLi.textContent = "Глава 8: За пределами ES6";
tagUl[5].appendChild(newLi);

tagUl[5].insertBefore(tagUl[5].children[9], null); 
