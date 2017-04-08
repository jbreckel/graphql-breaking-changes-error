const {
  findBreakingChanges,
  buildClientSchema,
  graphql,
} = require('graphql')

const { introspectionQuery } = require('graphql/utilities')
const { makeExecutableSchema } = require('graphql-tools')

describe('Breaking Changes', () => {
  it('test with graphql-tools', async () => {
    const schemaString = `
    schema {
      query: Query
    }

    type Query {
      test(id: ID!): String
    }
    `

    const Schema = makeExecutableSchema({
      typeDefs: schemaString,
    })

    const { data, errors } = await graphql(Schema, introspectionQuery)
    expect(findBreakingChanges(buildClientSchema(data), Schema)).toEqual([])
  })
})
