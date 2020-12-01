let titles = Array.from(document.querySelectorAll('.article-title'));
let chapters = Array.from(document.querySelectorAll('.chapter'));

for(let i=0; i<titles.length; i++) {
    titles[i].addEventListener('click', ()=> {
        let titleActive = titles.findIndex(t => t.classList.contains('title-active'));
        titles[titleActive].classList.remove('title-active');
        titles[i].classList.add('title-active');

        let chapterActive = chapters.findIndex(c => c.classList.contains('chapter-active'));
        chapters[chapterActive].classList.remove('chapter-active');
        chapters[i].classList.add('chapter-active');
    })
}