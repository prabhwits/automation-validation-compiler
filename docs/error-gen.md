request failed the api requirements:

- **Api Condition** all of the following sub conditions must be met _(condition1 **and** condition2)_:

  - **condition 1**: none of the "context.action" should be one of ['null']
  - **condition 2**: any one of the sub conditions must be met (condition 2.1 or condition 2.2):

    - **condition 2.1**: all of "ids" must be unique
    - **condition 2.2**: categories must follow all regex in :['^\\w+$']

---

> _**Note**_: the **api condition** can be skipped if any of the skip conditions are met
>
> - **Skip Condition**:
