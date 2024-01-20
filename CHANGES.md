# Changes

## 4.0.0-alpha.0

- [`e75ac16`](https://github.com/sinonjs/commons/commit/e75ac166d9f77ec9c78d0078d50b1226ea0e1e45)
  chore: replace nyc with c8 (Morgan Roderick)
    >
    > nyc doesn't support ESM, but c8 does and is a drop in replacement
    >
    > See https://github.com/bcoe/c8
    >
- [`4d7af3e`](https://github.com/sinonjs/commons/commit/4d7af3e04526336e0204ff729f6e48a40f3da6fd)
  chore: remove index (Morgan Roderick)
    >
    > Instead, promote importing each file directly
    >
- [`715083e`](https://github.com/sinonjs/commons/commit/715083ed2333f2ecb39c9f8064779377d593e120)
  chore: consolidate lib/prototypes/ into lib/prototypes.mjs (Morgan Roderick)
    >
    > This avoids creating another index file
    >
- [`f6e7108`](https://github.com/sinonjs/commons/commit/f6e7108c805bb2515fbb4d5632100ad3d935fa52)
  chore: move copy-prototype-methods up one level (Morgan Roderick)
- [`2561540`](https://github.com/sinonjs/commons/commit/25615403af4a64ae3919aa263f02d7598c5a0454)
  Move throws-on-prototype up one level (Morgan Roderick)
- [`3fdb119`](https://github.com/sinonjs/commons/commit/3fdb11975199417f74ee164d2b6ffb11864f3a3c)
  chore: convert prototypes to ESM (Morgan Roderick)
- [`33adb63`](https://github.com/sinonjs/commons/commit/33adb63a86141a948ba900c47dd90161b9164210)
  chore: convert valueToString to ESM (Morgan Roderick)
- [`22d4635`](https://github.com/sinonjs/commons/commit/22d4635b9b9f48cf1f56cb6e4eb960ca1c6385d1)
  chore: convert typeOf to ESM (Morgan Roderick)
- [`d1ee17e`](https://github.com/sinonjs/commons/commit/d1ee17ee0dadbdc647008fd63ac01fa463fdc367)
  chore: convert orderByFirstCall to ESM (Morgan Roderick)
- [`d7205c7`](https://github.com/sinonjs/commons/commit/d7205c7f98b94ffa858ddd51980add7a67a5e872)
  chore: convert global to ESM (Morgan Roderick)
- [`4895e4a`](https://github.com/sinonjs/commons/commit/4895e4ac79fbf59cb1ee6d8c8e70f13839258777)
  chore: convert functionName to ESM (Morgan Roderick)
- [`bcd5a9f`](https://github.com/sinonjs/commons/commit/bcd5a9f9ffb6141f287960411aa6b4475a5ccd55)
  chore: convert every to ESM (Morgan Roderick)
- [`3221331`](https://github.com/sinonjs/commons/commit/322133113170c8e955d87150bfaa7a38306816bd)
  chore: convert deprecated to ESM (Morgan Roderick)
- [`654c546`](https://github.com/sinonjs/commons/commit/654c546a442fcda38f910a8594e27a8fc867078c)
  chore: set project type to module (Morgan Roderick)
- [`7e578a3`](https://github.com/sinonjs/commons/commit/7e578a3fed0b07fd5692e0d7e098177dcc402c0f)
  chore: convert className to ESM (Morgan Roderick)
- [`a84e58c`](https://github.com/sinonjs/commons/commit/a84e58c041572d9b8acef630315e100455d8fecf)
  chore: convert called-in-order to ESM (Morgan Roderick)
- [`0aa0cd9`](https://github.com/sinonjs/commons/commit/0aa0cd93e4083a7221958cc33583a854dabab083)
  chore: convert index.js to ESM (Morgan Roderick)
- [`2c3ce62`](https://github.com/sinonjs/commons/commit/2c3ce62a7eca4475fff9599ddd0e566115c9ef80)
  chore: use .cjs extension (Morgan Roderick)
    >
    > * Prepare build for both CommonJS and ESM support
    > * Export CommonJS bundled as default
    >
- [`d23fc83`](https://github.com/sinonjs/commons/commit/d23fc83ed3a7b36987c998f9f3b42a62725f1288)
  chore: Update actions/setup-node (Morgan Roderick)
- [`05e3092`](https://github.com/sinonjs/commons/commit/05e30929258a841173c5a9003e45af49e801e483)
  chore: Update actions/checkout (Morgan Roderick)

_Released by Morgan Roderick on 2024-01-20._

## 3.0.1

- [`f82068f`](https://github.com/sinonjs/commons/commit/f82068f633523edd42b01df28d031b2cacfbcc1d)
  chore: remove obsolete IE11 code (Morgan Roderick)
    >
    > When we upgraed to @sinonjs/eslint-config@4 in
    > 09e99f4e310c20408df50330124e4d68a60e9b6a we effectively removed support
    > for IE11.
    >
    > That means that this code branch is obsolete and is safe to remove.
    >

_Released by Morgan Roderick on 2024-01-20._

## 3.0.0

- [`b0253f8`](https://github.com/sinonjs/commons/commit/b0253f86b661321ae3f5334706eb96e860af4cd4)
  Drop node 12, hello node 18 (Morgan Roderick)

_Released by Morgan Roderick on 2022-11-28._

## 2.0.0

- [`f890f87`](https://github.com/sinonjs/commons/commit/f890f87dcb00de11069c2e52194bc3f5f9798175)
  Prefer ES2017 (Morgan Roderick)
    >
    > See v1.8.5 for backwards compatibility with ES5
    >

_Released by Morgan Roderick on 2022-11-07._

## 1.8.5

- [`06fb4d4`](https://github.com/sinonjs/commons/commit/06fb4d40b038f9124f47c445bb611482f0be89b0)
  [Fix] use `indexOf` instead of `includes` (Jordan Harband)
    >
    > This restores ES5 compatibility for use with sinon@9

_Released by Morgan Roderick on 2022-11-07._

## 1.8.4

- [`9305715`](https://github.com/sinonjs/commons/commit/93057156fcaec1917c2d95bce8ab641e2defb556)
  Fix #89: detect error on access to __proto__ (Morgan Roderick)

_Released by Morgan Roderick on 2022-11-02._

## 1.8.3

- [`6af2d0c`](https://github.com/sinonjs/commons/commit/6af2d0cf33e9fd1e4aaef5308fd16a9cd78a5782)
  Bump y18n from 4.0.0 to 4.0.1 (dependabot[bot])
    >
    > Bumps [y18n](https://github.com/yargs/y18n) from 4.0.0 to 4.0.1.
    > - [Release notes](https://github.com/yargs/y18n/releases)
    > - [Changelog](https://github.com/yargs/y18n/blob/master/CHANGELOG.md)
    > - [Commits](https://github.com/yargs/y18n/commits)
    >
    > Signed-off-by: dependabot[bot] <support@github.com>

_Released on 2021-04-08._

## 1.8.2

- [`6b7a796`](https://github.com/sinonjs/commons/commit/6b7a796ffc088b43dc283cc4477a7d641720dc96)
  Add .d.ts files to package (Morgan Roderick)
    >
    > In order to improve the experience of TypeScript users, we are compiling
    > `.d.ts` files from the JSDoc and distributing them with the package
    >

_Released on 2021-01-13._

## 1.8.1

- [`07b9e7a`](https://github.com/sinonjs/commons/commit/07b9e7a1d784771273a9a58d74945bbc7319b5d4)
  Optimize npm package size (Uladzimir Havenchyk)

_Released on 2020-07-17._

## 1.8.0

- [`4282205`](https://github.com/sinonjs/commons/commit/4282205343a4dcde2a35ccf2a8c2094300dad369)
  Emit deprecationg warnings in node, and keep console info in browsers (mshaaban0)

_Released on 2020-05-20._

## 1.7.2

- [`76ad9c1`](https://github.com/sinonjs/commons/commit/76ad9c16bad29f72420ed55bdf45b65d076108c8)
  Fix generators causing exceptions in function-name (Sebastian Mayr)

_Released on 2020-04-08._

## 1.7.1

- [`0486d25`](https://github.com/sinonjs/commons/commit/0486d250ecec9b5f9aa2210357767e413f4162d3)
  Upgrade eslint-config-sinon, add eslint-plugin-jsdoc (Morgan Roderick)
    >
    > This adds linting of jsdoc
    >

_Released on 2020-02-19._
