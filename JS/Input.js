document.getElementById('coupne-input').addEventListener('keyup',function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-apply');
    if(text ==='SELL200'){
        deleteButton.removeAttribute('disabled');
        deleteButton.classList.remove('bg-[#ed79ce]');
        deleteButton.classList.add('bg-[#E527B2]');
    }
    else{
        deleteButton.setAttribute('disabled');
        deleteButton.classList.remove('bg-[#E527B2]');
        deleteButton.classList.add('bg-[#ed79ce]');
    }
})