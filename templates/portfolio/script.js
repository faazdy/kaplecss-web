function toggleTheme() {
    const html = document.documentElement;
    const dark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', dark ? 'light' : 'dark');
    document.getElementById('ico-moon').style.display = dark ? 'block' : 'none';
    document.getElementById('ico-sun').style.display = dark ? 'none' : 'block';
}