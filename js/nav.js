// nav.js — mobile drawer open/close. Single concern: the navigation menu.
export function initNav(){
  const burger=document.getElementById('burger');
  const drawer=document.getElementById('drawer');
  if(!burger||!drawer) return;
  burger.addEventListener('click',()=>drawer.classList.add('open'));
  drawer.addEventListener('click',e=>{
    if(e.target.hasAttribute('data-close')) drawer.classList.remove('open');
  });
}
