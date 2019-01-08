# JMON
Javascript Mutable Object Notation

Main idea behind this library to provide few functionalities over json.

We are planning of creating a class which will take any json type datastructure and will keep a track of `edited`,  `deleted`, `created` data sets.
Over this, it will provide functionalities to check and fetch the modified data.

It will provide folowing functionalities
- get() // Will be used for fetching the data from inside the hierarchy
- set() // Set will update the value at input key, this will also track if data is updated
- push() // Will be used to create new data key.
- commit() // Will update the latest data to initial data and reset `edited`, `deleted`, `created` data sets.

Approach, which we have thought about is we will keep every level as JMON object. 
For example:

```json
input = {
  "class": {
    "title": "Class One",
    "profile": {
      "name": "name one"
    }
  }
}
```

This json will be converted to
a JMON object and every level will have a jmon

```javascript
input => JMON({
  "class": JMON({
    "title": "Class one",
    "profile": JMON({
        "name": "name one"
      })
    })
  })
})
```


## Usage
```javascript
var a = input.get('class');
a.set('title', 'arshad');
```

JMON object, will be updated like this
```javascript
input => JMON({
  "class": JMON({
    "title": "Class one",
    "profile": JMON({
        "name": "arshad"
      })
    })
  })
})
```
