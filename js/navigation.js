const togglebtn = document.querySelector('.dropdown-content')
const togglebtnicon = document.querySelector('.dropdown-content i')
const dropdownManu = document.querySelector('.navigation-bar')
    
        togglebtn.onclick = function () {
        dropdownManu.classList.toggle ('open')
            const isopen = dropdownManu.classList.contains('open')
    
            togglebtnicon.classList = isopen
                ? 'bx bx-x'
                : 'bx bx-menu'
        }