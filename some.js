;(function(){
    let elem = document.querySelector('#button');
    let textarea = document.getElementById('textarea')
    elem.addEventListener('click', function (event){
        event.preventDefault();
        if(textarea.value.trim()){
            alert('Когда я освою бекэнд я обязательно закреплю тут отправку))) пока просто можете поклацать)')
        } else {
            alert('Введите сообщение...')
        }
    })
})();
;(function (){
    let elem = document.querySelector('#ukraine');
    elem.addEventListener('click', function (){
        alert('Слава Украине!')
    })
})();

;(function(){
    let elems = document.querySelectorAll('.icon.lang')
    
    
    for(let elem of elems){
        elem.addEventListener('mouseenter', function(event){
            let comment = document.createElement('div');
            comment.textContent = event.target.dataset.name;
            comment.classList.add('tooltip')
            let target = event.target;
            let coords = target.getBoundingClientRect();
            let left = coords.left + (target.offsetWidth - comment.offsetWidth) / 2;
            if(left < 0) left = 0;
            let top = coords.top + (target.offsetHeight * 1.1) + comment.offsetHeight ;
            if(top < 0){
                top = coords.top + target.offsetHeight + 5
            } else if((coords.top + target.offsetHeight) > document.documentElement.clientHeight){
                top = coords.top - target.offsetHeight / 2
            }
            comment.style.left = left + 'px';
            comment.style.top = top + 'px';
            elem.insertAdjacentElement('afterend',comment);
            console.log(coords)
            elem.addEventListener('mouseleave', function(){
                if(comment){
                    comment.remove();
                    comment = null;
                }
            })
        });
    }
})();

;(function (){
    let elems = document.querySelectorAll('.icon.lang.now');

    for(let elem of elems){
        elem.addEventListener('click', function(event){
            alert(event.target.dataset.comment)
        })
    }
})();

