<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrrmse

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [root mean squared error][root-mean-squared-error] (RMSE) incrementally.

<section class="intro">

The [**root mean squared error**][root-mean-squared-error] (also known as the **root mean square error** (RMSE) and **root mean square deviation** (RMSD)) is defined as

<!-- <equation class="equation" label="eq:root_mean_squared_error" align="center" raw="\operatorname{RMSE} = \sqrt{ \frac{1}{n} \sum_{i=0}^{n-1} (y_i - x_i)^2 }" alt="Equation for the root mean squared error."> -->

<div class="equation" align="center" data-raw-text="\operatorname{RMSE} = \sqrt{ \frac{1}{n} \sum_{i=0}^{n-1} (y_i - x_i)^2 }" data-equation="eq:root_mean_squared_error">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@831e7903fe8f57ea6c3ccab4bf697bc45c3c1934/lib/node_modules/@stdlib/stats/incr/rmse/docs/img/equation_root_mean_squared_error.svg" alt="Equation for the root mean squared error.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
incrrmse = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-rmse@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var incrrmse = require( 'path/to/vendor/umd/stats-incr-rmse/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-rmse@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.incrrmse;
})();
</script>
```

#### incrrmse()

Returns an accumulator `function` which incrementally computes the [root mean squared error][root-mean-squared-error].

```javascript
var accumulator = incrrmse();
```

#### accumulator( \[x, y] )

If provided input values `x` and `y`, the accumulator function returns an updated [root mean squared error][root-mean-squared-error]. If not provided input values `x` and `y`, the accumulator function returns the current [root mean squared error][root-mean-squared-error].

```javascript
var accumulator = incrrmse();

var r = accumulator( 2.0, 3.0 );
// returns 1.0

r = accumulator( -1.0, -4.0 );
// returns ~2.24

r = accumulator( -3.0, 5.0 );
// returns ~4.97

r = accumulator();
// returns ~4.97
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-rmse@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var accumulator;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrrmse();

// For each simulated datum, update the root mean squared error...
for ( i = 0; i < 100; i++ ) {
    v1 = ( randu()*100.0 ) - 50.0;
    v2 = ( randu()*100.0 ) - 50.0;
    accumulator( v1, v2 );
}
console.log( accumulator() );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/incr/mrmse`][@stdlib/stats/incr/mrmse]</span><span class="delimiter">: </span><span class="description">compute a moving root mean squared error (RMSE) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mse`][@stdlib/stats/incr/mse]</span><span class="delimiter">: </span><span class="description">compute the mean squared error (MSE) incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/rss`][@stdlib/stats/incr/rss]</span><span class="delimiter">: </span><span class="description">compute the residual sum of squares (RSS) incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-rmse.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-rmse

[test-image]: https://github.com/stdlib-js/stats-incr-rmse/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-incr-rmse/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-rmse/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-rmse?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-rmse.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-rmse/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-rmse/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-incr-rmse/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-incr-rmse/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-incr-rmse/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-rmse/main/LICENSE

[root-mean-squared-error]: https://en.wikipedia.org/wiki/Root-mean-square_deviation

<!-- <related-links> -->

[@stdlib/stats/incr/mrmse]: https://github.com/stdlib-js/stats-incr-mrmse/tree/umd

[@stdlib/stats/incr/mse]: https://github.com/stdlib-js/stats-incr-mse/tree/umd

[@stdlib/stats/incr/rss]: https://github.com/stdlib-js/stats-incr-rss/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
