# Devlander Javascript Utils Collection

![Devlander Utils Header](https://github.com/Devlander-Software/utils/raw/main/media/images/javascript-utils-devlander-github-cover.jpg)

[![devlanderutils](https://img.shields.io/twitter/url?color=%2308a0e9&label=devlanderutils&style=social&url=https%3A%2F%2Ftwitter.com%2Fintent%2Ftweet%3Fbutton_hashtag%devlanderutils)](https://twitter.com/intent/tweet?button_hashtag=devlanderutils)

[![Join Devlander on Discord](https://img.shields.io/badge/Discord-Devlander-%235865F2)](https://bit.ly/devlander-discord-invite)

[![npm downloads](https://img.shields.io/npm/dm/@devlander/hooks.svg)](https://www.npmjs.com/package/@devlander/hooks)

[![Join the discussion on Github](https://img.shields.io/badge/Github%20Discussions%20%26%20Support-Chat%20now!-blue)](https://github.com/orgs/Devlander-Software/discussions)

[![Join Devlander on Twitch](https://img.shields.io/twitch/status/devlander)](https://bit.ly/devlander-twitch)

[![Follow Landon Johnson On Twitter](https://img.shields.io/twitter/follow/landonwjohnson.svg?style=social&label=Follow)](https://bit.ly/landonwjohnson-on-twitter)

[![Wakatime stats for utils](https://wakatime.com/badge/user/bd50b6c5-e0ca-4937-83b3-ab2d13adbc73/project/018d49ad-1c41-4ee7-9a6b-5387db501fcb.svg)](https://bit.ly/landonwjohnson-on-twitter)

## About the project

This project contains a collection of small utility functions that I have found useful in my day-to-day development. I decided to start a package to house these functions so that I can easily use them in any project I am working on. This helps me avoid referring to old code or duplicating code across projects. The project is ongoing, and I will update the version numbers accordingly for major and minor changes. The project is currently named "utils," but I'm open to suggestions for a better name.

## JSON utilities

### Function: isDeepEqual
The `isDeepEqual` function is designed to check if two objects are deeply equal. It takes in two parameters, `obj1` and `obj2`, which represent the objects to be compared. The function returns `true` if the objects are deeply equal, and `false` otherwise.
#### Parameters

- `obj1`: The first object to compare.
- `obj2`: The second object to compare.

#### Returns

The function returns `true` if the objects are deeply equal, and `false` otherwise.




#### Usage

```typescript

import { isDeepEqual } from '@devlander/utils';

const obj1 = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    state: 'NY',
  },
};

const obj2 = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    state: 'NY',
  },
};

const isEqual = isDeepEqual(obj1, obj2);
// true
```


### Function: isJson

The `isJson` function checks if a given value is a valid JSON string or object.

#### Parameters

- `value`: The value to check. It can be a string or an object.

#### Returns

If the value is a valid JSON string or can be converted to a valid JSON string, the function returns the parsed JSON object. If the value is not valid JSON or cannot be converted to a valid JSON string, the function returns `false`.

#### Usage

```typescript
import { isJson } from './isJson';

const jsonString = '{"name":"John", "age":30, "city":"New York"}';
const result = isJson(jsonString);
// Outputs: { name: 'John', age: 30, city: 'New York' }

const notJsonString = 'This is not JSON';
const result2 = isJson(notJsonString);
// Outputs: false

const jsonObject = { name: 'John', age: 30, city: 'New York' };
const result3 = isJson(jsonObject);
// Outputs: { name: 'John', age: 30, city: 'New York' }

const invalidJsonObject = { name: 'John', age: NaN, city: 'New York' };
const result4 = isJson(invalidJsonObject);
// Outputs: false

```

## Function: mergeObjects

The `mergeObjects` function merges two nested objects together.

### Parameters

- `oldObj`: The original object to merge.
- `newObj`: The new object to merge.

### Returns

The function returns a new object that is the result of merging `newObj` into `oldObj`. If a key exists in both objects:
- and the values are arrays, the arrays are concatenated.
- and the values are objects, the objects are merged recursively.
- otherwise, the value from `newObj` is used.

### Usage

```typescript
import { mergeObjects } from './mergeObjects'

const oldObj = {
  name: 'John',
  age: 30,
  cities: ['New York', 'Los Angeles'],
  details: {
    height: 180,
    weight: 75
  }
}

const newObj = {
  age: 31,
  cities: ['Chicago'],
  details: {
    weight: 76,
    hairColor: 'brown'
  }
}

const result = mergeObjects(oldObj, newObj)

// Outputs: 
// {
//   name: 'John',
//   age: 31,
//   cities: ['New York', 'Los Angeles', 'Chicago'],
//   details: {
//     height: 180,
//     weight: 76,
//     hairColor: 'brown'
//   }
// }
``` 

## Filter utilities


### Function: hasItemByLetterAndFilter

The `filterBy` function filters an array of objects based on a given key and value. It takes in three parameters: `array`, `key`, and `value`. The `array` parameter represents the array of objects to be filtered. The `key` parameter represents the key to filter by, and the `value` parameter represents the value to filter for. The function returns an array of objects that match the given key and value.

### Parameters

- `letter`: The letter to filter by.
- `array`: The array of objects to filter.
- `key`: Key of the object to search for
- `indexOfLetter`: The index of the letter to search for in the key
- `filterText`: The text to filter by

## Use case
This function is useful when you have a list of items that you want automatically rendered in sections alphabetically. For example, if you have a list of contacts, you can use this function to filter the contacts by the first letter of their names and display them in sections. You can also use the `filterText` parameter to search for contacts by name.

### Behavior
if no filter text is provided it will always filter by the letter and index of the letter in the key. however, if a filter text is provided it will filter by the letter and the filter text.
and ignore the index of the letter in the key and search body of text within that key


### Returns
The function returns an array of objects that match the given key and value.


### Usage 

```typescript

import { hasItemByLetterAndFilter } from '@devlander/utils';

const contacts = [
  { name: "John", phone: "123-456-7890" },
  { name: "Jane", phone: "123-456-7890" },
  { name: "Bob", phone: "123-456-7890" },
  { name: "Alice", phone: "123-456-7890" },
  { name: "Frank", phone: "123-456-7890" },
  { name: "Freddy", phone: "123-456-7890" },
  { name: "Frodo", phone: "123-456-7890" },
  { name: "Arnold", phone: "" },
];

// Function to map and display contacts filtered by the first letter and optional filter text
function displayFilteredContacts(contacts, filterText = "") {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const container = document.createElement('div');

  alphabet.forEach(letter => {
    if (hasItemByLetterAndFilter(letter, contacts, "name", filterText)) {
      const sectionHeader = document.createElement('h2');
      sectionHeader.textContent = letter.toUpperCase();
      container.appendChild(sectionHeader);

      contacts.filter(contact => 
        contact.name.toLowerCase().startsWith(letter) && 
        (!filterText || contact.name.toLowerCase().includes(filterText.toLowerCase()))
      ).forEach(contact => {
        const contactElement = document.createElement('p');
        contactElement.textContent = `${contact.name} - ${contact.phone}`;
        container.appendChild(contactElement);
      });
    }
  });

  // Assuming there's an element with id="contacts-section" in your HTML
  const displayArea = document.getElementById('contacts-section');
  displayArea.innerHTML = ''; // Clear previous content
  displayArea.appendChild(container);
}

// Example usage with filter text as an empty string initially
displayFilteredContacts(contacts);

```
## Conversion utilities


### Function: abbreviateNumber

The `abbreviateNumber` function abbreviates a number by adding a suffix (k, m, b, t) based on its magnitude.

### Parameters

- `value`: The number to be abbreviated.

### Returns

The function returns the abbreviated number as a string. If the number is less than 1000, it returns the original number.

### Usage

```typescript
import { abbreviateNumber } from './abbreviateNumber';

const number1 = 1500;
const result1 = abbreviateNumber(number1);
 // Outputs: '1.5k'

const number2 = 2200000;
const result2 = abbreviateNumber(number2);
  // Outputs: '2.2m'

const number3 = 500;
const result3 = abbreviateNumber(number3);
 // Outputs: 500

 ```