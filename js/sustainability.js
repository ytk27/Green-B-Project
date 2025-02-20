const elObserve = document.querySelectorAll('h2,b,p,li,img,.info,.sb-03'
    ,''
);


let callback = function(entries, observe){  
    entries.forEach(function(item){
        if(item.isIntersecting){
            item.target.classList.add('act');
            observe.unobserve(item.target);
        }
    })
}


let ob = new IntersectionObserver(callback);
elObserve.forEach(function(item){
    ob.observe(item);
})
