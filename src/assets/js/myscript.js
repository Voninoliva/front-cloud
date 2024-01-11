
    const bulmaCollapsibleInstances = bulmaCollapsible.attach('.is-collapsible');
    bulmaCollapsibleInstances.forEach(bulmaCollapsibleInstance => {
        console.log(bulmaCollapsibleInstance.collapsed());
    });


function openModal() {
    document.querySelector('.modal').classList.add('is-active');
}
function closeModal() {
    document.querySelector('.modal').classList.remove('is-active');   
}
