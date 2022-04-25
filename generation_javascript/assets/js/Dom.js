console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.links);
console.log(document.images);
console.log(document.scripts);
console.log(document.styleSheets);

setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);