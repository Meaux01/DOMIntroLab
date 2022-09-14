const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

console.log('happy day')

const mainEl = document.querySelector('main')
mainEl.style.backgroundColor = '#4a4e4d'
mainEl.innerHTML = '<h1>SEI Rocks</h1>'
mainEl.classList = 'flex-ctr'

const topMenuEl = document.querySelector('#top-menu')
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = '#0e9aa7'
topMenuEl.classList = 'flex-around'

// task2 )

menuLinks.forEach((linkObj) => {
    const a = document.createElement('a')
    a.setAttribute('href', linkObj.href)
    a.textContent = linkObj.text
    topMenuEl.appendChild(a)
    console.log(a);
})