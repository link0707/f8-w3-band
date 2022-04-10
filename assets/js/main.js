// Lay ra bien bang querySelectorAll querySelector
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')  
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close') 

function showBuyTickets() { 
    modal.classList.add('open')
} 

function hideBuyTickets() { 
    modal.classList.remove('open')
}   

function stopPropagationModal(event) { 
    event.stopPropagation()
} 
// Click hiển thị modal
// Có 3 biến buyBtn nên phải dùng vòng lặp for
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}  
// Click vào nút close để hide modal đi
modalClose.addEventListener('click', hideBuyTickets)
// Click vào bên ngoài modal-container cũng hide modal đi 
// Clịck toàn bộ modal thì đều hide modal
modal.addEventListener('click', hideBuyTickets)  
// Nổi bọt: hành vi của cha thì con cũng bị ảnh hưởng theo
// Ngăn chặn nổi bọt modalContainer
modalContainer.addEventListener('click', stopPropagationModal) 

// MOBILE 
const menu = document.querySelector('.js-mobi-menu') 
const header = document.querySelector('.js-header')
const headerHeight = header.clientHeight

menu.onclick = function() { 
    var isClosed = header.clientHeight === headerHeight;
    if(isClosed) { 
        header.style.height = 'auto';
    } else { 
        header.style.height = headerHeight + 'px';
    }
}   

// Tự động đóng khi chọn menu 
var menuItems = document.querySelectorAll('#navigation li a[href*="#"]') 
for(menuItem of menuItems) {  
    menuItem.onclick = function(event) {  
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu) { 
            event.preventDefault();
        } else  {
            header.style.height = headerHeight + 'px';
        }
    }
}


