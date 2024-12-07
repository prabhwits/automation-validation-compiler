## a are unique && b are unique

- **condition A**: all of the following sub conditions must be met:

  - **condition A.1**: {{a}} must be unique
  - **condition A.2**: {{b}} must be unique

## a are unique

- **condition A**: {{a}} must be unique

## (a are unique && b are unique) || c are unique

- **condition A**: any one of the following sub conditions must be met:

  - **condition A.1**: all of the following sub conditions must be met:

    - **condition A.1.1**: {{a}} must be unique
    - **condition A.1.2**: {{b}} must be unique

  - **condition A.2**: {{c}} must be unique

## a are unique && b are unique || c are unique

- **condition A**: any one of the following sub conditions must be met:

  - **condition A.1**: all of the following sub conditions must be met:

    - **condition A.1.1**: {{a}} must be unique
    - **condition A.1.2**: {{b}} must be unique

  - **condition A.2**: {{c}} must be unique

## a are unique && (b are unique || c are unique)

- **condition A**: all of the following sub conditions must be met:

  - **condition A.1**: {{a}} must be unique
  - **condition A.2**: any one of the following sub conditions must be met:

    - **condition A.2.1**: {{b}} must be unique
    - **condition A.2.2**: {{c}} must be unique

## a are unique && b are unique && c are unique && d are unique

- **condition A**: all of the following sub conditions must be met:

  - **condition A.1**: all of the following sub conditions must be met:

    - **condition A.1.1**: all of the following sub conditions must be met:

      - **condition A.1.1.1**: {{a}} must be unique
      - **condition A.1.1.2**: {{b}} must be unique

    - **condition A.1.2**: {{c}} must be unique

  - **condition A.2**: {{d}} must be unique

## a are unique && !(b are unique || !(c are unique))

- **condition A**: all of the following sub conditions must be met:

  - **condition A.1**: {{a}} must be unique
  - **condition A.2**: any one of the following sub conditions must **not** be met:

    - **condition A.2.1**: {{b}} must **not** be unique
    - **condition A.2.2**: {{c}} must be unique

## a are unique && (b are unique || !(!(c are unique))) && !(d are unique)

- **condition A**: all of the following sub conditions must be met:

  - **condition A.1**: all of the following sub conditions must be met:

    - **condition A.1.1**: {{a}} must be unique
    - **condition A.1.2**: any one of the following sub conditions must be met:

      - **condition A.1.2.1**: {{b}} must be unique
      - **condition A.1.2.2**: {{c}} must be unique

  - **condition A.2**: {{d}} must **not** be unique

## hello

- **condition A**: no element of $.context.location.country.code must be in ["null"]

###

> Note: **Condition A** can be skipped if the following conditions are met:
>
> - **condition B**: $.context.location.country.code must be unique
