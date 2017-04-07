#!/usr/bin/env babel-node

const fs = require('fs')
const path = require('path')

const { graphql } = require('graphql')
const { introspectionQuery } = require('graphql/utilities')

const Schema = require('./schema')

graphql(Schema, introspectionQuery)
.then(({ data, errors }) => {
  if (errors) {
    throw new Error( 'ERROR introspecting schema: ', JSON.stringify(errors, null, 2))
  } else {
    fs.writeFileSync(path.resolve('schema.json'), JSON.stringify({ data }, null, 2))
  }
})
.catch((reason) => {
  throw reason
})
