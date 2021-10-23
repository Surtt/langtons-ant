# Langton's Ant

Муравей Лэнгтона — это двумерный клеточный автомат с очень простыми правилами, изобретенный Крисом Лэнгтоном. Муравья можно также считать двумерной машиной Тьюринга с 2 символами и 4 состояниями.

Дополнительная информация: [Wikipedia](https://ru.wikipedia.org/wiki/%D0%9C%D1%83%D1%80%D0%B0%D0%B2%D0%B5%D0%B9_%D0%9B%D1%8D%D0%BD%D0%B3%D1%82%D0%BE%D0%BD%D0%B0)

### Setup

```
make install
```

### Development mode

```
make start
```

### Production mode

```
make build
```

### Project testing

```
make test
```

### To run Storybook

```
make story
```

### To run Chromatic

```
make chromatic
```

### Ссылка на проект

https://surtt.github.io/langtons-ant/

### ДЗ 1

- семантическая разметка

### ДЗ 2

- стилизация десктопной версии
- стилизация адаптивной версии

### ДЗ 3

- Добавлены Babel и Webpack

### ДЗ 4

- Добавлены и настроены eslint, jest, tsconfig
- Написано ядро приложения (функция генерации поля, рандомного добавления муравья, изменение состояния муравья и клетки)
- Написаны тесты для ядра

### ДЗ 5

- Добавлены storybook и chromatic
- Добавлен начальное состояние приложения через хуки

### ДЗ 6

- Настроены конфигурации nginx и webpack

### ДЗ 7

- Написаны тесты для редьюсеров
- Все состояние перенесено в redux
