# gol

Game of Life (описание игры [Wiki](https://ru.wikipedia.org/w/index.php?title=Игра_«Жизнь»&oldid=132904452) )

Страница с игрой [https://aparinaa.github.io/gol/](https://aparinaa.github.io/gol/)

### Описание алгоритма

Алгоритм подсчета следующего поколения расчитывается в функции `gameOfLife` в файле [CalculateNextStep.js](https://github.com/AparinAA/gol/blob/master/CalculateNextStep.js). Каждый следующий шаг генерации тратит $O(n*m)$ операций и за $O(1)$ дополнительноей памяти.

В файле [GOLobj.js](https://github.com/AparinAA/gol/blob/master/GOLobj.js) определяется объект `GameOfLifeObj(n,m,scale)`, в котором определяются основныем свойства поля "Игра Жизнь" , отрисовка клеток, старт/стоп, рандомное заполнение поля, сброс и т.д.

В файле [index.js](https://github.com/AparinAA/gol/blob/master/index.js) обработчики событий и иницилизация поля `game`.

Отрисовка поля происходит в `canvas`.
