
## a are unique && b are unique

- **condition A**: all of the following sub conditions must be met:

  - **condition A.1**: all values of {{{a}}} must be unique
  - **condition A.2**: all values of {{{b}}} must be unique

## a are unique

- **condition A**: all values of {{{a}}} must be unique

## (a are unique && b are unique) || c are unique

- **condition A**: any one of the following sub conditions must be met:

  - **condition A.1**: all of the following sub conditions must be met:

    - **condition A.1.1**: all values of {{{a}}} must be unique
    - **condition A.1.2**: all values of {{{b}}} must be unique
  - **condition A.2**: all values of {{{c}}} must be unique

## a are unique && b are unique || c are unique

- **condition A**: any one of the following sub conditions must be met:

  - **condition A.1**: all of the following sub conditions must be met:

    - **condition A.1.1**: all values of {{{a}}} must be unique
    - **condition A.1.2**: all values of {{{b}}} must be unique
  - **condition A.2**: all values of {{{c}}} must be unique

## a are unique && (b are unique || c are unique)

- **condition A**: all of the following sub conditions must be met:

  - **condition A.1**: all values of {{{a}}} must be unique
  - **condition A.2**: any one of the following sub conditions must be met:

    - **condition A.2.1**: all values of {{{b}}} must be unique
    - **condition A.2.2**: all values of {{{c}}} must be unique

## a are unique && b are unique && c are unique && d are unique

- **condition A**: all of the following sub conditions must be met:

  - **condition A.1**: all of the following sub conditions must be met:

    - **condition A.1.1**: all of the following sub conditions must be met:

      - **condition A.1.1.1**: all values of {{{a}}} must be unique
      - **condition A.1.1.2**: all values of {{{b}}} must be unique
    - **condition A.1.2**: all values of {{{c}}} must be unique
  - **condition A.2**: all values of {{{d}}} must be unique

## a are unique && !(b are unique || !(c are unique))

- **condition A**: all of the following sub conditions must be met:

  - **condition A.1**: all values of {{{a}}} must be unique
  - **condition A.2**: any one of the following sub conditions must**not** be met:

    - **condition A.2.1**: all values of {{{b}}} must **not** be unique
    - **condition A.2.2**: all values of {{{c}}} must be unique

## a are unique && (b are unique || !(!(c are unique))) && !(d are unique)

- **condition A**: all of the following sub conditions must be met:

  - **condition A.1**: all of the following sub conditions must be met:

    - **condition A.1.1**: all values of {{{a}}} must be unique
    - **condition A.1.2**: any one of the following sub conditions must be met:

      - **condition A.1.2.1**: all values of {{{b}}} must be unique
      - **condition A.1.2.2**: all values of {{{c}}} must be unique
  - **condition A.2**: all values of {{{d}}} must **not** be unique
