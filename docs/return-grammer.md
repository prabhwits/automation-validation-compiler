#### **Grammar in EBNF:**

```ebnf
Expression          ::= OrExpression

OrExpression        ::= AndExpression ( '||' AndExpression )*

AndExpression       ::= NotExpression ( '&&' NotExpression )*

NotExpression       ::= '!'? PrimaryExpression

PrimaryExpression   ::= '(' Expression ')' | BinaryFunctionExpression | UnaryFunctionExpression

BinaryFunctionExpression ::= Identifier BinaryFunction ( Identifier  )

UnaryFunctionExpression  ::= Identifier UnaryFunction

BinaryFunction      ::= 'all in' | 'none in' | 'follow regex'

UnaryFunction       ::= 'are unique'

Identifier          ::= /* as defined in the lexer */
```
