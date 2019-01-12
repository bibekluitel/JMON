# JMON
Javascript Mutable Object Notation

Main idea behind this library to provide few functionalities over default Javascript Objects.

## Installation

#### Using npm
```
npm install JMON
```

#### Using yarn
```
yarn add JMON
```

## Usage

```javascript
var JMON = require('JMON');

const INPUT_DATA = {
  'JMON': {
    'name': 'JMON',
    'author': 'Bibek',
    'url': 'https://github.com/bibekluitel/JMON',
  },
};

const jmonData = new JMON(INPUT_DATA);

/**
 * OUTPUT: jmonData
 * ----------------
 * 
 * JMON({
 *    initialData: {
 *      'JMON': JMON({
 *        initialData: {
 *          'name': 'JMON',
 *          'author': 'Bibek',
 *          'url': 'https://github.com/bibekluitel/JMON',
 *        },
 *        data: {
 *          'name': 'JMON',
 *          'author': 'Bibek',
 *          'url': 'https://github.com/bibekluitel/JMON',
 *        },
 *        'isCreated': false,
 *        'isUpdated': false,
 *        'isDeleted': false
 *      }),
 *    }
 *    data: {
 *      'JMON': JMON({
 *        initialData: {
 *          'name': 'JMON',
 *          'author': 'Bibek',
 *          'url': 'https://github.com/bibekluitel/JMON',
 *        },
 *        data: {
 *          'name': 'JMON',
 *          'author': 'Bibek',
 *          'url': 'https://github.com/bibekluitel/JMON',
 *        },
 *        'isCreated': false,
 *        'isUpdated': false,
 *        'isDeleted': false
 *      }),
 *    }
 *    'isCreated': false,
 *    'isUpdated': false,
 *    'isDeleted': false
 * })
```

## Features

- **set()**: This function can be used to change any value at any key or add a new {key:value} in the JMON object

  ##### Example  

  ```javascript
  jmonData.get('JMON').set('name', 'Arshad');

  // OR

  jmonData.get('JMON').set('profile': { 'name': 'Arshad', 'role': 'Developer' });
  ```

- **get()**: This function can be used to fetch value at any level from the JMON object

  ##### Examle

  ```javascript
  jmonData.get('JMON').get('name');

  // OR 

  jmonData.get('JMON.name');
  ```

- **isModified**: This function can be used to check if any level of the object is modified

  ##### Example

  ```javascript
  jmon.isModified();

  // OR

  jmon.get('JMON.name').isMOdified();
  ```

- **commit**: This function can be used to commit you current changes, this basically clears all the tracks of changes and treats the changed values as initialValue of the JMON object. (It resets all the isModified flags)

  ##### Example

  ```javascript
  jmon.commit();
  ```

## Contributing

We are constantly working on improving JMON and we need all the help we can get. 
You can contribute to this project by giving [suggestions](https://github.com/bibekluitel/JMON/issues/new?assignees=&labels=&template=custom.md&title=), fixing [open issues](https://github.com/bibekluitel/JMON/issues) or by implementing a new feature. Read our contibution guide [here](CONTIRBUTING.md)