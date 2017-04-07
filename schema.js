const { makeExecutableSchema } = require('graphql-tools')

const schemaString = `

schema {
  query: Query
}

type Query {
  test(id: ID!): TestType
}

type TestType {
  id: ID!
  name: String
}

`

const Schema = makeExecutableSchema({
  typeDefs: schemaString,
})

module.exports = Schema
