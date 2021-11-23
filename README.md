This repo is a clone of [example CRA + TS + Mui + styled-components](https://github.com/mui-org/material-ui/tree/0ba5cc28d0d54f2cb1520e34693ab43d06af75a1/examples/create-react-app-with-styled-components-typescript) repo by Mui [with a few changes](https://github.com/michal-kurz/storybook-controls-bug-reporuction-repo/commit/f8878a3e1336f5aeccf318d125c5b3751c3dce6c) on top - pretty much just added Storybook, ts docgen and a reproduction scenario.

Description of suspicious behaviour:
In order for Controls to auto-generate properly for a component, the name of a variable to which the component is assigned must match the name of the file in which it is defined.

Two components of interest - `Tooltip.tsx` and `Tooltip2.tsx` - are in this repo. Both files have exactly the same content, but only `Tooltip.tsx` gets props auto-generated. This is because the name of exported variable matches the name of the file.
