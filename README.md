# robert-warneke.github.io

`robertwarneke.com` - Static portfolio website with responsive design, hosted using [GitHub Pages](https://pages.github.com/).

View repository at [github.com/robert-warneke/robert-warneke.github.io](https://github.com/robert-warneke/robert-warneke.github.io).

Made with ❤️

![](https://custom-icon-badges.demolab.com/badge/-HTML5-e34c26?style=for-the-badge&logoColor=white&logo=html5)
![](https://custom-icon-badges.demolab.com/badge/-CSS3-264de4?style=for-the-badge&logoColor=white&logo=css3)
![](https://custom-icon-badges.demolab.com/badge/-javascript-323330?style=for-the-badge&logoColor=white&logo=javascript)
![](https://custom-icon-badges.demolab.com/badge/-markdown-269ee9?style=for-the-badge&logoColor=white&logo=markdown)

[![](https://custom-icon-badges.demolab.com/github/last-commit/robert-warneke/robert-warneke.github.io?logo=history&logoColor=white)](https://github.com/robert-warneke/robert-warneke.github.io/commits/main/README.md)
![](https://custom-icon-badges.demolab.com/github/stars/robert-warneke/robert-warneke.github.io?logo=star&style=social&logoColor=black)
![](https://custom-icon-badges.demolab.com/github/watchers/robert-warneke/robert-warneke.github.io?logo=eye&style=social&logoColor=black)

---

## Table of Contents

- [Features](https://github.com/robert-warneke/robert-warneke.github.io#Features)
- [HTML](https://github.com/robert-warneke/robert-warneke.github.io#HTML)
- [CSS](https://github.com/robert-warneke/robert-warneke.github.io#css)
- [Javascript](https://github.com/robert-warneke/robert-warneke.github.io#javascript)
- [Tools & Resources](https://github.com/robert-warneke/robert-warneke.github.io#%EF%B8%8F-tools--resources)
    - [Additional Tools & Resources](https://github.com/robert-warneke/robert-warneke.github.io#additional-tools--resources)
- [Robert Warneke Branding](https://github.com/robert-warneke/robert-warneke.github.io#robert-warneke-branding)
- [Contact & Connect](https://github.com/robert-warneke/robert-warneke.github.io#-contact--connect)
- [Support](https://github.com/robert-warneke/robert-warneke.github.io#support)

---

## Features

### 💡 Light/Dark Mode using HTML, CSS, and Javascript

<details>
    <summary><i>Want this feature on your website? This is how! . . .</i></summary>

> 1. Start by adding an ***HTML*** button with an ***id*** named `mode-toggle` and a ***class*** named `toggle`.
    
`.html` example:
```
<button id="mode-toggle" class="toggle">
    Toggle Mode
</button>
```

> 2. Add the following ***Javascript*** to your `.js` file.

`.js` example:
```
const toggleMode = document.getElementById('mode-toggle');
const body = document.body;


// check if mode exists in localStorage
const currentMode = localStorage.getItem('mode');
if (currentMode === 'dark') {
  body.classList.add('dark-mode-active');
}

toggleMode.addEventListener('click', () => {
  body.classList.toggle('dark-mode-active');
  
  // store current mode in localStorage
  if (body.classList.contains('dark-mode-active')) {
    localStorage.setItem('mode', 'dark');
  } else {
    localStorage.setItem('mode', 'light');
  }
});
```
    
> 3. In your ***CSS*** file, use the selector `.dark-mode-active` to define your desired properties.
    
`.css` example:
```
.dark-mode-active {
    background-color: #333;
    color: #F5F5F5;
}
```

> 4. Link to your `.css` stylesheet inside the `<head>` `</head>` tag of your `.html` file.
>
> &#9432; Don't forget to change `assets/css/main.css` to the location of your `.css` file.

`.html` `<link>` stylesheet example:
```
<link rel="stylesheet" href="assets/css/main.css">
```

> 5. Copy and paste this `<script>` `</script>` before the closing `</body>` tag in your `.html` file.
>
>       &#9432; Don't forget to change `assets/js/main.js` to the location of your `.js` file.

`.html` `<script>` `</script>` example:
```
<script src="assets/js/main.js"></script>
```

</details>

---

## HTML

<details>
<summary><h6> <code>index.html</code>:</h6></summary>

>[![](https://custom-icon-badges.demolab.com/badge/-View%20Webpage-6660e0?style=for-the-badge&logoColor=white&logo=robert-warneke-wlogo)](https://robert-warneke.github.io/index.html)

>[![](https://custom-icon-badges.demolab.com/badge/-View%20Github-333?style=for-the-badge&logoColor=white&logo=github)](https://github.com/robert-warneke/robert-warneke.github.io/blob/main/index.html)

>[![](https://custom-icon-badges.demolab.com/badge/-View%20Raw-fff0e0?style=for-the-badge&logoColor=333&logo=github)](https://raw.githubusercontent.com/robert-warneke/robert-warneke.github.io/main/index.html)

</details>
<details>
<summary><h6> <code>rw/about.html</code>:</h6></summary>

>[![](https://custom-icon-badges.demolab.com/badge/-View%20Webpage-6660e0?style=for-the-badge&logoColor=white&logo=robert-warneke-wlogo)](https://robert-warneke.github.io/rw/about.html)

>[![](https://custom-icon-badges.demolab.com/badge/-View%20Github-333?style=for-the-badge&logoColor=white&logo=github)](https://github.com/robert-warneke/robert-warneke.github.io/blob/main/rw/about.html)

>[![](https://custom-icon-badges.demolab.com/badge/-View%20Raw-fff0e0?style=for-the-badge&logoColor=333&logo=github)](https://raw.githubusercontent.com/robert-warneke/robert-warneke.github.io/main/rw/about.html)

</details>

3. `rw/projects.html`: Robert Warneke | Projects
    - [Webpage](https://robert-warneke.github.io/rw/projects.html)
    - [GitHub](https://github.com/robert-warneke/robert-warneke.github.io/blob/main/rw/projects.html)
    - [Raw](https://raw.githubusercontent.com/robert-warneke/robert-warneke.github.io/main/rw/projects.html)

4. `rw/contact.html`: Robert Warneke | Contact
    - [Webpage](https://robert-warneke.github.io/rw/contact.html)
    - [GitHub](https://github.com/robert-warneke/robert-warneke.github.io/blob/main/rw/contact.html)
    - [Raw](https://raw.githubusercontent.com/robert-warneke/robert-warneke.github.io/main/rw/contact.html)

## CSS

1. `assets/css/main.css`
    - [GitHub](https://github.com/robert-warneke/robert-warneke.github.io/blob/main/assets/css/main.css)
    - [Raw](https://raw.githubusercontent.com/robert-warneke/robert-warneke.github.io/main/assets/css/main.css)

2. `assets/fontawesome/css/all.css`
    - > &#9432; *Icon support file provided by [Font Awesome](https://fontawesome.com)*

## Javascript

1. `assets/js/main.js`

    - [GitHub](https://github.com/robert-warneke/robert-warneke.github.io/blob/main/assets/js/main.js)
    - [Raw](https://raw.githubusercontent.com/robert-warneke/robert-warneke.github.io/main/assets/js/main.js)

---

## 🛠️ Tools & Resources

* `Fonts` : 
  - [Google Fonts](https://fonts.google.com)
  - [Adobe Fonts](https://fonts.adobe.com/)

* `Icons` : 
  - [Material Symbols & Icons - Google Fonts](https://fonts.google.com/icons)
  - [Font Awesome](https://fontawesome.com)
  
* `Shields & Badges` :
  - [Shields.io](https://shields.io/) / [Shields.io GitHub](https://github.com/badges/shields)
  - [Awesome Badges](https://github.com/badges/awesome-badges)
  - [Custom Icon Badges](https://github.com/DenverCoder1/custom-icon-badges)

* `Forms` : 
  - [Formspree](https://formspree.io)


#### *Additional Tools & Resources*
- [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats)
- [Canva](https://canva.com)
- [Inkscape](https://inkscape.org/)
- [Snagit](https://www.techsmith.com/screen-capture.html) by [TechSmith](https://www.techsmith.com)
- [Camtasia](https://www.techsmith.com/video-editor.html) by [TechSmith](https://www.techsmith.com)
- [SVG Optimizer](https://svgoptimizer.com/)
- [TinyURL](https://tinyurl.com/app)
- [QRCode Monkey](https://www.qrcode-monkey.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [W3Schools](https://www.w3schools.com/)

---

## Robert Warneke Branding

[![](https://github-readme-stats-robert-warneke.vercel.app/api/pin/?username=robert-warneke&repo=robert-warneke-branding&bg_color=ffffff00&text_color=ffffff)](https://github.com/robert-warneke/robert-warneke-branding#gh-dark-mode-only)
[![](https://github-readme-stats-robert-warneke.vercel.app/api/pin/?username=robert-warneke&repo=robert-warneke-branding&bg_color=ffffff00&text_color=000000)](https://github.com/robert-warneke/robert-warneke-branding#gh-light-mode-only)

---

## 📫 Contact & Connect
[![](https://custom-icon-badges.demolab.com/badge/hello@robertwarneke.com-red.svg?style=for-the-badge&logo=gmail&logoColor=white)](mailto:hello@robertwarneke.com)

[![](https://custom-icon-badges.demolab.com/badge/robertwarneke.com-6660e0.svg?style=for-the-badge&logo=robert-warneke-wlogo&logoColor=white)](https://robertwarneke.com)

[![](https://custom-icon-badges.demolab.com/badge/LinkedIn-0072b1.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/robert-warneke)
[![](https://custom-icon-badges.demolab.com/badge/GitHub-333.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/robert-warneke)
[![](https://custom-icon-badges.demolab.com/badge/Stack%20Overflow-f48024.svg?style=for-the-badge&logo=stackoverflow&logoColor=white)](https://stackoverflow.com/users/21730155/robert-warneke)

## Support

If you like this project, give it a ⭐!

*Buy me a cup of coffee!*

[![](https://custom-icon-badges.demolab.com/badge/PayPal-3b7bbf.svg?logo=paypal&logoColor=white)](https://www.paypal.com/donate/?business=EJ232D75ZWAKU&no_recurring=0&currency_code=USD)
