codes = {
    'e1': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Colors</title>
    <link rel="stylesheet" href="/static/css/colors_table.css">
</head>
<body>

<table>
    <tr>
        <th>Color</th>
        <th>Name</th>
        <th>Decimal</th>
        <th>Hexadecimal</th>
    </tr>
    <tr>
        <td>
            <div class="color" style="background-color: darkblue"></div>
        </td>
        <td>Darkblue</td>
        <td>RGB(0, 0, 139)</td>
        <td>#00008B</td>
    </tr>
    <tr>
        <td>
            <div class="color" style="background-color: aquamarine"></div>
        </td>
        <td>Aquamarine</td>
        <td>RGB(125, 255, 212)</td>
        <td>#7FFFD4</td>
    </tr>
    <tr>
        <td>
            <div class="color" style="background-color: antiquewhite"></div>
        </td>
        <td>Antiquewhite</td>
        <td>RGB(250, 235, 215)</td>
        <td>#FAEBD7</td>
    </tr>

</table>

</body>
</html>`,
    'e2': `<h1>Header 1</h1>`,
    'e3': `import requests
url = 'http://0.0.0.0:8000/courses/3/_example1.html'
response = requests.get(url)
content = response.content
print(content)`,
    'e4': `b'<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n    <meta charset="UTF-8">\\n    <title>Colors</title>\\n    <link rel="stylesheet" href="/static/css/colors_table.css">\\n</head>\\n<body>\\n\\n<table>\\n    <tr>\\n        <th>Color</th>\\n        <th>Name</th>\\n        <th>Decimal</th>\\n        <th>Hexadecimal</th>\\n    </tr>\\n    <tr>\\n        <td>\\n            <div class="color" style="background-color: darkblue"></div>\\n        </td>\\n        <td>Darkblue</td>\\n        <td>RGB(0, 0, 139)</td>\\n        <td>#00008B</td>\\n    </tr>\\n    <tr>\\n        <td>\\n            <div class="color" style="background-color: aquamarine"></div>\\n        </td>\\n        <td>Aquamarine</td>\\n        <td>RGB(125, 255, 212)</td>\\n        <td>#7FFFD4</td>\\n    </tr>\\n    <tr>\\n        <td>\\n            <div class="color" style="background-color: antiquewhite"></div>\\n        </td>\\n        <td>Antiquewhite</td>\\n        <td>RGB(250, 235, 215)</td>\\n        <td>#FAEBD7</td>\\n    </tr>\\n\\n</table>\\n\\n</body>\\n</html>'`,
    'e5': `pip3 install BeautifulSoup4`,
    'e6': `from bs4 import BeautifulSoup
soup = BeautifulSoup(content, 'html.parser')
print(soup.prettify())`,
    'e7': `dir(soup)
help(soup)`,
    'e8': `table = soup.find('table')
print([[e.text for e in tr.findAll()[1:] if e] for tr in table.findAll('tr')])`,
    'e9': `[['Name', 'Decimal', 'Hexadecimal'],
['Darkblue', 'RGB(0, 0, 139)', '#00008B'],
['Aquamarine', 'RGB(125, 255, 212)', '#7FFFD4'],
['Antiquewhite', 'RGB(250, 235, 215)', '#FAEBD7']]`,
    'e10': `Selenium WebDriver — это инструмент для автоматизации действий веб-браузера`,
    'e11': `pip install selenium`,
    'e12': `from selenium import webdriver
driver = webdriver.Chrome(executable_path='/home/ifrag/Downloads/chromedriver')
`,
    'e13': `driver.close()`,
    'e14': `def get_html(url: str):
    driver.get(url)
    return driver.page_source
    `,
    'e15': `from selenium import webdriver
driver = webdriver.Chrome(executable_path='/home/ifrag/Downloads/chromedriver')
driver.get('https://google.com')
driver.execute_script("""
    inp = window.document.getElementsByName('q')[0];
    inp.value = '%s';
    bs = window.document.getElementsByTagName('input');
    bs = Array.from(bs).filter(e => {return e.value === 'Поиск в Google'});
""" % (word, ))
driver.execute_script('Array.from(bs).forEach(e => e.click())')
driver.execute_script('Array.from(document.getElementsByTagName("a"))
                            .filter(e => e.textContent === "Новости")[0].click()')
print(driver.execute_script('return document.getElementsByTagName("a")
                                    .map(e => e.href)'))
driver.close()
`
};


document.addEventListener('DOMContentLoaded', () => {
    fill_codes();

});

function fill_codes() {
    Object.keys(codes).forEach((key) => {
        let obj = document.getElementById(key);
        if (obj) {
            obj.textContent = codes[key];
        }
    });
}
