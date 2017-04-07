const {
  findBreakingChanges,
  buildClientSchema,
} = require('graphql')

const oldIntrospection = require('./schema.json')

const newSchema = require('./schema')

const oldSchema = buildClientSchema(oldIntrospection.data)

describe('Breaking Changes', () => {
  it('there should be no breaking changes', () => {
    expect(findBreakingChanges(oldSchema, newSchema)).toEqual([])
  })
})
