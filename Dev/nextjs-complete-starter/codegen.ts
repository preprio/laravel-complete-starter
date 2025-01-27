
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://graphql.prepr.io/e129b796857af8c47b17147bc6c2312d0156e0393786766ca883eea8ed541b1b",
  documents: ['!src/gql/**/*', 'src/queries/**/*.{ts,tsx}'],
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'getFragmentData' },
      },
      config: {
          reactApolloVersion: 3,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
