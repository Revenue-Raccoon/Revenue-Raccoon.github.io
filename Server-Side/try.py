import json

dictionering = [{
    "hello": "world",
    "name": "yoel",
    "age": 8
},
{"hello": "world", "name": "age", "age":3}]

print(json.dumps(dictionering))