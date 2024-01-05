const toggle = document.getElementById('btn-burger')
const navbar = document.getElementById('navigation-items')

toggle.onclick = () => {
  console.log('toggle');
  toggle.classList.toggle('active')
  navbar.classList.toggle('active')
}
document.onclick = (e) => {
  if (e.target.id !== 'navigation-items' && e.target.id !== 'btn-burger') {
    toggle.classList.remove('active')
    navbar.classList.remove('active')
  }
}