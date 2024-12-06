```
{
    "search": {
        "_SESSION_DATA_": {
            "transId" : $.json.path,
            "constValue": ["value"]
            "some_external_var": null, // to make config believe something with this name will be instered after the code is generated
        },
        "_TESTS_": {
            {
                "_NAME_": "any-name",
                "_SCOPE_": "$.json.path.for.array.of.object",
                "var-names": "$.json.path.for.array.of.strings",
                "_CONTINUE_": boolean operation using vars string
                "_RETURN_" : a array of more test objects or boolean operation using var string
                "_ERROR_CODE_" :
            }
        }
    }
}
```

```
    "_TESTS_":{
        search: {

        }
    },
    "_SESSION_DATA_":{
        search: {
            "transId" : $.json.path,
            "constValue": ["value"]
            "some_external_var": null, // to make config believe something with this name will be instered after the code is generated
        }
    }
```

// session data is combined all keys and will be null in starting
// and session data gets updates as the requests are recived
