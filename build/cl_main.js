(() => {
  var a = {
    577: function (a, b, c) {
      var d;
      (function (e, f, g) {
        if (true) {
          d = function () {
            return g(e);
          }.call(b, c, b, a);
          if (d !== undefined) {
            a.exports = d;
          }
        } else {}
      })(this, "UUID", function () {
        function a(a, b, c, d, e, f) {
          function g(a, b) {
            var c = a.toString(16);
            if (c.length < 2) {
              c = "0" + c;
            }
            if (b) {
              c = c.toUpperCase();
            }
            return c;
          }
          for (var h = b; h <= c; h++) {
            e[f++] = g(a[h], d);
          }
          return e;
        }
        function b(a, b, c, d, e) {
          for (var f = b; f <= c; f += 2) {
            d[e++] = parseInt(a.substr(f, 2), 16);
          }
        }
        var c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("");
        var d = [0, 68, 0, 84, 83, 82, 72, 0, 75, 76, 70, 65, 0, 63, 62, 69, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 64, 0, 73, 66, 74, 71, 81, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 77, 0, 78, 67, 0, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 79, 0, 80, 0, 0];
        function e(a, b) {
          if (b % 4 !== 0) {
            throw new Error("z85_encode: invalid input length (multiple of 4 expected)");
          }
          var d = "";
          var e = 0;
          var f = 0;
          while (e < b) {
            f = f * 256 + a[e++];
            if (e % 4 === 0) {
              var g = 52200625;
              while (g >= 1) {
                var h = Math.floor(f / g) % 85;
                d += c[h];
                g /= 85;
              }
              f = 0;
            }
          }
          return d;
        }
        function f(a, b) {
          var c = a.length;
          if (c % 5 !== 0) {
            throw new Error("z85_decode: invalid input length (multiple of 5 expected)");
          }
          if (typeof b === "undefined") {
            b = new Array(c * 4 / 5);
          }
          var e = 0;
          var f = 0;
          var g = 0;
          while (e < c) {
            var h = a.charCodeAt(e++) - 32;
            if (h < 0 || h >= d.length) {
              break;
            }
            g = g * 85 + d[h];
            if (e % 5 === 0) {
              var i = 16777216;
              while (i >= 1) {
                b[f++] = Math.trunc(g / i % 256);
                i /= 256;
              }
              g = 0;
            }
          }
          return b;
        }
        function g(a, b) {
          var c = {
            ibits: 8,
            obits: 8,
            obigendian: true
          };
          for (var d in b) {
            if (typeof c[d] !== "undefined") {
              c[d] = b[d];
            }
          }
          var e = [];
          var f = 0;
          var g;
          var h;
          var i = 0;
          var j;
          var k = 0;
          var l = a.length;
          while (true) {
            if (i === 0) {
              h = a.charCodeAt(f++);
            }
            g = h >> c.ibits - (i + 8) & 255;
            i = (i + 8) % c.ibits;
            if (c.obigendian) {
              if (k === 0) {
                j = g << c.obits - 8;
              } else {
                j |= g << c.obits - 8 - k;
              }
            } else if (k === 0) {
              j = g;
            } else {
              j |= g << k;
            }
            k = (k + 8) % c.obits;
            if (k === 0) {
              e.push(j);
              if (f >= l) {
                break;
              }
            }
          }
          return e;
        }
        function h(a, b) {
          var c = {
            ibits: 32,
            ibigendian: true
          };
          for (var d in b) {
            if (typeof c[d] !== "undefined") {
              c[d] = b[d];
            }
          }
          var e = "";
          var f = 4294967295;
          if (c.ibits < 32) {
            f = (1 << c.ibits) - 1;
          }
          var g = a.length;
          for (var h = 0; h < g; h++) {
            var i = a[h] & f;
            for (var j = 0; j < c.ibits; j += 8) {
              if (c.ibigendian) {
                e += String.fromCharCode(i >> c.ibits - 8 - j & 255);
              } else {
                e += String.fromCharCode(i >> j & 255);
              }
            }
          }
          return e;
        }
        var i = 8;
        var j = 8;
        var k = 256;
        function l(a, b, c, d, e, f, g, h) {
          return [h, g, f, e, d, c, b, a];
        }
        function m() {
          return l(0, 0, 0, 0, 0, 0, 0, 0);
        }
        function n(a) {
          return a.slice(0);
        }
        function o(a) {
          var b = m();
          for (var c = 0; c < i; c++) {
            b[c] = Math.floor(a % k);
            a /= k;
          }
          return b;
        }
        function p(a) {
          var b = 0;
          for (var c = i - 1; c >= 0; c--) {
            b *= k;
            b += a[c];
          }
          return Math.floor(b);
        }
        function q(a, b) {
          var c = 0;
          for (var d = 0; d < i; d++) {
            c += a[d] + b[d];
            a[d] = Math.floor(c % k);
            c = Math.floor(c / k);
          }
          return c;
        }
        function r(a, b) {
          var c = 0;
          for (var d = 0; d < i; d++) {
            c += a[d] * b;
            a[d] = Math.floor(c % k);
            c = Math.floor(c / k);
          }
          return c;
        }
        function s(a, b) {
          var c;
          var d;
          var e = new Array(i + i);
          for (c = 0; c < i + i; c++) {
            e[c] = 0;
          }
          var f;
          for (c = 0; c < i; c++) {
            f = 0;
            for (d = 0; d < i; d++) {
              f += a[c] * b[d] + e[c + d];
              e[c + d] = f % k;
              f /= k;
            }
            for (; d < i + i - c; d++) {
              f += e[c + d];
              e[c + d] = f % k;
              f /= k;
            }
          }
          for (c = 0; c < i; c++) {
            a[c] = e[c];
          }
          return e.slice(i, i);
        }
        function t(a, b) {
          for (var c = 0; c < i; c++) {
            a[c] &= b[c];
          }
          return a;
        }
        function u(a, b) {
          for (var c = 0; c < i; c++) {
            a[c] |= b[c];
          }
          return a;
        }
        function v(a, b) {
          var c = m();
          if (b % j !== 0) {
            throw new Error("ui64_rorn: only bit rotations supported with a multiple of digit bits");
          }
          var d = Math.floor(b / j);
          for (var e = 0; e < d; e++) {
            for (var f = i - 1 - 1; f >= 0; f--) {
              c[f + 1] = c[f];
            }
            c[0] = a[0];
            for (f = 0; f < i - 1; f++) {
              a[f] = a[f + 1];
            }
            a[f] = 0;
          }
          return p(c);
        }
        function w(a, b) {
          if (b > i * j) {
            throw new Error("ui64_ror: invalid number of bits to shift");
          }
          var c = new Array(i + i);
          var d;
          for (d = 0; d < i; d++) {
            c[d + i] = a[d];
            c[d] = 0;
          }
          var e = Math.floor(b / j);
          var f = b % j;
          for (d = e; d < i + i - 1; d++) {
            c[d - e] = (c[d] >>> f | c[d + 1] << j - f) & (1 << j) - 1;
          }
          c[i + i - 1 - e] = c[i + i - 1] >>> f & (1 << j) - 1;
          for (d = i + i - 1 - e + 1; d < i + i; d++) {
            c[d] = 0;
          }
          for (d = 0; d < i; d++) {
            a[d] = c[d + i];
          }
          return c.slice(0, i);
        }
        function x(a, b) {
          if (b > i * j) {
            throw new Error("ui64_rol: invalid number of bits to shift");
          }
          var c = new Array(i + i);
          var d;
          for (d = 0; d < i; d++) {
            c[d + i] = 0;
            c[d] = a[d];
          }
          var e = Math.floor(b / j);
          var f = b % j;
          for (d = i - 1 - e; d > 0; d--) {
            c[d + e] = (c[d] << f | c[d - 1] >>> j - f) & (1 << j) - 1;
          }
          c[0 + e] = c[0] << f & (1 << j) - 1;
          for (d = 0 + e - 1; d >= 0; d--) {
            c[d] = 0;
          }
          for (d = 0; d < i; d++) {
            a[d] = c[d];
          }
          return c.slice(i, i);
        }
        function y(a, b) {
          for (var c = 0; c < i; c++) {
            a[c] ^= b[c];
          }
        }
        function z(a, b) {
          var c = (a & 65535) + (b & 65535);
          var d = (a >> 16) + (b >> 16) + (c >> 16);
          return d << 16 | c & 65535;
        }
        function A(a, b) {
          return a << b & 4294967295 | a >>> 32 - b & 4294967295;
        }
        function B(a, b) {
          function c(a, b, c, d) {
            if (a < 20) {
              return b & c | ~b & d;
            }
            if (a < 40) {
              return b ^ c ^ d;
            }
            if (a < 60) {
              return b & c | b & d | c & d;
            }
            return b ^ c ^ d;
          }
          function d(a) {
            if (a < 20) {
              return 1518500249;
            } else if (a < 40) {
              return 1859775393;
            } else if (a < 60) {
              return -1894007588;
            } else {
              return -899497514;
            }
          }
          a[b >> 5] |= 128 << 24 - b % 32;
          a[(b + 64 >> 9 << 4) + 15] = b;
          var e = Array(80);
          var f = 1732584193;
          var g = -271733879;
          var h = -1732584194;
          var i = 271733878;
          var j = -1009589776;
          for (var k = 0; k < a.length; k += 16) {
            var l = f;
            var m = g;
            var n = h;
            var o = i;
            var p = j;
            for (var q = 0; q < 80; q++) {
              if (q < 16) {
                e[q] = a[k + q];
              } else {
                e[q] = A(e[q - 3] ^ e[q - 8] ^ e[q - 14] ^ e[q - 16], 1);
              }
              var r = z(z(A(f, 5), c(q, g, h, i)), z(z(j, e[q]), d(q)));
              j = i;
              i = h;
              h = A(g, 30);
              g = f;
              f = r;
            }
            f = z(f, l);
            g = z(g, m);
            h = z(h, n);
            i = z(i, o);
            j = z(j, p);
          }
          return [f, g, h, i, j];
        }
        function C(a) {
          return h(B(g(a, {
            ibits: 8,
            obits: 32,
            obigendian: true
          }), a.length * 8), {
            ibits: 32,
            ibigendian: true
          });
        }
        function D(a, b) {
          function c(a, b, c, d, e, f) {
            return z(A(z(z(b, a), z(d, f)), e), c);
          }
          function d(a, b, d, e, f, g, h) {
            return c(b & d | ~b & e, a, b, f, g, h);
          }
          function e(a, b, d, e, f, g, h) {
            return c(b & e | d & ~e, a, b, f, g, h);
          }
          function f(a, b, d, e, f, g, h) {
            return c(b ^ d ^ e, a, b, f, g, h);
          }
          function g(a, b, d, e, f, g, h) {
            return c(d ^ (b | ~e), a, b, f, g, h);
          }
          a[b >> 5] |= 128 << b % 32;
          a[(b + 64 >>> 9 << 4) + 14] = b;
          var h = 1732584193;
          var i = -271733879;
          var j = -1732584194;
          var k = 271733878;
          for (var l = 0; l < a.length; l += 16) {
            var m = h;
            var n = i;
            var o = j;
            var p = k;
            h = d(h, i, j, k, a[l + 0], 7, -680876936);
            k = d(k, h, i, j, a[l + 1], 12, -389564586);
            j = d(j, k, h, i, a[l + 2], 17, 606105819);
            i = d(i, j, k, h, a[l + 3], 22, -1044525330);
            h = d(h, i, j, k, a[l + 4], 7, -176418897);
            k = d(k, h, i, j, a[l + 5], 12, 1200080426);
            j = d(j, k, h, i, a[l + 6], 17, -1473231341);
            i = d(i, j, k, h, a[l + 7], 22, -45705983);
            h = d(h, i, j, k, a[l + 8], 7, 1770035416);
            k = d(k, h, i, j, a[l + 9], 12, -1958414417);
            j = d(j, k, h, i, a[l + 10], 17, -42063);
            i = d(i, j, k, h, a[l + 11], 22, -1990404162);
            h = d(h, i, j, k, a[l + 12], 7, 1804603682);
            k = d(k, h, i, j, a[l + 13], 12, -40341101);
            j = d(j, k, h, i, a[l + 14], 17, -1502002290);
            i = d(i, j, k, h, a[l + 15], 22, 1236535329);
            h = e(h, i, j, k, a[l + 1], 5, -165796510);
            k = e(k, h, i, j, a[l + 6], 9, -1069501632);
            j = e(j, k, h, i, a[l + 11], 14, 643717713);
            i = e(i, j, k, h, a[l + 0], 20, -373897302);
            h = e(h, i, j, k, a[l + 5], 5, -701558691);
            k = e(k, h, i, j, a[l + 10], 9, 38016083);
            j = e(j, k, h, i, a[l + 15], 14, -660478335);
            i = e(i, j, k, h, a[l + 4], 20, -405537848);
            h = e(h, i, j, k, a[l + 9], 5, 568446438);
            k = e(k, h, i, j, a[l + 14], 9, -1019803690);
            j = e(j, k, h, i, a[l + 3], 14, -187363961);
            i = e(i, j, k, h, a[l + 8], 20, 1163531501);
            h = e(h, i, j, k, a[l + 13], 5, -1444681467);
            k = e(k, h, i, j, a[l + 2], 9, -51403784);
            j = e(j, k, h, i, a[l + 7], 14, 1735328473);
            i = e(i, j, k, h, a[l + 12], 20, -1926607734);
            h = f(h, i, j, k, a[l + 5], 4, -378558);
            k = f(k, h, i, j, a[l + 8], 11, -2022574463);
            j = f(j, k, h, i, a[l + 11], 16, 1839030562);
            i = f(i, j, k, h, a[l + 14], 23, -35309556);
            h = f(h, i, j, k, a[l + 1], 4, -1530992060);
            k = f(k, h, i, j, a[l + 4], 11, 1272893353);
            j = f(j, k, h, i, a[l + 7], 16, -155497632);
            i = f(i, j, k, h, a[l + 10], 23, -1094730640);
            h = f(h, i, j, k, a[l + 13], 4, 681279174);
            k = f(k, h, i, j, a[l + 0], 11, -358537222);
            j = f(j, k, h, i, a[l + 3], 16, -722521979);
            i = f(i, j, k, h, a[l + 6], 23, 76029189);
            h = f(h, i, j, k, a[l + 9], 4, -640364487);
            k = f(k, h, i, j, a[l + 12], 11, -421815835);
            j = f(j, k, h, i, a[l + 15], 16, 530742520);
            i = f(i, j, k, h, a[l + 2], 23, -995338651);
            h = g(h, i, j, k, a[l + 0], 6, -198630844);
            k = g(k, h, i, j, a[l + 7], 10, 1126891415);
            j = g(j, k, h, i, a[l + 14], 15, -1416354905);
            i = g(i, j, k, h, a[l + 5], 21, -57434055);
            h = g(h, i, j, k, a[l + 12], 6, 1700485571);
            k = g(k, h, i, j, a[l + 3], 10, -1894986606);
            j = g(j, k, h, i, a[l + 10], 15, -1051523);
            i = g(i, j, k, h, a[l + 1], 21, -2054922799);
            h = g(h, i, j, k, a[l + 8], 6, 1873313359);
            k = g(k, h, i, j, a[l + 15], 10, -30611744);
            j = g(j, k, h, i, a[l + 6], 15, -1560198380);
            i = g(i, j, k, h, a[l + 13], 21, 1309151649);
            h = g(h, i, j, k, a[l + 4], 6, -145523070);
            k = g(k, h, i, j, a[l + 11], 10, -1120210379);
            j = g(j, k, h, i, a[l + 2], 15, 718787259);
            i = g(i, j, k, h, a[l + 9], 21, -343485551);
            h = z(h, m);
            i = z(i, n);
            j = z(j, o);
            k = z(k, p);
          }
          return [h, i, j, k];
        }
        function E(a) {
          return h(D(g(a, {
            ibits: 8,
            obits: 32,
            obigendian: false
          }), a.length * 8), {
            ibits: 32,
            ibigendian: false
          });
        }
        function F(a) {
          this.mul = l(88, 81, 244, 45, 76, 149, 127, 45);
          this.inc = l(20, 5, 123, 126, 247, 103, 129, 79);
          this.mask = l(0, 0, 0, 0, 255, 255, 255, 255);
          this.state = n(this.inc);
          this.next();
          t(this.state, this.mask);
          var b;
          if (a !== undefined) {
            a = o(a >>> 0);
          } else if (typeof window === "object" && typeof window.crypto === "object" && typeof window.crypto.getRandomValues === "function") {
            b = new Uint32Array(2);
            window.crypto.getRandomValues(b);
            a = u(o(b[0] >>> 0), w(o(b[1] >>> 0), 32));
          } else if (typeof globalThis === "object" && typeof globalThis.crypto === "object" && typeof globalThis.crypto.getRandomValues === "function") {
            b = new Uint32Array(2);
            globalThis.crypto.getRandomValues(b);
            a = u(o(b[0] >>> 0), w(o(b[1] >>> 0), 32));
          } else {
            a = o(Math.random() * 4294967295 >>> 0);
            u(a, w(o(new Date().getTime()), 32));
          }
          u(this.state, a);
          this.next();
        }
        F.prototype.next = function () {
          var a = n(this.state);
          s(this.state, this.mul);
          q(this.state, this.inc);
          var b = n(a);
          w(b, 18);
          y(b, a);
          w(b, 27);
          var c = n(a);
          w(c, 59);
          t(b, this.mask);
          var d = p(c);
          var e = n(b);
          x(e, 32 - d);
          w(b, d);
          y(b, e);
          return p(b);
        };
        F.prototype.reseed = function (a) {
          if (typeof a !== "string") {
            throw new Error("UUID: PCG: seed: invalid argument (string expected)");
          }
          var b = B(g(a, {
            ibits: 8,
            obits: 32,
            obigendian: true
          }), a.length * 8);
          for (var c = 0; c < b.length; c++) {
            y(G.state, o(b[c] >>> 0));
          }
        };
        var G = new F();
        F.reseed = function (a) {
          G.reseed(a);
        };
        function H(a, b) {
          var c = [];
          for (var d = 0; d < a; d++) {
            c[d] = G.next() % b;
          }
          return c;
        }
        var I = 0;
        var J = 0;
        function K() {
          if (arguments.length === 1 && typeof arguments[0] === "string") {
            this.parse.apply(this, arguments);
          } else if (arguments.length >= 1 && typeof arguments[0] === "number") {
            this.make.apply(this, arguments);
          } else if (arguments.length >= 1) {
            throw new Error("UUID: constructor: invalid arguments");
          } else {
            for (var a = 0; a < 16; a++) {
              this[a] = 0;
            }
          }
        }
        if (typeof Uint8Array !== "undefined") {
          K.prototype = new Uint8Array(16);
        } else if (Buffer) {
          K.prototype = Buffer.alloc(16);
        } else {
          K.prototype = new Array(16);
        }
        K.prototype.constructor = K;
        K.prototype.make = function (a) {
          var b;
          var c = this;
          if (a === 1) {
            var d = new Date();
            var e = d.getTime();
            if (e !== I) {
              J = 0;
            } else {
              J++;
            }
            I = e;
            var f = o(e);
            r(f, 10000);
            q(f, l(1, 178, 29, 210, 19, 129, 64, 0));
            if (J > 0) {
              q(f, o(J));
            }
            var g;
            g = v(f, 8);
            c[3] = g & 255;
            g = v(f, 8);
            c[2] = g & 255;
            g = v(f, 8);
            c[1] = g & 255;
            g = v(f, 8);
            c[0] = g & 255;
            g = v(f, 8);
            c[5] = g & 255;
            g = v(f, 8);
            c[4] = g & 255;
            g = v(f, 8);
            c[7] = g & 255;
            g = v(f, 8);
            c[6] = g & 15;
            var h = H(2, 255);
            c[8] = h[0];
            c[9] = h[1];
            var i = H(6, 255);
            i[0] |= 1;
            i[0] |= 2;
            for (b = 0; b < 6; b++) {
              c[10 + b] = i[b];
            }
          } else if (a === 4) {
            var j = H(16, 255);
            for (b = 0; b < 16; b++) {
              this[b] = j[b];
            }
          } else if (a === 3 || a === 5) {
            var k = "";
            var m = typeof arguments[1] === "object" && arguments[1] instanceof K ? arguments[1] : new K().parse(arguments[1]);
            for (b = 0; b < 16; b++) {
              k += String.fromCharCode(m[b]);
            }
            k += arguments[2];
            var n = a === 3 ? E(k) : C(k);
            for (b = 0; b < 16; b++) {
              c[b] = n.charCodeAt(b);
            }
          } else {
            throw new Error("UUID: make: invalid version");
          }
          c[6] &= 15;
          c[6] |= a << 4;
          c[8] &= 63;
          c[8] |= 2 << 6;
          return c;
        };
        K.prototype.format = function (b) {
          var c;
          var d;
          if (b === "z85") {
            c = e(this, 16);
          } else if (b === "b16") {
            d = Array(32);
            a(this, 0, 15, true, d, 0);
            c = d.join("");
          } else if (b === undefined || b === "std") {
            d = new Array(36);
            a(this, 0, 3, false, d, 0);
            d[8] = "-";
            a(this, 4, 5, false, d, 9);
            d[13] = "-";
            a(this, 6, 7, false, d, 14);
            d[18] = "-";
            a(this, 8, 9, false, d, 19);
            d[23] = "-";
            a(this, 10, 15, false, d, 24);
            c = d.join("");
          }
          return c;
        };
        K.prototype.toString = function (a) {
          return this.format(a);
        };
        K.prototype.toJSON = function () {
          return this.format("std");
        };
        K.prototype.parse = function (a, c) {
          if (typeof a !== "string") {
            throw new Error("UUID: parse: invalid argument (type string expected)");
          }
          if (c === "z85") {
            f(a, this);
          } else if (c === "b16") {
            b(a, 0, 35, this, 0);
          } else if (c === undefined || c === "std") {
            var d = {
              nil: "00000000-0000-0000-0000-000000000000",
              "ns:DNS": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
              "ns:URL": "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
              "ns:OID": "6ba7b812-9dad-11d1-80b4-00c04fd430c8",
              "ns:X500": "6ba7b814-9dad-11d1-80b4-00c04fd430c8"
            };
            if (d[a] !== undefined) {
              a = d[a];
            } else if (!a.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)) {
              throw new Error("UUID: parse: invalid string representation (expected \"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\")");
            }
            b(a, 0, 7, this, 0);
            b(a, 9, 12, this, 4);
            b(a, 14, 17, this, 6);
            b(a, 19, 22, this, 8);
            b(a, 24, 35, this, 10);
          }
          return this;
        };
        K.prototype.export = function () {
          var a = Array(16);
          for (var b = 0; b < 16; b++) {
            a[b] = this[b];
          }
          return a;
        };
        K.prototype.import = function (a) {
          if (typeof a !== "object" || !(a instanceof Array)) {
            throw new Error("UUID: import: invalid argument (type Array expected)");
          }
          if (a.length !== 16) {
            throw new Error("UUID: import: invalid argument (Array of length 16 expected)");
          }
          for (var b = 0; b < 16; b++) {
            if (typeof a[b] !== "number") {
              throw new Error("UUID: import: invalid array element #" + b + " (type Number expected)");
            }
            if (!isFinite(a[b]) || Math.floor(a[b]) !== a[b]) {
              throw new Error("UUID: import: invalid array element #" + b + " (Number with integer value expected)");
            }
            if (a[b] < 0 || a[b] > 255) {
              throw new Error("UUID: import: invalid array element #" + b + " (Number with integer value in range 0...255 expected)");
            }
            this[b] = a[b];
          }
          return this;
        };
        K.prototype.compare = function (a) {
          if (typeof a !== "object") {
            throw new Error("UUID: compare: invalid argument (type UUID expected)");
          }
          if (!(a instanceof K)) {
            throw new Error("UUID: compare: invalid argument (type UUID expected)");
          }
          for (var b = 0; b < 16; b++) {
            if (this[b] < a[b]) {
              return -1;
            } else if (this[b] > a[b]) {
              return +1;
            }
          }
          return 0;
        };
        K.prototype.equal = function (a) {
          return this.compare(a) === 0;
        };
        K.prototype.fold = function (a) {
          if (typeof a === "undefined") {
            throw new Error("UUID: fold: invalid argument (number of fold operations expected)");
          }
          if (a < 1 || a > 4) {
            throw new Error("UUID: fold: invalid argument (1-4 fold operations expected)");
          }
          var b = 16 / Math.pow(2, a);
          var c = new Array(b);
          for (var d = 0; d < b; d++) {
            var e = 0;
            for (var f = 0; d + f < 16; f += b) {
              e ^= this[d + f];
            }
            c[d] = e;
          }
          return c;
        };
        K.PCG = F;
        return K;
      });
    }
  };
  var b = {};
  function c(d) {
    var e = b[d];
    if (e !== undefined) {
      return e.exports;
    }
    var f = b[d] = {
      exports: {}
    };
    a[d].call(f.exports, f, f.exports, c);
    return f.exports;
  }
  (() => {
    c.d = (a, b) => {
      for (var d in b) {
        if (c.o(b, d) && !c.o(a, d)) {
          Object.defineProperty(a, d, {
            enumerable: true,
            get: b[d]
          });
        }
      }
    };
  })();
  (() => {
    c.o = (a, b) => Object.prototype.hasOwnProperty.call(a, b);
  })();
  var d = {};
  (() => {
    'use strict';

    var a = {
      i: () => Qq,
      d: () => Yq
    };
    c.d(d, a);
    ;
    const b = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
    var e = {
      randomUUID: b
    };
    const f = e;
    ;
    let g;
    const h = new Uint8Array(16);
    function i() {
      if (!g) {
        g = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!g) {
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        }
      }
      return g(h);
    }
    ;
    const j = [];
    for (let a = 0; a < 256; ++a) {
      j.push((a + 256).toString(16).slice(1));
    }
    function k(a, b = 0) {
      return (j[a[b + 0]] + j[a[b + 1]] + j[a[b + 2]] + j[a[b + 3]] + "-" + j[a[b + 4]] + j[a[b + 5]] + "-" + j[a[b + 6]] + j[a[b + 7]] + "-" + j[a[b + 8]] + j[a[b + 9]] + "-" + j[a[b + 10]] + j[a[b + 11]] + j[a[b + 12]] + j[a[b + 13]] + j[a[b + 14]] + j[a[b + 15]]).toLowerCase();
    }
    function l(a, b = 0) {
      const c = k(a, b);
      if (!validate(c)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return c;
    }
    const m = null && l;
    ;
    function n(a, b, c) {
      if (f.randomUUID && !b && !a) {
        return f.randomUUID();
      }
      a = a || {};
      const d = a.random || (a.rng || i)();
      d[6] = d[6] & 15 | 64;
      d[8] = d[8] & 63 | 128;
      if (b) {
        c = c || 0;
        for (let a = 0; a < 16; ++a) {
          b[c + a] = d[a];
        }
        return b;
      }
      return k(d);
    }
    const o = n;
    ;
    const p = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    ;
    function q(a) {
      return typeof a === "string" && p.test(a);
    }
    const r = q;
    ;
    function s(a) {
      if (!r(a)) {
        throw TypeError("Invalid UUID");
      }
      let b;
      const c = new Uint8Array(16);
      c[0] = (b = parseInt(a.slice(0, 8), 16)) >>> 24;
      c[1] = b >>> 16 & 255;
      c[2] = b >>> 8 & 255;
      c[3] = b & 255;
      c[4] = (b = parseInt(a.slice(9, 13), 16)) >>> 8;
      c[5] = b & 255;
      c[6] = (b = parseInt(a.slice(14, 18), 16)) >>> 8;
      c[7] = b & 255;
      c[8] = (b = parseInt(a.slice(19, 23), 16)) >>> 8;
      c[9] = b & 255;
      c[10] = (b = parseInt(a.slice(24, 36), 16)) / 1099511627776 & 255;
      c[11] = b / 4294967296 & 255;
      c[12] = b >>> 24 & 255;
      c[13] = b >>> 16 & 255;
      c[14] = b >>> 8 & 255;
      c[15] = b & 255;
      return c;
    }
    const t = s;
    ;
    function u(a) {
      a = unescape(encodeURIComponent(a));
      const b = [];
      for (let c = 0; c < a.length; ++c) {
        b.push(a.charCodeAt(c));
      }
      return b;
    }
    const v = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    const w = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    function x(a, b, c) {
      function d(a, d, e, f) {
        if (typeof a === "string") {
          a = u(a);
        }
        if (typeof d === "string") {
          d = t(d);
        }
        if (d?.length !== 16) {
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        }
        let g = new Uint8Array(16 + a.length);
        g.set(d);
        g.set(a, d.length);
        g = c(g);
        g[6] = g[6] & 15 | b;
        g[8] = g[8] & 63 | 128;
        if (e) {
          f = f || 0;
          for (let a = 0; a < 16; ++a) {
            e[f + a] = g[a];
          }
          return e;
        }
        return k(g);
      }
      try {
        d.name = a;
      } catch (a) {}
      d.DNS = v;
      d.URL = w;
      return d;
    }
    ;
    function y(a, b, c, d) {
      switch (a) {
        case 0:
          return b & c ^ ~b & d;
        case 1:
          return b ^ c ^ d;
        case 2:
          return b & c ^ b & d ^ c & d;
        case 3:
          return b ^ c ^ d;
      }
    }
    function z(a, b) {
      return a << b | a >>> 32 - b;
    }
    function A(a) {
      const b = [1518500249, 1859775393, 2400959708, 3395469782];
      const c = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if (typeof a === "string") {
        const b = unescape(encodeURIComponent(a));
        a = [];
        for (let c = 0; c < b.length; ++c) {
          a.push(b.charCodeAt(c));
        }
      } else if (!Array.isArray(a)) {
        a = Array.prototype.slice.call(a);
      }
      a.push(128);
      const d = a.length / 4 + 2;
      const e = Math.ceil(d / 16);
      const f = new Array(e);
      for (let b = 0; b < e; ++b) {
        const c = new Uint32Array(16);
        for (let d = 0; d < 16; ++d) {
          c[d] = a[b * 64 + d * 4] << 24 | a[b * 64 + d * 4 + 1] << 16 | a[b * 64 + d * 4 + 2] << 8 | a[b * 64 + d * 4 + 3];
        }
        f[b] = c;
      }
      f[e - 1][14] = (a.length - 1) * 8 / Math.pow(2, 32);
      f[e - 1][14] = Math.floor(f[e - 1][14]);
      f[e - 1][15] = (a.length - 1) * 8 & 4294967295;
      for (let d = 0; d < e; ++d) {
        const a = new Uint32Array(80);
        for (let b = 0; b < 16; ++b) {
          a[b] = f[d][b];
        }
        for (let b = 16; b < 80; ++b) {
          a[b] = z(a[b - 3] ^ a[b - 8] ^ a[b - 14] ^ a[b - 16], 1);
        }
        let e = c[0];
        let g = c[1];
        let h = c[2];
        let i = c[3];
        let j = c[4];
        for (let c = 0; c < 80; ++c) {
          const d = Math.floor(c / 20);
          const f = z(e, 5) + y(d, g, h, i) + j + b[d] + a[c] >>> 0;
          j = i;
          i = h;
          h = z(g, 30) >>> 0;
          g = e;
          e = f;
        }
        c[0] = c[0] + e >>> 0;
        c[1] = c[1] + g >>> 0;
        c[2] = c[2] + h >>> 0;
        c[3] = c[3] + i >>> 0;
        c[4] = c[4] + j >>> 0;
      }
      return [c[0] >> 24 & 255, c[0] >> 16 & 255, c[0] >> 8 & 255, c[0] & 255, c[1] >> 24 & 255, c[1] >> 16 & 255, c[1] >> 8 & 255, c[1] & 255, c[2] >> 24 & 255, c[2] >> 16 & 255, c[2] >> 8 & 255, c[2] & 255, c[3] >> 24 & 255, c[3] >> 16 & 255, c[3] >> 8 & 255, c[3] & 255, c[4] >> 24 & 255, c[4] >> 16 & 255, c[4] >> 8 & 255, c[4] & 255];
    }
    const B = A;
    ;
    const C = x("v5", 80, B);
    const D = C;
    ; /*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
    const E = 4;
    const F = 0;
    const G = 1;
    const H = 2;
    function I(a) {
      let b = a.length;
      while (--b >= 0) {
        a[b] = 0;
      }
    }
    const J = 0;
    const K = 1;
    const L = 2;
    const M = 3;
    const N = 258;
    const O = 29;
    const P = 256;
    const Q = P + 1 + O;
    const R = 30;
    const S = 19;
    const T = Q * 2 + 1;
    const U = 15;
    const V = 16;
    const W = 7;
    const X = 256;
    const Y = 16;
    const Z = 17;
    const $ = 18;
    const _ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
    const aa = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
    const ba = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
    const ca = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    const da = 512;
    const ea = new Array((Q + 2) * 2);
    I(ea);
    const fa = new Array(R * 2);
    I(fa);
    const ga = new Array(da);
    I(ga);
    const ha = new Array(N - M + 1);
    I(ha);
    const ia = new Array(O);
    I(ia);
    const ja = new Array(R);
    I(ja);
    function ka(a, b, c, d, e) {
      this.static_tree = a;
      this.extra_bits = b;
      this.extra_base = c;
      this.elems = d;
      this.max_length = e;
      this.has_stree = a && a.length;
    }
    let la;
    let ma;
    let na;
    function oa(a, b) {
      this.dyn_tree = a;
      this.max_code = 0;
      this.stat_desc = b;
    }
    const pa = a => {
      if (a < 256) {
        return ga[a];
      } else {
        return ga[256 + (a >>> 7)];
      }
    };
    const qa = (a, b) => {
      a.pending_buf[a.pending++] = b & 255;
      a.pending_buf[a.pending++] = b >>> 8 & 255;
    };
    const ra = (a, b, c) => {
      if (a.bi_valid > V - c) {
        a.bi_buf |= b << a.bi_valid & 65535;
        qa(a, a.bi_buf);
        a.bi_buf = b >> V - a.bi_valid;
        a.bi_valid += c - V;
      } else {
        a.bi_buf |= b << a.bi_valid & 65535;
        a.bi_valid += c;
      }
    };
    const sa = (a, b, c) => {
      ra(a, c[b * 2], c[b * 2 + 1]);
    };
    const ta = (a, b) => {
      let c = 0;
      do {
        c |= a & 1;
        a >>>= 1;
        c <<= 1;
      } while (--b > 0);
      return c >>> 1;
    };
    const ua = a => {
      if (a.bi_valid === 16) {
        qa(a, a.bi_buf);
        a.bi_buf = 0;
        a.bi_valid = 0;
      } else if (a.bi_valid >= 8) {
        a.pending_buf[a.pending++] = a.bi_buf & 255;
        a.bi_buf >>= 8;
        a.bi_valid -= 8;
      }
    };
    const va = (a, b) => {
      const c = b.dyn_tree;
      const d = b.max_code;
      const e = b.stat_desc.static_tree;
      const f = b.stat_desc.has_stree;
      const g = b.stat_desc.extra_bits;
      const h = b.stat_desc.extra_base;
      const i = b.stat_desc.max_length;
      let j;
      let k;
      let l;
      let m;
      let n;
      let o;
      let p = 0;
      for (m = 0; m <= U; m++) {
        a.bl_count[m] = 0;
      }
      c[a.heap[a.heap_max] * 2 + 1] = 0;
      for (j = a.heap_max + 1; j < T; j++) {
        k = a.heap[j];
        m = c[c[k * 2 + 1] * 2 + 1] + 1;
        if (m > i) {
          m = i;
          p++;
        }
        c[k * 2 + 1] = m;
        if (k > d) {
          continue;
        }
        a.bl_count[m]++;
        n = 0;
        if (k >= h) {
          n = g[k - h];
        }
        o = c[k * 2];
        a.opt_len += o * (m + n);
        if (f) {
          a.static_len += o * (e[k * 2 + 1] + n);
        }
      }
      if (p === 0) {
        return;
      }
      do {
        m = i - 1;
        while (a.bl_count[m] === 0) {
          m--;
        }
        a.bl_count[m]--;
        a.bl_count[m + 1] += 2;
        a.bl_count[i]--;
        p -= 2;
      } while (p > 0);
      for (m = i; m !== 0; m--) {
        k = a.bl_count[m];
        while (k !== 0) {
          l = a.heap[--j];
          if (l > d) {
            continue;
          }
          if (c[l * 2 + 1] !== m) {
            a.opt_len += (m - c[l * 2 + 1]) * c[l * 2];
            c[l * 2 + 1] = m;
          }
          k--;
        }
      }
    };
    const wa = (a, b, c) => {
      const d = new Array(U + 1);
      let e = 0;
      let f;
      let g;
      for (f = 1; f <= U; f++) {
        e = e + c[f - 1] << 1;
        d[f] = e;
      }
      for (g = 0; g <= b; g++) {
        let b = a[g * 2 + 1];
        if (b === 0) {
          continue;
        }
        a[g * 2] = ta(d[b]++, b);
      }
    };
    const xa = () => {
      let a;
      let b;
      let c;
      let d;
      let e;
      const f = new Array(U + 1);
      c = 0;
      for (d = 0; d < O - 1; d++) {
        ia[d] = c;
        for (a = 0; a < 1 << _[d]; a++) {
          ha[c++] = d;
        }
      }
      ha[c - 1] = d;
      e = 0;
      for (d = 0; d < 16; d++) {
        ja[d] = e;
        for (a = 0; a < 1 << aa[d]; a++) {
          ga[e++] = d;
        }
      }
      e >>= 7;
      for (; d < R; d++) {
        ja[d] = e << 7;
        for (a = 0; a < 1 << aa[d] - 7; a++) {
          ga[256 + e++] = d;
        }
      }
      for (b = 0; b <= U; b++) {
        f[b] = 0;
      }
      a = 0;
      while (a <= 143) {
        ea[a * 2 + 1] = 8;
        a++;
        f[8]++;
      }
      while (a <= 255) {
        ea[a * 2 + 1] = 9;
        a++;
        f[9]++;
      }
      while (a <= 279) {
        ea[a * 2 + 1] = 7;
        a++;
        f[7]++;
      }
      while (a <= 287) {
        ea[a * 2 + 1] = 8;
        a++;
        f[8]++;
      }
      wa(ea, Q + 1, f);
      for (a = 0; a < R; a++) {
        fa[a * 2 + 1] = 5;
        fa[a * 2] = ta(a, 5);
      }
      la = new ka(ea, _, P + 1, Q, U);
      ma = new ka(fa, aa, 0, R, U);
      na = new ka(new Array(0), ba, 0, S, W);
    };
    const ya = a => {
      let b;
      for (b = 0; b < Q; b++) {
        a.dyn_ltree[b * 2] = 0;
      }
      for (b = 0; b < R; b++) {
        a.dyn_dtree[b * 2] = 0;
      }
      for (b = 0; b < S; b++) {
        a.bl_tree[b * 2] = 0;
      }
      a.dyn_ltree[X * 2] = 1;
      a.opt_len = a.static_len = 0;
      a.sym_next = a.matches = 0;
    };
    const za = a => {
      if (a.bi_valid > 8) {
        qa(a, a.bi_buf);
      } else if (a.bi_valid > 0) {
        a.pending_buf[a.pending++] = a.bi_buf;
      }
      a.bi_buf = 0;
      a.bi_valid = 0;
    };
    const Aa = (a, b, c, d) => {
      const e = b * 2;
      const f = c * 2;
      return a[e] < a[f] || a[e] === a[f] && d[b] <= d[c];
    };
    const Ba = (a, b, c) => {
      const d = a.heap[c];
      let e = c << 1;
      while (e <= a.heap_len) {
        if (e < a.heap_len && Aa(b, a.heap[e + 1], a.heap[e], a.depth)) {
          e++;
        }
        if (Aa(b, d, a.heap[e], a.depth)) {
          break;
        }
        a.heap[c] = a.heap[e];
        c = e;
        e <<= 1;
      }
      a.heap[c] = d;
    };
    const Ca = (a, b, c) => {
      let d;
      let e;
      let f = 0;
      let g;
      let h;
      if (a.sym_next !== 0) {
        do {
          d = a.pending_buf[a.sym_buf + f++] & 255;
          d += (a.pending_buf[a.sym_buf + f++] & 255) << 8;
          e = a.pending_buf[a.sym_buf + f++];
          if (d === 0) {
            sa(a, e, b);
          } else {
            g = ha[e];
            sa(a, g + P + 1, b);
            h = _[g];
            if (h !== 0) {
              e -= ia[g];
              ra(a, e, h);
            }
            d--;
            g = pa(d);
            sa(a, g, c);
            h = aa[g];
            if (h !== 0) {
              d -= ja[g];
              ra(a, d, h);
            }
          }
        } while (f < a.sym_next);
      }
      sa(a, X, b);
    };
    const Da = (a, b) => {
      const c = b.dyn_tree;
      const d = b.stat_desc.static_tree;
      const e = b.stat_desc.has_stree;
      const f = b.stat_desc.elems;
      let g;
      let h;
      let i = -1;
      let j;
      a.heap_len = 0;
      a.heap_max = T;
      for (g = 0; g < f; g++) {
        if (c[g * 2] !== 0) {
          a.heap[++a.heap_len] = i = g;
          a.depth[g] = 0;
        } else {
          c[g * 2 + 1] = 0;
        }
      }
      while (a.heap_len < 2) {
        j = a.heap[++a.heap_len] = i < 2 ? ++i : 0;
        c[j * 2] = 1;
        a.depth[j] = 0;
        a.opt_len--;
        if (e) {
          a.static_len -= d[j * 2 + 1];
        }
      }
      b.max_code = i;
      for (g = a.heap_len >> 1; g >= 1; g--) {
        Ba(a, c, g);
      }
      j = f;
      do {
        g = a.heap[1];
        a.heap[1] = a.heap[a.heap_len--];
        Ba(a, c, 1);
        h = a.heap[1];
        a.heap[--a.heap_max] = g;
        a.heap[--a.heap_max] = h;
        c[j * 2] = c[g * 2] + c[h * 2];
        a.depth[j] = (a.depth[g] >= a.depth[h] ? a.depth[g] : a.depth[h]) + 1;
        c[g * 2 + 1] = c[h * 2 + 1] = j;
        a.heap[1] = j++;
        Ba(a, c, 1);
      } while (a.heap_len >= 2);
      a.heap[--a.heap_max] = a.heap[1];
      va(a, b);
      wa(c, i, a.bl_count);
    };
    const Ea = (a, b, c) => {
      let d;
      let e = -1;
      let f;
      let g = b[1];
      let h = 0;
      let i = 7;
      let j = 4;
      if (g === 0) {
        i = 138;
        j = 3;
      }
      b[(c + 1) * 2 + 1] = 65535;
      for (d = 0; d <= c; d++) {
        f = g;
        g = b[(d + 1) * 2 + 1];
        if (++h < i && f === g) {
          continue;
        } else if (h < j) {
          a.bl_tree[f * 2] += h;
        } else if (f !== 0) {
          if (f !== e) {
            a.bl_tree[f * 2]++;
          }
          a.bl_tree[Y * 2]++;
        } else if (h <= 10) {
          a.bl_tree[Z * 2]++;
        } else {
          a.bl_tree[$ * 2]++;
        }
        h = 0;
        e = f;
        if (g === 0) {
          i = 138;
          j = 3;
        } else if (f === g) {
          i = 6;
          j = 3;
        } else {
          i = 7;
          j = 4;
        }
      }
    };
    const Fa = (a, b, c) => {
      let d;
      let e = -1;
      let f;
      let g = b[1];
      let h = 0;
      let i = 7;
      let j = 4;
      if (g === 0) {
        i = 138;
        j = 3;
      }
      for (d = 0; d <= c; d++) {
        f = g;
        g = b[(d + 1) * 2 + 1];
        if (++h < i && f === g) {
          continue;
        } else if (h < j) {
          do {
            sa(a, f, a.bl_tree);
          } while (--h !== 0);
        } else if (f !== 0) {
          if (f !== e) {
            sa(a, f, a.bl_tree);
            h--;
          }
          sa(a, Y, a.bl_tree);
          ra(a, h - 3, 2);
        } else if (h <= 10) {
          sa(a, Z, a.bl_tree);
          ra(a, h - 3, 3);
        } else {
          sa(a, $, a.bl_tree);
          ra(a, h - 11, 7);
        }
        h = 0;
        e = f;
        if (g === 0) {
          i = 138;
          j = 3;
        } else if (f === g) {
          i = 6;
          j = 3;
        } else {
          i = 7;
          j = 4;
        }
      }
    };
    const Ga = a => {
      let b;
      Ea(a, a.dyn_ltree, a.l_desc.max_code);
      Ea(a, a.dyn_dtree, a.d_desc.max_code);
      Da(a, a.bl_desc);
      for (b = S - 1; b >= 3; b--) {
        if (a.bl_tree[ca[b] * 2 + 1] !== 0) {
          break;
        }
      }
      a.opt_len += (b + 1) * 3 + 5 + 5 + 4;
      return b;
    };
    const Ha = (a, b, c, d) => {
      let e;
      ra(a, b - 257, 5);
      ra(a, c - 1, 5);
      ra(a, d - 4, 4);
      for (e = 0; e < d; e++) {
        ra(a, a.bl_tree[ca[e] * 2 + 1], 3);
      }
      Fa(a, a.dyn_ltree, b - 1);
      Fa(a, a.dyn_dtree, c - 1);
    };
    const Ia = a => {
      let b = 4093624447;
      let c;
      for (c = 0; c <= 31; c++, b >>>= 1) {
        if (b & 1 && a.dyn_ltree[c * 2] !== 0) {
          return F;
        }
      }
      if (a.dyn_ltree[18] !== 0 || a.dyn_ltree[20] !== 0 || a.dyn_ltree[26] !== 0) {
        return G;
      }
      for (c = 32; c < P; c++) {
        if (a.dyn_ltree[c * 2] !== 0) {
          return G;
        }
      }
      return F;
    };
    let Ja = false;
    const Ka = a => {
      if (!Ja) {
        xa();
        Ja = true;
      }
      a.l_desc = new oa(a.dyn_ltree, la);
      a.d_desc = new oa(a.dyn_dtree, ma);
      a.bl_desc = new oa(a.bl_tree, na);
      a.bi_buf = 0;
      a.bi_valid = 0;
      ya(a);
    };
    const La = (a, b, c, d) => {
      ra(a, (J << 1) + (d ? 1 : 0), 3);
      za(a);
      qa(a, c);
      qa(a, ~c);
      if (c) {
        a.pending_buf.set(a.window.subarray(b, b + c), a.pending);
      }
      a.pending += c;
    };
    const Ma = a => {
      ra(a, K << 1, 3);
      sa(a, X, ea);
      ua(a);
    };
    const Na = (a, b, c, d) => {
      let e;
      let f;
      let g = 0;
      if (a.level > 0) {
        if (a.strm.data_type === H) {
          a.strm.data_type = Ia(a);
        }
        Da(a, a.l_desc);
        Da(a, a.d_desc);
        g = Ga(a);
        e = a.opt_len + 3 + 7 >>> 3;
        f = a.static_len + 3 + 7 >>> 3;
        if (f <= e) {
          e = f;
        }
      } else {
        e = f = c + 5;
      }
      if (c + 4 <= e && b !== -1) {
        La(a, b, c, d);
      } else if (a.strategy === E || f === e) {
        ra(a, (K << 1) + (d ? 1 : 0), 3);
        Ca(a, ea, fa);
      } else {
        ra(a, (L << 1) + (d ? 1 : 0), 3);
        Ha(a, a.l_desc.max_code + 1, a.d_desc.max_code + 1, g + 1);
        Ca(a, a.dyn_ltree, a.dyn_dtree);
      }
      ya(a);
      if (d) {
        za(a);
      }
    };
    var Oa = exports["qb-core"].GetCoreObject();
    const Pa = (a, b, c) => {
      a.pending_buf[a.sym_buf + a.sym_next++] = b;
      a.pending_buf[a.sym_buf + a.sym_next++] = b >> 8;
      a.pending_buf[a.sym_buf + a.sym_next++] = c;
      if (b === 0) {
        a.dyn_ltree[c * 2]++;
      } else {
        a.matches++;
        b--;
        a.dyn_ltree[(ha[c] + P + 1) * 2]++;
        a.dyn_dtree[pa(b) * 2]++;
      }
      return a.sym_next === a.sym_end;
    };
    var Qa = Ka;
    var Ra = La;
    var Sa = Na;
    var Ta = Pa;
    var Ua = Ma;
    var Va = {
      _tr_init: Qa,
      _tr_stored_block: Ra,
      _tr_flush_block: Sa,
      _tr_tally: Ta,
      _tr_align: Ua
    };
    var Wa = Va;
    const Xa = (a, b, c, d) => {
      let e = a & 65535 | 0;
      let f = a >>> 16 & 65535 | 0;
      let g = 0;
      while (c !== 0) {
        g = c > 2000 ? 2000 : c;
        c -= g;
        do {
          e = e + b[d++] | 0;
          f = f + e | 0;
        } while (--g);
        e %= 65521;
        f %= 65521;
      }
      return e | f << 16 | 0;
    };
    var Ya = Xa;
    const Za = () => {
      let a;
      let b = [];
      for (var c = 0; c < 256; c++) {
        a = c;
        for (var d = 0; d < 8; d++) {
          a = a & 1 ? a >>> 1 ^ 3988292384 : a >>> 1;
        }
        b[c] = a;
      }
      return b;
    };
    const $a = new Uint32Array(Za());
    const _a = (a, b, c, d) => {
      const e = $a;
      const f = d + c;
      a ^= -1;
      for (let g = d; g < f; g++) {
        a = a >>> 8 ^ e[(a ^ b[g]) & 255];
      }
      return a ^ -1;
    };
    var ab = _a;
    var bb = {
      "2": "need dictionary",
      "1": "stream end",
      "0": "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version"
    };
    var cb = {
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_MEM_ERROR: -4,
      Z_BUF_ERROR: -5,
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      Z_BINARY: 0,
      Z_TEXT: 1,
      Z_UNKNOWN: 2,
      Z_DEFLATED: 8
    };
    var db = cb;
    const {
      _tr_init: eb,
      _tr_stored_block: fb,
      _tr_flush_block: gb,
      _tr_tally: hb,
      _tr_align: ib
    } = Wa;
    const {
      Z_NO_FLUSH: jb,
      Z_PARTIAL_FLUSH: kb,
      Z_FULL_FLUSH: lb,
      Z_FINISH: mb,
      Z_BLOCK: nb,
      Z_OK: ob,
      Z_STREAM_END: pb,
      Z_STREAM_ERROR: qb,
      Z_DATA_ERROR: rb,
      Z_BUF_ERROR: sb,
      Z_DEFAULT_COMPRESSION: tb,
      Z_FILTERED: ub,
      Z_HUFFMAN_ONLY: vb,
      Z_RLE: wb,
      Z_FIXED: xb,
      Z_DEFAULT_STRATEGY: yb,
      Z_UNKNOWN: zb,
      Z_DEFLATED: Ab
    } = db;
    const Bb = 9;
    const Cb = 15;
    const Db = 8;
    const Eb = 29;
    const Fb = 256;
    const Gb = Fb + 1 + Eb;
    const Hb = 30;
    const Ib = 19;
    const Jb = Gb * 2 + 1;
    const Kb = 15;
    const Lb = 3;
    const Mb = 258;
    const Nb = Mb + Lb + 1;
    const Ob = 32;
    const Pb = 42;
    const Qb = 57;
    const Rb = 69;
    const Sb = 73;
    const Tb = 91;
    const Ub = 103;
    const Vb = 113;
    const Wb = 666;
    const Xb = 1;
    const Yb = 2;
    const Zb = 3;
    const $b = 4;
    const _b = 3;
    const ac = (a, b) => {
      a.msg = bb[b];
      return b;
    };
    const bc = a => {
      return a * 2 - (a > 4 ? 9 : 0);
    };
    const cc = a => {
      let b = a.length;
      while (--b >= 0) {
        a[b] = 0;
      }
    };
    const dc = a => {
      let b;
      let c;
      let d;
      let e = a.w_size;
      b = a.hash_size;
      d = b;
      do {
        c = a.head[--d];
        a.head[d] = c >= e ? c - e : 0;
      } while (--b);
      b = e;
      d = b;
      do {
        c = a.prev[--d];
        a.prev[d] = c >= e ? c - e : 0;
      } while (--b);
    };
    let ec = (a, b, c) => (b << a.hash_shift ^ c) & a.hash_mask;
    let fc = ec;
    const gc = a => {
      const b = a.state;
      let c = b.pending;
      if (c > a.avail_out) {
        c = a.avail_out;
      }
      if (c === 0) {
        return;
      }
      a.output.set(b.pending_buf.subarray(b.pending_out, b.pending_out + c), a.next_out);
      a.next_out += c;
      b.pending_out += c;
      a.total_out += c;
      a.avail_out -= c;
      b.pending -= c;
      if (b.pending === 0) {
        b.pending_out = 0;
      }
    };
    const hc = (a, b) => {
      gb(a, a.block_start >= 0 ? a.block_start : -1, a.strstart - a.block_start, b);
      a.block_start = a.strstart;
      gc(a.strm);
    };
    const ic = (a, b) => {
      a.pending_buf[a.pending++] = b;
    };
    const jc = (a, b) => {
      a.pending_buf[a.pending++] = b >>> 8 & 255;
      a.pending_buf[a.pending++] = b & 255;
    };
    const kc = (a, b, c, d) => {
      let e = a.avail_in;
      if (e > d) {
        e = d;
      }
      if (e === 0) {
        return 0;
      }
      a.avail_in -= e;
      b.set(a.input.subarray(a.next_in, a.next_in + e), c);
      if (a.state.wrap === 1) {
        a.adler = Ya(a.adler, b, e, c);
      } else if (a.state.wrap === 2) {
        a.adler = ab(a.adler, b, e, c);
      }
      a.next_in += e;
      a.total_in += e;
      return e;
    };
    const lc = (a, b) => {
      let c = a.max_chain_length;
      let d = a.strstart;
      let e;
      let f;
      let g = a.prev_length;
      let h = a.nice_match;
      const i = a.strstart > a.w_size - Nb ? a.strstart - (a.w_size - Nb) : 0;
      const j = a.window;
      const k = a.w_mask;
      const l = a.prev;
      const m = a.strstart + Mb;
      let n = j[d + g - 1];
      let o = j[d + g];
      if (a.prev_length >= a.good_match) {
        c >>= 2;
      }
      if (h > a.lookahead) {
        h = a.lookahead;
      }
      do {
        e = b;
        if (j[e + g] !== o || j[e + g - 1] !== n || j[e] !== j[d] || j[++e] !== j[d + 1]) {
          continue;
        }
        d += 2;
        e++;
        do {} while (j[++d] === j[++e] && j[++d] === j[++e] && j[++d] === j[++e] && j[++d] === j[++e] && j[++d] === j[++e] && j[++d] === j[++e] && j[++d] === j[++e] && j[++d] === j[++e] && d < m);
        f = Mb - (m - d);
        d = m - Mb;
        if (f > g) {
          a.match_start = b;
          g = f;
          if (f >= h) {
            break;
          }
          n = j[d + g - 1];
          o = j[d + g];
        }
      } while ((b = l[b & k]) > i && --c !== 0);
      if (g <= a.lookahead) {
        return g;
      }
      return a.lookahead;
    };
    const mc = a => {
      const b = a.w_size;
      let c;
      let d;
      let e;
      do {
        d = a.window_size - a.lookahead - a.strstart;
        if (a.strstart >= b + (b - Nb)) {
          a.window.set(a.window.subarray(b, b + b - d), 0);
          a.match_start -= b;
          a.strstart -= b;
          a.block_start -= b;
          if (a.insert > a.strstart) {
            a.insert = a.strstart;
          }
          dc(a);
          d += b;
        }
        if (a.strm.avail_in === 0) {
          break;
        }
        c = kc(a.strm, a.window, a.strstart + a.lookahead, d);
        a.lookahead += c;
        if (a.lookahead + a.insert >= Lb) {
          e = a.strstart - a.insert;
          a.ins_h = a.window[e];
          a.ins_h = fc(a, a.ins_h, a.window[e + 1]);
          while (a.insert) {
            a.ins_h = fc(a, a.ins_h, a.window[e + Lb - 1]);
            a.prev[e & a.w_mask] = a.head[a.ins_h];
            a.head[a.ins_h] = e;
            e++;
            a.insert--;
            if (a.lookahead + a.insert < Lb) {
              break;
            }
          }
        }
      } while (a.lookahead < Nb && a.strm.avail_in !== 0);
    };
    const nc = (a, b) => {
      let c = a.pending_buf_size - 5 > a.w_size ? a.w_size : a.pending_buf_size - 5;
      let d;
      let e;
      let f;
      let g = 0;
      let h = a.strm.avail_in;
      do {
        d = 65535;
        f = a.bi_valid + 42 >> 3;
        if (a.strm.avail_out < f) {
          break;
        }
        f = a.strm.avail_out - f;
        e = a.strstart - a.block_start;
        if (d > e + a.strm.avail_in) {
          d = e + a.strm.avail_in;
        }
        if (d > f) {
          d = f;
        }
        if (d < c && (d === 0 && b !== mb || b === jb || d !== e + a.strm.avail_in)) {
          break;
        }
        g = b === mb && d === e + a.strm.avail_in ? 1 : 0;
        fb(a, 0, 0, g);
        a.pending_buf[a.pending - 4] = d;
        a.pending_buf[a.pending - 3] = d >> 8;
        a.pending_buf[a.pending - 2] = ~d;
        a.pending_buf[a.pending - 1] = ~d >> 8;
        gc(a.strm);
        if (e) {
          if (e > d) {
            e = d;
          }
          a.strm.output.set(a.window.subarray(a.block_start, a.block_start + e), a.strm.next_out);
          a.strm.next_out += e;
          a.strm.avail_out -= e;
          a.strm.total_out += e;
          a.block_start += e;
          d -= e;
        }
        if (d) {
          kc(a.strm, a.strm.output, a.strm.next_out, d);
          a.strm.next_out += d;
          a.strm.avail_out -= d;
          a.strm.total_out += d;
        }
      } while (g === 0);
      h -= a.strm.avail_in;
      if (h) {
        if (h >= a.w_size) {
          a.matches = 2;
          a.window.set(a.strm.input.subarray(a.strm.next_in - a.w_size, a.strm.next_in), 0);
          a.strstart = a.w_size;
          a.insert = a.strstart;
        } else {
          if (a.window_size - a.strstart <= h) {
            a.strstart -= a.w_size;
            a.window.set(a.window.subarray(a.w_size, a.w_size + a.strstart), 0);
            if (a.matches < 2) {
              a.matches++;
            }
            if (a.insert > a.strstart) {
              a.insert = a.strstart;
            }
          }
          a.window.set(a.strm.input.subarray(a.strm.next_in - h, a.strm.next_in), a.strstart);
          a.strstart += h;
          a.insert += h > a.w_size - a.insert ? a.w_size - a.insert : h;
        }
        a.block_start = a.strstart;
      }
      if (a.high_water < a.strstart) {
        a.high_water = a.strstart;
      }
      if (g) {
        return $b;
      }
      if (b !== jb && b !== mb && a.strm.avail_in === 0 && a.strstart === a.block_start) {
        return Yb;
      }
      f = a.window_size - a.strstart;
      if (a.strm.avail_in > f && a.block_start >= a.w_size) {
        a.block_start -= a.w_size;
        a.strstart -= a.w_size;
        a.window.set(a.window.subarray(a.w_size, a.w_size + a.strstart), 0);
        if (a.matches < 2) {
          a.matches++;
        }
        f += a.w_size;
        if (a.insert > a.strstart) {
          a.insert = a.strstart;
        }
      }
      if (f > a.strm.avail_in) {
        f = a.strm.avail_in;
      }
      if (f) {
        kc(a.strm, a.window, a.strstart, f);
        a.strstart += f;
        a.insert += f > a.w_size - a.insert ? a.w_size - a.insert : f;
      }
      if (a.high_water < a.strstart) {
        a.high_water = a.strstart;
      }
      f = a.bi_valid + 42 >> 3;
      f = a.pending_buf_size - f > 65535 ? 65535 : a.pending_buf_size - f;
      c = f > a.w_size ? a.w_size : f;
      e = a.strstart - a.block_start;
      if (e >= c || (e || b === mb) && b !== jb && a.strm.avail_in === 0 && e <= f) {
        d = e > f ? f : e;
        g = b === mb && a.strm.avail_in === 0 && d === e ? 1 : 0;
        fb(a, a.block_start, d, g);
        a.block_start += d;
        gc(a.strm);
      }
      if (g) {
        return Zb;
      } else {
        return Xb;
      }
    };
    const oc = (a, b) => {
      let c;
      let d;
      while (true) {
        if (a.lookahead < Nb) {
          mc(a);
          if (a.lookahead < Nb && b === jb) {
            return Xb;
          }
          if (a.lookahead === 0) {
            break;
          }
        }
        c = 0;
        if (a.lookahead >= Lb) {
          a.ins_h = fc(a, a.ins_h, a.window[a.strstart + Lb - 1]);
          c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h];
          a.head[a.ins_h] = a.strstart;
        }
        if (c !== 0 && a.strstart - c <= a.w_size - Nb) {
          a.match_length = lc(a, c);
        }
        if (a.match_length >= Lb) {
          d = hb(a, a.strstart - a.match_start, a.match_length - Lb);
          a.lookahead -= a.match_length;
          if (a.match_length <= a.max_lazy_match && a.lookahead >= Lb) {
            a.match_length--;
            do {
              a.strstart++;
              a.ins_h = fc(a, a.ins_h, a.window[a.strstart + Lb - 1]);
              c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h];
              a.head[a.ins_h] = a.strstart;
            } while (--a.match_length !== 0);
            a.strstart++;
          } else {
            a.strstart += a.match_length;
            a.match_length = 0;
            a.ins_h = a.window[a.strstart];
            a.ins_h = fc(a, a.ins_h, a.window[a.strstart + 1]);
          }
        } else {
          d = hb(a, 0, a.window[a.strstart]);
          a.lookahead--;
          a.strstart++;
        }
        if (d) {
          hc(a, false);
          if (a.strm.avail_out === 0) {
            return Xb;
          }
        }
      }
      a.insert = a.strstart < Lb - 1 ? a.strstart : Lb - 1;
      if (b === mb) {
        hc(a, true);
        if (a.strm.avail_out === 0) {
          return Zb;
        }
        return $b;
      }
      if (a.sym_next) {
        hc(a, false);
        if (a.strm.avail_out === 0) {
          return Xb;
        }
      }
      return Yb;
    };
    const pc = (a, b) => {
      let c;
      let d;
      let e;
      while (true) {
        if (a.lookahead < Nb) {
          mc(a);
          if (a.lookahead < Nb && b === jb) {
            return Xb;
          }
          if (a.lookahead === 0) {
            break;
          }
        }
        c = 0;
        if (a.lookahead >= Lb) {
          a.ins_h = fc(a, a.ins_h, a.window[a.strstart + Lb - 1]);
          c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h];
          a.head[a.ins_h] = a.strstart;
        }
        a.prev_length = a.match_length;
        a.prev_match = a.match_start;
        a.match_length = Lb - 1;
        if (c !== 0 && a.prev_length < a.max_lazy_match && a.strstart - c <= a.w_size - Nb) {
          a.match_length = lc(a, c);
          if (a.match_length <= 5 && (a.strategy === ub || a.match_length === Lb && a.strstart - a.match_start > 4096)) {
            a.match_length = Lb - 1;
          }
        }
        if (a.prev_length >= Lb && a.match_length <= a.prev_length) {
          e = a.strstart + a.lookahead - Lb;
          d = hb(a, a.strstart - 1 - a.prev_match, a.prev_length - Lb);
          a.lookahead -= a.prev_length - 1;
          a.prev_length -= 2;
          do {
            if (++a.strstart <= e) {
              a.ins_h = fc(a, a.ins_h, a.window[a.strstart + Lb - 1]);
              c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h];
              a.head[a.ins_h] = a.strstart;
            }
          } while (--a.prev_length !== 0);
          a.match_available = 0;
          a.match_length = Lb - 1;
          a.strstart++;
          if (d) {
            hc(a, false);
            if (a.strm.avail_out === 0) {
              return Xb;
            }
          }
        } else if (a.match_available) {
          d = hb(a, 0, a.window[a.strstart - 1]);
          if (d) {
            hc(a, false);
          }
          a.strstart++;
          a.lookahead--;
          if (a.strm.avail_out === 0) {
            return Xb;
          }
        } else {
          a.match_available = 1;
          a.strstart++;
          a.lookahead--;
        }
      }
      if (a.match_available) {
        d = hb(a, 0, a.window[a.strstart - 1]);
        a.match_available = 0;
      }
      a.insert = a.strstart < Lb - 1 ? a.strstart : Lb - 1;
      if (b === mb) {
        hc(a, true);
        if (a.strm.avail_out === 0) {
          return Zb;
        }
        return $b;
      }
      if (a.sym_next) {
        hc(a, false);
        if (a.strm.avail_out === 0) {
          return Xb;
        }
      }
      return Yb;
    };
    const qc = (a, b) => {
      let c;
      let d;
      let e;
      let f;
      const g = a.window;
      while (true) {
        if (a.lookahead <= Mb) {
          mc(a);
          if (a.lookahead <= Mb && b === jb) {
            return Xb;
          }
          if (a.lookahead === 0) {
            break;
          }
        }
        a.match_length = 0;
        if (a.lookahead >= Lb && a.strstart > 0) {
          e = a.strstart - 1;
          d = g[e];
          if (d === g[++e] && d === g[++e] && d === g[++e]) {
            f = a.strstart + Mb;
            do {} while (d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && e < f);
            a.match_length = Mb - (f - e);
            if (a.match_length > a.lookahead) {
              a.match_length = a.lookahead;
            }
          }
        }
        if (a.match_length >= Lb) {
          c = hb(a, 1, a.match_length - Lb);
          a.lookahead -= a.match_length;
          a.strstart += a.match_length;
          a.match_length = 0;
        } else {
          c = hb(a, 0, a.window[a.strstart]);
          a.lookahead--;
          a.strstart++;
        }
        if (c) {
          hc(a, false);
          if (a.strm.avail_out === 0) {
            return Xb;
          }
        }
      }
      a.insert = 0;
      if (b === mb) {
        hc(a, true);
        if (a.strm.avail_out === 0) {
          return Zb;
        }
        return $b;
      }
      if (a.sym_next) {
        hc(a, false);
        if (a.strm.avail_out === 0) {
          return Xb;
        }
      }
      return Yb;
    };
    const rc = (a, b) => {
      let c;
      while (true) {
        if (a.lookahead === 0) {
          mc(a);
          if (a.lookahead === 0) {
            if (b === jb) {
              return Xb;
            }
            break;
          }
        }
        a.match_length = 0;
        c = hb(a, 0, a.window[a.strstart]);
        a.lookahead--;
        a.strstart++;
        if (c) {
          hc(a, false);
          if (a.strm.avail_out === 0) {
            return Xb;
          }
        }
      }
      a.insert = 0;
      if (b === mb) {
        hc(a, true);
        if (a.strm.avail_out === 0) {
          return Zb;
        }
        return $b;
      }
      if (a.sym_next) {
        hc(a, false);
        if (a.strm.avail_out === 0) {
          return Xb;
        }
      }
      return Yb;
    };
    function sc(a, b, c, d, e) {
      this.good_length = a;
      this.max_lazy = b;
      this.nice_length = c;
      this.max_chain = d;
      this.func = e;
    }
    const tc = [new sc(0, 0, 0, 0, nc), new sc(4, 4, 8, 4, oc), new sc(4, 5, 16, 8, oc), new sc(4, 6, 32, 32, oc), new sc(4, 4, 16, 16, pc), new sc(8, 16, 32, 32, pc), new sc(8, 16, 128, 128, pc), new sc(8, 32, 128, 256, pc), new sc(32, 128, 258, 1024, pc), new sc(32, 258, 258, 4096, pc)];
    const uc = a => {
      a.window_size = a.w_size * 2;
      cc(a.head);
      a.max_lazy_match = tc[a.level].max_lazy;
      a.good_match = tc[a.level].good_length;
      a.nice_match = tc[a.level].nice_length;
      a.max_chain_length = tc[a.level].max_chain;
      a.strstart = 0;
      a.block_start = 0;
      a.lookahead = 0;
      a.insert = 0;
      a.match_length = a.prev_length = Lb - 1;
      a.match_available = 0;
      a.ins_h = 0;
    };
    function vc() {
      this.strm = null;
      this.status = 0;
      this.pending_buf = null;
      this.pending_buf_size = 0;
      this.pending_out = 0;
      this.pending = 0;
      this.wrap = 0;
      this.gzhead = null;
      this.gzindex = 0;
      this.method = Ab;
      this.last_flush = -1;
      this.w_size = 0;
      this.w_bits = 0;
      this.w_mask = 0;
      this.window = null;
      this.window_size = 0;
      this.prev = null;
      this.head = null;
      this.ins_h = 0;
      this.hash_size = 0;
      this.hash_bits = 0;
      this.hash_mask = 0;
      this.hash_shift = 0;
      this.block_start = 0;
      this.match_length = 0;
      this.prev_match = 0;
      this.match_available = 0;
      this.strstart = 0;
      this.match_start = 0;
      this.lookahead = 0;
      this.prev_length = 0;
      this.max_chain_length = 0;
      this.max_lazy_match = 0;
      this.level = 0;
      this.strategy = 0;
      this.good_match = 0;
      this.nice_match = 0;
      this.dyn_ltree = new Uint16Array(Jb * 2);
      this.dyn_dtree = new Uint16Array((Hb * 2 + 1) * 2);
      this.bl_tree = new Uint16Array((Ib * 2 + 1) * 2);
      cc(this.dyn_ltree);
      cc(this.dyn_dtree);
      cc(this.bl_tree);
      this.l_desc = null;
      this.d_desc = null;
      this.bl_desc = null;
      this.bl_count = new Uint16Array(Kb + 1);
      this.heap = new Uint16Array(Gb * 2 + 1);
      cc(this.heap);
      this.heap_len = 0;
      this.heap_max = 0;
      this.depth = new Uint16Array(Gb * 2 + 1);
      cc(this.depth);
      this.sym_buf = 0;
      this.lit_bufsize = 0;
      this.sym_next = 0;
      this.sym_end = 0;
      this.opt_len = 0;
      this.static_len = 0;
      this.matches = 0;
      this.insert = 0;
      this.bi_buf = 0;
      this.bi_valid = 0;
    }
    const wc = a => {
      if (!a) {
        return 1;
      }
      const b = a.state;
      if (!b || b.strm !== a || b.status !== Pb && b.status !== Qb && b.status !== Rb && b.status !== Sb && b.status !== Tb && b.status !== Ub && b.status !== Vb && b.status !== Wb) {
        return 1;
      }
      return 0;
    };
    const xc = a => {
      if (wc(a)) {
        return ac(a, qb);
      }
      a.total_in = a.total_out = 0;
      a.data_type = zb;
      const b = a.state;
      b.pending = 0;
      b.pending_out = 0;
      if (b.wrap < 0) {
        b.wrap = -b.wrap;
      }
      b.status = b.wrap === 2 ? Qb : b.wrap ? Pb : Vb;
      a.adler = b.wrap === 2 ? 0 : 1;
      b.last_flush = -2;
      eb(b);
      return ob;
    };
    const yc = a => {
      const b = xc(a);
      if (b === ob) {
        uc(a.state);
      }
      return b;
    };
    const zc = (a, b) => {
      if (wc(a) || a.state.wrap !== 2) {
        return qb;
      }
      a.state.gzhead = b;
      return ob;
    };
    const Ac = (a, b, c, d, e, f) => {
      if (!a) {
        return qb;
      }
      let g = 1;
      if (b === tb) {
        b = 6;
      }
      if (d < 0) {
        g = 0;
        d = -d;
      } else if (d > 15) {
        g = 2;
        d -= 16;
      }
      if (e < 1 || e > Bb || c !== Ab || d < 8 || d > 15 || b < 0 || b > 9 || f < 0 || f > xb || d === 8 && g !== 1) {
        return ac(a, qb);
      }
      if (d === 8) {
        d = 9;
      }
      const h = new vc();
      a.state = h;
      h.strm = a;
      h.status = Pb;
      h.wrap = g;
      h.gzhead = null;
      h.w_bits = d;
      h.w_size = 1 << h.w_bits;
      h.w_mask = h.w_size - 1;
      h.hash_bits = e + 7;
      h.hash_size = 1 << h.hash_bits;
      h.hash_mask = h.hash_size - 1;
      h.hash_shift = ~~((h.hash_bits + Lb - 1) / Lb);
      h.window = new Uint8Array(h.w_size * 2);
      h.head = new Uint16Array(h.hash_size);
      h.prev = new Uint16Array(h.w_size);
      h.lit_bufsize = 1 << e + 6;
      h.pending_buf_size = h.lit_bufsize * 4;
      h.pending_buf = new Uint8Array(h.pending_buf_size);
      h.sym_buf = h.lit_bufsize;
      h.sym_end = (h.lit_bufsize - 1) * 3;
      h.level = b;
      h.strategy = f;
      h.method = c;
      return yc(a);
    };
    const Bc = (a, b) => {
      return Ac(a, b, Ab, Cb, Db, yb);
    };
    const Cc = (a, b) => {
      if (wc(a) || b > nb || b < 0) {
        if (a) {
          return ac(a, qb);
        } else {
          return qb;
        }
      }
      const c = a.state;
      if (!a.output || a.avail_in !== 0 && !a.input || c.status === Wb && b !== mb) {
        return ac(a, a.avail_out === 0 ? sb : qb);
      }
      const d = c.last_flush;
      c.last_flush = b;
      if (c.pending !== 0) {
        gc(a);
        if (a.avail_out === 0) {
          c.last_flush = -1;
          return ob;
        }
      } else if (a.avail_in === 0 && bc(b) <= bc(d) && b !== mb) {
        return ac(a, sb);
      }
      if (c.status === Wb && a.avail_in !== 0) {
        return ac(a, sb);
      }
      if (c.status === Pb && c.wrap === 0) {
        c.status = Vb;
      }
      if (c.status === Pb) {
        let b = Ab + (c.w_bits - 8 << 4) << 8;
        let d = -1;
        if (c.strategy >= vb || c.level < 2) {
          d = 0;
        } else if (c.level < 6) {
          d = 1;
        } else if (c.level === 6) {
          d = 2;
        } else {
          d = 3;
        }
        b |= d << 6;
        if (c.strstart !== 0) {
          b |= Ob;
        }
        b += 31 - b % 31;
        jc(c, b);
        if (c.strstart !== 0) {
          jc(c, a.adler >>> 16);
          jc(c, a.adler & 65535);
        }
        a.adler = 1;
        c.status = Vb;
        gc(a);
        if (c.pending !== 0) {
          c.last_flush = -1;
          return ob;
        }
      }
      if (c.status === Qb) {
        a.adler = 0;
        ic(c, 31);
        ic(c, 139);
        ic(c, 8);
        if (!c.gzhead) {
          ic(c, 0);
          ic(c, 0);
          ic(c, 0);
          ic(c, 0);
          ic(c, 0);
          ic(c, c.level === 9 ? 2 : c.strategy >= vb || c.level < 2 ? 4 : 0);
          ic(c, _b);
          c.status = Vb;
          gc(a);
          if (c.pending !== 0) {
            c.last_flush = -1;
            return ob;
          }
        } else {
          ic(c, (c.gzhead.text ? 1 : 0) + (c.gzhead.hcrc ? 2 : 0) + (!c.gzhead.extra ? 0 : 4) + (!c.gzhead.name ? 0 : 8) + (!c.gzhead.comment ? 0 : 16));
          ic(c, c.gzhead.time & 255);
          ic(c, c.gzhead.time >> 8 & 255);
          ic(c, c.gzhead.time >> 16 & 255);
          ic(c, c.gzhead.time >> 24 & 255);
          ic(c, c.level === 9 ? 2 : c.strategy >= vb || c.level < 2 ? 4 : 0);
          ic(c, c.gzhead.os & 255);
          if (c.gzhead.extra && c.gzhead.extra.length) {
            ic(c, c.gzhead.extra.length & 255);
            ic(c, c.gzhead.extra.length >> 8 & 255);
          }
          if (c.gzhead.hcrc) {
            a.adler = ab(a.adler, c.pending_buf, c.pending, 0);
          }
          c.gzindex = 0;
          c.status = Rb;
        }
      }
      if (c.status === Rb) {
        if (c.gzhead.extra) {
          let b = c.pending;
          let d = (c.gzhead.extra.length & 65535) - c.gzindex;
          while (c.pending + d > c.pending_buf_size) {
            let e = c.pending_buf_size - c.pending;
            c.pending_buf.set(c.gzhead.extra.subarray(c.gzindex, c.gzindex + e), c.pending);
            c.pending = c.pending_buf_size;
            if (c.gzhead.hcrc && c.pending > b) {
              a.adler = ab(a.adler, c.pending_buf, c.pending - b, b);
            }
            c.gzindex += e;
            gc(a);
            if (c.pending !== 0) {
              c.last_flush = -1;
              return ob;
            }
            b = 0;
            d -= e;
          }
          let e = new Uint8Array(c.gzhead.extra);
          c.pending_buf.set(e.subarray(c.gzindex, c.gzindex + d), c.pending);
          c.pending += d;
          if (c.gzhead.hcrc && c.pending > b) {
            a.adler = ab(a.adler, c.pending_buf, c.pending - b, b);
          }
          c.gzindex = 0;
        }
        c.status = Sb;
      }
      if (c.status === Sb) {
        if (c.gzhead.name) {
          let b = c.pending;
          let d;
          do {
            if (c.pending === c.pending_buf_size) {
              if (c.gzhead.hcrc && c.pending > b) {
                a.adler = ab(a.adler, c.pending_buf, c.pending - b, b);
              }
              gc(a);
              if (c.pending !== 0) {
                c.last_flush = -1;
                return ob;
              }
              b = 0;
            }
            if (c.gzindex < c.gzhead.name.length) {
              d = c.gzhead.name.charCodeAt(c.gzindex++) & 255;
            } else {
              d = 0;
            }
            ic(c, d);
          } while (d !== 0);
          if (c.gzhead.hcrc && c.pending > b) {
            a.adler = ab(a.adler, c.pending_buf, c.pending - b, b);
          }
          c.gzindex = 0;
        }
        c.status = Tb;
      }
      if (c.status === Tb) {
        if (c.gzhead.comment) {
          let b = c.pending;
          let d;
          do {
            if (c.pending === c.pending_buf_size) {
              if (c.gzhead.hcrc && c.pending > b) {
                a.adler = ab(a.adler, c.pending_buf, c.pending - b, b);
              }
              gc(a);
              if (c.pending !== 0) {
                c.last_flush = -1;
                return ob;
              }
              b = 0;
            }
            if (c.gzindex < c.gzhead.comment.length) {
              d = c.gzhead.comment.charCodeAt(c.gzindex++) & 255;
            } else {
              d = 0;
            }
            ic(c, d);
          } while (d !== 0);
          if (c.gzhead.hcrc && c.pending > b) {
            a.adler = ab(a.adler, c.pending_buf, c.pending - b, b);
          }
        }
        c.status = Ub;
      }
      if (c.status === Ub) {
        if (c.gzhead.hcrc) {
          if (c.pending + 2 > c.pending_buf_size) {
            gc(a);
            if (c.pending !== 0) {
              c.last_flush = -1;
              return ob;
            }
          }
          ic(c, a.adler & 255);
          ic(c, a.adler >> 8 & 255);
          a.adler = 0;
        }
        c.status = Vb;
        gc(a);
        if (c.pending !== 0) {
          c.last_flush = -1;
          return ob;
        }
      }
      if (a.avail_in !== 0 || c.lookahead !== 0 || b !== jb && c.status !== Wb) {
        let d = c.level === 0 ? nc(c, b) : c.strategy === vb ? rc(c, b) : c.strategy === wb ? qc(c, b) : tc[c.level].func(c, b);
        if (d === Zb || d === $b) {
          c.status = Wb;
        }
        if (d === Xb || d === Zb) {
          if (a.avail_out === 0) {
            c.last_flush = -1;
          }
          return ob;
        }
        if (d === Yb) {
          if (b === kb) {
            ib(c);
          } else if (b !== nb) {
            fb(c, 0, 0, false);
            if (b === lb) {
              cc(c.head);
              if (c.lookahead === 0) {
                c.strstart = 0;
                c.block_start = 0;
                c.insert = 0;
              }
            }
          }
          gc(a);
          if (a.avail_out === 0) {
            c.last_flush = -1;
            return ob;
          }
        }
      }
      if (b !== mb) {
        return ob;
      }
      if (c.wrap <= 0) {
        return pb;
      }
      if (c.wrap === 2) {
        ic(c, a.adler & 255);
        ic(c, a.adler >> 8 & 255);
        ic(c, a.adler >> 16 & 255);
        ic(c, a.adler >> 24 & 255);
        ic(c, a.total_in & 255);
        ic(c, a.total_in >> 8 & 255);
        ic(c, a.total_in >> 16 & 255);
        ic(c, a.total_in >> 24 & 255);
      } else {
        jc(c, a.adler >>> 16);
        jc(c, a.adler & 65535);
      }
      gc(a);
      if (c.wrap > 0) {
        c.wrap = -c.wrap;
      }
      if (c.pending !== 0) {
        return ob;
      } else {
        return pb;
      }
    };
    const Dc = a => {
      if (wc(a)) {
        return qb;
      }
      const b = a.state.status;
      a.state = null;
      if (b === Vb) {
        return ac(a, rb);
      } else {
        return ob;
      }
    };
    const Ec = (a, b) => {
      let c = b.length;
      if (wc(a)) {
        return qb;
      }
      const d = a.state;
      const e = d.wrap;
      if (e === 2 || e === 1 && d.status !== Pb || d.lookahead) {
        return qb;
      }
      if (e === 1) {
        a.adler = Ya(a.adler, b, c, 0);
      }
      d.wrap = 0;
      if (c >= d.w_size) {
        if (e === 0) {
          cc(d.head);
          d.strstart = 0;
          d.block_start = 0;
          d.insert = 0;
        }
        let a = new Uint8Array(d.w_size);
        a.set(b.subarray(c - d.w_size, c), 0);
        b = a;
        c = d.w_size;
      }
      const f = a.avail_in;
      const g = a.next_in;
      const h = a.input;
      a.avail_in = c;
      a.next_in = 0;
      a.input = b;
      mc(d);
      while (d.lookahead >= Lb) {
        let a = d.strstart;
        let b = d.lookahead - (Lb - 1);
        do {
          d.ins_h = fc(d, d.ins_h, d.window[a + Lb - 1]);
          d.prev[a & d.w_mask] = d.head[d.ins_h];
          d.head[d.ins_h] = a;
          a++;
        } while (--b);
        d.strstart = a;
        d.lookahead = Lb - 1;
        mc(d);
      }
      d.strstart += d.lookahead;
      d.block_start = d.strstart;
      d.insert = d.lookahead;
      d.lookahead = 0;
      d.match_length = d.prev_length = Lb - 1;
      d.match_available = 0;
      a.next_in = g;
      a.input = h;
      a.avail_in = f;
      d.wrap = e;
      return ob;
    };
    var Fc = Bc;
    var Gc = Ac;
    var Hc = yc;
    var Ic = xc;
    var Jc = zc;
    var Kc = Cc;
    var Lc = Dc;
    var Mc = Ec;
    var Nc = "pako deflate (from Nodeca project)";
    var Oc = {
      deflateInit: Fc,
      deflateInit2: Gc,
      deflateReset: Hc,
      deflateResetKeep: Ic,
      deflateSetHeader: Jc,
      deflate: Kc,
      deflateEnd: Lc,
      deflateSetDictionary: Mc,
      deflateInfo: Nc
    };
    var Pc = Oc;
    const Qc = (a, b) => {
      return Object.prototype.hasOwnProperty.call(a, b);
    };
    function Rc(a) {
      const b = Array.prototype.slice.call(arguments, 1);
      while (b.length) {
        const c = b.shift();
        if (!c) {
          continue;
        }
        if (typeof c !== "object") {
          throw new TypeError(c + "must be non-object");
        }
        for (const b in c) {
          if (Qc(c, b)) {
            a[b] = c[b];
          }
        }
      }
      return a;
    }
    var Sc = a => {
      let b = 0;
      for (let c = 0, d = a.length; c < d; c++) {
        b += a[c].length;
      }
      const c = new Uint8Array(b);
      for (let b = 0, d = 0, e = a.length; b < e; b++) {
        let e = a[b];
        c.set(e, d);
        d += e.length;
      }
      return c;
    };
    var Tc = {
      assign: Rc,
      flattenChunks: Sc
    };
    var Uc = Tc;
    let Vc = true;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (a) {
      Vc = false;
    }
    const Wc = new Uint8Array(256);
    for (let a = 0; a < 256; a++) {
      Wc[a] = a >= 252 ? 6 : a >= 248 ? 5 : a >= 240 ? 4 : a >= 224 ? 3 : a >= 192 ? 2 : 1;
    }
    Wc[254] = Wc[254] = 1;
    var Xc = a => {
      if (typeof TextEncoder === "function" && TextEncoder.prototype.encode) {
        return new TextEncoder().encode(a);
      }
      let b;
      let c;
      let d;
      let e;
      let f;
      let g = a.length;
      let h = 0;
      for (e = 0; e < g; e++) {
        c = a.charCodeAt(e);
        if ((c & 64512) === 55296 && e + 1 < g) {
          d = a.charCodeAt(e + 1);
          if ((d & 64512) === 56320) {
            c = 65536 + (c - 55296 << 10) + (d - 56320);
            e++;
          }
        }
        h += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
      }
      b = new Uint8Array(h);
      f = 0;
      e = 0;
      for (; f < h; e++) {
        c = a.charCodeAt(e);
        if ((c & 64512) === 55296 && e + 1 < g) {
          d = a.charCodeAt(e + 1);
          if ((d & 64512) === 56320) {
            c = 65536 + (c - 55296 << 10) + (d - 56320);
            e++;
          }
        }
        if (c < 128) {
          b[f++] = c;
        } else if (c < 2048) {
          b[f++] = c >>> 6 | 192;
          b[f++] = c & 63 | 128;
        } else if (c < 65536) {
          b[f++] = c >>> 12 | 224;
          b[f++] = c >>> 6 & 63 | 128;
          b[f++] = c & 63 | 128;
        } else {
          b[f++] = c >>> 18 | 240;
          b[f++] = c >>> 12 & 63 | 128;
          b[f++] = c >>> 6 & 63 | 128;
          b[f++] = c & 63 | 128;
        }
      }
      return b;
    };
    const Yc = (a, b) => {
      if (b < 65534) {
        if (a.subarray && Vc) {
          return String.fromCharCode.apply(null, a.length === b ? a : a.subarray(0, b));
        }
      }
      let c = "";
      for (let d = 0; d < b; d++) {
        c += String.fromCharCode(a[d]);
      }
      return c;
    };
    var Zc = (a, b) => {
      const c = b || a.length;
      if (typeof TextDecoder === "function" && TextDecoder.prototype.decode) {
        return new TextDecoder().decode(a.subarray(0, b));
      }
      let d;
      let e;
      const f = new Array(c * 2);
      e = 0;
      d = 0;
      while (d < c) {
        let b = a[d++];
        if (b < 128) {
          f[e++] = b;
          continue;
        }
        let g = Wc[b];
        if (g > 4) {
          f[e++] = 65533;
          d += g - 1;
          continue;
        }
        b &= g === 2 ? 31 : g === 3 ? 15 : 7;
        while (g > 1 && d < c) {
          b = b << 6 | a[d++] & 63;
          g--;
        }
        if (g > 1) {
          f[e++] = 65533;
          continue;
        }
        if (b < 65536) {
          f[e++] = b;
        } else {
          b -= 65536;
          f[e++] = b >> 10 & 1023 | 55296;
          f[e++] = b & 1023 | 56320;
        }
      }
      return Yc(f, e);
    };
    var $c = (a, b) => {
      b = b || a.length;
      if (b > a.length) {
        b = a.length;
      }
      let c = b - 1;
      while (c >= 0 && (a[c] & 192) === 128) {
        c--;
      }
      if (c < 0) {
        return b;
      }
      if (c === 0) {
        return b;
      }
      if (c + Wc[a[c]] > b) {
        return c;
      } else {
        return b;
      }
    };
    var _c = {
      string2buf: Xc,
      buf2string: Zc,
      utf8border: $c
    };
    var ad = _c;
    function bd() {
      this.input = null;
      this.next_in = 0;
      this.avail_in = 0;
      this.total_in = 0;
      this.output = null;
      this.next_out = 0;
      this.avail_out = 0;
      this.total_out = 0;
      this.msg = "";
      this.state = null;
      this.data_type = 2;
      this.adler = 0;
    }
    var cd = bd;
    const dd = Object.prototype.toString;
    const {
      Z_NO_FLUSH: ed,
      Z_SYNC_FLUSH: fd,
      Z_FULL_FLUSH: gd,
      Z_FINISH: hd,
      Z_OK: id,
      Z_STREAM_END: jd,
      Z_DEFAULT_COMPRESSION: kd,
      Z_DEFAULT_STRATEGY: ld,
      Z_DEFLATED: md
    } = db;
    function nd(a) {
      var b = {
        level: kd,
        method: md,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: ld
      };
      this.options = Uc.assign(b, a || {});
      let c = this.options;
      if (c.raw && c.windowBits > 0) {
        c.windowBits = -c.windowBits;
      } else if (c.gzip && c.windowBits > 0 && c.windowBits < 16) {
        c.windowBits += 16;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new cd();
      this.strm.avail_out = 0;
      let d = Pc.deflateInit2(this.strm, c.level, c.method, c.windowBits, c.memLevel, c.strategy);
      if (d !== id) {
        throw new Error(bb[d]);
      }
      if (c.header) {
        Pc.deflateSetHeader(this.strm, c.header);
      }
      if (c.dictionary) {
        let a;
        if (typeof c.dictionary === "string") {
          a = ad.string2buf(c.dictionary);
        } else if (dd.call(c.dictionary) === "[object ArrayBuffer]") {
          a = new Uint8Array(c.dictionary);
        } else {
          a = c.dictionary;
        }
        d = Pc.deflateSetDictionary(this.strm, a);
        if (d !== id) {
          throw new Error(bb[d]);
        }
        this._dict_set = true;
      }
    }
    nd.prototype.push = function (a, b) {
      const c = this.strm;
      const d = this.options.chunkSize;
      let e;
      let f;
      if (this.ended) {
        return false;
      }
      if (b === ~~b) {
        f = b;
      } else {
        f = b === true ? hd : ed;
      }
      if (typeof a === "string") {
        c.input = ad.string2buf(a);
      } else if (dd.call(a) === "[object ArrayBuffer]") {
        c.input = new Uint8Array(a);
      } else {
        c.input = a;
      }
      c.next_in = 0;
      c.avail_in = c.input.length;
      while (true) {
        if (c.avail_out === 0) {
          c.output = new Uint8Array(d);
          c.next_out = 0;
          c.avail_out = d;
        }
        if ((f === fd || f === gd) && c.avail_out <= 6) {
          this.onData(c.output.subarray(0, c.next_out));
          c.avail_out = 0;
          continue;
        }
        e = Pc.deflate(c, f);
        if (e === jd) {
          if (c.next_out > 0) {
            this.onData(c.output.subarray(0, c.next_out));
          }
          e = Pc.deflateEnd(this.strm);
          this.onEnd(e);
          this.ended = true;
          return e === id;
        }
        if (c.avail_out === 0) {
          this.onData(c.output);
          continue;
        }
        if (f > 0 && c.next_out > 0) {
          this.onData(c.output.subarray(0, c.next_out));
          c.avail_out = 0;
          continue;
        }
        if (c.avail_in === 0) {
          break;
        }
      }
      return true;
    };
    nd.prototype.onData = function (a) {
      this.chunks.push(a);
    };
    nd.prototype.onEnd = function (a) {
      if (a === id) {
        this.result = Uc.flattenChunks(this.chunks);
      }
      this.chunks = [];
      this.err = a;
      this.msg = this.strm.msg;
    };
    function od(a, b) {
      const c = new nd(b);
      c.push(a, true);
      if (c.err) {
        throw c.msg || bb[c.err];
      }
      return c.result;
    }
    function pd(a, b) {
      b = b || {};
      b.raw = true;
      return od(a, b);
    }
    function qd(a, b) {
      b = b || {};
      b.gzip = true;
      return od(a, b);
    }
    var rd = nd;
    var sd = od;
    var td = pd;
    var ud = qd;
    var vd = db;
    var wd = {
      Deflate: rd,
      deflate: sd,
      deflateRaw: td,
      gzip: ud,
      constants: vd
    };
    var xd = wd;
    const yd = 16209;
    const zd = 16191;
    var Ad = function c(a, b) {
      let d;
      let e;
      let f;
      let g;
      let h;
      let i;
      let j;
      let k;
      let l;
      let m;
      let n;
      let o;
      let p;
      let q;
      let r;
      let s;
      let t;
      let u;
      let v;
      let w;
      let x;
      let y;
      let z;
      let A;
      const B = a.state;
      d = a.next_in;
      z = a.input;
      e = d + (a.avail_in - 5);
      f = a.next_out;
      A = a.output;
      g = f - (b - a.avail_out);
      h = f + (a.avail_out - 257);
      i = B.dmax;
      j = B.wsize;
      k = B.whave;
      l = B.wnext;
      m = B.window;
      n = B.hold;
      o = B.bits;
      p = B.lencode;
      q = B.distcode;
      r = (1 << B.lenbits) - 1;
      s = (1 << B.distbits) - 1;
      _0x3ee22a: do {
        if (o < 15) {
          n += z[d++] << o;
          o += 8;
          n += z[d++] << o;
          o += 8;
        }
        t = p[n & r];
        _0x423868: while (true) {
          u = t >>> 24;
          n >>>= u;
          o -= u;
          u = t >>> 16 & 255;
          if (u === 0) {
            A[f++] = t & 65535;
          } else if (u & 16) {
            v = t & 65535;
            u &= 15;
            if (u) {
              if (o < u) {
                n += z[d++] << o;
                o += 8;
              }
              v += n & (1 << u) - 1;
              n >>>= u;
              o -= u;
            }
            if (o < 15) {
              n += z[d++] << o;
              o += 8;
              n += z[d++] << o;
              o += 8;
            }
            t = q[n & s];
            _0x2529b2: while (true) {
              u = t >>> 24;
              n >>>= u;
              o -= u;
              u = t >>> 16 & 255;
              if (u & 16) {
                w = t & 65535;
                u &= 15;
                if (o < u) {
                  n += z[d++] << o;
                  o += 8;
                  if (o < u) {
                    n += z[d++] << o;
                    o += 8;
                  }
                }
                w += n & (1 << u) - 1;
                if (w > i) {
                  a.msg = "invalid distance too far back";
                  B.mode = yd;
                  break _0x3ee22a;
                }
                n >>>= u;
                o -= u;
                u = f - g;
                if (w > u) {
                  u = w - u;
                  if (u > k) {
                    if (B.sane) {
                      a.msg = "invalid distance too far back";
                      B.mode = yd;
                      break _0x3ee22a;
                    }
                  }
                  x = 0;
                  y = m;
                  if (l === 0) {
                    x += j - u;
                    if (u < v) {
                      v -= u;
                      do {
                        A[f++] = m[x++];
                      } while (--u);
                      x = f - w;
                      y = A;
                    }
                  } else if (l < u) {
                    x += j + l - u;
                    u -= l;
                    if (u < v) {
                      v -= u;
                      do {
                        A[f++] = m[x++];
                      } while (--u);
                      x = 0;
                      if (l < v) {
                        u = l;
                        v -= u;
                        do {
                          A[f++] = m[x++];
                        } while (--u);
                        x = f - w;
                        y = A;
                      }
                    }
                  } else {
                    x += l - u;
                    if (u < v) {
                      v -= u;
                      do {
                        A[f++] = m[x++];
                      } while (--u);
                      x = f - w;
                      y = A;
                    }
                  }
                  while (v > 2) {
                    A[f++] = y[x++];
                    A[f++] = y[x++];
                    A[f++] = y[x++];
                    v -= 3;
                  }
                  if (v) {
                    A[f++] = y[x++];
                    if (v > 1) {
                      A[f++] = y[x++];
                    }
                  }
                } else {
                  x = f - w;
                  do {
                    A[f++] = A[x++];
                    A[f++] = A[x++];
                    A[f++] = A[x++];
                    v -= 3;
                  } while (v > 2);
                  if (v) {
                    A[f++] = A[x++];
                    if (v > 1) {
                      A[f++] = A[x++];
                    }
                  }
                }
              } else if ((u & 64) === 0) {
                t = q[(t & 65535) + (n & (1 << u) - 1)];
                continue _0x2529b2;
              } else {
                a.msg = "invalid distance code";
                B.mode = yd;
                break _0x3ee22a;
              }
              break;
            }
          } else if ((u & 64) === 0) {
            t = p[(t & 65535) + (n & (1 << u) - 1)];
            continue _0x423868;
          } else if (u & 32) {
            B.mode = zd;
            break _0x3ee22a;
          } else {
            a.msg = "invalid literal/length code";
            B.mode = yd;
            break _0x3ee22a;
          }
          break;
        }
      } while (d < e && f < h);
      v = o >> 3;
      d -= v;
      o -= v << 3;
      n &= (1 << o) - 1;
      a.next_in = d;
      a.next_out = f;
      a.avail_in = d < e ? 5 + (e - d) : 5 - (d - e);
      a.avail_out = f < h ? 257 + (h - f) : 257 - (f - h);
      B.hold = n;
      B.bits = o;
      return;
    };
    const Bd = 15;
    const Cd = 852;
    const Dd = 592;
    const Ed = 0;
    const Fd = 1;
    const Gd = 2;
    const Hd = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
    const Id = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
    const Jd = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
    const Kd = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
    const Ld = (a, b, c, d, e, f, g, h) => {
      const i = h.bits;
      let j = 0;
      let k = 0;
      let l = 0;
      let m = 0;
      let n = 0;
      let o = 0;
      let p = 0;
      let q = 0;
      let r = 0;
      let s = 0;
      let t;
      let u;
      let v;
      let w;
      let x;
      let y = null;
      let z;
      const A = new Uint16Array(Bd + 1);
      const B = new Uint16Array(Bd + 1);
      let C = null;
      let D;
      let E;
      let F;
      for (j = 0; j <= Bd; j++) {
        A[j] = 0;
      }
      for (k = 0; k < d; k++) {
        A[b[c + k]]++;
      }
      n = i;
      for (m = Bd; m >= 1; m--) {
        if (A[m] !== 0) {
          break;
        }
      }
      if (n > m) {
        n = m;
      }
      if (m === 0) {
        e[f++] = 1 << 24 | 64 << 16 | 0;
        e[f++] = 1 << 24 | 64 << 16 | 0;
        h.bits = 1;
        return 0;
      }
      for (l = 1; l < m; l++) {
        if (A[l] !== 0) {
          break;
        }
      }
      if (n < l) {
        n = l;
      }
      q = 1;
      for (j = 1; j <= Bd; j++) {
        q <<= 1;
        q -= A[j];
        if (q < 0) {
          return -1;
        }
      }
      if (q > 0 && (a === Ed || m !== 1)) {
        return -1;
      }
      B[1] = 0;
      for (j = 1; j < Bd; j++) {
        B[j + 1] = B[j] + A[j];
      }
      for (k = 0; k < d; k++) {
        if (b[c + k] !== 0) {
          g[B[b[c + k]]++] = k;
        }
      }
      if (a === Ed) {
        y = C = g;
        z = 20;
      } else if (a === Fd) {
        y = Hd;
        C = Id;
        z = 257;
      } else {
        y = Jd;
        C = Kd;
        z = 0;
      }
      s = 0;
      k = 0;
      j = l;
      x = f;
      o = n;
      p = 0;
      v = -1;
      r = 1 << n;
      w = r - 1;
      if (a === Fd && r > Cd || a === Gd && r > Dd) {
        return 1;
      }
      while (true) {
        D = j - p;
        if (g[k] + 1 < z) {
          E = 0;
          F = g[k];
        } else if (g[k] >= z) {
          E = C[g[k] - z];
          F = y[g[k] - z];
        } else {
          E = 96;
          F = 0;
        }
        t = 1 << j - p;
        u = 1 << o;
        l = u;
        do {
          u -= t;
          e[x + (s >> p) + u] = D << 24 | E << 16 | F | 0;
        } while (u !== 0);
        t = 1 << j - 1;
        while (s & t) {
          t >>= 1;
        }
        if (t !== 0) {
          s &= t - 1;
          s += t;
        } else {
          s = 0;
        }
        k++;
        if (--A[j] === 0) {
          if (j === m) {
            break;
          }
          j = b[c + g[k]];
        }
        if (j > n && (s & w) !== v) {
          if (p === 0) {
            p = n;
          }
          x += l;
          o = j - p;
          q = 1 << o;
          while (o + p < m) {
            q -= A[o + p];
            if (q <= 0) {
              break;
            }
            o++;
            q <<= 1;
          }
          r += 1 << o;
          if (a === Fd && r > Cd || a === Gd && r > Dd) {
            return 1;
          }
          v = s & w;
          e[v] = n << 24 | o << 16 | x - f | 0;
        }
      }
      if (s !== 0) {
        e[x + s] = j - p << 24 | 64 << 16 | 0;
      }
      h.bits = n;
      return 0;
    };
    var Md = Ld;
    const Nd = 0;
    const Od = 1;
    const Pd = 2;
    const {
      Z_FINISH: Qd,
      Z_BLOCK: Rd,
      Z_TREES: Sd,
      Z_OK: Td,
      Z_STREAM_END: Ud,
      Z_NEED_DICT: Vd,
      Z_STREAM_ERROR: Wd,
      Z_DATA_ERROR: Xd,
      Z_MEM_ERROR: Yd,
      Z_BUF_ERROR: Zd,
      Z_DEFLATED: $d
    } = db;
    const _d = 16180;
    const ae = 16181;
    const be = 16182;
    const ce = 16183;
    const de = 16184;
    const ee = 16185;
    const fe = 16186;
    const ge = 16187;
    const he = 16188;
    const ie = 16189;
    const je = 16190;
    const ke = 16191;
    const le = 16192;
    const me = 16193;
    const ne = 16194;
    const oe = 16195;
    const pe = 16196;
    const qe = 16197;
    const re = 16198;
    const se = 16199;
    const te = 16200;
    const ue = 16201;
    const ve = 16202;
    const we = 16203;
    const xe = 16204;
    const ye = 16205;
    const ze = 16206;
    const Ae = 16207;
    const Be = 16208;
    const Ce = 16209;
    const De = 16210;
    const Ee = 16211;
    const Fe = 852;
    const Ge = 592;
    const He = 15;
    const Ie = He;
    const Je = a => {
      return (a >>> 24 & 255) + (a >>> 8 & 65280) + ((a & 65280) << 8) + ((a & 255) << 24);
    };
    function Ke() {
      this.strm = null;
      this.mode = 0;
      this.last = false;
      this.wrap = 0;
      this.havedict = false;
      this.flags = 0;
      this.dmax = 0;
      this.check = 0;
      this.total = 0;
      this.head = null;
      this.wbits = 0;
      this.wsize = 0;
      this.whave = 0;
      this.wnext = 0;
      this.window = null;
      this.hold = 0;
      this.bits = 0;
      this.length = 0;
      this.offset = 0;
      this.extra = 0;
      this.lencode = null;
      this.distcode = null;
      this.lenbits = 0;
      this.distbits = 0;
      this.ncode = 0;
      this.nlen = 0;
      this.ndist = 0;
      this.have = 0;
      this.next = null;
      this.lens = new Uint16Array(320);
      this.work = new Uint16Array(288);
      this.lendyn = null;
      this.distdyn = null;
      this.sane = 0;
      this.back = 0;
      this.was = 0;
    }
    const Le = a => {
      if (!a) {
        return 1;
      }
      const b = a.state;
      if (!b || b.strm !== a || b.mode < _d || b.mode > Ee) {
        return 1;
      }
      return 0;
    };
    const Me = a => {
      if (Le(a)) {
        return Wd;
      }
      const b = a.state;
      a.total_in = a.total_out = b.total = 0;
      a.msg = "";
      if (b.wrap) {
        a.adler = b.wrap & 1;
      }
      b.mode = _d;
      b.last = 0;
      b.havedict = 0;
      b.flags = -1;
      b.dmax = 32768;
      b.head = null;
      b.hold = 0;
      b.bits = 0;
      b.lencode = b.lendyn = new Int32Array(Fe);
      b.distcode = b.distdyn = new Int32Array(Ge);
      b.sane = 1;
      b.back = -1;
      return Td;
    };
    const Ne = a => {
      if (Le(a)) {
        return Wd;
      }
      const b = a.state;
      b.wsize = 0;
      b.whave = 0;
      b.wnext = 0;
      return Me(a);
    };
    const Oe = (a, b) => {
      let c;
      if (Le(a)) {
        return Wd;
      }
      const d = a.state;
      if (b < 0) {
        c = 0;
        b = -b;
      } else {
        c = (b >> 4) + 5;
        if (b < 48) {
          b &= 15;
        }
      }
      if (b && (b < 8 || b > 15)) {
        return Wd;
      }
      if (d.window !== null && d.wbits !== b) {
        d.window = null;
      }
      d.wrap = c;
      d.wbits = b;
      return Ne(a);
    };
    const Pe = (a, b) => {
      if (!a) {
        return Wd;
      }
      const c = new Ke();
      a.state = c;
      c.strm = a;
      c.window = null;
      c.mode = _d;
      const d = Oe(a, b);
      if (d !== Td) {
        a.state = null;
      }
      return d;
    };
    const Qe = a => {
      return Pe(a, Ie);
    };
    let Re = true;
    let Se;
    let Te;
    const Ue = a => {
      if (Re) {
        Se = new Int32Array(512);
        Te = new Int32Array(32);
        let b = 0;
        while (b < 144) {
          a.lens[b++] = 8;
        }
        while (b < 256) {
          a.lens[b++] = 9;
        }
        while (b < 280) {
          a.lens[b++] = 7;
        }
        while (b < 288) {
          a.lens[b++] = 8;
        }
        Md(Od, a.lens, 0, 288, Se, 0, a.work, {
          bits: 9
        });
        b = 0;
        while (b < 32) {
          a.lens[b++] = 5;
        }
        Md(Pd, a.lens, 0, 32, Te, 0, a.work, {
          bits: 5
        });
        Re = false;
      }
      a.lencode = Se;
      a.lenbits = 9;
      a.distcode = Te;
      a.distbits = 5;
    };
    const Ve = (a, b, c, d) => {
      let e;
      const f = a.state;
      if (f.window === null) {
        f.wsize = 1 << f.wbits;
        f.wnext = 0;
        f.whave = 0;
        f.window = new Uint8Array(f.wsize);
      }
      if (d >= f.wsize) {
        f.window.set(b.subarray(c - f.wsize, c), 0);
        f.wnext = 0;
        f.whave = f.wsize;
      } else {
        e = f.wsize - f.wnext;
        if (e > d) {
          e = d;
        }
        f.window.set(b.subarray(c - d, c - d + e), f.wnext);
        d -= e;
        if (d) {
          f.window.set(b.subarray(c - d, c), 0);
          f.wnext = d;
          f.whave = f.wsize;
        } else {
          f.wnext += e;
          if (f.wnext === f.wsize) {
            f.wnext = 0;
          }
          if (f.whave < f.wsize) {
            f.whave += e;
          }
        }
      }
      return 0;
    };
    const We = (a, b) => {
      let c;
      let d;
      let e;
      let f;
      let g;
      let h;
      let i;
      let j;
      let k;
      let l;
      let m;
      let n;
      let o;
      let p;
      let q = 0;
      let r;
      let s;
      let t;
      let u;
      let v;
      let w;
      let x;
      let y;
      const z = new Uint8Array(4);
      let A;
      let B;
      const C = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
      if (Le(a) || !a.output || !a.input && a.avail_in !== 0) {
        return Wd;
      }
      c = a.state;
      if (c.mode === ke) {
        c.mode = le;
      }
      g = a.next_out;
      e = a.output;
      i = a.avail_out;
      f = a.next_in;
      d = a.input;
      h = a.avail_in;
      j = c.hold;
      k = c.bits;
      l = h;
      m = i;
      y = Td;
      _0x4751e5: while (true) {
        switch (c.mode) {
          case _d:
            if (c.wrap === 0) {
              c.mode = le;
              break;
            }
            while (k < 16) {
              if (h === 0) {
                break _0x4751e5;
              }
              h--;
              j += d[f++] << k;
              k += 8;
            }
            if (c.wrap & 2 && j === 35615) {
              if (c.wbits === 0) {
                c.wbits = 15;
              }
              c.check = 0;
              z[0] = j & 255;
              z[1] = j >>> 8 & 255;
              c.check = ab(c.check, z, 2, 0);
              j = 0;
              k = 0;
              c.mode = ae;
              break;
            }
            if (c.head) {
              c.head.done = false;
            }
            if (!(c.wrap & 1) || (((j & 255) << 8) + (j >> 8)) % 31) {
              a.msg = "incorrect header check";
              c.mode = Ce;
              break;
            }
            if ((j & 15) !== $d) {
              a.msg = "unknown compression method";
              c.mode = Ce;
              break;
            }
            j >>>= 4;
            k -= 4;
            x = (j & 15) + 8;
            if (c.wbits === 0) {
              c.wbits = x;
            }
            if (x > 15 || x > c.wbits) {
              a.msg = "invalid window size";
              c.mode = Ce;
              break;
            }
            c.dmax = 1 << c.wbits;
            c.flags = 0;
            a.adler = c.check = 1;
            c.mode = j & 512 ? ie : ke;
            j = 0;
            k = 0;
            break;
          case ae:
            while (k < 16) {
              if (h === 0) {
                break _0x4751e5;
              }
              h--;
              j += d[f++] << k;
              k += 8;
            }
            c.flags = j;
            if ((c.flags & 255) !== $d) {
              a.msg = "unknown compression method";
              c.mode = Ce;
              break;
            }
            if (c.flags & 57344) {
              a.msg = "unknown header flags set";
              c.mode = Ce;
              break;
            }
            if (c.head) {
              c.head.text = j >> 8 & 1;
            }
            if (c.flags & 512 && c.wrap & 4) {
              z[0] = j & 255;
              z[1] = j >>> 8 & 255;
              c.check = ab(c.check, z, 2, 0);
            }
            j = 0;
            k = 0;
            c.mode = be;
          case be:
            while (k < 32) {
              if (h === 0) {
                break _0x4751e5;
              }
              h--;
              j += d[f++] << k;
              k += 8;
            }
            if (c.head) {
              c.head.time = j;
            }
            if (c.flags & 512 && c.wrap & 4) {
              z[0] = j & 255;
              z[1] = j >>> 8 & 255;
              z[2] = j >>> 16 & 255;
              z[3] = j >>> 24 & 255;
              c.check = ab(c.check, z, 4, 0);
            }
            j = 0;
            k = 0;
            c.mode = ce;
          case ce:
            while (k < 16) {
              if (h === 0) {
                break _0x4751e5;
              }
              h--;
              j += d[f++] << k;
              k += 8;
            }
            if (c.head) {
              c.head.xflags = j & 255;
              c.head.os = j >> 8;
            }
            if (c.flags & 512 && c.wrap & 4) {
              z[0] = j & 255;
              z[1] = j >>> 8 & 255;
              c.check = ab(c.check, z, 2, 0);
            }
            j = 0;
            k = 0;
            c.mode = de;
          case de:
            if (c.flags & 1024) {
              while (k < 16) {
                if (h === 0) {
                  break _0x4751e5;
                }
                h--;
                j += d[f++] << k;
                k += 8;
              }
              c.length = j;
              if (c.head) {
                c.head.extra_len = j;
              }
              if (c.flags & 512 && c.wrap & 4) {
                z[0] = j & 255;
                z[1] = j >>> 8 & 255;
                c.check = ab(c.check, z, 2, 0);
              }
              j = 0;
              k = 0;
            } else if (c.head) {
              c.head.extra = null;
            }
            c.mode = ee;
          case ee:
            if (c.flags & 1024) {
              n = c.length;
              if (n > h) {
                n = h;
              }
              if (n) {
                if (c.head) {
                  x = c.head.extra_len - c.length;
                  if (!c.head.extra) {
                    c.head.extra = new Uint8Array(c.head.extra_len);
                  }
                  c.head.extra.set(d.subarray(f, f + n), x);
                }
                if (c.flags & 512 && c.wrap & 4) {
                  c.check = ab(c.check, d, n, f);
                }
                h -= n;
                f += n;
                c.length -= n;
              }
              if (c.length) {
                break _0x4751e5;
              }
            }
            c.length = 0;
            c.mode = fe;
          case fe:
            if (c.flags & 2048) {
              if (h === 0) {
                break _0x4751e5;
              }
              n = 0;
              do {
                x = d[f + n++];
                if (c.head && x && c.length < 65536) {
                  c.head.name += String.fromCharCode(x);
                }
              } while (x && n < h);
              if (c.flags & 512 && c.wrap & 4) {
                c.check = ab(c.check, d, n, f);
              }
              h -= n;
              f += n;
              if (x) {
                break _0x4751e5;
              }
            } else if (c.head) {
              c.head.name = null;
            }
            c.length = 0;
            c.mode = ge;
          case ge:
            if (c.flags & 4096) {
              if (h === 0) {
                break _0x4751e5;
              }
              n = 0;
              do {
                x = d[f + n++];
                if (c.head && x && c.length < 65536) {
                  c.head.comment += String.fromCharCode(x);
                }
              } while (x && n < h);
              if (c.flags & 512 && c.wrap & 4) {
                c.check = ab(c.check, d, n, f);
              }
              h -= n;
              f += n;
              if (x) {
                break _0x4751e5;
              }
            } else if (c.head) {
              c.head.comment = null;
            }
            c.mode = he;
          case he:
            if (c.flags & 512) {
              while (k < 16) {
                if (h === 0) {
                  break _0x4751e5;
                }
                h--;
                j += d[f++] << k;
                k += 8;
              }
              if (c.wrap & 4 && j !== (c.check & 65535)) {
                a.msg = "header crc mismatch";
                c.mode = Ce;
                break;
              }
              j = 0;
              k = 0;
            }
            if (c.head) {
              c.head.hcrc = c.flags >> 9 & 1;
              c.head.done = true;
            }
            a.adler = c.check = 0;
            c.mode = ke;
            break;
          case ie:
            while (k < 32) {
              if (h === 0) {
                break _0x4751e5;
              }
              h--;
              j += d[f++] << k;
              k += 8;
            }
            a.adler = c.check = Je(j);
            j = 0;
            k = 0;
            c.mode = je;
          case je:
            if (c.havedict === 0) {
              a.next_out = g;
              a.avail_out = i;
              a.next_in = f;
              a.avail_in = h;
              c.hold = j;
              c.bits = k;
              return Vd;
            }
            a.adler = c.check = 1;
            c.mode = ke;
          case ke:
            if (b === Rd || b === Sd) {
              break _0x4751e5;
            }
          case le:
            if (c.last) {
              j >>>= k & 7;
              k -= k & 7;
              c.mode = ze;
              break;
            }
            while (k < 3) {
              if (h === 0) {
                break _0x4751e5;
              }
              h--;
              j += d[f++] << k;
              k += 8;
            }
            c.last = j & 1;
            j >>>= 1;
            k -= 1;
            switch (j & 3) {
              case 0:
                c.mode = me;
                break;
              case 1:
                Ue(c);
                c.mode = se;
                if (b === Sd) {
                  j >>>= 2;
                  k -= 2;
                  break _0x4751e5;
                }
                break;
              case 2:
                c.mode = pe;
                break;
              case 3:
                a.msg = "invalid block type";
                c.mode = Ce;
            }
            j >>>= 2;
            k -= 2;
            break;
          case me:
            j >>>= k & 7;
            k -= k & 7;
            while (k < 32) {
              if (h === 0) {
                break _0x4751e5;
              }
              h--;
              j += d[f++] << k;
              k += 8;
            }
            if ((j & 65535) !== (j >>> 16 ^ 65535)) {
              a.msg = "invalid stored block lengths";
              c.mode = Ce;
              break;
            }
            c.length = j & 65535;
            j = 0;
            k = 0;
            c.mode = ne;
            if (b === Sd) {
              break _0x4751e5;
            }
          case ne:
            c.mode = oe;
          case oe:
            n = c.length;
            if (n) {
              if (n > h) {
                n = h;
              }
              if (n > i) {
                n = i;
              }
              if (n === 0) {
                break _0x4751e5;
              }
              e.set(d.subarray(f, f + n), g);
              h -= n;
              f += n;
              i -= n;
              g += n;
              c.length -= n;
              break;
            }
            c.mode = ke;
            break;
          case pe:
            while (k < 14) {
              if (h === 0) {
                break _0x4751e5;
              }
              h--;
              j += d[f++] << k;
              k += 8;
            }
            c.nlen = (j & 31) + 257;
            j >>>= 5;
            k -= 5;
            c.ndist = (j & 31) + 1;
            j >>>= 5;
            k -= 5;
            c.ncode = (j & 15) + 4;
            j >>>= 4;
            k -= 4;
            if (c.nlen > 286 || c.ndist > 30) {
              a.msg = "too many length or distance symbols";
              c.mode = Ce;
              break;
            }
            c.have = 0;
            c.mode = qe;
          case qe:
            while (c.have < c.ncode) {
              while (k < 3) {
                if (h === 0) {
                  break _0x4751e5;
                }
                h--;
                j += d[f++] << k;
                k += 8;
              }
              c.lens[C[c.have++]] = j & 7;
              j >>>= 3;
              k -= 3;
            }
            while (c.have < 19) {
              c.lens[C[c.have++]] = 0;
            }
            c.lencode = c.lendyn;
            c.lenbits = 7;
            var D = {
              bits: c.lenbits
            };
            A = D;
            y = Md(Nd, c.lens, 0, 19, c.lencode, 0, c.work, A);
            c.lenbits = A.bits;
            if (y) {
              a.msg = "invalid code lengths set";
              c.mode = Ce;
              break;
            }
            c.have = 0;
            c.mode = re;
          case re:
            while (c.have < c.nlen + c.ndist) {
              while (true) {
                q = c.lencode[j & (1 << c.lenbits) - 1];
                r = q >>> 24;
                s = q >>> 16 & 255;
                t = q & 65535;
                if (r <= k) {
                  break;
                }
                if (h === 0) {
                  break _0x4751e5;
                }
                h--;
                j += d[f++] << k;
                k += 8;
              }
              if (t < 16) {
                j >>>= r;
                k -= r;
                c.lens[c.have++] = t;
              } else {
                if (t === 16) {
                  B = r + 2;
                  while (k < B) {
                    if (h === 0) {
                      break _0x4751e5;
                    }
                    h--;
                    j += d[f++] << k;
                    k += 8;
                  }
                  j >>>= r;
                  k -= r;
                  if (c.have === 0) {
                    a.msg = "invalid bit length repeat";
                    c.mode = Ce;
                    break;
                  }
                  x = c.lens[c.have - 1];
                  n = 3 + (j & 3);
                  j >>>= 2;
                  k -= 2;
                } else if (t === 17) {
                  B = r + 3;
                  while (k < B) {
                    if (h === 0) {
                      break _0x4751e5;
                    }
                    h--;
                    j += d[f++] << k;
                    k += 8;
                  }
                  j >>>= r;
                  k -= r;
                  x = 0;
                  n = 3 + (j & 7);
                  j >>>= 3;
                  k -= 3;
                } else {
                  B = r + 7;
                  while (k < B) {
                    if (h === 0) {
                      break _0x4751e5;
                    }
                    h--;
                    j += d[f++] << k;
                    k += 8;
                  }
                  j >>>= r;
                  k -= r;
                  x = 0;
                  n = 11 + (j & 127);
                  j >>>= 7;
                  k -= 7;
                }
                if (c.have + n > c.nlen + c.ndist) {
                  a.msg = "invalid bit length repeat";
                  c.mode = Ce;
                  break;
                }
                while (n--) {
                  c.lens[c.have++] = x;
                }
              }
            }
            if (c.mode === Ce) {
              break;
            }
            if (c.lens[256] === 0) {
              a.msg = "invalid code -- missing end-of-block";
              c.mode = Ce;
              break;
            }
            c.lenbits = 9;
            var E = {
              bits: c.lenbits
            };
            A = E;
            y = Md(Od, c.lens, 0, c.nlen, c.lencode, 0, c.work, A);
            c.lenbits = A.bits;
            if (y) {
              a.msg = "invalid literal/lengths set";
              c.mode = Ce;
              break;
            }
            c.distbits = 6;
            c.distcode = c.distdyn;
            var F = {
              bits: c.distbits
            };
            A = F;
            y = Md(Pd, c.lens, c.nlen, c.ndist, c.distcode, 0, c.work, A);
            c.distbits = A.bits;
            if (y) {
              a.msg = "invalid distances set";
              c.mode = Ce;
              break;
            }
            c.mode = se;
            if (b === Sd) {
              break _0x4751e5;
            }
          case se:
            c.mode = te;
          case te:
            if (h >= 6 && i >= 258) {
              a.next_out = g;
              a.avail_out = i;
              a.next_in = f;
              a.avail_in = h;
              c.hold = j;
              c.bits = k;
              Ad(a, m);
              g = a.next_out;
              e = a.output;
              i = a.avail_out;
              f = a.next_in;
              d = a.input;
              h = a.avail_in;
              j = c.hold;
              k = c.bits;
              if (c.mode === ke) {
                c.back = -1;
              }
              break;
            }
            c.back = 0;
            while (true) {
              q = c.lencode[j & (1 << c.lenbits) - 1];
              r = q >>> 24;
              s = q >>> 16 & 255;
              t = q & 65535;
              if (r <= k) {
                break;
              }
              if (h === 0) {
                break _0x4751e5;
              }
              h--;
              j += d[f++] << k;
              k += 8;
            }
            if (s && (s & 240) === 0) {
              u = r;
              v = s;
              w = t;
              while (true) {
                q = c.lencode[w + ((j & (1 << u + v) - 1) >> u)];
                r = q >>> 24;
                s = q >>> 16 & 255;
                t = q & 65535;
                if (u + r <= k) {
                  break;
                }
                if (h === 0) {
                  break _0x4751e5;
                }
                h--;
                j += d[f++] << k;
                k += 8;
              }
              j >>>= u;
              k -= u;
              c.back += u;
            }
            j >>>= r;
            k -= r;
            c.back += r;
            c.length = t;
            if (s === 0) {
              c.mode = ye;
              break;
            }
            if (s & 32) {
              c.back = -1;
              c.mode = ke;
              break;
            }
            if (s & 64) {
              a.msg = "invalid literal/length code";
              c.mode = Ce;
              break;
            }
            c.extra = s & 15;
            c.mode = ue;
          case ue:
            if (c.extra) {
              B = c.extra;
              while (k < B) {
                if (h === 0) {
                  break _0x4751e5;
                }
                h--;
                j += d[f++] << k;
                k += 8;
              }
              c.length += j & (1 << c.extra) - 1;
              j >>>= c.extra;
              k -= c.extra;
              c.back += c.extra;
            }
            c.was = c.length;
            c.mode = ve;
          case ve:
            while (true) {
              q = c.distcode[j & (1 << c.distbits) - 1];
              r = q >>> 24;
              s = q >>> 16 & 255;
              t = q & 65535;
              if (r <= k) {
                break;
              }
              if (h === 0) {
                break _0x4751e5;
              }
              h--;
              j += d[f++] << k;
              k += 8;
            }
            if ((s & 240) === 0) {
              u = r;
              v = s;
              w = t;
              while (true) {
                q = c.distcode[w + ((j & (1 << u + v) - 1) >> u)];
                r = q >>> 24;
                s = q >>> 16 & 255;
                t = q & 65535;
                if (u + r <= k) {
                  break;
                }
                if (h === 0) {
                  break _0x4751e5;
                }
                h--;
                j += d[f++] << k;
                k += 8;
              }
              j >>>= u;
              k -= u;
              c.back += u;
            }
            j >>>= r;
            k -= r;
            c.back += r;
            if (s & 64) {
              a.msg = "invalid distance code";
              c.mode = Ce;
              break;
            }
            c.offset = t;
            c.extra = s & 15;
            c.mode = we;
          case we:
            if (c.extra) {
              B = c.extra;
              while (k < B) {
                if (h === 0) {
                  break _0x4751e5;
                }
                h--;
                j += d[f++] << k;
                k += 8;
              }
              c.offset += j & (1 << c.extra) - 1;
              j >>>= c.extra;
              k -= c.extra;
              c.back += c.extra;
            }
            if (c.offset > c.dmax) {
              a.msg = "invalid distance too far back";
              c.mode = Ce;
              break;
            }
            c.mode = xe;
          case xe:
            if (i === 0) {
              break _0x4751e5;
            }
            n = m - i;
            if (c.offset > n) {
              n = c.offset - n;
              if (n > c.whave) {
                if (c.sane) {
                  a.msg = "invalid distance too far back";
                  c.mode = Ce;
                  break;
                }
              }
              if (n > c.wnext) {
                n -= c.wnext;
                o = c.wsize - n;
              } else {
                o = c.wnext - n;
              }
              if (n > c.length) {
                n = c.length;
              }
              p = c.window;
            } else {
              p = e;
              o = g - c.offset;
              n = c.length;
            }
            if (n > i) {
              n = i;
            }
            i -= n;
            c.length -= n;
            do {
              e[g++] = p[o++];
            } while (--n);
            if (c.length === 0) {
              c.mode = te;
            }
            break;
          case ye:
            if (i === 0) {
              break _0x4751e5;
            }
            e[g++] = c.length;
            i--;
            c.mode = te;
            break;
          case ze:
            if (c.wrap) {
              while (k < 32) {
                if (h === 0) {
                  break _0x4751e5;
                }
                h--;
                j |= d[f++] << k;
                k += 8;
              }
              m -= i;
              a.total_out += m;
              c.total += m;
              if (c.wrap & 4 && m) {
                a.adler = c.check = c.flags ? ab(c.check, e, m, g - m) : Ya(c.check, e, m, g - m);
              }
              m = i;
              if (c.wrap & 4 && (c.flags ? j : Je(j)) !== c.check) {
                a.msg = "incorrect data check";
                c.mode = Ce;
                break;
              }
              j = 0;
              k = 0;
            }
            c.mode = Ae;
          case Ae:
            if (c.wrap && c.flags) {
              while (k < 32) {
                if (h === 0) {
                  break _0x4751e5;
                }
                h--;
                j += d[f++] << k;
                k += 8;
              }
              if (c.wrap & 4 && j !== (c.total & 4294967295)) {
                a.msg = "incorrect length check";
                c.mode = Ce;
                break;
              }
              j = 0;
              k = 0;
            }
            c.mode = Be;
          case Be:
            y = Ud;
            break _0x4751e5;
          case Ce:
            y = Xd;
            break _0x4751e5;
          case De:
            return Yd;
          case Ee:
          default:
            return Wd;
        }
      }
      a.next_out = g;
      a.avail_out = i;
      a.next_in = f;
      a.avail_in = h;
      c.hold = j;
      c.bits = k;
      if (c.wsize || m !== a.avail_out && c.mode < Ce && (c.mode < ze || b !== Qd)) {
        if (Ve(a, a.output, a.next_out, m - a.avail_out)) ;
      }
      l -= a.avail_in;
      m -= a.avail_out;
      a.total_in += l;
      a.total_out += m;
      c.total += m;
      if (c.wrap & 4 && m) {
        a.adler = c.check = c.flags ? ab(c.check, e, m, a.next_out - m) : Ya(c.check, e, m, a.next_out - m);
      }
      a.data_type = c.bits + (c.last ? 64 : 0) + (c.mode === ke ? 128 : 0) + (c.mode === se || c.mode === ne ? 256 : 0);
      if ((l === 0 && m === 0 || b === Qd) && y === Td) {
        y = Zd;
      }
      return y;
    };
    const Xe = a => {
      if (Le(a)) {
        return Wd;
      }
      let b = a.state;
      b.window &&= null;
      a.state = null;
      return Td;
    };
    const Ye = (a, b) => {
      if (Le(a)) {
        return Wd;
      }
      const c = a.state;
      if ((c.wrap & 2) === 0) {
        return Wd;
      }
      c.head = b;
      b.done = false;
      return Td;
    };
    const Ze = (a, b) => {
      const c = b.length;
      let d;
      let e;
      let f;
      if (Le(a)) {
        return Wd;
      }
      d = a.state;
      if (d.wrap !== 0 && d.mode !== je) {
        return Wd;
      }
      if (d.mode === je) {
        e = 1;
        e = Ya(e, b, c, 0);
        if (e !== d.check) {
          return Xd;
        }
      }
      f = Ve(a, b, c, c);
      if (f) {
        d.mode = De;
        return Yd;
      }
      d.havedict = 1;
      return Td;
    };
    var $e = Ne;
    var _e = Oe;
    var af = Me;
    var bf = Qe;
    var cf = Pe;
    var df = We;
    var ef = Xe;
    var ff = Ye;
    var gf = Ze;
    var hf = "pako inflate (from Nodeca project)";
    var jf = {
      inflateReset: $e,
      inflateReset2: _e,
      inflateResetKeep: af,
      inflateInit: bf,
      inflateInit2: cf,
      inflate: df,
      inflateEnd: ef,
      inflateGetHeader: ff,
      inflateSetDictionary: gf,
      inflateInfo: hf
    };
    var kf = jf;
    function lf() {
      this.text = 0;
      this.time = 0;
      this.xflags = 0;
      this.os = 0;
      this.extra = null;
      this.extra_len = 0;
      this.name = "";
      this.comment = "";
      this.hcrc = 0;
      this.done = false;
    }
    var mf = lf;
    const nf = Object.prototype.toString;
    const {
      Z_NO_FLUSH: of,
      Z_FINISH: pf,
      Z_OK: qf,
      Z_STREAM_END: rf,
      Z_NEED_DICT: sf,
      Z_STREAM_ERROR: tf,
      Z_DATA_ERROR: uf,
      Z_MEM_ERROR: vf
    } = db;
    function wf(a) {
      this.options = Uc.assign({
        chunkSize: 65536,
        windowBits: 15,
        to: ""
      }, a || {});
      const b = this.options;
      if (b.raw && b.windowBits >= 0 && b.windowBits < 16) {
        b.windowBits = -b.windowBits;
        if (b.windowBits === 0) {
          b.windowBits = -15;
        }
      }
      if (b.windowBits >= 0 && b.windowBits < 16 && (!a || !a.windowBits)) {
        b.windowBits += 32;
      }
      if (b.windowBits > 15 && b.windowBits < 48) {
        if ((b.windowBits & 15) === 0) {
          b.windowBits |= 15;
        }
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new cd();
      this.strm.avail_out = 0;
      let c = kf.inflateInit2(this.strm, b.windowBits);
      if (c !== qf) {
        throw new Error(bb[c]);
      }
      this.header = new mf();
      kf.inflateGetHeader(this.strm, this.header);
      if (b.dictionary) {
        if (typeof b.dictionary === "string") {
          b.dictionary = ad.string2buf(b.dictionary);
        } else if (nf.call(b.dictionary) === "[object ArrayBuffer]") {
          b.dictionary = new Uint8Array(b.dictionary);
        }
        if (b.raw) {
          c = kf.inflateSetDictionary(this.strm, b.dictionary);
          if (c !== qf) {
            throw new Error(bb[c]);
          }
        }
      }
    }
    wf.prototype.push = function (a, b) {
      const c = this.strm;
      const d = this.options.chunkSize;
      const e = this.options.dictionary;
      let f;
      let g;
      let h;
      if (this.ended) {
        return false;
      }
      if (b === ~~b) {
        g = b;
      } else {
        g = b === true ? pf : of;
      }
      if (nf.call(a) === "[object ArrayBuffer]") {
        c.input = new Uint8Array(a);
      } else {
        c.input = a;
      }
      c.next_in = 0;
      c.avail_in = c.input.length;
      while (true) {
        if (c.avail_out === 0) {
          c.output = new Uint8Array(d);
          c.next_out = 0;
          c.avail_out = d;
        }
        f = kf.inflate(c, g);
        if (f === sf && e) {
          f = kf.inflateSetDictionary(c, e);
          if (f === qf) {
            f = kf.inflate(c, g);
          } else if (f === uf) {
            f = sf;
          }
        }
        while (c.avail_in > 0 && f === rf && c.state.wrap > 0 && a[c.next_in] !== 0) {
          kf.inflateReset(c);
          f = kf.inflate(c, g);
        }
        switch (f) {
          case tf:
          case uf:
          case sf:
          case vf:
            this.onEnd(f);
            this.ended = true;
            return false;
        }
        h = c.avail_out;
        if (c.next_out) {
          if (c.avail_out === 0 || f === rf) {
            if (this.options.to === "string") {
              let a = ad.utf8border(c.output, c.next_out);
              let b = c.next_out - a;
              let e = ad.buf2string(c.output, a);
              c.next_out = b;
              c.avail_out = d - b;
              if (b) {
                c.output.set(c.output.subarray(a, a + b), 0);
              }
              this.onData(e);
            } else {
              this.onData(c.output.length === c.next_out ? c.output : c.output.subarray(0, c.next_out));
            }
          }
        }
        if (f === qf && h === 0) {
          continue;
        }
        if (f === rf) {
          f = kf.inflateEnd(this.strm);
          this.onEnd(f);
          this.ended = true;
          return true;
        }
        if (c.avail_in === 0) {
          break;
        }
      }
      return true;
    };
    wf.prototype.onData = function (a) {
      this.chunks.push(a);
    };
    wf.prototype.onEnd = function (a) {
      if (a === qf) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = Uc.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = a;
      this.msg = this.strm.msg;
    };
    function xf(a, b) {
      const c = new wf(b);
      c.push(a);
      if (c.err) {
        throw c.msg || bb[c.err];
      }
      return c.result;
    }
    function yf(a, b) {
      b = b || {};
      b.raw = true;
      return xf(a, b);
    }
    var zf = wf;
    var Af = xf;
    var Bf = yf;
    var Cf = xf;
    var Df = db;
    var Ef = {
      Inflate: zf,
      inflate: Af,
      inflateRaw: Bf,
      ungzip: Cf,
      constants: Df
    };
    var Ff = Ef;
    const {
      Deflate: Gf,
      deflate: Hf,
      deflateRaw: If,
      gzip: Jf
    } = xd;
    const {
      Inflate: Kf,
      inflate: Lf,
      inflateRaw: Mf,
      ungzip: Nf
    } = Ff;
    var Of = Gf;
    var Pf = Hf;
    var Qf = If;
    var Rf = Jf;
    var Sf = Kf;
    var Tf = Lf;
    var Uf = Mf;
    var Vf = Nf;
    var Wf = db;
    var Xf = {
      Deflate: Of,
      deflate: Pf,
      deflateRaw: Qf,
      gzip: Rf,
      Inflate: Sf,
      inflate: Tf,
      inflateRaw: Uf,
      ungzip: Vf,
      constants: Wf
    };
    var Yf = Xf;
    var Zf = c(577);
    ;
    var $f;
    (function (a) {
      a.assertEqual = a => a;
      function b(a) {}
      a.assertIs = b;
      function c(a) {
        throw new Error();
      }
      a.assertNever = c;
      a.arrayToEnum = a => {
        const b = {};
        for (const c of a) {
          b[c] = c;
        }
        return b;
      };
      a.getValidEnumValues = b => {
        const c = a.objectKeys(b).filter(a => typeof b[b[a]] !== "number");
        const d = {};
        for (const a of c) {
          d[a] = b[a];
        }
        return a.objectValues(d);
      };
      a.objectValues = b => {
        return a.objectKeys(b).map(function (a) {
          return b[a];
        });
      };
      a.objectKeys = typeof Object.keys === "function" ? a => Object.keys(a) : a => {
        const b = [];
        for (const c in a) {
          if (Object.prototype.hasOwnProperty.call(a, c)) {
            b.push(c);
          }
        }
        return b;
      };
      a.find = (a, b) => {
        for (const c of a) {
          if (b(c)) {
            return c;
          }
        }
        return undefined;
      };
      a.isInteger = typeof Number.isInteger === "function" ? a => Number.isInteger(a) : a => typeof a === "number" && isFinite(a) && Math.floor(a) === a;
      function d(a, b = " | ") {
        return a.map(a => typeof a === "string" ? "'" + a + "'" : a).join(b);
      }
      a.joinValues = d;
      a.jsonStringifyReplacer = (a, b) => {
        if (typeof b === "bigint") {
          return b.toString();
        }
        return b;
      };
    })($f ||= {});
    var _f;
    (function (a) {
      a.mergeShapes = (a, b) => {
        var c = {
          ...a,
          ...b
        };
        return c;
      };
    })(_f ||= {});
    const ag = $f.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
    const bg = a => {
      const b = typeof a;
      switch (b) {
        case "undefined":
          return ag.undefined;
        case "string":
          return ag.string;
        case "number":
          if (isNaN(a)) {
            return ag.nan;
          } else {
            return ag.number;
          }
        case "boolean":
          return ag.boolean;
        case "function":
          return ag.function;
        case "bigint":
          return ag.bigint;
        case "symbol":
          return ag.symbol;
        case "object":
          if (Array.isArray(a)) {
            return ag.array;
          }
          if (a === null) {
            return ag.null;
          }
          if (a.then && typeof a.then === "function" && a.catch && typeof a.catch === "function") {
            return ag.promise;
          }
          if (typeof Map !== "undefined" && a instanceof Map) {
            return ag.map;
          }
          if (typeof Set !== "undefined" && a instanceof Set) {
            return ag.set;
          }
          if (typeof Date !== "undefined" && a instanceof Date) {
            return ag.date;
          }
          return ag.object;
        default:
          return ag.unknown;
      }
    };
    const cg = $f.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    const dg = a => {
      const b = JSON.stringify(a, null, 2);
      return b.replace(/"([^"]+)":/g, "$1:");
    };
    class eg extends Error {
      constructor(a) {
        super();
        this.issues = [];
        this.addIssue = a => {
          this.issues = [...this.issues, a];
        };
        this.addIssues = (a = undefined) => {
          if (a === undefined) a = [];
          this.issues = [...this.issues, ...a];
        };
        const b = new.target.prototype;
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(this, b);
        } else {
          this.__proto__ = b;
        }
        this.name = "ZodError";
        this.issues = a;
      }
      get errors() {
        return this.issues;
      }
      format(a) {
        const b = a || function (a) {
          return a.message;
        };
        const c = {
          _errors: []
        };
        const d = a => {
          for (const e of a.issues) {
            if (e.code === "invalid_union") {
              e.unionErrors.map(d);
            } else if (e.code === "invalid_return_type") {
              d(e.returnTypeError);
            } else if (e.code === "invalid_arguments") {
              d(e.argumentsError);
            } else if (e.path.length === 0) {
              c._errors.push(b(e));
            } else {
              let a = c;
              let d = 0;
              while (d < e.path.length) {
                const c = e.path[d];
                const f = d === e.path.length - 1;
                if (!f) {
                  a[c] = a[c] || {
                    _errors: []
                  };
                } else {
                  a[c] = a[c] || {
                    _errors: []
                  };
                  a[c]._errors.push(b(e));
                }
                a = a[c];
                d++;
              }
            }
          }
        };
        d(this);
        return c;
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, $f.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return this.issues.length === 0;
      }
      flatten(a = undefined) {
        if (a === undefined) a = a => a.message;
        const b = {};
        const c = [];
        for (const d of this.issues) {
          if (d.path.length > 0) {
            b[d.path[0]] = b[d.path[0]] || [];
            b[d.path[0]].push(a(d));
          } else {
            c.push(a(d));
          }
        }
        var d = {
          formErrors: c,
          fieldErrors: b
        };
        return d;
      }
      get formErrors() {
        return this.flatten();
      }
    }
    eg.create = a => {
      const b = new eg(a);
      return b;
    };
    const fg = (a, b) => {
      let c;
      switch (a.code) {
        case cg.invalid_type:
          if (a.received === ag.undefined) {
            c = "Required";
          } else {
            c = "Expected " + a.expected + ", received " + a.received;
          }
          break;
        case cg.invalid_literal:
          c = "Invalid literal value, expected " + JSON.stringify(a.expected, $f.jsonStringifyReplacer);
          break;
        case cg.unrecognized_keys:
          c = "Unrecognized key(s) in object: " + $f.joinValues(a.keys, ", ");
          break;
        case cg.invalid_union:
          c = "Invalid input";
          break;
        case cg.invalid_union_discriminator:
          c = "Invalid discriminator value. Expected " + $f.joinValues(a.options);
          break;
        case cg.invalid_enum_value:
          c = "Invalid enum value. Expected " + $f.joinValues(a.options) + ", received '" + a.received + "'";
          break;
        case cg.invalid_arguments:
          c = "Invalid function arguments";
          break;
        case cg.invalid_return_type:
          c = "Invalid function return type";
          break;
        case cg.invalid_date:
          c = "Invalid date";
          break;
        case cg.invalid_string:
          if (typeof a.validation === "object") {
            if ("includes" in a.validation) {
              c = "Invalid input: must include \"" + a.validation.includes + "\"";
              if (typeof a.validation.position === "number") {
                c = c + " at one or more positions greater than or equal to " + a.validation.position;
              }
            } else if ("startsWith" in a.validation) {
              c = "Invalid input: must start with \"" + a.validation.startsWith + "\"";
            } else if ("endsWith" in a.validation) {
              c = "Invalid input: must end with \"" + a.validation.endsWith + "\"";
            } else {
              $f.assertNever(a.validation);
            }
          } else if (a.validation !== "regex") {
            c = "Invalid " + a.validation;
          } else {
            c = "Invalid";
          }
          break;
        case cg.too_small:
          if (a.type === "array") {
            c = "Array must contain " + (a.exact ? "exactly" : a.inclusive ? "at least" : "more than") + " " + a.minimum + " element(s)";
          } else if (a.type === "string") {
            c = "String must contain " + (a.exact ? "exactly" : a.inclusive ? "at least" : "over") + " " + a.minimum + " character(s)";
          } else if (a.type === "number") {
            c = "Number must be " + (a.exact ? "exactly equal to " : a.inclusive ? "greater than or equal to " : "greater than ") + a.minimum;
          } else if (a.type === "date") {
            c = "Date must be " + (a.exact ? "exactly equal to " : a.inclusive ? "greater than or equal to " : "greater than ") + new Date(Number(a.minimum));
          } else {
            c = "Invalid input";
          }
          break;
        case cg.too_big:
          if (a.type === "array") {
            c = "Array must contain " + (a.exact ? "exactly" : a.inclusive ? "at most" : "less than") + " " + a.maximum + " element(s)";
          } else if (a.type === "string") {
            c = "String must contain " + (a.exact ? "exactly" : a.inclusive ? "at most" : "under") + " " + a.maximum + " character(s)";
          } else if (a.type === "number") {
            c = "Number must be " + (a.exact ? "exactly" : a.inclusive ? "less than or equal to" : "less than") + " " + a.maximum;
          } else if (a.type === "bigint") {
            c = "BigInt must be " + (a.exact ? "exactly" : a.inclusive ? "less than or equal to" : "less than") + " " + a.maximum;
          } else if (a.type === "date") {
            c = "Date must be " + (a.exact ? "exactly" : a.inclusive ? "smaller than or equal to" : "smaller than") + " " + new Date(Number(a.maximum));
          } else {
            c = "Invalid input";
          }
          break;
        case cg.custom:
          c = "Invalid input";
          break;
        case cg.invalid_intersection_types:
          c = "Intersection results could not be merged";
          break;
        case cg.not_multiple_of:
          c = "Number must be a multiple of " + a.multipleOf;
          break;
        case cg.not_finite:
          c = "Number must be finite";
          break;
        default:
          c = b.defaultError;
          $f.assertNever(a);
      }
      var d = {
        message: c
      };
      return d;
    };
    let gg = fg;
    function hg(a) {
      gg = a;
    }
    function ig() {
      return gg;
    }
    const jg = a => {
      const {
        data: b,
        path: c,
        errorMaps: d,
        issueData: e
      } = a;
      const f = [...c, ...(e.path || [])];
      var g = {
        ...e
      };
      g.path = f;
      const h = g;
      let i = "";
      const j = d.filter(a => !!a).slice().reverse();
      for (const c of j) {
        i = c(h, {
          data: b,
          defaultError: i
        }).message;
      }
      var k = {
        ...e
      };
      k.path = f;
      k.message = e.message || i;
      return k;
    };
    const kg = [];
    function lg(a, b) {
      const c = jg({
        issueData: b,
        data: a.data,
        path: a.path,
        errorMaps: [a.common.contextualErrorMap, a.schemaErrorMap, ig(), fg].filter(a => !!a)
      });
      a.common.issues.push(c);
    }
    class mg {
      constructor() {
        this.value = "valid";
      }
      dirty() {
        if (this.value === "valid") {
          this.value = "dirty";
        }
      }
      abort() {
        if (this.value !== "aborted") {
          this.value = "aborted";
        }
      }
      static mergeArray(a, b) {
        const c = [];
        for (const d of b) {
          if (d.status === "aborted") {
            return ng;
          }
          if (d.status === "dirty") {
            a.dirty();
          }
          c.push(d.value);
        }
        var d = {
          status: a.value,
          value: c
        };
        return d;
      }
      static async mergeObjectAsync(a, b) {
        const c = [];
        for (const e of b) {
          var d = {
            key: await e.key,
            value: await e.value
          };
          c.push(d);
        }
        return mg.mergeObjectSync(a, c);
      }
      static mergeObjectSync(a, b) {
        const c = {};
        for (const d of b) {
          const {
            key: b,
            value: e
          } = d;
          if (b.status === "aborted") {
            return ng;
          }
          if (e.status === "aborted") {
            return ng;
          }
          if (b.status === "dirty") {
            a.dirty();
          }
          if (e.status === "dirty") {
            a.dirty();
          }
          if (typeof e.value !== "undefined" || d.alwaysSet) {
            c[b.value] = e.value;
          }
        }
        var d = {
          status: a.value,
          value: c
        };
        return d;
      }
    }
    const ng = Object.freeze({
      status: "aborted"
    });
    const og = a => ({
      status: "dirty",
      value: a
    });
    const pg = a => ({
      status: "valid",
      value: a
    });
    const qg = a => a.status === "aborted";
    const rg = a => a.status === "dirty";
    const sg = a => a.status === "valid";
    const tg = a => typeof Promise !== "undefined" && a instanceof Promise;
    var ug;
    (function (a) {
      a.errToObj = a => typeof a === "string" ? {
        message: a
      } : a || {};
      a.toString = a => typeof a === "string" ? a : a?.message;
    })(ug ||= {});
    class vg {
      constructor(a, b, c, d) {
        this._cachedPath = [];
        this.parent = a;
        this.data = b;
        this._path = c;
        this._key = d;
      }
      get path() {
        if (!this._cachedPath.length) {
          if (this._key instanceof Array) {
            this._cachedPath.push(...this._path, ...this._key);
          } else {
            this._cachedPath.push(...this._path, this._key);
          }
        }
        return this._cachedPath;
      }
    }
    const wg = (a, b) => {
      if (sg(b)) {
        var c = {
          success: true,
          data: b.value
        };
        return c;
      } else {
        if (!a.common.issues.length) {
          throw new Error("Validation failed but no issues detected.");
        }
        return {
          success: false,
          get error() {
            if (this._error) {
              return this._error;
            }
            const b = new eg(a.common.issues);
            this._error = b;
            return this._error;
          }
        };
      }
    };
    function xg(a) {
      if (!a) {
        return {};
      }
      const {
        errorMap: b,
        invalid_type_error: c,
        required_error: d,
        description: e
      } = a;
      if (b && (c || d)) {
        throw new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      }
      if (b) {
        return {
          errorMap: b,
          description: e
        };
      }
      const f = (a, b) => {
        var e = {
          message: b.defaultError
        };
        if (a.code !== "invalid_type") {
          return e;
        }
        if (typeof b.data === "undefined") {
          var f = {
            message: d ?? b.defaultError
          };
          return f;
        }
        var g = {
          message: c ?? b.defaultError
        };
        return g;
      };
      var g = {
        errorMap: f,
        description: e
      };
      return g;
    }
    class yg {
      constructor(a) {
        this.spa = this.safeParseAsync;
        this._def = a;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
      }
      get description() {
        return this._def.description;
      }
      _getType(a) {
        return bg(a.data);
      }
      _getOrReturnCtx(a, b) {
        return b || {
          common: a.parent.common,
          data: a.data,
          parsedType: bg(a.data),
          schemaErrorMap: this._def.errorMap,
          path: a.path,
          parent: a.parent
        };
      }
      _processInputParams(a) {
        return {
          status: new mg(),
          ctx: {
            common: a.parent.common,
            data: a.data,
            parsedType: bg(a.data),
            schemaErrorMap: this._def.errorMap,
            path: a.path,
            parent: a.parent
          }
        };
      }
      _parseSync(a) {
        const b = this._parse(a);
        if (tg(b)) {
          throw new Error("Synchronous parse encountered promise.");
        }
        return b;
      }
      _parseAsync(a) {
        const b = this._parse(a);
        return Promise.resolve(b);
      }
      parse(a, b) {
        const c = this.safeParse(a, b);
        if (c.success) {
          return c.data;
        }
        throw c.error;
      }
      safeParse(a, b) {
        var c = {
          issues: [],
          async: b?.async ?? false,
          contextualErrorMap: b?.errorMap
        };
        const d = {
          common: c,
          path: b?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: a,
          parsedType: bg(a)
        };
        var e = {
          data: a,
          path: d.path,
          parent: d
        };
        const f = this._parseSync(e);
        return wg(d, f);
      }
      async parseAsync(a, b) {
        const c = await this.safeParseAsync(a, b);
        if (c.success) {
          return c.data;
        }
        throw c.error;
      }
      async safeParseAsync(a, b) {
        var c = {
          issues: [],
          contextualErrorMap: b?.errorMap,
          async: true
        };
        const d = {
          common: c,
          path: b?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: a,
          parsedType: bg(a)
        };
        var e = {
          data: a,
          path: d.path,
          parent: d
        };
        const f = this._parse(e);
        const g = await (tg(f) ? f : Promise.resolve(f));
        return wg(d, g);
      }
      refine(a, b) {
        const c = a => {
          if (typeof b === "string" || typeof b === "undefined") {
            var c = {
              message: b
            };
            return c;
          } else if (typeof b === "function") {
            return b(a);
          } else {
            return b;
          }
        };
        return this._refinement((b, d) => {
          const e = a(b);
          const f = () => d.addIssue({
            code: cg.custom,
            ...c(b)
          });
          if (typeof Promise !== "undefined" && e instanceof Promise) {
            return e.then(a => {
              if (!a) {
                f();
                return false;
              } else {
                return true;
              }
            });
          }
          if (!e) {
            f();
            return false;
          } else {
            return true;
          }
        });
      }
      refinement(a, b) {
        return this._refinement((c, d) => {
          if (!a(c)) {
            d.addIssue(typeof b === "function" ? b(c, d) : b);
            return false;
          } else {
            return true;
          }
        });
      }
      _refinement(a) {
        var b = {
          type: "refinement",
          refinement: a
        };
        var c = {
          schema: this,
          typeName: zh.ZodEffects,
          effect: b
        };
        return new nh(c);
      }
      superRefine(a) {
        return this._refinement(a);
      }
      optional() {
        return oh.create(this, this._def);
      }
      nullable() {
        return ph.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return Wg.create(this, this._def);
      }
      promise() {
        return mh.create(this, this._def);
      }
      or(a) {
        return Zg.create([this, a], this._def);
      }
      and(a) {
        return bh.create(this, a, this._def);
      }
      transform(a) {
        var b = {
          type: "transform",
          transform: a
        };
        return new nh({
          ...xg(this._def),
          schema: this,
          typeName: zh.ZodEffects,
          effect: b
        });
      }
      default(a) {
        const b = typeof a === "function" ? a : () => a;
        return new qh({
          ...xg(this._def),
          innerType: this,
          defaultValue: b,
          typeName: zh.ZodDefault
        });
      }
      brand() {
        return new uh({
          typeName: zh.ZodBranded,
          type: this,
          ...xg(this._def)
        });
      }
      catch(a) {
        const b = typeof a === "function" ? a : () => a;
        return new rh({
          ...xg(this._def),
          innerType: this,
          catchValue: b,
          typeName: zh.ZodCatch
        });
      }
      describe(a) {
        const b = this.constructor;
        var c = {
          ...this._def
        };
        c.description = a;
        return new b(c);
      }
      pipe(a) {
        return vh.create(this, a);
      }
      isOptional() {
        return this.safeParse(undefined).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    }
    const zg = /^c[^\s-]{8,}$/i;
    const Ag = /^[a-z][a-z0-9]*$/;
    const Bg = /[0-9A-HJKMNP-TV-Z]{26}/;
    const Cg = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
    const Dg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
    const Eg = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u;
    const Fg = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
    const Gg = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    const Hg = a => {
      if (a.precision) {
        if (a.offset) {
          return new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{" + a.precision + "}(([+-]\\d{2}(:?\\d{2})?)|Z)$");
        } else {
          return new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{" + a.precision + "}Z$");
        }
      } else if (a.precision === 0) {
        if (a.offset) {
          return new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$");
        } else {
          return new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$");
        }
      } else if (a.offset) {
        return new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$");
      } else {
        return new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
      }
    };
    function Ig(a, b) {
      if ((b === "v4" || !b) && Fg.test(a)) {
        return true;
      }
      if ((b === "v6" || !b) && Gg.test(a)) {
        return true;
      }
      return false;
    }
    class Jg extends yg {
      constructor() {
        super(...arguments);
        this._regex = (a, b, c) => this.refinement(b => a.test(b), {
          validation: b,
          code: cg.invalid_string,
          ...ug.errToObj(c)
        });
        this.nonempty = a => this.min(1, ug.errToObj(a));
        this.trim = () => new Jg({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        });
        this.toLowerCase = () => new Jg({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        });
        this.toUpperCase = () => new Jg({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        });
      }
      _parse(a) {
        if (this._def.coerce) {
          a.data = String(a.data);
        }
        const b = this._getType(a);
        if (b !== ag.string) {
          const b = this._getOrReturnCtx(a);
          lg(b, {
            code: cg.invalid_type,
            expected: ag.string,
            received: b.parsedType
          });
          return ng;
        }
        const c = new mg();
        let d = undefined;
        for (const b of this._def.checks) {
          if (b.kind === "min") {
            if (a.data.length < b.value) {
              d = this._getOrReturnCtx(a, d);
              var e = {
                code: cg.too_small,
                minimum: b.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: b.message
              };
              lg(d, e);
              c.dirty();
            }
          } else if (b.kind === "max") {
            if (a.data.length > b.value) {
              d = this._getOrReturnCtx(a, d);
              var f = {
                code: cg.too_big,
                maximum: b.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: b.message
              };
              lg(d, f);
              c.dirty();
            }
          } else if (b.kind === "length") {
            const e = a.data.length > b.value;
            const f = a.data.length < b.value;
            if (e || f) {
              d = this._getOrReturnCtx(a, d);
              if (e) {
                var g = {
                  code: cg.too_big,
                  maximum: b.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: b.message
                };
                lg(d, g);
              } else if (f) {
                var h = {
                  code: cg.too_small,
                  minimum: b.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: b.message
                };
                lg(d, h);
              }
              c.dirty();
            }
          } else if (b.kind === "email") {
            if (!Dg.test(a.data)) {
              d = this._getOrReturnCtx(a, d);
              var i = {
                validation: "email",
                code: cg.invalid_string,
                message: b.message
              };
              lg(d, i);
              c.dirty();
            }
          } else if (b.kind === "emoji") {
            if (!Eg.test(a.data)) {
              d = this._getOrReturnCtx(a, d);
              var j = {
                validation: "emoji",
                code: cg.invalid_string,
                message: b.message
              };
              lg(d, j);
              c.dirty();
            }
          } else if (b.kind === "uuid") {
            if (!Cg.test(a.data)) {
              d = this._getOrReturnCtx(a, d);
              var k = {
                validation: "uuid",
                code: cg.invalid_string,
                message: b.message
              };
              lg(d, k);
              c.dirty();
            }
          } else if (b.kind === "cuid") {
            if (!zg.test(a.data)) {
              d = this._getOrReturnCtx(a, d);
              var l = {
                validation: "cuid",
                code: cg.invalid_string,
                message: b.message
              };
              lg(d, l);
              c.dirty();
            }
          } else if (b.kind === "cuid2") {
            if (!Ag.test(a.data)) {
              d = this._getOrReturnCtx(a, d);
              var m = {
                validation: "cuid2",
                code: cg.invalid_string,
                message: b.message
              };
              lg(d, m);
              c.dirty();
            }
          } else if (b.kind === "ulid") {
            if (!Bg.test(a.data)) {
              d = this._getOrReturnCtx(a, d);
              var n = {
                validation: "ulid",
                code: cg.invalid_string,
                message: b.message
              };
              lg(d, n);
              c.dirty();
            }
          } else if (b.kind === "url") {
            try {
              new URL(a.data);
            } catch (e) {
              d = this._getOrReturnCtx(a, d);
              var o = {
                validation: "url",
                code: cg.invalid_string,
                message: b.message
              };
              lg(d, o);
              c.dirty();
            }
          } else if (b.kind === "regex") {
            b.regex.lastIndex = 0;
            const e = b.regex.test(a.data);
            if (!e) {
              d = this._getOrReturnCtx(a, d);
              var p = {
                validation: "regex",
                code: cg.invalid_string,
                message: b.message
              };
              lg(d, p);
              c.dirty();
            }
          } else if (b.kind === "trim") {
            a.data = a.data.trim();
          } else if (b.kind === "includes") {
            if (!a.data.includes(b.value, b.position)) {
              d = this._getOrReturnCtx(a, d);
              var q = {
                includes: b.value,
                position: b.position
              };
              var r = {
                code: cg.invalid_string,
                validation: q,
                message: b.message
              };
              lg(d, r);
              c.dirty();
            }
          } else if (b.kind === "toLowerCase") {
            a.data = a.data.toLowerCase();
          } else if (b.kind === "toUpperCase") {
            a.data = a.data.toUpperCase();
          } else if (b.kind === "startsWith") {
            if (!a.data.startsWith(b.value)) {
              d = this._getOrReturnCtx(a, d);
              var s = {
                startsWith: b.value
              };
              var t = {
                code: cg.invalid_string,
                validation: s,
                message: b.message
              };
              lg(d, t);
              c.dirty();
            }
          } else if (b.kind === "endsWith") {
            if (!a.data.endsWith(b.value)) {
              d = this._getOrReturnCtx(a, d);
              var u = {
                endsWith: b.value
              };
              var v = {
                code: cg.invalid_string,
                validation: u,
                message: b.message
              };
              lg(d, v);
              c.dirty();
            }
          } else if (b.kind === "datetime") {
            const e = Hg(b);
            if (!e.test(a.data)) {
              d = this._getOrReturnCtx(a, d);
              var w = {
                code: cg.invalid_string,
                validation: "datetime",
                message: b.message
              };
              lg(d, w);
              c.dirty();
            }
          } else if (b.kind === "ip") {
            if (!Ig(a.data, b.version)) {
              d = this._getOrReturnCtx(a, d);
              var x = {
                validation: "ip",
                code: cg.invalid_string,
                message: b.message
              };
              lg(d, x);
              c.dirty();
            }
          } else {
            $f.assertNever(b);
          }
        }
        var y = {
          status: c.value,
          value: a.data
        };
        return y;
      }
      _addCheck(a) {
        var b = {
          ...this._def
        };
        b.checks = [...this._def.checks, a];
        return new Jg(b);
      }
      email(a) {
        return this._addCheck({
          kind: "email",
          ...ug.errToObj(a)
        });
      }
      url(a) {
        return this._addCheck({
          kind: "url",
          ...ug.errToObj(a)
        });
      }
      emoji(a) {
        return this._addCheck({
          kind: "emoji",
          ...ug.errToObj(a)
        });
      }
      uuid(a) {
        return this._addCheck({
          kind: "uuid",
          ...ug.errToObj(a)
        });
      }
      cuid(a) {
        return this._addCheck({
          kind: "cuid",
          ...ug.errToObj(a)
        });
      }
      cuid2(a) {
        return this._addCheck({
          kind: "cuid2",
          ...ug.errToObj(a)
        });
      }
      ulid(a) {
        return this._addCheck({
          kind: "ulid",
          ...ug.errToObj(a)
        });
      }
      ip(a) {
        return this._addCheck({
          kind: "ip",
          ...ug.errToObj(a)
        });
      }
      datetime(a) {
        if (typeof a === "string") {
          var b = {
            kind: "datetime",
            precision: null,
            offset: false,
            message: a
          };
          return this._addCheck(b);
        }
        return this._addCheck({
          kind: "datetime",
          precision: typeof a?.precision === "undefined" ? null : a?.precision,
          offset: a?.offset ?? false,
          ...ug.errToObj(a?.message)
        });
      }
      regex(a, b) {
        return this._addCheck({
          kind: "regex",
          regex: a,
          ...ug.errToObj(b)
        });
      }
      includes(a, b) {
        return this._addCheck({
          kind: "includes",
          value: a,
          position: b?.position,
          ...ug.errToObj(b?.message)
        });
      }
      startsWith(a, b) {
        return this._addCheck({
          kind: "startsWith",
          value: a,
          ...ug.errToObj(b)
        });
      }
      endsWith(a, b) {
        return this._addCheck({
          kind: "endsWith",
          value: a,
          ...ug.errToObj(b)
        });
      }
      min(a, b) {
        return this._addCheck({
          kind: "min",
          value: a,
          ...ug.errToObj(b)
        });
      }
      max(a, b) {
        return this._addCheck({
          kind: "max",
          value: a,
          ...ug.errToObj(b)
        });
      }
      length(a, b) {
        return this._addCheck({
          kind: "length",
          value: a,
          ...ug.errToObj(b)
        });
      }
      get isDatetime() {
        return !!this._def.checks.find(a => a.kind === "datetime");
      }
      get isEmail() {
        return !!this._def.checks.find(a => a.kind === "email");
      }
      get isURL() {
        return !!this._def.checks.find(a => a.kind === "url");
      }
      get isEmoji() {
        return !!this._def.checks.find(a => a.kind === "emoji");
      }
      get isUUID() {
        return !!this._def.checks.find(a => a.kind === "uuid");
      }
      get isCUID() {
        return !!this._def.checks.find(a => a.kind === "cuid");
      }
      get isCUID2() {
        return !!this._def.checks.find(a => a.kind === "cuid2");
      }
      get isULID() {
        return !!this._def.checks.find(a => a.kind === "ulid");
      }
      get isIP() {
        return !!this._def.checks.find(a => a.kind === "ip");
      }
      get minLength() {
        let a = null;
        for (const b of this._def.checks) {
          if (b.kind === "min") {
            if (a === null || b.value > a) {
              a = b.value;
            }
          }
        }
        return a;
      }
      get maxLength() {
        let a = null;
        for (const b of this._def.checks) {
          if (b.kind === "max") {
            if (a === null || b.value < a) {
              a = b.value;
            }
          }
        }
        return a;
      }
    }
    Jg.create = a => {
      return new Jg({
        checks: [],
        typeName: zh.ZodString,
        coerce: a?.coerce ?? false,
        ...xg(a)
      });
    };
    function Kg(a, b) {
      const c = (a.toString().split(".")[1] || "").length;
      const d = (b.toString().split(".")[1] || "").length;
      const e = c > d ? c : d;
      const f = parseInt(a.toFixed(e).replace(".", ""));
      const g = parseInt(b.toFixed(e).replace(".", ""));
      return f % g / Math.pow(10, e);
    }
    class Lg extends yg {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
      }
      _parse(a) {
        if (this._def.coerce) {
          a.data = Number(a.data);
        }
        const b = this._getType(a);
        if (b !== ag.number) {
          const b = this._getOrReturnCtx(a);
          lg(b, {
            code: cg.invalid_type,
            expected: ag.number,
            received: b.parsedType
          });
          return ng;
        }
        let c = undefined;
        const d = new mg();
        for (const b of this._def.checks) {
          if (b.kind === "int") {
            if (!$f.isInteger(a.data)) {
              c = this._getOrReturnCtx(a, c);
              var e = {
                code: cg.invalid_type,
                expected: "integer",
                received: "float",
                message: b.message
              };
              lg(c, e);
              d.dirty();
            }
          } else if (b.kind === "min") {
            const e = b.inclusive ? a.data < b.value : a.data <= b.value;
            if (e) {
              c = this._getOrReturnCtx(a, c);
              var f = {
                code: cg.too_small,
                minimum: b.value,
                type: "number",
                inclusive: b.inclusive,
                exact: false,
                message: b.message
              };
              lg(c, f);
              d.dirty();
            }
          } else if (b.kind === "max") {
            const e = b.inclusive ? a.data > b.value : a.data >= b.value;
            if (e) {
              c = this._getOrReturnCtx(a, c);
              var g = {
                code: cg.too_big,
                maximum: b.value,
                type: "number",
                inclusive: b.inclusive,
                exact: false,
                message: b.message
              };
              lg(c, g);
              d.dirty();
            }
          } else if (b.kind === "multipleOf") {
            if (Kg(a.data, b.value) !== 0) {
              c = this._getOrReturnCtx(a, c);
              var h = {
                code: cg.not_multiple_of,
                multipleOf: b.value,
                message: b.message
              };
              lg(c, h);
              d.dirty();
            }
          } else if (b.kind === "finite") {
            if (!Number.isFinite(a.data)) {
              c = this._getOrReturnCtx(a, c);
              var i = {
                code: cg.not_finite,
                message: b.message
              };
              lg(c, i);
              d.dirty();
            }
          } else {
            $f.assertNever(b);
          }
        }
        var j = {
          status: d.value,
          value: a.data
        };
        return j;
      }
      gte(a, b) {
        return this.setLimit("min", a, true, ug.toString(b));
      }
      gt(a, b) {
        return this.setLimit("min", a, false, ug.toString(b));
      }
      lte(a, b) {
        return this.setLimit("max", a, true, ug.toString(b));
      }
      lt(a, b) {
        return this.setLimit("max", a, false, ug.toString(b));
      }
      setLimit(a, b, c, d) {
        return new Lg({
          ...this._def,
          checks: [...this._def.checks, {
            kind: a,
            value: b,
            inclusive: c,
            message: ug.toString(d)
          }]
        });
      }
      _addCheck(a) {
        var b = {
          ...this._def
        };
        b.checks = [...this._def.checks, a];
        return new Lg(b);
      }
      int(a) {
        return this._addCheck({
          kind: "int",
          message: ug.toString(a)
        });
      }
      positive(a) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: false,
          message: ug.toString(a)
        });
      }
      negative(a) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: false,
          message: ug.toString(a)
        });
      }
      nonpositive(a) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: true,
          message: ug.toString(a)
        });
      }
      nonnegative(a) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: true,
          message: ug.toString(a)
        });
      }
      multipleOf(a, b) {
        return this._addCheck({
          kind: "multipleOf",
          value: a,
          message: ug.toString(b)
        });
      }
      finite(a) {
        return this._addCheck({
          kind: "finite",
          message: ug.toString(a)
        });
      }
      safe(a) {
        return this._addCheck({
          kind: "min",
          inclusive: true,
          value: Number.MIN_SAFE_INTEGER,
          message: ug.toString(a)
        })._addCheck({
          kind: "max",
          inclusive: true,
          value: Number.MAX_SAFE_INTEGER,
          message: ug.toString(a)
        });
      }
      get minValue() {
        let a = null;
        for (const b of this._def.checks) {
          if (b.kind === "min") {
            if (a === null || b.value > a) {
              a = b.value;
            }
          }
        }
        return a;
      }
      get maxValue() {
        let a = null;
        for (const b of this._def.checks) {
          if (b.kind === "max") {
            if (a === null || b.value < a) {
              a = b.value;
            }
          }
        }
        return a;
      }
      get isInt() {
        return !!this._def.checks.find(a => a.kind === "int" || a.kind === "multipleOf" && $f.isInteger(a.value));
      }
      get isFinite() {
        let a = null;
        let b = null;
        for (const c of this._def.checks) {
          if (c.kind === "finite" || c.kind === "int" || c.kind === "multipleOf") {
            return true;
          } else if (c.kind === "min") {
            if (b === null || c.value > b) {
              b = c.value;
            }
          } else if (c.kind === "max") {
            if (a === null || c.value < a) {
              a = c.value;
            }
          }
        }
        return Number.isFinite(b) && Number.isFinite(a);
      }
    }
    Lg.create = a => {
      return new Lg({
        checks: [],
        typeName: zh.ZodNumber,
        coerce: a?.coerce || false,
        ...xg(a)
      });
    };
    class Mg extends yg {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
      }
      _parse(a) {
        if (this._def.coerce) {
          a.data = BigInt(a.data);
        }
        const b = this._getType(a);
        if (b !== ag.bigint) {
          const b = this._getOrReturnCtx(a);
          lg(b, {
            code: cg.invalid_type,
            expected: ag.bigint,
            received: b.parsedType
          });
          return ng;
        }
        let c = undefined;
        const d = new mg();
        for (const b of this._def.checks) {
          if (b.kind === "min") {
            const f = b.inclusive ? a.data < b.value : a.data <= b.value;
            if (f) {
              c = this._getOrReturnCtx(a, c);
              var e = {
                code: cg.too_small,
                type: "bigint",
                minimum: b.value,
                inclusive: b.inclusive,
                message: b.message
              };
              lg(c, e);
              d.dirty();
            }
          } else if (b.kind === "max") {
            const e = b.inclusive ? a.data > b.value : a.data >= b.value;
            if (e) {
              c = this._getOrReturnCtx(a, c);
              var f = {
                code: cg.too_big,
                type: "bigint",
                maximum: b.value,
                inclusive: b.inclusive,
                message: b.message
              };
              lg(c, f);
              d.dirty();
            }
          } else if (b.kind === "multipleOf") {
            if (a.data % b.value !== BigInt(0)) {
              c = this._getOrReturnCtx(a, c);
              var g = {
                code: cg.not_multiple_of,
                multipleOf: b.value,
                message: b.message
              };
              lg(c, g);
              d.dirty();
            }
          } else {
            $f.assertNever(b);
          }
        }
        var h = {
          status: d.value,
          value: a.data
        };
        return h;
      }
      gte(a, b) {
        return this.setLimit("min", a, true, ug.toString(b));
      }
      gt(a, b) {
        return this.setLimit("min", a, false, ug.toString(b));
      }
      lte(a, b) {
        return this.setLimit("max", a, true, ug.toString(b));
      }
      lt(a, b) {
        return this.setLimit("max", a, false, ug.toString(b));
      }
      setLimit(a, b, c, d) {
        return new Mg({
          ...this._def,
          checks: [...this._def.checks, {
            kind: a,
            value: b,
            inclusive: c,
            message: ug.toString(d)
          }]
        });
      }
      _addCheck(a) {
        var b = {
          ...this._def
        };
        b.checks = [...this._def.checks, a];
        return new Mg(b);
      }
      positive(a) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: false,
          message: ug.toString(a)
        });
      }
      negative(a) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: false,
          message: ug.toString(a)
        });
      }
      nonpositive(a) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: true,
          message: ug.toString(a)
        });
      }
      nonnegative(a) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: true,
          message: ug.toString(a)
        });
      }
      multipleOf(a, b) {
        return this._addCheck({
          kind: "multipleOf",
          value: a,
          message: ug.toString(b)
        });
      }
      get minValue() {
        let a = null;
        for (const b of this._def.checks) {
          if (b.kind === "min") {
            if (a === null || b.value > a) {
              a = b.value;
            }
          }
        }
        return a;
      }
      get maxValue() {
        let a = null;
        for (const b of this._def.checks) {
          if (b.kind === "max") {
            if (a === null || b.value < a) {
              a = b.value;
            }
          }
        }
        return a;
      }
    }
    Mg.create = a => {
      return new Mg({
        checks: [],
        typeName: zh.ZodBigInt,
        coerce: a?.coerce ?? false,
        ...xg(a)
      });
    };
    class Ng extends yg {
      _parse(a) {
        if (this._def.coerce) {
          a.data = Boolean(a.data);
        }
        const b = this._getType(a);
        if (b !== ag.boolean) {
          const b = this._getOrReturnCtx(a);
          lg(b, {
            code: cg.invalid_type,
            expected: ag.boolean,
            received: b.parsedType
          });
          return ng;
        }
        return pg(a.data);
      }
    }
    Ng.create = a => {
      return new Ng({
        typeName: zh.ZodBoolean,
        coerce: a?.coerce || false,
        ...xg(a)
      });
    };
    class Og extends yg {
      _parse(a) {
        if (this._def.coerce) {
          a.data = new Date(a.data);
        }
        const b = this._getType(a);
        if (b !== ag.date) {
          const b = this._getOrReturnCtx(a);
          lg(b, {
            code: cg.invalid_type,
            expected: ag.date,
            received: b.parsedType
          });
          return ng;
        }
        if (isNaN(a.data.getTime())) {
          const b = this._getOrReturnCtx(a);
          var c = {
            code: cg.invalid_date
          };
          lg(b, c);
          return ng;
        }
        const d = new mg();
        let e = undefined;
        for (const b of this._def.checks) {
          if (b.kind === "min") {
            if (a.data.getTime() < b.value) {
              e = this._getOrReturnCtx(a, e);
              var f = {
                code: cg.too_small,
                message: b.message,
                inclusive: true,
                exact: false,
                minimum: b.value,
                type: "date"
              };
              lg(e, f);
              d.dirty();
            }
          } else if (b.kind === "max") {
            if (a.data.getTime() > b.value) {
              e = this._getOrReturnCtx(a, e);
              var g = {
                code: cg.too_big,
                message: b.message,
                inclusive: true,
                exact: false,
                maximum: b.value,
                type: "date"
              };
              lg(e, g);
              d.dirty();
            }
          } else {
            $f.assertNever(b);
          }
        }
        return {
          status: d.value,
          value: new Date(a.data.getTime())
        };
      }
      _addCheck(a) {
        var b = {
          ...this._def
        };
        b.checks = [...this._def.checks, a];
        return new Og(b);
      }
      min(a, b) {
        return this._addCheck({
          kind: "min",
          value: a.getTime(),
          message: ug.toString(b)
        });
      }
      max(a, b) {
        return this._addCheck({
          kind: "max",
          value: a.getTime(),
          message: ug.toString(b)
        });
      }
      get minDate() {
        let a = null;
        for (const b of this._def.checks) {
          if (b.kind === "min") {
            if (a === null || b.value > a) {
              a = b.value;
            }
          }
        }
        if (a != null) {
          return new Date(a);
        } else {
          return null;
        }
      }
      get maxDate() {
        let a = null;
        for (const b of this._def.checks) {
          if (b.kind === "max") {
            if (a === null || b.value < a) {
              a = b.value;
            }
          }
        }
        if (a != null) {
          return new Date(a);
        } else {
          return null;
        }
      }
    }
    Og.create = a => {
      return new Og({
        checks: [],
        coerce: a?.coerce || false,
        typeName: zh.ZodDate,
        ...xg(a)
      });
    };
    class Pg extends yg {
      _parse(a) {
        const b = this._getType(a);
        if (b !== ag.symbol) {
          const b = this._getOrReturnCtx(a);
          lg(b, {
            code: cg.invalid_type,
            expected: ag.symbol,
            received: b.parsedType
          });
          return ng;
        }
        return pg(a.data);
      }
    }
    Pg.create = a => {
      return new Pg({
        typeName: zh.ZodSymbol,
        ...xg(a)
      });
    };
    class Qg extends yg {
      _parse(a) {
        const b = this._getType(a);
        if (b !== ag.undefined) {
          const b = this._getOrReturnCtx(a);
          lg(b, {
            code: cg.invalid_type,
            expected: ag.undefined,
            received: b.parsedType
          });
          return ng;
        }
        return pg(a.data);
      }
    }
    Qg.create = a => {
      return new Qg({
        typeName: zh.ZodUndefined,
        ...xg(a)
      });
    };
    class Rg extends yg {
      _parse(a) {
        const b = this._getType(a);
        if (b !== ag.null) {
          const b = this._getOrReturnCtx(a);
          lg(b, {
            code: cg.invalid_type,
            expected: ag.null,
            received: b.parsedType
          });
          return ng;
        }
        return pg(a.data);
      }
    }
    Rg.create = a => {
      return new Rg({
        typeName: zh.ZodNull,
        ...xg(a)
      });
    };
    class Sg extends yg {
      constructor() {
        super(...arguments);
        this._any = true;
      }
      _parse(a) {
        return pg(a.data);
      }
    }
    Sg.create = a => {
      return new Sg({
        typeName: zh.ZodAny,
        ...xg(a)
      });
    };
    class Tg extends yg {
      constructor() {
        super(...arguments);
        this._unknown = true;
      }
      _parse(a) {
        return pg(a.data);
      }
    }
    Tg.create = a => {
      return new Tg({
        typeName: zh.ZodUnknown,
        ...xg(a)
      });
    };
    class Ug extends yg {
      _parse(a) {
        const b = this._getOrReturnCtx(a);
        lg(b, {
          code: cg.invalid_type,
          expected: ag.never,
          received: b.parsedType
        });
        return ng;
      }
    }
    Ug.create = a => {
      return new Ug({
        typeName: zh.ZodNever,
        ...xg(a)
      });
    };
    class Vg extends yg {
      _parse(a) {
        const b = this._getType(a);
        if (b !== ag.undefined) {
          const b = this._getOrReturnCtx(a);
          lg(b, {
            code: cg.invalid_type,
            expected: ag.void,
            received: b.parsedType
          });
          return ng;
        }
        return pg(a.data);
      }
    }
    Vg.create = a => {
      return new Vg({
        typeName: zh.ZodVoid,
        ...xg(a)
      });
    };
    class Wg extends yg {
      _parse(a) {
        const {
          ctx: b,
          status: c
        } = this._processInputParams(a);
        const d = this._def;
        if (b.parsedType !== ag.array) {
          lg(b, {
            code: cg.invalid_type,
            expected: ag.array,
            received: b.parsedType
          });
          return ng;
        }
        if (d.exactLength !== null) {
          const a = b.data.length > d.exactLength.value;
          const f = b.data.length < d.exactLength.value;
          if (a || f) {
            var e = {
              code: a ? cg.too_big : cg.too_small,
              minimum: f ? d.exactLength.value : undefined,
              maximum: a ? d.exactLength.value : undefined,
              type: "array",
              inclusive: true,
              exact: true,
              message: d.exactLength.message
            };
            lg(b, e);
            c.dirty();
          }
        }
        if (d.minLength !== null) {
          if (b.data.length < d.minLength.value) {
            var f = {
              code: cg.too_small,
              minimum: d.minLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: d.minLength.message
            };
            lg(b, f);
            c.dirty();
          }
        }
        if (d.maxLength !== null) {
          if (b.data.length > d.maxLength.value) {
            var g = {
              code: cg.too_big,
              maximum: d.maxLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: d.maxLength.message
            };
            lg(b, g);
            c.dirty();
          }
        }
        if (b.common.async) {
          return Promise.all([...b.data].map((a, c) => {
            return d.type._parseAsync(new vg(b, a, b.path, c));
          })).then(a => {
            return mg.mergeArray(c, a);
          });
        }
        const h = [...b.data].map((a, c) => {
          return d.type._parseSync(new vg(b, a, b.path, c));
        });
        return mg.mergeArray(c, h);
      }
      get element() {
        return this._def.type;
      }
      min(a, b) {
        return new Wg({
          ...this._def,
          minLength: {
            value: a,
            message: ug.toString(b)
          }
        });
      }
      max(a, b) {
        return new Wg({
          ...this._def,
          maxLength: {
            value: a,
            message: ug.toString(b)
          }
        });
      }
      length(a, b) {
        return new Wg({
          ...this._def,
          exactLength: {
            value: a,
            message: ug.toString(b)
          }
        });
      }
      nonempty(a) {
        return this.min(1, a);
      }
    }
    Wg.create = (a, b) => {
      return new Wg({
        type: a,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: zh.ZodArray,
        ...xg(b)
      });
    };
    function Xg(a) {
      if (a instanceof Yg) {
        const c = {};
        for (const b in a.shape) {
          const d = a.shape[b];
          c[b] = oh.create(Xg(d));
        }
        var b = {
          ...a._def
        };
        b.shape = () => c;
        return new Yg(b);
      } else if (a instanceof Wg) {
        return new Wg({
          ...a._def,
          type: Xg(a.element)
        });
      } else if (a instanceof oh) {
        return oh.create(Xg(a.unwrap()));
      } else if (a instanceof ph) {
        return ph.create(Xg(a.unwrap()));
      } else if (a instanceof ch) {
        return ch.create(a.items.map(a => Xg(a)));
      } else {
        return a;
      }
    }
    class Yg extends yg {
      constructor() {
        super(...arguments);
        this._cached = null;
        this.nonstrict = this.passthrough;
        this.augment = this.extend;
      }
      _getCached() {
        if (this._cached !== null) {
          return this._cached;
        }
        const a = this._def.shape();
        const b = $f.objectKeys(a);
        var c = {
          shape: a,
          keys: b
        };
        return this._cached = c;
      }
      _parse(a) {
        const b = this._getType(a);
        if (b !== ag.object) {
          const b = this._getOrReturnCtx(a);
          lg(b, {
            code: cg.invalid_type,
            expected: ag.object,
            received: b.parsedType
          });
          return ng;
        }
        const {
          status: c,
          ctx: d
        } = this._processInputParams(a);
        const {
          shape: e,
          keys: f
        } = this._getCached();
        const g = [];
        if (!(this._def.catchall instanceof Ug) || this._def.unknownKeys !== "strip") {
          for (const a in d.data) {
            if (!f.includes(a)) {
              g.push(a);
            }
          }
        }
        const h = [];
        for (const b of f) {
          const a = e[b];
          const c = d.data[b];
          var i = {
            status: "valid",
            value: b
          };
          h.push({
            key: i,
            value: a._parse(new vg(d, c, d.path, b)),
            alwaysSet: b in d.data
          });
        }
        if (this._def.catchall instanceof Ug) {
          const a = this._def.unknownKeys;
          if (a === "passthrough") {
            for (const a of g) {
              var j = {
                status: "valid",
                value: a
              };
              var k = {
                status: "valid",
                value: d.data[a]
              };
              var l = {
                key: j,
                value: k
              };
              h.push(l);
            }
          } else if (a === "strict") {
            if (g.length > 0) {
              var m = {
                code: cg.unrecognized_keys,
                keys: g
              };
              lg(d, m);
              c.dirty();
            }
          } else if (a === "strip") ;else {
            throw new Error("Internal ZodObject error: invalid unknownKeys value.");
          }
        } else {
          const a = this._def.catchall;
          for (const b of g) {
            const c = d.data[b];
            var n = {
              status: "valid",
              value: b
            };
            h.push({
              key: n,
              value: a._parse(new vg(d, c, d.path, b)),
              alwaysSet: b in d.data
            });
          }
        }
        if (d.common.async) {
          return Promise.resolve().then(async () => {
            const a = [];
            for (const c of h) {
              const d = await c.key;
              var b = {
                key: d,
                value: await c.value,
                alwaysSet: c.alwaysSet
              };
              a.push(b);
            }
            return a;
          }).then(a => {
            return mg.mergeObjectSync(c, a);
          });
        } else {
          return mg.mergeObjectSync(c, h);
        }
      }
      get shape() {
        return this._def.shape();
      }
      strict(a) {
        ug.errToObj;
        return new Yg({
          ...this._def,
          unknownKeys: "strict",
          ...(a !== undefined ? {
            errorMap: (b, c) => {
              var d;
              var e;
              const f = ((e = (d = this._def).errorMap) === null || e === undefined ? undefined : e.call(d, b, c).message) ?? c.defaultError;
              if (b.code === "unrecognized_keys") {
                return {
                  message: ug.errToObj(a).message ?? f
                };
              }
              var g = {
                message: f
              };
              return g;
            }
          } : {})
        });
      }
      strip() {
        var a = {
          ...this._def
        };
        a.unknownKeys = "strip";
        return new Yg(a);
      }
      passthrough() {
        var a = {
          ...this._def
        };
        a.unknownKeys = "passthrough";
        return new Yg(a);
      }
      extend(a) {
        return new Yg({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...a
          })
        });
      }
      merge(a) {
        const b = new Yg({
          unknownKeys: a._def.unknownKeys,
          catchall: a._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...a._def.shape()
          }),
          typeName: zh.ZodObject
        });
        return b;
      }
      setKey(a, b) {
        var c = {
          [a]: b
        };
        return this.augment(c);
      }
      catchall(a) {
        var b = {
          ...this._def
        };
        b.catchall = a;
        return new Yg(b);
      }
      pick(a) {
        const b = {};
        $f.objectKeys(a).forEach(c => {
          if (a[c] && this.shape[c]) {
            b[c] = this.shape[c];
          }
        });
        var c = {
          ...this._def
        };
        c.shape = () => b;
        return new Yg(c);
      }
      omit(a) {
        const b = {};
        $f.objectKeys(this.shape).forEach(c => {
          if (!a[c]) {
            b[c] = this.shape[c];
          }
        });
        var c = {
          ...this._def
        };
        c.shape = () => b;
        return new Yg(c);
      }
      deepPartial() {
        return Xg(this);
      }
      partial(a) {
        const b = {};
        $f.objectKeys(this.shape).forEach(c => {
          const d = this.shape[c];
          if (a && !a[c]) {
            b[c] = d;
          } else {
            b[c] = d.optional();
          }
        });
        var c = {
          ...this._def
        };
        c.shape = () => b;
        return new Yg(c);
      }
      required(a) {
        const b = {};
        $f.objectKeys(this.shape).forEach(c => {
          if (a && !a[c]) {
            b[c] = this.shape[c];
          } else {
            const a = this.shape[c];
            let d = a;
            while (d instanceof oh) {
              d = d._def.innerType;
            }
            b[c] = d;
          }
        });
        var c = {
          ...this._def
        };
        c.shape = () => b;
        return new Yg(c);
      }
      keyof() {
        return jh($f.objectKeys(this.shape));
      }
    }
    Yg.create = (a, b) => {
      return new Yg({
        shape: () => a,
        unknownKeys: "strip",
        catchall: Ug.create(),
        typeName: zh.ZodObject,
        ...xg(b)
      });
    };
    Yg.strictCreate = (a, b) => {
      return new Yg({
        shape: () => a,
        unknownKeys: "strict",
        catchall: Ug.create(),
        typeName: zh.ZodObject,
        ...xg(b)
      });
    };
    Yg.lazycreate = (a, b) => {
      return new Yg({
        shape: a,
        unknownKeys: "strip",
        catchall: Ug.create(),
        typeName: zh.ZodObject,
        ...xg(b)
      });
    };
    class Zg extends yg {
      _parse(a) {
        const {
          ctx: b
        } = this._processInputParams(a);
        const c = this._def.options;
        function d(a) {
          for (const b of a) {
            if (b.result.status === "valid") {
              return b.result;
            }
          }
          for (const c of a) {
            if (c.result.status === "dirty") {
              b.common.issues.push(...c.ctx.common.issues);
              return c.result;
            }
          }
          const c = a.map(a => new eg(a.ctx.common.issues));
          var d = {
            code: cg.invalid_union,
            unionErrors: c
          };
          lg(b, d);
          return ng;
        }
        if (b.common.async) {
          return Promise.all(c.map(async a => {
            var c = {
              ...b
            };
            c.common = {
              ...b.common
            };
            c.parent = null;
            c.common.issues = [];
            const d = c;
            var e = {
              data: b.data,
              path: b.path,
              parent: d
            };
            return {
              result: await a._parseAsync(e),
              ctx: d
            };
          })).then(d);
        } else {
          let a = undefined;
          const d = [];
          for (const h of c) {
            var e = {
              ...b
            };
            e.common = {
              ...b.common
            };
            e.parent = null;
            e.common.issues = [];
            const c = e;
            var f = {
              data: b.data,
              path: b.path,
              parent: c
            };
            const i = h._parseSync(f);
            if (i.status === "valid") {
              return i;
            } else if (i.status === "dirty" && !a) {
              var g = {
                result: i,
                ctx: c
              };
              a = g;
            }
            if (c.common.issues.length) {
              d.push(c.common.issues);
            }
          }
          if (a) {
            b.common.issues.push(...a.ctx.common.issues);
            return a.result;
          }
          const i = d.map(a => new eg(a));
          var h = {
            code: cg.invalid_union,
            unionErrors: i
          };
          lg(b, h);
          return ng;
        }
      }
      get options() {
        return this._def.options;
      }
    }
    Zg.create = (a, b) => {
      return new Zg({
        options: a,
        typeName: zh.ZodUnion,
        ...xg(b)
      });
    };
    const $g = a => {
      if (a instanceof hh) {
        return $g(a.schema);
      } else if (a instanceof nh) {
        return $g(a.innerType());
      } else if (a instanceof ih) {
        return [a.value];
      } else if (a instanceof kh) {
        return a.options;
      } else if (a instanceof lh) {
        return Object.keys(a.enum);
      } else if (a instanceof qh) {
        return $g(a._def.innerType);
      } else if (a instanceof Qg) {
        return [undefined];
      } else if (a instanceof Rg) {
        return [null];
      } else {
        return null;
      }
    };
    class _g extends yg {
      _parse(a) {
        const {
          ctx: b
        } = this._processInputParams(a);
        if (b.parsedType !== ag.object) {
          lg(b, {
            code: cg.invalid_type,
            expected: ag.object,
            received: b.parsedType
          });
          return ng;
        }
        const c = this.discriminator;
        const d = b.data[c];
        const e = this.optionsMap.get(d);
        if (!e) {
          lg(b, {
            code: cg.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [c]
          });
          return ng;
        }
        if (b.common.async) {
          var f = {
            data: b.data,
            path: b.path,
            parent: b
          };
          return e._parseAsync(f);
        } else {
          var g = {
            data: b.data,
            path: b.path,
            parent: b
          };
          return e._parseSync(g);
        }
      }
      get discriminator() {
        return this._def.discriminator;
      }
      get options() {
        return this._def.options;
      }
      get optionsMap() {
        return this._def.optionsMap;
      }
      static create(a, b, c) {
        const d = new Map();
        for (const e of b) {
          const b = $g(e.shape[a]);
          if (!b) {
            throw new Error("A discriminator value for key `" + a + "` could not be extracted from all schema options");
          }
          for (const c of b) {
            if (d.has(c)) {
              throw new Error("Discriminator property " + String(a) + " has duplicate value " + String(c));
            }
            d.set(c, e);
          }
        }
        return new _g({
          typeName: zh.ZodDiscriminatedUnion,
          discriminator: a,
          options: b,
          optionsMap: d,
          ...xg(c)
        });
      }
    }
    function ah(a, b) {
      const c = bg(a);
      const d = bg(b);
      if (a === b) {
        var e = {
          valid: true,
          data: a
        };
        return e;
      } else if (c === ag.object && d === ag.object) {
        const c = $f.objectKeys(b);
        const d = $f.objectKeys(a).filter(a => c.indexOf(a) !== -1);
        var f = {
          ...a,
          ...b
        };
        const e = f;
        for (const c of d) {
          const d = ah(a[c], b[c]);
          if (!d.valid) {
            return {
              valid: false
            };
          }
          e[c] = d.data;
        }
        var g = {
          valid: true,
          data: e
        };
        return g;
      } else if (c === ag.array && d === ag.array) {
        if (a.length !== b.length) {
          return {
            valid: false
          };
        }
        const c = [];
        for (let d = 0; d < a.length; d++) {
          const e = a[d];
          const f = b[d];
          const g = ah(e, f);
          if (!g.valid) {
            return {
              valid: false
            };
          }
          c.push(g.data);
        }
        var h = {
          valid: true,
          data: c
        };
        return h;
      } else if (c === ag.date && d === ag.date && +a === +b) {
        var i = {
          valid: true,
          data: a
        };
        return i;
      } else {
        return {
          valid: false
        };
      }
    }
    class bh extends yg {
      _parse(a) {
        const {
          status: b,
          ctx: c
        } = this._processInputParams(a);
        const d = (a, d) => {
          if (qg(a) || qg(d)) {
            return ng;
          }
          const e = ah(a.value, d.value);
          if (!e.valid) {
            var f = {
              code: cg.invalid_intersection_types
            };
            lg(c, f);
            return ng;
          }
          if (rg(a) || rg(d)) {
            b.dirty();
          }
          var g = {
            status: b.value,
            value: e.data
          };
          return g;
        };
        if (c.common.async) {
          var e = {
            data: c.data,
            path: c.path,
            parent: c
          };
          var f = {
            data: c.data,
            path: c.path,
            parent: c
          };
          return Promise.all([this._def.left._parseAsync(e), this._def.right._parseAsync(f)]).then(([a, b]) => d(a, b));
        } else {
          var g = {
            data: c.data,
            path: c.path,
            parent: c
          };
          var h = {
            data: c.data,
            path: c.path,
            parent: c
          };
          return d(this._def.left._parseSync(g), this._def.right._parseSync(h));
        }
      }
    }
    bh.create = (a, b, c) => {
      return new bh({
        left: a,
        right: b,
        typeName: zh.ZodIntersection,
        ...xg(c)
      });
    };
    class ch extends yg {
      _parse(a) {
        const {
          status: b,
          ctx: c
        } = this._processInputParams(a);
        if (c.parsedType !== ag.array) {
          lg(c, {
            code: cg.invalid_type,
            expected: ag.array,
            received: c.parsedType
          });
          return ng;
        }
        if (c.data.length < this._def.items.length) {
          var d = {
            code: cg.too_small,
            minimum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          };
          lg(c, d);
          return ng;
        }
        const e = this._def.rest;
        if (!e && c.data.length > this._def.items.length) {
          var f = {
            code: cg.too_big,
            maximum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          };
          lg(c, f);
          b.dirty();
        }
        const g = [...c.data].map((a, b) => {
          const d = this._def.items[b] || this._def.rest;
          if (!d) {
            return null;
          }
          return d._parse(new vg(c, a, c.path, b));
        }).filter(a => !!a);
        if (c.common.async) {
          return Promise.all(g).then(a => {
            return mg.mergeArray(b, a);
          });
        } else {
          return mg.mergeArray(b, g);
        }
      }
      get items() {
        return this._def.items;
      }
      rest(a) {
        var b = {
          ...this._def
        };
        b.rest = a;
        return new ch(b);
      }
    }
    ch.create = (a, b) => {
      if (!Array.isArray(a)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      }
      return new ch({
        items: a,
        typeName: zh.ZodTuple,
        rest: null,
        ...xg(b)
      });
    };
    class dh extends yg {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(a) {
        const {
          status: b,
          ctx: c
        } = this._processInputParams(a);
        if (c.parsedType !== ag.object) {
          lg(c, {
            code: cg.invalid_type,
            expected: ag.object,
            received: c.parsedType
          });
          return ng;
        }
        const d = [];
        const e = this._def.keyType;
        const f = this._def.valueType;
        for (const b in c.data) {
          d.push({
            key: e._parse(new vg(c, b, c.path, b)),
            value: f._parse(new vg(c, c.data[b], c.path, b))
          });
        }
        if (c.common.async) {
          return mg.mergeObjectAsync(b, d);
        } else {
          return mg.mergeObjectSync(b, d);
        }
      }
      get element() {
        return this._def.valueType;
      }
      static create(a, b, c) {
        if (b instanceof yg) {
          return new dh({
            keyType: a,
            valueType: b,
            typeName: zh.ZodRecord,
            ...xg(c)
          });
        }
        return new dh({
          keyType: Jg.create(),
          valueType: a,
          typeName: zh.ZodRecord,
          ...xg(b)
        });
      }
    }
    class eh extends yg {
      _parse(a) {
        const {
          status: b,
          ctx: c
        } = this._processInputParams(a);
        if (c.parsedType !== ag.map) {
          lg(c, {
            code: cg.invalid_type,
            expected: ag.map,
            received: c.parsedType
          });
          return ng;
        }
        const d = this._def.keyType;
        const e = this._def.valueType;
        const f = [...c.data.entries()].map(([a, b], f) => {
          return {
            key: d._parse(new vg(c, a, c.path, [f, "key"])),
            value: e._parse(new vg(c, b, c.path, [f, "value"]))
          };
        });
        if (c.common.async) {
          const a = new Map();
          return Promise.resolve().then(async () => {
            for (const c of f) {
              const d = await c.key;
              const e = await c.value;
              if (d.status === "aborted" || e.status === "aborted") {
                return ng;
              }
              if (d.status === "dirty" || e.status === "dirty") {
                b.dirty();
              }
              a.set(d.value, e.value);
            }
            var c = {
              status: b.value,
              value: a
            };
            return c;
          });
        } else {
          const a = new Map();
          for (const c of f) {
            const d = c.key;
            const e = c.value;
            if (d.status === "aborted" || e.status === "aborted") {
              return ng;
            }
            if (d.status === "dirty" || e.status === "dirty") {
              b.dirty();
            }
            a.set(d.value, e.value);
          }
          var g = {
            status: b.value,
            value: a
          };
          return g;
        }
      }
    }
    eh.create = (a, b, c) => {
      return new eh({
        valueType: b,
        keyType: a,
        typeName: zh.ZodMap,
        ...xg(c)
      });
    };
    class fh extends yg {
      _parse(a) {
        const {
          status: b,
          ctx: c
        } = this._processInputParams(a);
        if (c.parsedType !== ag.set) {
          lg(c, {
            code: cg.invalid_type,
            expected: ag.set,
            received: c.parsedType
          });
          return ng;
        }
        const d = this._def;
        if (d.minSize !== null) {
          if (c.data.size < d.minSize.value) {
            var e = {
              code: cg.too_small,
              minimum: d.minSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: d.minSize.message
            };
            lg(c, e);
            b.dirty();
          }
        }
        if (d.maxSize !== null) {
          if (c.data.size > d.maxSize.value) {
            var f = {
              code: cg.too_big,
              maximum: d.maxSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: d.maxSize.message
            };
            lg(c, f);
            b.dirty();
          }
        }
        const g = this._def.valueType;
        function h(a) {
          const c = new Set();
          for (const d of a) {
            if (d.status === "aborted") {
              return ng;
            }
            if (d.status === "dirty") {
              b.dirty();
            }
            c.add(d.value);
          }
          var d = {
            status: b.value,
            value: c
          };
          return d;
        }
        const i = [...c.data.values()].map((a, b) => g._parse(new vg(c, a, c.path, b)));
        if (c.common.async) {
          return Promise.all(i).then(a => h(a));
        } else {
          return h(i);
        }
      }
      min(a, b) {
        return new fh({
          ...this._def,
          minSize: {
            value: a,
            message: ug.toString(b)
          }
        });
      }
      max(a, b) {
        return new fh({
          ...this._def,
          maxSize: {
            value: a,
            message: ug.toString(b)
          }
        });
      }
      size(a, b) {
        return this.min(a, b).max(a, b);
      }
      nonempty(a) {
        return this.min(1, a);
      }
    }
    fh.create = (a, b) => {
      return new fh({
        valueType: a,
        minSize: null,
        maxSize: null,
        typeName: zh.ZodSet,
        ...xg(b)
      });
    };
    class gh extends yg {
      constructor() {
        super(...arguments);
        this.validate = this.implement;
      }
      _parse(a) {
        const {
          ctx: b
        } = this._processInputParams(a);
        if (b.parsedType !== ag.function) {
          lg(b, {
            code: cg.invalid_type,
            expected: ag.function,
            received: b.parsedType
          });
          return ng;
        }
        function c(a, c) {
          var d = {
            code: cg.invalid_arguments,
            argumentsError: c
          };
          return jg({
            data: a,
            path: b.path,
            errorMaps: [b.common.contextualErrorMap, b.schemaErrorMap, ig(), fg].filter(a => !!a),
            issueData: d
          });
        }
        function d(a, c) {
          var d = {
            code: cg.invalid_return_type,
            returnTypeError: c
          };
          return jg({
            data: a,
            path: b.path,
            errorMaps: [b.common.contextualErrorMap, b.schemaErrorMap, ig(), fg].filter(a => !!a),
            issueData: d
          });
        }
        var e = {
          errorMap: b.common.contextualErrorMap
        };
        const f = e;
        const g = b.data;
        if (this._def.returns instanceof mh) {
          return pg(async (...a) => {
            const b = new eg([]);
            const e = await this._def.args.parseAsync(a, f).catch(d => {
              b.addIssue(c(a, d));
              throw b;
            });
            const h = await g(...e);
            const i = await this._def.returns._def.type.parseAsync(h, f).catch(a => {
              b.addIssue(d(h, a));
              throw b;
            });
            return i;
          });
        } else {
          return pg((...a) => {
            const b = this._def.args.safeParse(a, f);
            if (!b.success) {
              throw new eg([c(a, b.error)]);
            }
            const e = g(...b.data);
            const h = this._def.returns.safeParse(e, f);
            if (!h.success) {
              throw new eg([d(e, h.error)]);
            }
            return h.data;
          });
        }
      }
      parameters() {
        return this._def.args;
      }
      returnType() {
        return this._def.returns;
      }
      args(...a) {
        return new gh({
          ...this._def,
          args: ch.create(a).rest(Tg.create())
        });
      }
      returns(a) {
        var b = {
          ...this._def
        };
        b.returns = a;
        return new gh(b);
      }
      implement(a) {
        const b = this.parse(a);
        return b;
      }
      strictImplement(a) {
        const b = this.parse(a);
        return b;
      }
      static create(a, b, c) {
        return new gh({
          args: a ? a : ch.create([]).rest(Tg.create()),
          returns: b || Tg.create(),
          typeName: zh.ZodFunction,
          ...xg(c)
        });
      }
    }
    class hh extends yg {
      get schema() {
        return this._def.getter();
      }
      _parse(a) {
        const {
          ctx: b
        } = this._processInputParams(a);
        const c = this._def.getter();
        var d = {
          data: b.data,
          path: b.path,
          parent: b
        };
        return c._parse(d);
      }
    }
    hh.create = (a, b) => {
      return new hh({
        getter: a,
        typeName: zh.ZodLazy,
        ...xg(b)
      });
    };
    class ih extends yg {
      _parse(a) {
        if (a.data !== this._def.value) {
          const b = this._getOrReturnCtx(a);
          lg(b, {
            received: b.data,
            code: cg.invalid_literal,
            expected: this._def.value
          });
          return ng;
        }
        var b = {
          status: "valid",
          value: a.data
        };
        return b;
      }
      get value() {
        return this._def.value;
      }
    }
    ih.create = (a, b) => {
      return new ih({
        value: a,
        typeName: zh.ZodLiteral,
        ...xg(b)
      });
    };
    function jh(a, b) {
      return new kh({
        values: a,
        typeName: zh.ZodEnum,
        ...xg(b)
      });
    }
    class kh extends yg {
      _parse(a) {
        if (typeof a.data !== "string") {
          const b = this._getOrReturnCtx(a);
          const c = this._def.values;
          lg(b, {
            expected: $f.joinValues(c),
            received: b.parsedType,
            code: cg.invalid_type
          });
          return ng;
        }
        if (this._def.values.indexOf(a.data) === -1) {
          const b = this._getOrReturnCtx(a);
          const c = this._def.values;
          lg(b, {
            received: b.data,
            code: cg.invalid_enum_value,
            options: c
          });
          return ng;
        }
        return pg(a.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        const a = {};
        for (const b of this._def.values) {
          a[b] = b;
        }
        return a;
      }
      get Values() {
        const a = {};
        for (const b of this._def.values) {
          a[b] = b;
        }
        return a;
      }
      get Enum() {
        const a = {};
        for (const b of this._def.values) {
          a[b] = b;
        }
        return a;
      }
      extract(a) {
        return kh.create(a);
      }
      exclude(a) {
        return kh.create(this.options.filter(b => !a.includes(b)));
      }
    }
    kh.create = jh;
    class lh extends yg {
      _parse(a) {
        const b = $f.getValidEnumValues(this._def.values);
        const c = this._getOrReturnCtx(a);
        if (c.parsedType !== ag.string && c.parsedType !== ag.number) {
          const a = $f.objectValues(b);
          lg(c, {
            expected: $f.joinValues(a),
            received: c.parsedType,
            code: cg.invalid_type
          });
          return ng;
        }
        if (b.indexOf(a.data) === -1) {
          const a = $f.objectValues(b);
          lg(c, {
            received: c.data,
            code: cg.invalid_enum_value,
            options: a
          });
          return ng;
        }
        return pg(a.data);
      }
      get enum() {
        return this._def.values;
      }
    }
    lh.create = (a, b) => {
      return new lh({
        values: a,
        typeName: zh.ZodNativeEnum,
        ...xg(b)
      });
    };
    class mh extends yg {
      unwrap() {
        return this._def.type;
      }
      _parse(a) {
        const {
          ctx: b
        } = this._processInputParams(a);
        if (b.parsedType !== ag.promise && b.common.async === false) {
          lg(b, {
            code: cg.invalid_type,
            expected: ag.promise,
            received: b.parsedType
          });
          return ng;
        }
        const c = b.parsedType === ag.promise ? b.data : Promise.resolve(b.data);
        return pg(c.then(a => {
          var c = {
            path: b.path,
            errorMap: b.common.contextualErrorMap
          };
          return this._def.type.parseAsync(a, c);
        }));
      }
    }
    mh.create = (a, b) => {
      return new mh({
        type: a,
        typeName: zh.ZodPromise,
        ...xg(b)
      });
    };
    class nh extends yg {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        if (this._def.schema._def.typeName === zh.ZodEffects) {
          return this._def.schema.sourceType();
        } else {
          return this._def.schema;
        }
      }
      _parse(a) {
        const {
          status: b,
          ctx: c
        } = this._processInputParams(a);
        const d = this._def.effect || null;
        if (d.type === "preprocess") {
          const a = d.transform(c.data);
          if (c.common.async) {
            return Promise.resolve(a).then(a => {
              var b = {
                data: a,
                path: c.path,
                parent: c
              };
              return this._def.schema._parseAsync(b);
            });
          } else {
            var e = {
              data: a,
              path: c.path,
              parent: c
            };
            return this._def.schema._parseSync(e);
          }
        }
        const f = {
          addIssue: a => {
            lg(c, a);
            if (a.fatal) {
              b.abort();
            } else {
              b.dirty();
            }
          },
          get path() {
            return c.path;
          }
        };
        f.addIssue = f.addIssue.bind(f);
        if (d.type === "refinement") {
          const a = a => {
            const b = d.refinement(a, f);
            if (c.common.async) {
              return Promise.resolve(b);
            }
            if (b instanceof Promise) {
              throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            }
            return a;
          };
          if (c.common.async === false) {
            var g = {
              data: c.data,
              path: c.path,
              parent: c
            };
            const d = this._def.schema._parseSync(g);
            if (d.status === "aborted") {
              return ng;
            }
            if (d.status === "dirty") {
              b.dirty();
            }
            a(d.value);
            var h = {
              status: b.value,
              value: d.value
            };
            return h;
          } else {
            var i = {
              data: c.data,
              path: c.path,
              parent: c
            };
            return this._def.schema._parseAsync(i).then(c => {
              if (c.status === "aborted") {
                return ng;
              }
              if (c.status === "dirty") {
                b.dirty();
              }
              return a(c.value).then(() => {
                var a = {
                  status: b.value,
                  value: c.value
                };
                return a;
              });
            });
          }
        }
        if (d.type === "transform") {
          if (c.common.async === false) {
            var j = {
              data: c.data,
              path: c.path,
              parent: c
            };
            const a = this._def.schema._parseSync(j);
            if (!sg(a)) {
              return a;
            }
            const e = d.transform(a.value, f);
            if (e instanceof Promise) {
              throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            }
            var k = {
              status: b.value,
              value: e
            };
            return k;
          } else {
            var l = {
              data: c.data,
              path: c.path,
              parent: c
            };
            return this._def.schema._parseAsync(l).then(a => {
              if (!sg(a)) {
                return a;
              }
              return Promise.resolve(d.transform(a.value, f)).then(a => ({
                status: b.value,
                value: a
              }));
            });
          }
        }
        $f.assertNever(d);
      }
    }
    nh.create = (a, b, c) => {
      return new nh({
        schema: a,
        typeName: zh.ZodEffects,
        effect: b,
        ...xg(c)
      });
    };
    nh.createWithPreprocess = (a, b, c) => {
      var d = {
        type: "preprocess",
        transform: a
      };
      return new nh({
        schema: b,
        effect: d,
        typeName: zh.ZodEffects,
        ...xg(c)
      });
    };
    class oh extends yg {
      _parse(a) {
        const b = this._getType(a);
        if (b === ag.undefined) {
          return pg(undefined);
        }
        return this._def.innerType._parse(a);
      }
      unwrap() {
        return this._def.innerType;
      }
    }
    oh.create = (a, b) => {
      return new oh({
        innerType: a,
        typeName: zh.ZodOptional,
        ...xg(b)
      });
    };
    class ph extends yg {
      _parse(a) {
        const b = this._getType(a);
        if (b === ag.null) {
          return pg(null);
        }
        return this._def.innerType._parse(a);
      }
      unwrap() {
        return this._def.innerType;
      }
    }
    ph.create = (a, b) => {
      return new ph({
        innerType: a,
        typeName: zh.ZodNullable,
        ...xg(b)
      });
    };
    class qh extends yg {
      _parse(a) {
        const {
          ctx: b
        } = this._processInputParams(a);
        let c = b.data;
        if (b.parsedType === ag.undefined) {
          c = this._def.defaultValue();
        }
        var d = {
          data: c,
          path: b.path,
          parent: b
        };
        return this._def.innerType._parse(d);
      }
      removeDefault() {
        return this._def.innerType;
      }
    }
    qh.create = (a, b) => {
      return new qh({
        innerType: a,
        typeName: zh.ZodDefault,
        defaultValue: typeof b.default === "function" ? b.default : () => b.default,
        ...xg(b)
      });
    };
    class rh extends yg {
      _parse(a) {
        const {
          ctx: b
        } = this._processInputParams(a);
        var c = {
          ...b
        };
        c.common = {
          ...b.common
        };
        c.common.issues = [];
        const d = c;
        var e = {
          data: d.data,
          path: d.path,
          parent: {
            ...d
          }
        };
        const f = this._def.innerType._parse(e);
        if (tg(f)) {
          return f.then(a => {
            return {
              status: "valid",
              value: a.status === "valid" ? a.value : this._def.catchValue({
                get error() {
                  return new eg(d.common.issues);
                },
                input: d.data
              })
            };
          });
        } else {
          return {
            status: "valid",
            value: f.status === "valid" ? f.value : this._def.catchValue({
              get error() {
                return new eg(d.common.issues);
              },
              input: d.data
            })
          };
        }
      }
      removeCatch() {
        return this._def.innerType;
      }
    }
    rh.create = (a, b) => {
      return new rh({
        innerType: a,
        typeName: zh.ZodCatch,
        catchValue: typeof b.catch === "function" ? b.catch : () => b.catch,
        ...xg(b)
      });
    };
    class sh extends yg {
      _parse(a) {
        const b = this._getType(a);
        if (b !== ag.nan) {
          const b = this._getOrReturnCtx(a);
          lg(b, {
            code: cg.invalid_type,
            expected: ag.nan,
            received: b.parsedType
          });
          return ng;
        }
        var c = {
          status: "valid",
          value: a.data
        };
        return c;
      }
    }
    sh.create = a => {
      return new sh({
        typeName: zh.ZodNaN,
        ...xg(a)
      });
    };
    const th = Symbol("zod_brand");
    class uh extends yg {
      _parse(a) {
        const {
          ctx: b
        } = this._processInputParams(a);
        const c = b.data;
        var d = {
          data: c,
          path: b.path,
          parent: b
        };
        return this._def.type._parse(d);
      }
      unwrap() {
        return this._def.type;
      }
    }
    class vh extends yg {
      _parse(a) {
        const {
          status: b,
          ctx: c
        } = this._processInputParams(a);
        if (c.common.async) {
          const a = async () => {
            var a = {
              data: c.data,
              path: c.path,
              parent: c
            };
            const d = await this._def.in._parseAsync(a);
            if (d.status === "aborted") {
              return ng;
            }
            if (d.status === "dirty") {
              b.dirty();
              return og(d.value);
            } else {
              var e = {
                data: d.value,
                path: c.path,
                parent: c
              };
              return this._def.out._parseAsync(e);
            }
          };
          return a();
        } else {
          var d = {
            data: c.data,
            path: c.path,
            parent: c
          };
          const a = this._def.in._parseSync(d);
          if (a.status === "aborted") {
            return ng;
          }
          if (a.status === "dirty") {
            b.dirty();
            var e = {
              status: "dirty",
              value: a.value
            };
            return e;
          } else {
            var f = {
              data: a.value,
              path: c.path,
              parent: c
            };
            return this._def.out._parseSync(f);
          }
        }
      }
      static create(a, b) {
        var c = {
          in: a,
          out: b,
          typeName: zh.ZodPipeline
        };
        return new vh(c);
      }
    }
    const wh = (a, b = undefined, c) => {
      if (b === undefined) b = {};
      if (a) {
        return Sg.create().superRefine((d, e) => {
          if (!a(d)) {
            const a = typeof b === "function" ? b(d) : typeof b === "string" ? {
              message: b
            } : b;
            const g = a.fatal ?? c ?? true;
            const h = typeof a === "string" ? {
              message: a
            } : a;
            var f = {
              code: "custom",
              ...h
            };
            f.fatal = g;
            e.addIssue(f);
          }
        });
      }
      return Sg.create();
    };
    var xh = {
      object: Yg.lazycreate
    };
    const yh = xh;
    var zh;
    (function (a) {
      a.ZodString = "ZodString";
      a.ZodNumber = "ZodNumber";
      a.ZodNaN = "ZodNaN";
      a.ZodBigInt = "ZodBigInt";
      a.ZodBoolean = "ZodBoolean";
      a.ZodDate = "ZodDate";
      a.ZodSymbol = "ZodSymbol";
      a.ZodUndefined = "ZodUndefined";
      a.ZodNull = "ZodNull";
      a.ZodAny = "ZodAny";
      a.ZodUnknown = "ZodUnknown";
      a.ZodNever = "ZodNever";
      a.ZodVoid = "ZodVoid";
      a.ZodArray = "ZodArray";
      a.ZodObject = "ZodObject";
      a.ZodUnion = "ZodUnion";
      a.ZodDiscriminatedUnion = "ZodDiscriminatedUnion";
      a.ZodIntersection = "ZodIntersection";
      a.ZodTuple = "ZodTuple";
      a.ZodRecord = "ZodRecord";
      a.ZodMap = "ZodMap";
      a.ZodSet = "ZodSet";
      a.ZodFunction = "ZodFunction";
      a.ZodLazy = "ZodLazy";
      a.ZodLiteral = "ZodLiteral";
      a.ZodEnum = "ZodEnum";
      a.ZodEffects = "ZodEffects";
      a.ZodNativeEnum = "ZodNativeEnum";
      a.ZodOptional = "ZodOptional";
      a.ZodNullable = "ZodNullable";
      a.ZodDefault = "ZodDefault";
      a.ZodCatch = "ZodCatch";
      a.ZodPromise = "ZodPromise";
      a.ZodBranded = "ZodBranded";
      a.ZodPipeline = "ZodPipeline";
    })(zh ||= {});
    const Ah = (a, b = undefined) => {
      if (b === undefined) b = {
        message: "Input not instance of " + a.name
      };
      return wh(b => b instanceof a, b);
    };
    const Bh = Jg.create;
    const Ch = Lg.create;
    const Dh = sh.create;
    const Eh = Mg.create;
    const Fh = Ng.create;
    const Gh = Og.create;
    const Hh = Pg.create;
    const Ih = Qg.create;
    const Jh = Rg.create;
    const Kh = Sg.create;
    const Lh = Tg.create;
    const Mh = Ug.create;
    const Nh = Vg.create;
    const Oh = Wg.create;
    const Ph = Yg.create;
    const Qh = Yg.strictCreate;
    const Rh = Zg.create;
    const Sh = _g.create;
    const Th = bh.create;
    const Uh = ch.create;
    const Vh = dh.create;
    const Wh = eh.create;
    const Xh = fh.create;
    const Yh = gh.create;
    const Zh = hh.create;
    const $h = ih.create;
    const _h = kh.create;
    const ai = lh.create;
    const bi = mh.create;
    const ci = nh.create;
    const di = oh.create;
    const ei = ph.create;
    const fi = nh.createWithPreprocess;
    const gi = vh.create;
    const hi = () => Bh().optional();
    const ii = () => Ch().optional();
    const ji = () => Fh().optional();
    const ki = {
      string: a => Jg.create({
        ...a,
        coerce: true
      }),
      number: a => Lg.create({
        ...a,
        coerce: true
      }),
      boolean: a => Ng.create({
        ...a,
        coerce: true
      }),
      bigint: a => Mg.create({
        ...a,
        coerce: true
      }),
      date: a => Og.create({
        ...a,
        coerce: true
      })
    };
    const li = ng;
    var mi = Object.freeze({
      "__proto__": null,
      defaultErrorMap: fg,
      setErrorMap: hg,
      getErrorMap: ig,
      makeIssue: jg,
      EMPTY_PATH: kg,
      addIssueToContext: lg,
      ParseStatus: mg,
      INVALID: ng,
      DIRTY: og,
      OK: pg,
      isAborted: qg,
      isDirty: rg,
      isValid: sg,
      isAsync: tg,
      get util() {
        return $f;
      },
      get objectUtil() {
        return _f;
      },
      ZodParsedType: ag,
      getParsedType: bg,
      ZodType: yg,
      ZodString: Jg,
      ZodNumber: Lg,
      ZodBigInt: Mg,
      ZodBoolean: Ng,
      ZodDate: Og,
      ZodSymbol: Pg,
      ZodUndefined: Qg,
      ZodNull: Rg,
      ZodAny: Sg,
      ZodUnknown: Tg,
      ZodNever: Ug,
      ZodVoid: Vg,
      ZodArray: Wg,
      ZodObject: Yg,
      ZodUnion: Zg,
      ZodDiscriminatedUnion: _g,
      ZodIntersection: bh,
      ZodTuple: ch,
      ZodRecord: dh,
      ZodMap: eh,
      ZodSet: fh,
      ZodFunction: gh,
      ZodLazy: hh,
      ZodLiteral: ih,
      ZodEnum: kh,
      ZodNativeEnum: lh,
      ZodPromise: mh,
      ZodEffects: nh,
      ZodTransformer: nh,
      ZodOptional: oh,
      ZodNullable: ph,
      ZodDefault: qh,
      ZodCatch: rh,
      ZodNaN: sh,
      BRAND: th,
      ZodBranded: uh,
      ZodPipeline: vh,
      custom: wh,
      Schema: yg,
      ZodSchema: yg,
      late: yh,
      get ZodFirstPartyTypeKind() {
        return zh;
      },
      coerce: ki,
      any: Kh,
      array: Oh,
      bigint: Eh,
      boolean: Fh,
      date: Gh,
      discriminatedUnion: Sh,
      effect: ci,
      enum: _h,
      function: Yh,
      instanceof: Ah,
      intersection: Th,
      lazy: Zh,
      literal: $h,
      map: Wh,
      nan: Dh,
      nativeEnum: ai,
      never: Mh,
      null: Jh,
      nullable: ei,
      number: Ch,
      object: Ph,
      oboolean: ji,
      onumber: ii,
      optional: di,
      ostring: hi,
      pipeline: gi,
      preprocess: fi,
      promise: bi,
      record: Vh,
      set: Xh,
      strictObject: Qh,
      string: Bh,
      symbol: Hh,
      transformer: ci,
      tuple: Uh,
      undefined: Ih,
      union: Rh,
      unknown: Lh,
      void: Nh,
      NEVER: li,
      ZodIssueCode: cg,
      quotelessJson: dg,
      ZodError: eg
    });
    ;
    var ni = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
    var oi = mi.object({
      codename: mi.string(),
      version: mi.string().regex(ni),
      permissions: mi.string().array()
    });
    var pi = oi.omit({
      permissions: true
    });
    var qi = mi.object({
      API_URL: mi.string().url(),
      API_KEY: mi.string(),
      KEYS: mi.string().array()
    });
    var ri = mi.object({
      id: mi.number(),
      origin: mi.string()
    });
    var si = mi.tuple([mi.boolean(), mi.any()]);
    var ti = mi.object({
      resolve: mi.function().args(mi.any()).returns(mi.void()),
      reject: mi.function().args(mi.any()).returns(mi.void()),
      timeout: mi.number()
    });
    var ui = mi.object({
      id: mi.number(),
      resource: mi.string()
    });
    var vi = mi.tuple([mi.boolean(), mi.any()]);
    var wi = mi.object({
      resolve: mi.function().args(mi.any()).returns(mi.void()),
      reject: mi.function().args(mi.any()).returns(mi.void()),
      timeout: mi.number()
    });
    ;
    var xi = Object.create;
    var yi = Object.defineProperty;
    var zi = Object.getOwnPropertyDescriptor;
    var Ai = Object.getOwnPropertyNames;
    var Bi = Object.getPrototypeOf;
    var Ci = Object.prototype.hasOwnProperty;
    var Di = (a, b) => function c() {
      if (!b) {
        (0, a[Ai(a)[0]])((b = {
          exports: {}
        }).exports, b);
      }
      return b.exports;
    };
    var Ei = (a, b) => {
      for (var c in b) {
        yi(a, c, {
          get: b[c],
          enumerable: true
        });
      }
    };
    var Fi = (a, b, c, d) => {
      if (b && typeof b === "object" || typeof b === "function") {
        for (let e of Ai(b)) {
          if (!Ci.call(a, e) && e !== c) {
            yi(a, e, {
              get: () => b[e],
              enumerable: !(d = zi(b, e)) || d.enumerable
            });
          }
        }
      }
      return a;
    };
    var Gi = (a, b, c) => {
      c = a != null ? xi(Bi(a)) : {};
      return Fi(b || !a || !a.__esModule ? yi(c, "default", {
        value: a,
        enumerable: true
      }) : c, a);
    };
    var Hi = (a, b, c) => {
      if (!b.has(a)) {
        throw TypeError("Cannot " + c);
      }
    };
    var Ii = (a, b, c) => {
      Hi(a, b, "read from private field");
      if (c) {
        return c.call(a);
      } else {
        return b.get(a);
      }
    };
    var Ji = (a, b, c) => {
      if (b.has(a)) {
        throw TypeError("Cannot add the same private member more than once");
      }
      if (b instanceof WeakSet) {
        b.add(a);
      } else {
        b.set(a, c);
      }
    };
    var Ki = (a, b, c, d) => {
      Hi(a, b, "write to private field");
      if (d) {
        d.call(a, c);
      } else {
        b.set(a, c);
      }
      return c;
    };
    var Li = (a, b, c, d) => ({
      set _(d) {
        Ki(a, b, d, c);
      },
      get _() {
        return Ii(a, b, d);
      }
    });
    var Mi = (a, b, c) => {
      Hi(a, b, "access private method");
      return c;
    };
    var Ni = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/core.js"(a, b) {
        'use strict';

        (function (c, d) {
          if (typeof a === "object") {
            b.exports = a = d();
          } else if (typeof define === "function" && define.amd) {
            define([], d);
          } else {
            c.CryptoJS = d();
          }
        })(a, function () {
          var a = a || function (a, b) {
            var c = Object.create || function () {
              function a() {}
              ;
              return function (b) {
                var c;
                a.prototype = b;
                c = new a();
                a.prototype = null;
                return c;
              };
            }();
            var d = {};
            var e = d.lib = {};
            var f = e.Base = function () {
              return {
                extend: function (a) {
                  var b = c(this);
                  if (a) {
                    b.mixIn(a);
                  }
                  if (!b.hasOwnProperty("init") || this.init === b.init) {
                    b.init = function () {
                      b.$super.init.apply(this, arguments);
                    };
                  }
                  b.init.prototype = b;
                  b.$super = this;
                  return b;
                },
                create: function () {
                  var a = this.extend();
                  a.init.apply(a, arguments);
                  return a;
                },
                init: function () {},
                mixIn: function (a) {
                  for (var b in a) {
                    if (a.hasOwnProperty(b)) {
                      this[b] = a[b];
                    }
                  }
                  if (a.hasOwnProperty("toString")) {
                    this.toString = a.toString;
                  }
                },
                clone: function () {
                  return this.init.prototype.extend(this);
                }
              };
            }();
            var g = e.WordArray = f.extend({
              init: function (a, c) {
                a = this.words = a || [];
                if (c != b) {
                  this.sigBytes = c;
                } else {
                  this.sigBytes = a.length * 4;
                }
              },
              toString: function (a) {
                return (a || i).stringify(this);
              },
              concat: function (a) {
                var b = this.words;
                var c = a.words;
                var d = this.sigBytes;
                var e = a.sigBytes;
                this.clamp();
                if (d % 4) {
                  for (var f = 0; f < e; f++) {
                    var g = c[f >>> 2] >>> 24 - f % 4 * 8 & 255;
                    b[d + f >>> 2] |= g << 24 - (d + f) % 4 * 8;
                  }
                } else {
                  for (var f = 0; f < e; f += 4) {
                    b[d + f >>> 2] = c[f >>> 2];
                  }
                }
                this.sigBytes += e;
                return this;
              },
              clamp: function () {
                var b = this.words;
                var c = this.sigBytes;
                b[c >>> 2] &= 4294967295 << 32 - c % 4 * 8;
                b.length = a.ceil(c / 4);
              },
              clone: function () {
                var a = f.clone.call(this);
                a.words = this.words.slice(0);
                return a;
              },
              random: function (b) {
                var c = [];
                function d(b) {
                  var b = b;
                  var c = 987654321;
                  var d = 4294967295;
                  return function () {
                    c = (c & 65535) * 36969 + (c >> 16) & d;
                    b = (b & 65535) * 18000 + (b >> 16) & d;
                    var e = (c << 16) + b & d;
                    e /= 4294967296;
                    e += 0.5;
                    return e * (a.random() > 0.5 ? 1 : -1);
                  };
                }
                for (var e = 0, f; e < b; e += 4) {
                  var h = d((f || a.random()) * 4294967296);
                  f = h() * 987654071;
                  c.push(h() * 4294967296 | 0);
                }
                return new g.init(c, b);
              }
            });
            var h = d.enc = {};
            var i = h.Hex = {
              stringify: function (a) {
                var b = a.words;
                var c = a.sigBytes;
                var d = [];
                for (var e = 0; e < c; e++) {
                  var f = b[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                  d.push((f >>> 4).toString(16));
                  d.push((f & 15).toString(16));
                }
                return d.join("");
              },
              parse: function (a) {
                var b = a.length;
                var c = [];
                for (var d = 0; d < b; d += 2) {
                  c[d >>> 3] |= parseInt(a.substr(d, 2), 16) << 24 - d % 8 * 4;
                }
                return new g.init(c, b / 2);
              }
            };
            var j = h.Latin1 = {
              stringify: function (a) {
                var b = a.words;
                var c = a.sigBytes;
                var d = [];
                for (var e = 0; e < c; e++) {
                  var f = b[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                  d.push(String.fromCharCode(f));
                }
                return d.join("");
              },
              parse: function (a) {
                var b = a.length;
                var c = [];
                for (var d = 0; d < b; d++) {
                  c[d >>> 2] |= (a.charCodeAt(d) & 255) << 24 - d % 4 * 8;
                }
                return new g.init(c, b);
              }
            };
            var k = h.Utf8 = {
              stringify: function (a) {
                try {
                  return decodeURIComponent(escape(j.stringify(a)));
                } catch (a) {
                  throw new Error("Malformed UTF-8 data");
                }
              },
              parse: function (a) {
                return j.parse(unescape(encodeURIComponent(a)));
              }
            };
            var l = e.BufferedBlockAlgorithm = f.extend({
              reset: function () {
                this._data = new g.init();
                this._nDataBytes = 0;
              },
              _append: function (a) {
                if (typeof a == "string") {
                  a = k.parse(a);
                }
                this._data.concat(a);
                this._nDataBytes += a.sigBytes;
              },
              _process: function (b) {
                var c = this._data;
                var d = c.words;
                var e = c.sigBytes;
                var f = this.blockSize;
                var h = f * 4;
                var i = e / h;
                if (b) {
                  i = a.ceil(i);
                } else {
                  i = a.max((i | 0) - this._minBufferSize, 0);
                }
                var j = i * f;
                var k = a.min(j * 4, e);
                if (j) {
                  for (var l = 0; l < j; l += f) {
                    this._doProcessBlock(d, l);
                  }
                  var m = d.splice(0, j);
                  c.sigBytes -= k;
                }
                return new g.init(m, k);
              },
              clone: function () {
                var a = f.clone.call(this);
                a._data = this._data.clone();
                return a;
              },
              _minBufferSize: 0
            });
            var m = e.Hasher = l.extend({
              cfg: f.extend(),
              init: function (a) {
                this.cfg = this.cfg.extend(a);
                this.reset();
              },
              reset: function () {
                l.reset.call(this);
                this._doReset();
              },
              update: function (a) {
                this._append(a);
                this._process();
                return this;
              },
              finalize: function (a) {
                if (a) {
                  this._append(a);
                }
                var b = this._doFinalize();
                return b;
              },
              blockSize: 16,
              _createHelper: function (a) {
                return function (b, c) {
                  return new a.init(c).finalize(b);
                };
              },
              _createHmacHelper: function (a) {
                return function (b, c) {
                  return new n.HMAC.init(a, c).finalize(b);
                };
              }
            });
            var n = d.algo = {};
            return d;
          }(Math);
          return a;
        });
      }
    });
    var Oi = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/x64-core.js"(a, b) {
        'use strict';

        (function (c, d) {
          if (typeof a === "object") {
            b.exports = a = d(Ni());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          (function (b) {
            var c = a;
            var d = c.lib;
            var e = d.Base;
            var f = d.WordArray;
            var g = c.x64 = {};
            var h = g.Word = e.extend({
              init: function (a, b) {
                this.high = a;
                this.low = b;
              }
            });
            var i = g.WordArray = e.extend({
              init: function (a, c) {
                a = this.words = a || [];
                if (c != b) {
                  this.sigBytes = c;
                } else {
                  this.sigBytes = a.length * 8;
                }
              },
              toX32: function () {
                var a = this.words;
                var b = a.length;
                var c = [];
                for (var d = 0; d < b; d++) {
                  var e = a[d];
                  c.push(e.high);
                  c.push(e.low);
                }
                return f.create(c, this.sigBytes);
              },
              clone: function () {
                var a = e.clone.call(this);
                var b = a.words = this.words.slice(0);
                var c = b.length;
                for (var d = 0; d < c; d++) {
                  b[d] = b[d].clone();
                }
                return a;
              }
            });
          })();
          return a;
        });
      }
    });
    var Pi = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/lib-typedarrays.js"(a, b) {
        'use strict';

        (function (c, d) {
          if (typeof a === "object") {
            b.exports = a = d(Ni());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          (function () {
            if (typeof ArrayBuffer != "function") {
              return;
            }
            var b = a;
            var c = b.lib;
            var d = c.WordArray;
            var e = d.init;
            var f = d.init = function (a) {
              if (a instanceof ArrayBuffer) {
                a = new Uint8Array(a);
              }
              if (a instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && a instanceof Uint8ClampedArray || a instanceof Int16Array || a instanceof Uint16Array || a instanceof Int32Array || a instanceof Uint32Array || a instanceof Float32Array || a instanceof Float64Array) {
                a = new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
              }
              if (a instanceof Uint8Array) {
                var b = a.byteLength;
                var c = [];
                for (var d = 0; d < b; d++) {
                  c[d >>> 2] |= a[d] << 24 - d % 4 * 8;
                }
                e.call(this, c, b);
              } else {
                e.apply(this, arguments);
              }
            };
            f.prototype = d;
          })();
          return a.lib.WordArray;
        });
      }
    });
    var Qi = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-utf16.js"(a, b) {
        'use strict';

        (function (c, d) {
          if (typeof a === "object") {
            b.exports = a = d(Ni());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          (function () {
            var b = a;
            var c = b.lib;
            var d = c.WordArray;
            var e = b.enc;
            var f = e.Utf16 = e.Utf16BE = {
              stringify: function (a) {
                var b = a.words;
                var c = a.sigBytes;
                var d = [];
                for (var e = 0; e < c; e += 2) {
                  var f = b[e >>> 2] >>> 16 - e % 4 * 8 & 65535;
                  d.push(String.fromCharCode(f));
                }
                return d.join("");
              },
              parse: function (a) {
                var b = a.length;
                var c = [];
                for (var e = 0; e < b; e++) {
                  c[e >>> 1] |= a.charCodeAt(e) << 16 - e % 2 * 16;
                }
                return d.create(c, b * 2);
              }
            };
            e.Utf16LE = {
              stringify: function (a) {
                var b = a.words;
                var c = a.sigBytes;
                var d = [];
                for (var e = 0; e < c; e += 2) {
                  var f = g(b[e >>> 2] >>> 16 - e % 4 * 8 & 65535);
                  d.push(String.fromCharCode(f));
                }
                return d.join("");
              },
              parse: function (a) {
                var b = a.length;
                var c = [];
                for (var e = 0; e < b; e++) {
                  c[e >>> 1] |= g(a.charCodeAt(e) << 16 - e % 2 * 16);
                }
                return d.create(c, b * 2);
              }
            };
            function g(a) {
              return a << 8 & 4278255360 | a >>> 8 & 16711935;
            }
          })();
          return a.enc.Utf16;
        });
      }
    });
    var Ri = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-base64.js"(a, b) {
        'use strict';

        (function (c, d) {
          if (typeof a === "object") {
            b.exports = a = d(Ni());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          (function () {
            var b = a;
            var c = b.lib;
            var d = c.WordArray;
            var e = b.enc;
            var f = e.Base64 = {
              stringify: function (a) {
                var b = a.words;
                var c = a.sigBytes;
                var d = this._map;
                a.clamp();
                var e = [];
                for (var f = 0; f < c; f += 3) {
                  var g = b[f >>> 2] >>> 24 - f % 4 * 8 & 255;
                  var h = b[f + 1 >>> 2] >>> 24 - (f + 1) % 4 * 8 & 255;
                  var i = b[f + 2 >>> 2] >>> 24 - (f + 2) % 4 * 8 & 255;
                  var j = g << 16 | h << 8 | i;
                  for (var k = 0; k < 4 && f + k * 0.75 < c; k++) {
                    e.push(d.charAt(j >>> (3 - k) * 6 & 63));
                  }
                }
                var l = d.charAt(64);
                if (l) {
                  while (e.length % 4) {
                    e.push(l);
                  }
                }
                return e.join("");
              },
              parse: function (a) {
                var b = a.length;
                var c = this._map;
                var d = this._reverseMap;
                if (!d) {
                  d = this._reverseMap = [];
                  for (var e = 0; e < c.length; e++) {
                    d[c.charCodeAt(e)] = e;
                  }
                }
                var f = c.charAt(64);
                if (f) {
                  var h = a.indexOf(f);
                  if (h !== -1) {
                    b = h;
                  }
                }
                return g(a, b, d);
              },
              _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            };
            function g(a, b, c) {
              var e = [];
              var f = 0;
              for (var g = 0; g < b; g++) {
                if (g % 4) {
                  var h = c[a.charCodeAt(g - 1)] << g % 4 * 2;
                  var i = c[a.charCodeAt(g)] >>> 6 - g % 4 * 2;
                  e[f >>> 2] |= (h | i) << 24 - f % 4 * 8;
                  f++;
                }
              }
              return d.create(e, f);
            }
          })();
          return a.enc.Base64;
        });
      }
    });
    var Si = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/md5.js"(a, b) {
        'use strict';

        (function (c, d) {
          if (typeof a === "object") {
            b.exports = a = d(Ni());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          (function (b) {
            var c = a;
            var d = c.lib;
            var e = d.WordArray;
            var f = d.Hasher;
            var g = c.algo;
            var h = [];
            (function () {
              for (var a = 0; a < 64; a++) {
                h[a] = b.abs(b.sin(a + 1)) * 4294967296 | 0;
              }
            })();
            var i = g.MD5 = f.extend({
              _doReset: function () {
                this._hash = new e.init([1732584193, 4023233417, 2562383102, 271733878]);
              },
              _doProcessBlock: function (a, b) {
                for (var c = 0; c < 16; c++) {
                  var d = b + c;
                  var e = a[d];
                  a[d] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
                }
                var f = this._hash.words;
                var g = a[b + 0];
                var i = a[b + 1];
                var n = a[b + 2];
                var o = a[b + 3];
                var p = a[b + 4];
                var q = a[b + 5];
                var r = a[b + 6];
                var s = a[b + 7];
                var t = a[b + 8];
                var u = a[b + 9];
                var v = a[b + 10];
                var w = a[b + 11];
                var x = a[b + 12];
                var y = a[b + 13];
                var z = a[b + 14];
                var A = a[b + 15];
                var B = f[0];
                var C = f[1];
                var D = f[2];
                var E = f[3];
                B = j(B, C, D, E, g, 7, h[0]);
                E = j(E, B, C, D, i, 12, h[1]);
                D = j(D, E, B, C, n, 17, h[2]);
                C = j(C, D, E, B, o, 22, h[3]);
                B = j(B, C, D, E, p, 7, h[4]);
                E = j(E, B, C, D, q, 12, h[5]);
                D = j(D, E, B, C, r, 17, h[6]);
                C = j(C, D, E, B, s, 22, h[7]);
                B = j(B, C, D, E, t, 7, h[8]);
                E = j(E, B, C, D, u, 12, h[9]);
                D = j(D, E, B, C, v, 17, h[10]);
                C = j(C, D, E, B, w, 22, h[11]);
                B = j(B, C, D, E, x, 7, h[12]);
                E = j(E, B, C, D, y, 12, h[13]);
                D = j(D, E, B, C, z, 17, h[14]);
                C = j(C, D, E, B, A, 22, h[15]);
                B = k(B, C, D, E, i, 5, h[16]);
                E = k(E, B, C, D, r, 9, h[17]);
                D = k(D, E, B, C, w, 14, h[18]);
                C = k(C, D, E, B, g, 20, h[19]);
                B = k(B, C, D, E, q, 5, h[20]);
                E = k(E, B, C, D, v, 9, h[21]);
                D = k(D, E, B, C, A, 14, h[22]);
                C = k(C, D, E, B, p, 20, h[23]);
                B = k(B, C, D, E, u, 5, h[24]);
                E = k(E, B, C, D, z, 9, h[25]);
                D = k(D, E, B, C, o, 14, h[26]);
                C = k(C, D, E, B, t, 20, h[27]);
                B = k(B, C, D, E, y, 5, h[28]);
                E = k(E, B, C, D, n, 9, h[29]);
                D = k(D, E, B, C, s, 14, h[30]);
                C = k(C, D, E, B, x, 20, h[31]);
                B = l(B, C, D, E, q, 4, h[32]);
                E = l(E, B, C, D, t, 11, h[33]);
                D = l(D, E, B, C, w, 16, h[34]);
                C = l(C, D, E, B, z, 23, h[35]);
                B = l(B, C, D, E, i, 4, h[36]);
                E = l(E, B, C, D, p, 11, h[37]);
                D = l(D, E, B, C, s, 16, h[38]);
                C = l(C, D, E, B, v, 23, h[39]);
                B = l(B, C, D, E, y, 4, h[40]);
                E = l(E, B, C, D, g, 11, h[41]);
                D = l(D, E, B, C, o, 16, h[42]);
                C = l(C, D, E, B, r, 23, h[43]);
                B = l(B, C, D, E, u, 4, h[44]);
                E = l(E, B, C, D, x, 11, h[45]);
                D = l(D, E, B, C, A, 16, h[46]);
                C = l(C, D, E, B, n, 23, h[47]);
                B = m(B, C, D, E, g, 6, h[48]);
                E = m(E, B, C, D, s, 10, h[49]);
                D = m(D, E, B, C, z, 15, h[50]);
                C = m(C, D, E, B, q, 21, h[51]);
                B = m(B, C, D, E, x, 6, h[52]);
                E = m(E, B, C, D, o, 10, h[53]);
                D = m(D, E, B, C, v, 15, h[54]);
                C = m(C, D, E, B, i, 21, h[55]);
                B = m(B, C, D, E, t, 6, h[56]);
                E = m(E, B, C, D, A, 10, h[57]);
                D = m(D, E, B, C, r, 15, h[58]);
                C = m(C, D, E, B, y, 21, h[59]);
                B = m(B, C, D, E, p, 6, h[60]);
                E = m(E, B, C, D, w, 10, h[61]);
                D = m(D, E, B, C, n, 15, h[62]);
                C = m(C, D, E, B, u, 21, h[63]);
                f[0] = f[0] + B | 0;
                f[1] = f[1] + C | 0;
                f[2] = f[2] + D | 0;
                f[3] = f[3] + E | 0;
              },
              _doFinalize: function () {
                var a = this._data;
                var c = a.words;
                var d = this._nDataBytes * 8;
                var e = a.sigBytes * 8;
                c[e >>> 5] |= 128 << 24 - e % 32;
                var f = b.floor(d / 4294967296);
                var g = d;
                c[(e + 64 >>> 9 << 4) + 15] = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & 4278255360;
                c[(e + 64 >>> 9 << 4) + 14] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360;
                a.sigBytes = (c.length + 1) * 4;
                this._process();
                var h = this._hash;
                var i = h.words;
                for (var j = 0; j < 4; j++) {
                  var k = i[j];
                  i[j] = (k << 8 | k >>> 24) & 16711935 | (k << 24 | k >>> 8) & 4278255360;
                }
                return h;
              },
              clone: function () {
                var a = f.clone.call(this);
                a._hash = this._hash.clone();
                return a;
              }
            });
            function j(a, b, c, d, e, f, g) {
              var h = a + (b & c | ~b & d) + e + g;
              return (h << f | h >>> 32 - f) + b;
            }
            function k(a, b, c, d, e, f, g) {
              var h = a + (b & d | c & ~d) + e + g;
              return (h << f | h >>> 32 - f) + b;
            }
            function l(a, b, c, d, e, f, g) {
              var h = a + (b ^ c ^ d) + e + g;
              return (h << f | h >>> 32 - f) + b;
            }
            function m(a, b, c, d, e, f, g) {
              var h = a + (c ^ (b | ~d)) + e + g;
              return (h << f | h >>> 32 - f) + b;
            }
            c.MD5 = f._createHelper(i);
            c.HmacMD5 = f._createHmacHelper(i);
          })(Math);
          return a.MD5;
        });
      }
    });
    var Ti = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha1.js"(a, b) {
        'use strict';

        (function (c, d) {
          if (typeof a === "object") {
            b.exports = a = d(Ni());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          (function () {
            var b = a;
            var c = b.lib;
            var d = c.WordArray;
            var e = c.Hasher;
            var f = b.algo;
            var g = [];
            var h = f.SHA1 = e.extend({
              _doReset: function () {
                this._hash = new d.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function (a, b) {
                var c = this._hash.words;
                var d = c[0];
                var e = c[1];
                var f = c[2];
                var h = c[3];
                var i = c[4];
                for (var j = 0; j < 80; j++) {
                  if (j < 16) {
                    g[j] = a[b + j] | 0;
                  } else {
                    var k = g[j - 3] ^ g[j - 8] ^ g[j - 14] ^ g[j - 16];
                    g[j] = k << 1 | k >>> 31;
                  }
                  var l = (d << 5 | d >>> 27) + i + g[j];
                  if (j < 20) {
                    l += (e & f | ~e & h) + 1518500249;
                  } else if (j < 40) {
                    l += (e ^ f ^ h) + 1859775393;
                  } else if (j < 60) {
                    l += (e & f | e & h | f & h) - 1894007588;
                  } else {
                    l += (e ^ f ^ h) - 899497514;
                  }
                  i = h;
                  h = f;
                  f = e << 30 | e >>> 2;
                  e = d;
                  d = l;
                }
                c[0] = c[0] + d | 0;
                c[1] = c[1] + e | 0;
                c[2] = c[2] + f | 0;
                c[3] = c[3] + h | 0;
                c[4] = c[4] + i | 0;
              },
              _doFinalize: function () {
                var a = this._data;
                var b = a.words;
                var c = this._nDataBytes * 8;
                var d = a.sigBytes * 8;
                b[d >>> 5] |= 128 << 24 - d % 32;
                b[(d + 64 >>> 9 << 4) + 14] = Math.floor(c / 4294967296);
                b[(d + 64 >>> 9 << 4) + 15] = c;
                a.sigBytes = b.length * 4;
                this._process();
                return this._hash;
              },
              clone: function () {
                var a = e.clone.call(this);
                a._hash = this._hash.clone();
                return a;
              }
            });
            b.SHA1 = e._createHelper(h);
            b.HmacSHA1 = e._createHmacHelper(h);
          })();
          return a.SHA1;
        });
      }
    });
    var Ui = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha256.js"(a, b) {
        'use strict';

        (function (c, d) {
          if (typeof a === "object") {
            b.exports = a = d(Ni());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          (function (b) {
            var c = a;
            var d = c.lib;
            var e = d.WordArray;
            var f = d.Hasher;
            var g = c.algo;
            var h = [];
            var i = [];
            (function () {
              function a(a) {
                var c = b.sqrt(a);
                for (var d = 2; d <= c; d++) {
                  if (!(a % d)) {
                    return false;
                  }
                }
                return true;
              }
              function c(a) {
                return (a - (a | 0)) * 4294967296 | 0;
              }
              var d = 2;
              var e = 0;
              while (e < 64) {
                if (a(d)) {
                  if (e < 8) {
                    h[e] = c(b.pow(d, 1 / 2));
                  }
                  i[e] = c(b.pow(d, 1 / 3));
                  e++;
                }
                d++;
              }
            })();
            var j = [];
            var k = g.SHA256 = f.extend({
              _doReset: function () {
                this._hash = new e.init(h.slice(0));
              },
              _doProcessBlock: function (a, b) {
                var c = this._hash.words;
                var d = c[0];
                var e = c[1];
                var f = c[2];
                var g = c[3];
                var h = c[4];
                var k = c[5];
                var l = c[6];
                var m = c[7];
                for (var n = 0; n < 64; n++) {
                  if (n < 16) {
                    j[n] = a[b + n] | 0;
                  } else {
                    var o = j[n - 15];
                    var p = (o << 25 | o >>> 7) ^ (o << 14 | o >>> 18) ^ o >>> 3;
                    var q = j[n - 2];
                    var r = (q << 15 | q >>> 17) ^ (q << 13 | q >>> 19) ^ q >>> 10;
                    j[n] = p + j[n - 7] + r + j[n - 16];
                  }
                  var s = h & k ^ ~h & l;
                  var t = d & e ^ d & f ^ e & f;
                  var u = (d << 30 | d >>> 2) ^ (d << 19 | d >>> 13) ^ (d << 10 | d >>> 22);
                  var v = (h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25);
                  var w = m + v + s + i[n] + j[n];
                  var x = u + t;
                  m = l;
                  l = k;
                  k = h;
                  h = g + w | 0;
                  g = f;
                  f = e;
                  e = d;
                  d = w + x | 0;
                }
                c[0] = c[0] + d | 0;
                c[1] = c[1] + e | 0;
                c[2] = c[2] + f | 0;
                c[3] = c[3] + g | 0;
                c[4] = c[4] + h | 0;
                c[5] = c[5] + k | 0;
                c[6] = c[6] + l | 0;
                c[7] = c[7] + m | 0;
              },
              _doFinalize: function () {
                var a = this._data;
                var c = a.words;
                var d = this._nDataBytes * 8;
                var e = a.sigBytes * 8;
                c[e >>> 5] |= 128 << 24 - e % 32;
                c[(e + 64 >>> 9 << 4) + 14] = b.floor(d / 4294967296);
                c[(e + 64 >>> 9 << 4) + 15] = d;
                a.sigBytes = c.length * 4;
                this._process();
                return this._hash;
              },
              clone: function () {
                var a = f.clone.call(this);
                a._hash = this._hash.clone();
                return a;
              }
            });
            c.SHA256 = f._createHelper(k);
            c.HmacSHA256 = f._createHmacHelper(k);
          })(Math);
          return a.SHA256;
        });
      }
    });
    var Vi = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha224.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), Ui());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha256"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          (function () {
            var b = a;
            var c = b.lib;
            var d = c.WordArray;
            var e = b.algo;
            var f = e.SHA256;
            var g = e.SHA224 = f.extend({
              _doReset: function () {
                this._hash = new d.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
              },
              _doFinalize: function () {
                var a = f._doFinalize.call(this);
                a.sigBytes -= 4;
                return a;
              }
            });
            b.SHA224 = f._createHelper(g);
            b.HmacSHA224 = f._createHmacHelper(g);
          })();
          return a.SHA224;
        });
      }
    });
    var Wi = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha512.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), Oi());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          (function () {
            var b = a;
            var c = b.lib;
            var d = c.Hasher;
            var e = b.x64;
            var f = e.Word;
            var g = e.WordArray;
            var h = b.algo;
            function i() {
              return f.create.apply(f, arguments);
            }
            var j = [i(1116352408, 3609767458), i(1899447441, 602891725), i(3049323471, 3964484399), i(3921009573, 2173295548), i(961987163, 4081628472), i(1508970993, 3053834265), i(2453635748, 2937671579), i(2870763221, 3664609560), i(3624381080, 2734883394), i(310598401, 1164996542), i(607225278, 1323610764), i(1426881987, 3590304994), i(1925078388, 4068182383), i(2162078206, 991336113), i(2614888103, 633803317), i(3248222580, 3479774868), i(3835390401, 2666613458), i(4022224774, 944711139), i(264347078, 2341262773), i(604807628, 2007800933), i(770255983, 1495990901), i(1249150122, 1856431235), i(1555081692, 3175218132), i(1996064986, 2198950837), i(2554220882, 3999719339), i(2821834349, 766784016), i(2952996808, 2566594879), i(3210313671, 3203337956), i(3336571891, 1034457026), i(3584528711, 2466948901), i(113926993, 3758326383), i(338241895, 168717936), i(666307205, 1188179964), i(773529912, 1546045734), i(1294757372, 1522805485), i(1396182291, 2643833823), i(1695183700, 2343527390), i(1986661051, 1014477480), i(2177026350, 1206759142), i(2456956037, 344077627), i(2730485921, 1290863460), i(2820302411, 3158454273), i(3259730800, 3505952657), i(3345764771, 106217008), i(3516065817, 3606008344), i(3600352804, 1432725776), i(4094571909, 1467031594), i(275423344, 851169720), i(430227734, 3100823752), i(506948616, 1363258195), i(659060556, 3750685593), i(883997877, 3785050280), i(958139571, 3318307427), i(1322822218, 3812723403), i(1537002063, 2003034995), i(1747873779, 3602036899), i(1955562222, 1575990012), i(2024104815, 1125592928), i(2227730452, 2716904306), i(2361852424, 442776044), i(2428436474, 593698344), i(2756734187, 3733110249), i(3204031479, 2999351573), i(3329325298, 3815920427), i(3391569614, 3928383900), i(3515267271, 566280711), i(3940187606, 3454069534), i(4118630271, 4000239992), i(116418474, 1914138554), i(174292421, 2731055270), i(289380356, 3203993006), i(460393269, 320620315), i(685471733, 587496836), i(852142971, 1086792851), i(1017036298, 365543100), i(1126000580, 2618297676), i(1288033470, 3409855158), i(1501505948, 4234509866), i(1607167915, 987167468), i(1816402316, 1246189591)];
            var k = [];
            (function () {
              for (var a = 0; a < 80; a++) {
                k[a] = i();
              }
            })();
            var l = h.SHA512 = d.extend({
              _doReset: function () {
                this._hash = new g.init([new f.init(1779033703, 4089235720), new f.init(3144134277, 2227873595), new f.init(1013904242, 4271175723), new f.init(2773480762, 1595750129), new f.init(1359893119, 2917565137), new f.init(2600822924, 725511199), new f.init(528734635, 4215389547), new f.init(1541459225, 327033209)]);
              },
              _doProcessBlock: function (a, b) {
                var c = this._hash.words;
                var d = c[0];
                var e = c[1];
                var f = c[2];
                var g = c[3];
                var h = c[4];
                var i = c[5];
                var l = c[6];
                var m = c[7];
                var n = d.high;
                var o = d.low;
                var p = e.high;
                var q = e.low;
                var r = f.high;
                var s = f.low;
                var t = g.high;
                var u = g.low;
                var v = h.high;
                var w = h.low;
                var x = i.high;
                var y = i.low;
                var z = l.high;
                var A = l.low;
                var B = m.high;
                var C = m.low;
                var D = n;
                var E = o;
                var F = p;
                var G = q;
                var H = r;
                var I = s;
                var J = t;
                var K = u;
                var L = v;
                var M = w;
                var N = x;
                var O = y;
                var P = z;
                var Q = A;
                var R = B;
                var S = C;
                for (var T = 0; T < 80; T++) {
                  var U = k[T];
                  if (T < 16) {
                    var V = U.high = a[b + T * 2] | 0;
                    var W = U.low = a[b + T * 2 + 1] | 0;
                  } else {
                    var X = k[T - 15];
                    var Y = X.high;
                    var Z = X.low;
                    var $ = (Y >>> 1 | Z << 31) ^ (Y >>> 8 | Z << 24) ^ Y >>> 7;
                    var _ = (Z >>> 1 | Y << 31) ^ (Z >>> 8 | Y << 24) ^ (Z >>> 7 | Y << 25);
                    var aa = k[T - 2];
                    var ba = aa.high;
                    var ca = aa.low;
                    var da = (ba >>> 19 | ca << 13) ^ (ba << 3 | ca >>> 29) ^ ba >>> 6;
                    var ea = (ca >>> 19 | ba << 13) ^ (ca << 3 | ba >>> 29) ^ (ca >>> 6 | ba << 26);
                    var fa = k[T - 7];
                    var ga = fa.high;
                    var ha = fa.low;
                    var ia = k[T - 16];
                    var ja = ia.high;
                    var ka = ia.low;
                    var W = _ + ha;
                    var V = $ + ga + (W >>> 0 < _ >>> 0 ? 1 : 0);
                    var W = W + ea;
                    var V = V + da + (W >>> 0 < ea >>> 0 ? 1 : 0);
                    var W = W + ka;
                    var V = V + ja + (W >>> 0 < ka >>> 0 ? 1 : 0);
                    U.high = V;
                    U.low = W;
                  }
                  var la = L & N ^ ~L & P;
                  var ma = M & O ^ ~M & Q;
                  var na = D & F ^ D & H ^ F & H;
                  var oa = E & G ^ E & I ^ G & I;
                  var pa = (D >>> 28 | E << 4) ^ (D << 30 | E >>> 2) ^ (D << 25 | E >>> 7);
                  var qa = (E >>> 28 | D << 4) ^ (E << 30 | D >>> 2) ^ (E << 25 | D >>> 7);
                  var ra = (L >>> 14 | M << 18) ^ (L >>> 18 | M << 14) ^ (L << 23 | M >>> 9);
                  var sa = (M >>> 14 | L << 18) ^ (M >>> 18 | L << 14) ^ (M << 23 | L >>> 9);
                  var ta = j[T];
                  var ua = ta.high;
                  var va = ta.low;
                  var wa = S + sa;
                  var xa = R + ra + (wa >>> 0 < S >>> 0 ? 1 : 0);
                  var wa = wa + ma;
                  var xa = xa + la + (wa >>> 0 < ma >>> 0 ? 1 : 0);
                  var wa = wa + va;
                  var xa = xa + ua + (wa >>> 0 < va >>> 0 ? 1 : 0);
                  var wa = wa + W;
                  var xa = xa + V + (wa >>> 0 < W >>> 0 ? 1 : 0);
                  var ya = qa + oa;
                  var za = pa + na + (ya >>> 0 < qa >>> 0 ? 1 : 0);
                  R = P;
                  S = Q;
                  P = N;
                  Q = O;
                  N = L;
                  O = M;
                  M = K + wa | 0;
                  L = J + xa + (M >>> 0 < K >>> 0 ? 1 : 0) | 0;
                  J = H;
                  K = I;
                  H = F;
                  I = G;
                  F = D;
                  G = E;
                  E = wa + ya | 0;
                  D = xa + za + (E >>> 0 < wa >>> 0 ? 1 : 0) | 0;
                }
                o = d.low = o + E;
                d.high = n + D + (o >>> 0 < E >>> 0 ? 1 : 0);
                q = e.low = q + G;
                e.high = p + F + (q >>> 0 < G >>> 0 ? 1 : 0);
                s = f.low = s + I;
                f.high = r + H + (s >>> 0 < I >>> 0 ? 1 : 0);
                u = g.low = u + K;
                g.high = t + J + (u >>> 0 < K >>> 0 ? 1 : 0);
                w = h.low = w + M;
                h.high = v + L + (w >>> 0 < M >>> 0 ? 1 : 0);
                y = i.low = y + O;
                i.high = x + N + (y >>> 0 < O >>> 0 ? 1 : 0);
                A = l.low = A + Q;
                l.high = z + P + (A >>> 0 < Q >>> 0 ? 1 : 0);
                C = m.low = C + S;
                m.high = B + R + (C >>> 0 < S >>> 0 ? 1 : 0);
              },
              _doFinalize: function () {
                var a = this._data;
                var b = a.words;
                var c = this._nDataBytes * 8;
                var d = a.sigBytes * 8;
                b[d >>> 5] |= 128 << 24 - d % 32;
                b[(d + 128 >>> 10 << 5) + 30] = Math.floor(c / 4294967296);
                b[(d + 128 >>> 10 << 5) + 31] = c;
                a.sigBytes = b.length * 4;
                this._process();
                var e = this._hash.toX32();
                return e;
              },
              clone: function () {
                var a = d.clone.call(this);
                a._hash = this._hash.clone();
                return a;
              },
              blockSize: 32
            });
            b.SHA512 = d._createHelper(l);
            b.HmacSHA512 = d._createHmacHelper(l);
          })();
          return a.SHA512;
        });
      }
    });
    var Xi = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha384.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), Oi(), Wi());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core", "./sha512"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          (function () {
            var b = a;
            var c = b.x64;
            var d = c.Word;
            var e = c.WordArray;
            var f = b.algo;
            var g = f.SHA512;
            var h = f.SHA384 = g.extend({
              _doReset: function () {
                this._hash = new e.init([new d.init(3418070365, 3238371032), new d.init(1654270250, 914150663), new d.init(2438529370, 812702999), new d.init(355462360, 4144912697), new d.init(1731405415, 4290775857), new d.init(2394180231, 1750603025), new d.init(3675008525, 1694076839), new d.init(1203062813, 3204075428)]);
              },
              _doFinalize: function () {
                var a = g._doFinalize.call(this);
                a.sigBytes -= 16;
                return a;
              }
            });
            b.SHA384 = g._createHelper(h);
            b.HmacSHA384 = g._createHmacHelper(h);
          })();
          return a.SHA384;
        });
      }
    });
    var Yi = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha3.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), Oi());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          (function (b) {
            var c = a;
            var d = c.lib;
            var e = d.WordArray;
            var f = d.Hasher;
            var g = c.x64;
            var h = g.Word;
            var i = c.algo;
            var j = [];
            var k = [];
            var l = [];
            (function () {
              var a = 1;
              var b = 0;
              for (var c = 0; c < 24; c++) {
                j[a + b * 5] = (c + 1) * (c + 2) / 2 % 64;
                var d = b % 5;
                var e = (a * 2 + b * 3) % 5;
                a = d;
                b = e;
              }
              for (var a = 0; a < 5; a++) {
                for (var b = 0; b < 5; b++) {
                  k[a + b * 5] = b + (a * 2 + b * 3) % 5 * 5;
                }
              }
              var f = 1;
              for (var g = 0; g < 24; g++) {
                var i = 0;
                var m = 0;
                for (var n = 0; n < 7; n++) {
                  if (f & 1) {
                    var o = (1 << n) - 1;
                    if (o < 32) {
                      m ^= 1 << o;
                    } else {
                      i ^= 1 << o - 32;
                    }
                  }
                  if (f & 128) {
                    f = f << 1 ^ 113;
                  } else {
                    f <<= 1;
                  }
                }
                l[g] = h.create(i, m);
              }
            })();
            var m = [];
            (function () {
              for (var a = 0; a < 25; a++) {
                m[a] = h.create();
              }
            })();
            var n = i.SHA3 = f.extend({
              cfg: f.cfg.extend({
                outputLength: 512
              }),
              _doReset: function () {
                var a = this._state = [];
                for (var b = 0; b < 25; b++) {
                  a[b] = new h.init();
                }
                this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
              },
              _doProcessBlock: function (a, b) {
                var c = this._state;
                var d = this.blockSize / 2;
                for (var e = 0; e < d; e++) {
                  var f = a[b + e * 2];
                  var g = a[b + e * 2 + 1];
                  f = (f << 8 | f >>> 24) & 16711935 | (f << 24 | f >>> 8) & 4278255360;
                  g = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360;
                  var h = c[e];
                  h.high ^= g;
                  h.low ^= f;
                }
                for (var i = 0; i < 24; i++) {
                  for (var n = 0; n < 5; n++) {
                    var o = 0;
                    var p = 0;
                    for (var q = 0; q < 5; q++) {
                      var h = c[n + q * 5];
                      o ^= h.high;
                      p ^= h.low;
                    }
                    var r = m[n];
                    r.high = o;
                    r.low = p;
                  }
                  for (var n = 0; n < 5; n++) {
                    var s = m[(n + 4) % 5];
                    var t = m[(n + 1) % 5];
                    var u = t.high;
                    var v = t.low;
                    var o = s.high ^ (u << 1 | v >>> 31);
                    var p = s.low ^ (v << 1 | u >>> 31);
                    for (var q = 0; q < 5; q++) {
                      var h = c[n + q * 5];
                      h.high ^= o;
                      h.low ^= p;
                    }
                  }
                  for (var w = 1; w < 25; w++) {
                    var h = c[w];
                    var x = h.high;
                    var y = h.low;
                    var z = j[w];
                    if (z < 32) {
                      var o = x << z | y >>> 32 - z;
                      var p = y << z | x >>> 32 - z;
                    } else {
                      var o = y << z - 32 | x >>> 64 - z;
                      var p = x << z - 32 | y >>> 64 - z;
                    }
                    var A = m[k[w]];
                    A.high = o;
                    A.low = p;
                  }
                  var B = m[0];
                  var C = c[0];
                  B.high = C.high;
                  B.low = C.low;
                  for (var n = 0; n < 5; n++) {
                    for (var q = 0; q < 5; q++) {
                      var w = n + q * 5;
                      var h = c[w];
                      var D = m[w];
                      var E = m[(n + 1) % 5 + q * 5];
                      var F = m[(n + 2) % 5 + q * 5];
                      h.high = D.high ^ ~E.high & F.high;
                      h.low = D.low ^ ~E.low & F.low;
                    }
                  }
                  var h = c[0];
                  var G = l[i];
                  h.high ^= G.high;
                  h.low ^= G.low;
                  ;
                }
              },
              _doFinalize: function () {
                var a = this._data;
                var c = a.words;
                var d = this._nDataBytes * 8;
                var f = a.sigBytes * 8;
                var g = this.blockSize * 32;
                c[f >>> 5] |= 1 << 24 - f % 32;
                c[(b.ceil((f + 1) / g) * g >>> 5) - 1] |= 128;
                a.sigBytes = c.length * 4;
                this._process();
                var h = this._state;
                var i = this.cfg.outputLength / 8;
                var j = i / 8;
                var k = [];
                for (var l = 0; l < j; l++) {
                  var m = h[l];
                  var n = m.high;
                  var o = m.low;
                  n = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360;
                  o = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360;
                  k.push(o);
                  k.push(n);
                }
                return new e.init(k, i);
              },
              clone: function () {
                var a = f.clone.call(this);
                var b = a._state = this._state.slice(0);
                for (var c = 0; c < 25; c++) {
                  b[c] = b[c].clone();
                }
                return a;
              }
            });
            c.SHA3 = f._createHelper(n);
            c.HmacSHA3 = f._createHmacHelper(n);
          })(Math);
          return a.SHA3;
        });
      }
    });
    var Zi = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/ripemd160.js"(a, b) {
        'use strict';

        (function (c, d) {
          if (typeof a === "object") {
            b.exports = a = d(Ni());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          (function (b) {
            var c = a;
            var d = c.lib;
            var e = d.WordArray;
            var f = d.Hasher;
            var g = c.algo;
            var h = e.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
            var i = e.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
            var j = e.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
            var k = e.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
            var l = e.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
            var m = e.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
            var n = g.RIPEMD160 = f.extend({
              _doReset: function () {
                this._hash = e.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function (a, b) {
                for (var c = 0; c < 16; c++) {
                  var d = b + c;
                  var e = a[d];
                  a[d] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
                }
                var f = this._hash.words;
                var g = l.words;
                var n = m.words;
                var u = h.words;
                var v = i.words;
                var w = j.words;
                var x = k.words;
                var y;
                var z;
                var A;
                var B;
                var C;
                var D;
                var E;
                var F;
                var G;
                var H;
                D = y = f[0];
                E = z = f[1];
                F = A = f[2];
                G = B = f[3];
                H = C = f[4];
                var I;
                for (var c = 0; c < 80; c += 1) {
                  I = y + a[b + u[c]] | 0;
                  if (c < 16) {
                    I += o(z, A, B) + g[0];
                  } else if (c < 32) {
                    I += p(z, A, B) + g[1];
                  } else if (c < 48) {
                    I += q(z, A, B) + g[2];
                  } else if (c < 64) {
                    I += r(z, A, B) + g[3];
                  } else {
                    I += s(z, A, B) + g[4];
                  }
                  I = I | 0;
                  I = t(I, w[c]);
                  I = I + C | 0;
                  y = C;
                  C = B;
                  B = t(A, 10);
                  A = z;
                  z = I;
                  I = D + a[b + v[c]] | 0;
                  if (c < 16) {
                    I += s(E, F, G) + n[0];
                  } else if (c < 32) {
                    I += r(E, F, G) + n[1];
                  } else if (c < 48) {
                    I += q(E, F, G) + n[2];
                  } else if (c < 64) {
                    I += p(E, F, G) + n[3];
                  } else {
                    I += o(E, F, G) + n[4];
                  }
                  I = I | 0;
                  I = t(I, x[c]);
                  I = I + H | 0;
                  D = H;
                  H = G;
                  G = t(F, 10);
                  F = E;
                  E = I;
                }
                I = f[1] + A + G | 0;
                f[1] = f[2] + B + H | 0;
                f[2] = f[3] + C + D | 0;
                f[3] = f[4] + y + E | 0;
                f[4] = f[0] + z + F | 0;
                f[0] = I;
              },
              _doFinalize: function () {
                var a = this._data;
                var b = a.words;
                var c = this._nDataBytes * 8;
                var d = a.sigBytes * 8;
                b[d >>> 5] |= 128 << 24 - d % 32;
                b[(d + 64 >>> 9 << 4) + 14] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
                a.sigBytes = (b.length + 1) * 4;
                this._process();
                var e = this._hash;
                var f = e.words;
                for (var g = 0; g < 5; g++) {
                  var h = f[g];
                  f[g] = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360;
                }
                return e;
              },
              clone: function () {
                var a = f.clone.call(this);
                a._hash = this._hash.clone();
                return a;
              }
            });
            function o(a, b, c) {
              return a ^ b ^ c;
            }
            function p(a, b, c) {
              return a & b | ~a & c;
            }
            function q(a, b, c) {
              return (a | ~b) ^ c;
            }
            function r(a, b, c) {
              return a & c | b & ~c;
            }
            function s(a, b, c) {
              return a ^ (b | ~c);
            }
            function t(a, b) {
              return a << b | a >>> 32 - b;
            }
            c.RIPEMD160 = f._createHelper(n);
            c.HmacRIPEMD160 = f._createHmacHelper(n);
          })(Math);
          return a.RIPEMD160;
        });
      }
    });
    var $i = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/hmac.js"(a, b) {
        'use strict';

        (function (c, d) {
          if (typeof a === "object") {
            b.exports = a = d(Ni());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          (function () {
            var b = a;
            var c = b.lib;
            var d = c.Base;
            var e = b.enc;
            var f = e.Utf8;
            var g = b.algo;
            var h = g.HMAC = d.extend({
              init: function (a, b) {
                a = this._hasher = new a.init();
                if (typeof b == "string") {
                  b = f.parse(b);
                }
                var c = a.blockSize;
                var d = c * 4;
                if (b.sigBytes > d) {
                  b = a.finalize(b);
                }
                b.clamp();
                var e = this._oKey = b.clone();
                var g = this._iKey = b.clone();
                var h = e.words;
                var i = g.words;
                for (var j = 0; j < c; j++) {
                  h[j] ^= 1549556828;
                  i[j] ^= 909522486;
                }
                e.sigBytes = g.sigBytes = d;
                this.reset();
              },
              reset: function () {
                var a = this._hasher;
                a.reset();
                a.update(this._iKey);
              },
              update: function (a) {
                this._hasher.update(a);
                return this;
              },
              finalize: function (a) {
                var b = this._hasher;
                var c = b.finalize(a);
                b.reset();
                var d = b.finalize(this._oKey.clone().concat(c));
                return d;
              }
            });
          })();
        });
      }
    });
    var _i = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pbkdf2.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), Ti(), $i());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha1", "./hmac"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          (function () {
            var b = a;
            var c = b.lib;
            var d = c.Base;
            var e = c.WordArray;
            var f = b.algo;
            var g = f.SHA1;
            var h = f.HMAC;
            var i = {
              keySize: 4,
              hasher: g,
              iterations: 1
            };
            var j = f.PBKDF2 = d.extend({
              cfg: d.extend(i),
              init: function (a) {
                this.cfg = this.cfg.extend(a);
              },
              compute: function (a, b) {
                var c = this.cfg;
                var d = h.create(c.hasher, a);
                var f = e.create();
                var g = e.create([1]);
                var i = f.words;
                var j = g.words;
                var k = c.keySize;
                var l = c.iterations;
                while (i.length < k) {
                  var m = d.update(b).finalize(g);
                  d.reset();
                  var n = m.words;
                  var o = n.length;
                  var p = m;
                  for (var q = 1; q < l; q++) {
                    p = d.finalize(p);
                    d.reset();
                    var r = p.words;
                    for (var s = 0; s < o; s++) {
                      n[s] ^= r[s];
                    }
                  }
                  f.concat(m);
                  j[0]++;
                }
                f.sigBytes = k * 4;
                return f;
              }
            });
            b.PBKDF2 = function (a, b, c) {
              return j.create(c).compute(a, b);
            };
          })();
          return a.PBKDF2;
        });
      }
    });
    var aj = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/evpkdf.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), Ti(), $i());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha1", "./hmac"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          (function () {
            var b = a;
            var c = b.lib;
            var d = c.Base;
            var e = c.WordArray;
            var f = b.algo;
            var g = f.MD5;
            var h = {
              keySize: 4,
              hasher: g,
              iterations: 1
            };
            var i = f.EvpKDF = d.extend({
              cfg: d.extend(h),
              init: function (a) {
                this.cfg = this.cfg.extend(a);
              },
              compute: function (a, b) {
                var c = this.cfg;
                var d = c.hasher.create();
                var f = e.create();
                var g = f.words;
                var h = c.keySize;
                var i = c.iterations;
                while (g.length < h) {
                  if (j) {
                    d.update(j);
                  }
                  var j = d.update(a).finalize(b);
                  d.reset();
                  for (var k = 1; k < i; k++) {
                    j = d.finalize(j);
                    d.reset();
                  }
                  f.concat(j);
                }
                f.sigBytes = h * 4;
                return f;
              }
            });
            b.EvpKDF = function (a, b, c) {
              return i.create(c).compute(a, b);
            };
          })();
          return a.EvpKDF;
        });
      }
    });
    var bj = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/cipher-core.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), aj());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./evpkdf"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          if (!a.lib.Cipher) {
            (function (b) {
              var c = a;
              var d = c.lib;
              var e = d.Base;
              var f = d.WordArray;
              var g = d.BufferedBlockAlgorithm;
              var h = c.enc;
              var i = h.Utf8;
              var j = h.Base64;
              var k = c.algo;
              var l = k.EvpKDF;
              var m = d.Cipher = g.extend({
                cfg: e.extend(),
                createEncryptor: function (a, b) {
                  return this.create(this._ENC_XFORM_MODE, a, b);
                },
                createDecryptor: function (a, b) {
                  return this.create(this._DEC_XFORM_MODE, a, b);
                },
                init: function (a, b, c) {
                  this.cfg = this.cfg.extend(c);
                  this._xformMode = a;
                  this._key = b;
                  this.reset();
                },
                reset: function () {
                  g.reset.call(this);
                  this._doReset();
                },
                process: function (a) {
                  this._append(a);
                  return this._process();
                },
                finalize: function (a) {
                  if (a) {
                    this._append(a);
                  }
                  var b = this._doFinalize();
                  return b;
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function () {
                  function a(a) {
                    if (typeof a == "string") {
                      return D;
                    } else {
                      return z;
                    }
                  }
                  return function (b) {
                    return {
                      encrypt: function (c, d, e) {
                        return a(d).encrypt(b, c, d, e);
                      },
                      decrypt: function (c, d, e) {
                        return a(d).decrypt(b, c, d, e);
                      }
                    };
                  };
                }()
              });
              var n = d.StreamCipher = m.extend({
                _doFinalize: function () {
                  var a = this._process(true);
                  return a;
                },
                blockSize: 1
              });
              var o = c.mode = {};
              var p = d.BlockCipherMode = e.extend({
                createEncryptor: function (a, b) {
                  return this.Encryptor.create(a, b);
                },
                createDecryptor: function (a, b) {
                  return this.Decryptor.create(a, b);
                },
                init: function (a, b) {
                  this._cipher = a;
                  this._iv = b;
                }
              });
              var q = o.CBC = function () {
                var a = p.extend();
                a.Encryptor = a.extend({
                  processBlock: function (a, b) {
                    var d = this._cipher;
                    var e = d.blockSize;
                    c.call(this, a, b, e);
                    d.encryptBlock(a, b);
                    this._prevBlock = a.slice(b, b + e);
                  }
                });
                a.Decryptor = a.extend({
                  processBlock: function (a, b) {
                    var d = this._cipher;
                    var e = d.blockSize;
                    var f = a.slice(b, b + e);
                    d.decryptBlock(a, b);
                    c.call(this, a, b, e);
                    this._prevBlock = f;
                  }
                });
                function c(a, c, d) {
                  var e = this._iv;
                  if (e) {
                    var f = e;
                    this._iv = b;
                  } else {
                    var f = this._prevBlock;
                  }
                  for (var g = 0; g < d; g++) {
                    a[c + g] ^= f[g];
                  }
                }
                return a;
              }();
              var r = c.pad = {};
              var s = r.Pkcs7 = {
                pad: function (a, b) {
                  var c = b * 4;
                  var d = c - a.sigBytes % c;
                  var e = d << 24 | d << 16 | d << 8 | d;
                  var g = [];
                  for (var h = 0; h < d; h += 4) {
                    g.push(e);
                  }
                  var i = f.create(g, d);
                  a.concat(i);
                },
                unpad: function (a) {
                  var b = a.words[a.sigBytes - 1 >>> 2] & 255;
                  a.sigBytes -= b;
                }
              };
              var t = {
                mode: q,
                padding: s
              };
              var u = d.BlockCipher = m.extend({
                cfg: m.cfg.extend(t),
                reset: function () {
                  m.reset.call(this);
                  var a = this.cfg;
                  var b = a.iv;
                  var c = a.mode;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    var d = c.createEncryptor;
                  } else {
                    var d = c.createDecryptor;
                    this._minBufferSize = 1;
                  }
                  if (this._mode && this._mode.__creator == d) {
                    this._mode.init(this, b && b.words);
                  } else {
                    this._mode = d.call(c, this, b && b.words);
                    this._mode.__creator = d;
                  }
                },
                _doProcessBlock: function (a, b) {
                  this._mode.processBlock(a, b);
                },
                _doFinalize: function () {
                  var a = this.cfg.padding;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    a.pad(this._data, this.blockSize);
                    var b = this._process(true);
                  } else {
                    var b = this._process(true);
                    a.unpad(b);
                  }
                  return b;
                },
                blockSize: 4
              });
              var v = d.CipherParams = e.extend({
                init: function (a) {
                  this.mixIn(a);
                },
                toString: function (a) {
                  return (a || this.formatter).stringify(this);
                }
              });
              var w = c.format = {};
              var x = w.OpenSSL = {
                stringify: function (a) {
                  var b = a.ciphertext;
                  var c = a.salt;
                  if (c) {
                    var d = f.create([1398893684, 1701076831]).concat(c).concat(b);
                  } else {
                    var d = b;
                  }
                  return d.toString(j);
                },
                parse: function (a) {
                  var b = j.parse(a);
                  var c = b.words;
                  if (c[0] == 1398893684 && c[1] == 1701076831) {
                    var d = f.create(c.slice(2, 4));
                    c.splice(0, 4);
                    b.sigBytes -= 16;
                  }
                  var e = {
                    ciphertext: b,
                    salt: d
                  };
                  return v.create(e);
                }
              };
              var y = {
                format: x
              };
              var z = d.SerializableCipher = e.extend({
                cfg: e.extend(y),
                encrypt: function (a, b, c, d) {
                  d = this.cfg.extend(d);
                  var e = a.createEncryptor(c, d);
                  var f = e.finalize(b);
                  var g = e.cfg;
                  var h = {
                    ciphertext: f,
                    key: c,
                    iv: g.iv,
                    algorithm: a,
                    mode: g.mode,
                    padding: g.padding,
                    blockSize: a.blockSize,
                    formatter: d.format
                  };
                  return v.create(h);
                },
                decrypt: function (a, b, c, d) {
                  d = this.cfg.extend(d);
                  b = this._parse(b, d.format);
                  var e = a.createDecryptor(c, d).finalize(b.ciphertext);
                  return e;
                },
                _parse: function (a, b) {
                  if (typeof a == "string") {
                    return b.parse(a, this);
                  } else {
                    return a;
                  }
                }
              });
              var A = c.kdf = {};
              var B = A.OpenSSL = {
                execute: function (a, b, c, d) {
                  if (!d) {
                    d = f.random(8);
                  }
                  var e = {
                    keySize: b + c
                  };
                  var g = l.create(e).compute(a, d);
                  var h = f.create(g.words.slice(b), c * 4);
                  g.sigBytes = b * 4;
                  var i = {
                    key: g,
                    iv: h,
                    salt: d
                  };
                  return v.create(i);
                }
              };
              var C = {
                kdf: B
              };
              var D = d.PasswordBasedCipher = z.extend({
                cfg: z.cfg.extend(C),
                encrypt: function (a, b, c, d) {
                  d = this.cfg.extend(d);
                  var e = d.kdf.execute(c, a.keySize, a.ivSize);
                  d.iv = e.iv;
                  var f = z.encrypt.call(this, a, b, e.key, d);
                  f.mixIn(e);
                  return f;
                },
                decrypt: function (a, b, c, d) {
                  d = this.cfg.extend(d);
                  b = this._parse(b, d.format);
                  var e = d.kdf.execute(c, a.keySize, a.ivSize, b.salt);
                  d.iv = e.iv;
                  var f = z.decrypt.call(this, a, b, e.key, d);
                  return f;
                }
              });
            })();
          }
        });
      }
    });
    var cj = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-cfb.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), bj());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          a.mode.CFB = function () {
            var b = a.lib.BlockCipherMode.extend();
            b.Encryptor = b.extend({
              processBlock: function (a, b) {
                var d = this._cipher;
                var e = d.blockSize;
                c.call(this, a, b, e, d);
                this._prevBlock = a.slice(b, b + e);
              }
            });
            b.Decryptor = b.extend({
              processBlock: function (a, b) {
                var d = this._cipher;
                var e = d.blockSize;
                var f = a.slice(b, b + e);
                c.call(this, a, b, e, d);
                this._prevBlock = f;
              }
            });
            function c(a, b, c, d) {
              var e = this._iv;
              if (e) {
                var f = e.slice(0);
                this._iv = undefined;
              } else {
                var f = this._prevBlock;
              }
              d.encryptBlock(f, 0);
              for (var g = 0; g < c; g++) {
                a[b + g] ^= f[g];
              }
            }
            return b;
          }();
          return a.mode.CFB;
        });
      }
    });
    var dj = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), bj());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          a.mode.CTR = function () {
            var b = a.lib.BlockCipherMode.extend();
            var c = b.Encryptor = b.extend({
              processBlock: function (a, b) {
                var c = this._cipher;
                var d = c.blockSize;
                var e = this._iv;
                var f = this._counter;
                if (e) {
                  f = this._counter = e.slice(0);
                  this._iv = undefined;
                }
                var g = f.slice(0);
                c.encryptBlock(g, 0);
                f[d - 1] = f[d - 1] + 1 | 0;
                for (var h = 0; h < d; h++) {
                  a[b + h] ^= g[h];
                }
              }
            });
            b.Decryptor = c;
            return b;
          }();
          return a.mode.CTR;
        });
      }
    });
    var ej = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr-gladman.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), bj());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          a.mode.CTRGladman = function () {
            var b = a.lib.BlockCipherMode.extend();
            function c(a) {
              if ((a >> 24 & 255) === 255) {
                var b = a >> 16 & 255;
                var c = a >> 8 & 255;
                var d = a & 255;
                if (b === 255) {
                  b = 0;
                  if (c === 255) {
                    c = 0;
                    if (d === 255) {
                      d = 0;
                    } else {
                      ++d;
                    }
                  } else {
                    ++c;
                  }
                } else {
                  ++b;
                }
                a = 0;
                a += b << 16;
                a += c << 8;
                a += d;
              } else {
                a += 1 << 24;
              }
              return a;
            }
            function d(a) {
              if ((a[0] = c(a[0])) === 0) {
                a[1] = c(a[1]);
              }
              return a;
            }
            var e = b.Encryptor = b.extend({
              processBlock: function (a, b) {
                var c = this._cipher;
                var e = c.blockSize;
                var f = this._iv;
                var g = this._counter;
                if (f) {
                  g = this._counter = f.slice(0);
                  this._iv = undefined;
                }
                d(g);
                var h = g.slice(0);
                c.encryptBlock(h, 0);
                for (var i = 0; i < e; i++) {
                  a[b + i] ^= h[i];
                }
              }
            });
            b.Decryptor = e;
            return b;
          }();
          return a.mode.CTRGladman;
        });
      }
    });
    var fj = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ofb.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), bj());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          a.mode.OFB = function () {
            var b = a.lib.BlockCipherMode.extend();
            var c = b.Encryptor = b.extend({
              processBlock: function (a, b) {
                var c = this._cipher;
                var d = c.blockSize;
                var e = this._iv;
                var f = this._keystream;
                if (e) {
                  f = this._keystream = e.slice(0);
                  this._iv = undefined;
                }
                c.encryptBlock(f, 0);
                for (var g = 0; g < d; g++) {
                  a[b + g] ^= f[g];
                }
              }
            });
            b.Decryptor = c;
            return b;
          }();
          return a.mode.OFB;
        });
      }
    });
    var gj = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ecb.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), bj());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          a.mode.ECB = function () {
            var b = a.lib.BlockCipherMode.extend();
            b.Encryptor = b.extend({
              processBlock: function (a, b) {
                this._cipher.encryptBlock(a, b);
              }
            });
            b.Decryptor = b.extend({
              processBlock: function (a, b) {
                this._cipher.decryptBlock(a, b);
              }
            });
            return b;
          }();
          return a.mode.ECB;
        });
      }
    });
    var hj = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-ansix923.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), bj());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          a.pad.AnsiX923 = {
            pad: function (a, b) {
              var c = a.sigBytes;
              var d = b * 4;
              var e = d - c % d;
              var f = c + e - 1;
              a.clamp();
              a.words[f >>> 2] |= e << 24 - f % 4 * 8;
              a.sigBytes += e;
            },
            unpad: function (a) {
              var b = a.words[a.sigBytes - 1 >>> 2] & 255;
              a.sigBytes -= b;
            }
          };
          return a.pad.Ansix923;
        });
      }
    });
    var ij = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso10126.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), bj());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          a.pad.Iso10126 = {
            pad: function (b, c) {
              var d = c * 4;
              var e = d - b.sigBytes % d;
              b.concat(a.lib.WordArray.random(e - 1)).concat(a.lib.WordArray.create([e << 24], 1));
            },
            unpad: function (a) {
              var b = a.words[a.sigBytes - 1 >>> 2] & 255;
              a.sigBytes -= b;
            }
          };
          return a.pad.Iso10126;
        });
      }
    });
    var jj = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso97971.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), bj());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          a.pad.Iso97971 = {
            pad: function (b, c) {
              b.concat(a.lib.WordArray.create([2147483648], 1));
              a.pad.ZeroPadding.pad(b, c);
            },
            unpad: function (b) {
              a.pad.ZeroPadding.unpad(b);
              b.sigBytes--;
            }
          };
          return a.pad.Iso97971;
        });
      }
    });
    var kj = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-zeropadding.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), bj());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          a.pad.ZeroPadding = {
            pad: function (a, b) {
              var c = b * 4;
              a.clamp();
              a.sigBytes += c - (a.sigBytes % c || c);
            },
            unpad: function (a) {
              var b = a.words;
              var c = a.sigBytes - 1;
              while (!(b[c >>> 2] >>> 24 - c % 4 * 8 & 255)) {
                c--;
              }
              a.sigBytes = c + 1;
            }
          };
          return a.pad.ZeroPadding;
        });
      }
    });
    var lj = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-nopadding.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), bj());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          var b = {
            pad: function () {},
            unpad: function () {}
          };
          a.pad.NoPadding = b;
          return a.pad.NoPadding;
        });
      }
    });
    var mj = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/format-hex.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), bj());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          (function (b) {
            var c = a;
            var d = c.lib;
            var e = d.CipherParams;
            var f = c.enc;
            var g = f.Hex;
            var h = c.format;
            var i = h.Hex = {
              stringify: function (a) {
                return a.ciphertext.toString(g);
              },
              parse: function (a) {
                var b = g.parse(a);
                var c = {
                  ciphertext: b
                };
                return e.create(c);
              }
            };
          })();
          return a.format.Hex;
        });
      }
    });
    var nj = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/aes.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), Ri(), Si(), aj(), bj());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          (function () {
            var b = a;
            var c = b.lib;
            var d = c.BlockCipher;
            var e = b.algo;
            var f = [];
            var g = [];
            var h = [];
            var i = [];
            var j = [];
            var k = [];
            var l = [];
            var m = [];
            var n = [];
            var o = [];
            (function () {
              var a = [];
              for (var b = 0; b < 256; b++) {
                if (b < 128) {
                  a[b] = b << 1;
                } else {
                  a[b] = b << 1 ^ 283;
                }
              }
              var c = 0;
              var d = 0;
              for (var b = 0; b < 256; b++) {
                var e = d ^ d << 1 ^ d << 2 ^ d << 3 ^ d << 4;
                e = e >>> 8 ^ e & 255 ^ 99;
                f[c] = e;
                g[e] = c;
                var p = a[c];
                var q = a[p];
                var r = a[q];
                var s = a[e] * 257 ^ e * 16843008;
                h[c] = s << 24 | s >>> 8;
                i[c] = s << 16 | s >>> 16;
                j[c] = s << 8 | s >>> 24;
                k[c] = s;
                var s = r * 16843009 ^ q * 65537 ^ p * 257 ^ c * 16843008;
                l[e] = s << 24 | s >>> 8;
                m[e] = s << 16 | s >>> 16;
                n[e] = s << 8 | s >>> 24;
                o[e] = s;
                if (!c) {
                  c = d = 1;
                } else {
                  c = p ^ a[a[a[r ^ p]]];
                  d ^= a[a[d]];
                }
              }
            })();
            var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
            var q = e.AES = d.extend({
              _doReset: function () {
                if (this._nRounds && this._keyPriorReset === this._key) {
                  return;
                }
                var a = this._keyPriorReset = this._key;
                var b = a.words;
                var c = a.sigBytes / 4;
                var d = this._nRounds = c + 6;
                var e = (d + 1) * 4;
                var g = this._keySchedule = [];
                for (var h = 0; h < e; h++) {
                  if (h < c) {
                    g[h] = b[h];
                  } else {
                    var i = g[h - 1];
                    if (!(h % c)) {
                      i = i << 8 | i >>> 24;
                      i = f[i >>> 24] << 24 | f[i >>> 16 & 255] << 16 | f[i >>> 8 & 255] << 8 | f[i & 255];
                      i ^= p[h / c | 0] << 24;
                    } else if (c > 6 && h % c == 4) {
                      i = f[i >>> 24] << 24 | f[i >>> 16 & 255] << 16 | f[i >>> 8 & 255] << 8 | f[i & 255];
                    }
                    g[h] = g[h - c] ^ i;
                  }
                }
                var j = this._invKeySchedule = [];
                for (var k = 0; k < e; k++) {
                  var h = e - k;
                  if (k % 4) {
                    var i = g[h];
                  } else {
                    var i = g[h - 4];
                  }
                  if (k < 4 || h <= 4) {
                    j[k] = i;
                  } else {
                    j[k] = l[f[i >>> 24]] ^ m[f[i >>> 16 & 255]] ^ n[f[i >>> 8 & 255]] ^ o[f[i & 255]];
                  }
                }
              },
              encryptBlock: function (a, b) {
                this._doCryptBlock(a, b, this._keySchedule, h, i, j, k, f);
              },
              decryptBlock: function (a, b) {
                var c = a[b + 1];
                a[b + 1] = a[b + 3];
                a[b + 3] = c;
                this._doCryptBlock(a, b, this._invKeySchedule, l, m, n, o, g);
                var c = a[b + 1];
                a[b + 1] = a[b + 3];
                a[b + 3] = c;
              },
              _doCryptBlock: function (a, b, c, d, e, f, g, h) {
                var i = this._nRounds;
                var j = a[b] ^ c[0];
                var k = a[b + 1] ^ c[1];
                var l = a[b + 2] ^ c[2];
                var m = a[b + 3] ^ c[3];
                var n = 4;
                for (var o = 1; o < i; o++) {
                  var p = d[j >>> 24] ^ e[k >>> 16 & 255] ^ f[l >>> 8 & 255] ^ g[m & 255] ^ c[n++];
                  var q = d[k >>> 24] ^ e[l >>> 16 & 255] ^ f[m >>> 8 & 255] ^ g[j & 255] ^ c[n++];
                  var r = d[l >>> 24] ^ e[m >>> 16 & 255] ^ f[j >>> 8 & 255] ^ g[k & 255] ^ c[n++];
                  var s = d[m >>> 24] ^ e[j >>> 16 & 255] ^ f[k >>> 8 & 255] ^ g[l & 255] ^ c[n++];
                  j = p;
                  k = q;
                  l = r;
                  m = s;
                }
                var p = (h[j >>> 24] << 24 | h[k >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[m & 255]) ^ c[n++];
                var q = (h[k >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[m >>> 8 & 255] << 8 | h[j & 255]) ^ c[n++];
                var r = (h[l >>> 24] << 24 | h[m >>> 16 & 255] << 16 | h[j >>> 8 & 255] << 8 | h[k & 255]) ^ c[n++];
                var s = (h[m >>> 24] << 24 | h[j >>> 16 & 255] << 16 | h[k >>> 8 & 255] << 8 | h[l & 255]) ^ c[n++];
                a[b] = p;
                a[b + 1] = q;
                a[b + 2] = r;
                a[b + 3] = s;
              },
              keySize: 8
            });
            b.AES = d._createHelper(q);
          })();
          return a.AES;
        });
      }
    });
    var oj = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/tripledes.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), Ri(), Si(), aj(), bj());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          (function () {
            var b = a;
            var c = b.lib;
            var d = c.WordArray;
            var e = c.BlockCipher;
            var f = b.algo;
            var g = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
            var h = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];
            var i = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
            var j = [{
              "0": 8421888,
              "268435456": 32768,
              "536870912": 8421378,
              "805306368": 2,
              "1073741824": 512,
              "1342177280": 8421890,
              "1610612736": 8389122,
              "1879048192": 8388608,
              "2147483648": 514,
              "2415919104": 8389120,
              "2684354560": 33280,
              "2952790016": 8421376,
              "3221225472": 32770,
              "3489660928": 8388610,
              "3758096384": 0,
              "4026531840": 33282,
              "134217728": 0,
              "402653184": 8421890,
              "671088640": 33282,
              "939524096": 32768,
              "1207959552": 8421888,
              "1476395008": 512,
              "1744830464": 8421378,
              "2013265920": 2,
              "2281701376": 8389120,
              "2550136832": 33280,
              "2818572288": 8421376,
              "3087007744": 8389122,
              "3355443200": 8388610,
              "3623878656": 32770,
              "3892314112": 514,
              "4160749568": 8388608,
              "1": 32768,
              "268435457": 2,
              "536870913": 8421888,
              "805306369": 8388608,
              "1073741825": 8421378,
              "1342177281": 33280,
              "1610612737": 512,
              "1879048193": 8389122,
              "2147483649": 8421890,
              "2415919105": 8421376,
              "2684354561": 8388610,
              "2952790017": 33282,
              "3221225473": 514,
              "3489660929": 8389120,
              "3758096385": 32770,
              "4026531841": 0,
              "134217729": 8421890,
              "402653185": 8421376,
              "671088641": 8388608,
              "939524097": 512,
              "1207959553": 32768,
              "1476395009": 8388610,
              "1744830465": 2,
              "2013265921": 33282,
              "2281701377": 32770,
              "2550136833": 8389122,
              "2818572289": 514,
              "3087007745": 8421888,
              "3355443201": 8389120,
              "3623878657": 0,
              "3892314113": 33280,
              "4160749569": 8421378
            }, {
              "0": 1074282512,
              "16777216": 16384,
              "33554432": 524288,
              "50331648": 1074266128,
              "67108864": 1073741840,
              "83886080": 1074282496,
              "100663296": 1073758208,
              "117440512": 16,
              "134217728": 540672,
              "150994944": 1073758224,
              "167772160": 1073741824,
              "184549376": 540688,
              "201326592": 524304,
              "218103808": 0,
              "234881024": 16400,
              "251658240": 1074266112,
              "8388608": 1073758208,
              "25165824": 540688,
              "41943040": 16,
              "58720256": 1073758224,
              "75497472": 1074282512,
              "92274688": 1073741824,
              "109051904": 524288,
              "125829120": 1074266128,
              "142606336": 524304,
              "159383552": 0,
              "176160768": 16384,
              "192937984": 1074266112,
              "209715200": 1073741840,
              "226492416": 540672,
              "243269632": 1074282496,
              "260046848": 16400,
              "268435456": 0,
              "285212672": 1074266128,
              "301989888": 1073758224,
              "318767104": 1074282496,
              "335544320": 1074266112,
              "352321536": 16,
              "369098752": 540688,
              "385875968": 16384,
              "402653184": 16400,
              "419430400": 524288,
              "436207616": 524304,
              "452984832": 1073741840,
              "469762048": 540672,
              "486539264": 1073758208,
              "503316480": 1073741824,
              "520093696": 1074282512,
              "276824064": 540688,
              "293601280": 524288,
              "310378496": 1074266112,
              "327155712": 16384,
              "343932928": 1073758208,
              "360710144": 1074282512,
              "377487360": 16,
              "394264576": 1073741824,
              "411041792": 1074282496,
              "427819008": 1073741840,
              "444596224": 1073758224,
              "461373440": 524304,
              "478150656": 0,
              "494927872": 16400,
              "511705088": 1074266128,
              "528482304": 540672
            }, {
              "0": 260,
              "1048576": 0,
              "2097152": 67109120,
              "3145728": 65796,
              "4194304": 65540,
              "5242880": 67108868,
              "6291456": 67174660,
              "7340032": 67174400,
              "8388608": 67108864,
              "9437184": 67174656,
              "10485760": 65792,
              "11534336": 67174404,
              "12582912": 67109124,
              "13631488": 65536,
              "14680064": 4,
              "15728640": 256,
              "524288": 67174656,
              "1572864": 67174404,
              "2621440": 0,
              "3670016": 67109120,
              "4718592": 67108868,
              "5767168": 65536,
              "6815744": 65540,
              "7864320": 260,
              "8912896": 4,
              "9961472": 256,
              "11010048": 67174400,
              "12058624": 65796,
              "13107200": 65792,
              "14155776": 67109124,
              "15204352": 67174660,
              "16252928": 67108864,
              "16777216": 67174656,
              "17825792": 65540,
              "18874368": 65536,
              "19922944": 67109120,
              "20971520": 256,
              "22020096": 67174660,
              "23068672": 67108868,
              "24117248": 0,
              "25165824": 67109124,
              "26214400": 67108864,
              "27262976": 4,
              "28311552": 65792,
              "29360128": 67174400,
              "30408704": 260,
              "31457280": 65796,
              "32505856": 67174404,
              "17301504": 67108864,
              "18350080": 260,
              "19398656": 67174656,
              "20447232": 0,
              "21495808": 65540,
              "22544384": 67109120,
              "23592960": 256,
              "24641536": 67174404,
              "25690112": 65536,
              "26738688": 67174660,
              "27787264": 65796,
              "28835840": 67108868,
              "29884416": 67109124,
              "30932992": 67174400,
              "31981568": 4,
              "33030144": 65792
            }, {
              "0": 2151682048,
              "65536": 2147487808,
              "131072": 4198464,
              "196608": 2151677952,
              "262144": 0,
              "327680": 4198400,
              "393216": 2147483712,
              "458752": 4194368,
              "524288": 2147483648,
              "589824": 4194304,
              "655360": 64,
              "720896": 2147487744,
              "786432": 2151678016,
              "851968": 4160,
              "917504": 4096,
              "983040": 2151682112,
              "32768": 2147487808,
              "98304": 64,
              "163840": 2151678016,
              "229376": 2147487744,
              "294912": 4198400,
              "360448": 2151682112,
              "425984": 0,
              "491520": 2151677952,
              "557056": 4096,
              "622592": 2151682048,
              "688128": 4194304,
              "753664": 4160,
              "819200": 2147483648,
              "884736": 4194368,
              "950272": 4198464,
              "1015808": 2147483712,
              "1048576": 4194368,
              "1114112": 4198400,
              "1179648": 2147483712,
              "1245184": 0,
              "1310720": 4160,
              "1376256": 2151678016,
              "1441792": 2151682048,
              "1507328": 2147487808,
              "1572864": 2151682112,
              "1638400": 2147483648,
              "1703936": 2151677952,
              "1769472": 4198464,
              "1835008": 2147487744,
              "1900544": 4194304,
              "1966080": 64,
              "2031616": 4096,
              "1081344": 2151677952,
              "1146880": 2151682112,
              "1212416": 0,
              "1277952": 4198400,
              "1343488": 4194368,
              "1409024": 2147483648,
              "1474560": 2147487808,
              "1540096": 64,
              "1605632": 2147483712,
              "1671168": 4096,
              "1736704": 2147487744,
              "1802240": 2151678016,
              "1867776": 4160,
              "1933312": 2151682048,
              "1998848": 4194304,
              "2064384": 4198464
            }, {
              "0": 128,
              "4096": 17039360,
              "8192": 262144,
              "12288": 536870912,
              "16384": 537133184,
              "20480": 16777344,
              "24576": 553648256,
              "28672": 262272,
              "32768": 16777216,
              "36864": 537133056,
              "40960": 536871040,
              "45056": 553910400,
              "49152": 553910272,
              "53248": 0,
              "57344": 17039488,
              "61440": 553648128,
              "2048": 17039488,
              "6144": 553648256,
              "10240": 128,
              "14336": 17039360,
              "18432": 262144,
              "22528": 537133184,
              "26624": 553910272,
              "30720": 536870912,
              "34816": 537133056,
              "38912": 0,
              "43008": 553910400,
              "47104": 16777344,
              "51200": 536871040,
              "55296": 553648128,
              "59392": 16777216,
              "63488": 262272,
              "65536": 262144,
              "69632": 128,
              "73728": 536870912,
              "77824": 553648256,
              "81920": 16777344,
              "86016": 553910272,
              "90112": 537133184,
              "94208": 16777216,
              "98304": 553910400,
              "102400": 553648128,
              "106496": 17039360,
              "110592": 537133056,
              "114688": 262272,
              "118784": 536871040,
              "122880": 0,
              "126976": 17039488,
              "67584": 553648256,
              "71680": 16777216,
              "75776": 17039360,
              "79872": 537133184,
              "83968": 536870912,
              "88064": 17039488,
              "92160": 128,
              "96256": 553910272,
              "100352": 262272,
              "104448": 553910400,
              "108544": 0,
              "112640": 553648128,
              "116736": 16777344,
              "120832": 262144,
              "124928": 537133056,
              "129024": 536871040
            }, {
              "0": 268435464,
              "256": 8192,
              "512": 270532608,
              "768": 270540808,
              "1024": 268443648,
              "1280": 2097152,
              "1536": 2097160,
              "1792": 268435456,
              "2048": 0,
              "2304": 268443656,
              "2560": 2105344,
              "2816": 8,
              "3072": 270532616,
              "3328": 2105352,
              "3584": 8200,
              "3840": 270540800,
              "128": 270532608,
              "384": 270540808,
              "640": 8,
              "896": 2097152,
              "1152": 2105352,
              "1408": 268435464,
              "1664": 268443648,
              "1920": 8200,
              "2176": 2097160,
              "2432": 8192,
              "2688": 268443656,
              "2944": 270532616,
              "3200": 0,
              "3456": 270540800,
              "3712": 2105344,
              "3968": 268435456,
              "4096": 268443648,
              "4352": 270532616,
              "4608": 270540808,
              "4864": 8200,
              "5120": 2097152,
              "5376": 268435456,
              "5632": 268435464,
              "5888": 2105344,
              "6144": 2105352,
              "6400": 0,
              "6656": 8,
              "6912": 270532608,
              "7168": 8192,
              "7424": 268443656,
              "7680": 270540800,
              "7936": 2097160,
              "4224": 8,
              "4480": 2105344,
              "4736": 2097152,
              "4992": 268435464,
              "5248": 268443648,
              "5504": 8200,
              "5760": 270540808,
              "6016": 270532608,
              "6272": 270540800,
              "6528": 270532616,
              "6784": 8192,
              "7040": 2105352,
              "7296": 2097160,
              "7552": 0,
              "7808": 268435456,
              "8064": 268443656
            }, {
              "0": 1048576,
              "16": 33555457,
              "32": 1024,
              "48": 1049601,
              "64": 34604033,
              "80": 0,
              "96": 1,
              "112": 34603009,
              "128": 33555456,
              "144": 1048577,
              "160": 33554433,
              "176": 34604032,
              "192": 34603008,
              "208": 1025,
              "224": 1049600,
              "240": 33554432,
              "8": 34603009,
              "24": 0,
              "40": 33555457,
              "56": 34604032,
              "72": 1048576,
              "88": 33554433,
              "104": 33554432,
              "120": 1025,
              "136": 1049601,
              "152": 33555456,
              "168": 34603008,
              "184": 1048577,
              "200": 1024,
              "216": 34604033,
              "232": 1,
              "248": 1049600,
              "256": 33554432,
              "272": 1048576,
              "288": 33555457,
              "304": 34603009,
              "320": 1048577,
              "336": 33555456,
              "352": 34604032,
              "368": 1049601,
              "384": 1025,
              "400": 34604033,
              "416": 1049600,
              "432": 1,
              "448": 0,
              "464": 34603008,
              "480": 33554433,
              "496": 1024,
              "264": 1049600,
              "280": 33555457,
              "296": 34603009,
              "312": 1,
              "328": 33554432,
              "344": 1048576,
              "360": 1025,
              "376": 34604032,
              "392": 33554433,
              "408": 34603008,
              "424": 0,
              "440": 34604033,
              "456": 1049601,
              "472": 1024,
              "488": 33555456,
              "504": 1048577
            }, {
              "0": 134219808,
              "1": 131072,
              "2": 134217728,
              "3": 32,
              "4": 131104,
              "5": 134350880,
              "6": 134350848,
              "7": 2048,
              "8": 134348800,
              "9": 134219776,
              "10": 133120,
              "11": 134348832,
              "12": 2080,
              "13": 0,
              "14": 134217760,
              "15": 133152,
              "2147483648": 2048,
              "2147483649": 134350880,
              "2147483650": 134219808,
              "2147483651": 134217728,
              "2147483652": 134348800,
              "2147483653": 133120,
              "2147483654": 133152,
              "2147483655": 32,
              "2147483656": 134217760,
              "2147483657": 2080,
              "2147483658": 131104,
              "2147483659": 134350848,
              "2147483660": 0,
              "2147483661": 134348832,
              "2147483662": 134219776,
              "2147483663": 131072,
              "16": 133152,
              "17": 134350848,
              "18": 32,
              "19": 2048,
              "20": 134219776,
              "21": 134217760,
              "22": 134348832,
              "23": 131072,
              "24": 0,
              "25": 131104,
              "26": 134348800,
              "27": 134219808,
              "28": 134350880,
              "29": 133120,
              "30": 2080,
              "31": 134217728,
              "2147483664": 131072,
              "2147483665": 2048,
              "2147483666": 134348832,
              "2147483667": 133152,
              "2147483668": 32,
              "2147483669": 134348800,
              "2147483670": 134217728,
              "2147483671": 134219808,
              "2147483672": 134350880,
              "2147483673": 134217760,
              "2147483674": 134219776,
              "2147483675": 0,
              "2147483676": 133120,
              "2147483677": 2080,
              "2147483678": 131104,
              "2147483679": 134350848
            }];
            var k = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679];
            var l = f.DES = e.extend({
              _doReset: function () {
                var a = this._key;
                var b = a.words;
                var c = [];
                for (var d = 0; d < 56; d++) {
                  var e = g[d] - 1;
                  c[d] = b[e >>> 5] >>> 31 - e % 32 & 1;
                }
                var f = this._subKeys = [];
                for (var j = 0; j < 16; j++) {
                  var k = f[j] = [];
                  var l = i[j];
                  for (var d = 0; d < 24; d++) {
                    k[d / 6 | 0] |= c[(h[d] - 1 + l) % 28] << 31 - d % 6;
                    k[4 + (d / 6 | 0)] |= c[28 + (h[d + 24] - 1 + l) % 28] << 31 - d % 6;
                  }
                  k[0] = k[0] << 1 | k[0] >>> 31;
                  for (var d = 1; d < 7; d++) {
                    k[d] = k[d] >>> (d - 1) * 4 + 3;
                  }
                  k[7] = k[7] << 5 | k[7] >>> 27;
                }
                var m = this._invSubKeys = [];
                for (var d = 0; d < 16; d++) {
                  m[d] = f[15 - d];
                }
              },
              encryptBlock: function (a, b) {
                this._doCryptBlock(a, b, this._subKeys);
              },
              decryptBlock: function (a, b) {
                this._doCryptBlock(a, b, this._invSubKeys);
              },
              _doCryptBlock: function (a, b, c) {
                this._lBlock = a[b];
                this._rBlock = a[b + 1];
                m.call(this, 4, 252645135);
                m.call(this, 16, 65535);
                n.call(this, 2, 858993459);
                n.call(this, 8, 16711935);
                m.call(this, 1, 1431655765);
                for (var d = 0; d < 16; d++) {
                  var e = c[d];
                  var f = this._lBlock;
                  var g = this._rBlock;
                  var h = 0;
                  for (var i = 0; i < 8; i++) {
                    h |= j[i][((g ^ e[i]) & k[i]) >>> 0];
                  }
                  this._lBlock = g;
                  this._rBlock = f ^ h;
                }
                var l = this._lBlock;
                this._lBlock = this._rBlock;
                this._rBlock = l;
                m.call(this, 1, 1431655765);
                n.call(this, 8, 16711935);
                n.call(this, 2, 858993459);
                m.call(this, 16, 65535);
                m.call(this, 4, 252645135);
                a[b] = this._lBlock;
                a[b + 1] = this._rBlock;
              },
              keySize: 2,
              ivSize: 2,
              blockSize: 2
            });
            function m(a, b) {
              var c = (this._lBlock >>> a ^ this._rBlock) & b;
              this._rBlock ^= c;
              this._lBlock ^= c << a;
            }
            function n(a, b) {
              var c = (this._rBlock >>> a ^ this._lBlock) & b;
              this._lBlock ^= c;
              this._rBlock ^= c << a;
            }
            b.DES = e._createHelper(l);
            var o = f.TripleDES = e.extend({
              _doReset: function () {
                var a = this._key;
                var b = a.words;
                this._des1 = l.createEncryptor(d.create(b.slice(0, 2)));
                this._des2 = l.createEncryptor(d.create(b.slice(2, 4)));
                this._des3 = l.createEncryptor(d.create(b.slice(4, 6)));
              },
              encryptBlock: function (a, b) {
                this._des1.encryptBlock(a, b);
                this._des2.decryptBlock(a, b);
                this._des3.encryptBlock(a, b);
              },
              decryptBlock: function (a, b) {
                this._des3.decryptBlock(a, b);
                this._des2.encryptBlock(a, b);
                this._des1.decryptBlock(a, b);
              },
              keySize: 6,
              ivSize: 2,
              blockSize: 2
            });
            b.TripleDES = e._createHelper(o);
          })();
          return a.TripleDES;
        });
      }
    });
    var pj = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rc4.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), Ri(), Si(), aj(), bj());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          (function () {
            var b = a;
            var c = b.lib;
            var d = c.StreamCipher;
            var e = b.algo;
            var f = e.RC4 = d.extend({
              _doReset: function () {
                var a = this._key;
                var b = a.words;
                var c = a.sigBytes;
                var d = this._S = [];
                for (var e = 0; e < 256; e++) {
                  d[e] = e;
                }
                for (var e = 0, f = 0; e < 256; e++) {
                  var g = e % c;
                  var h = b[g >>> 2] >>> 24 - g % 4 * 8 & 255;
                  f = (f + d[e] + h) % 256;
                  var i = d[e];
                  d[e] = d[f];
                  d[f] = i;
                }
                this._i = this._j = 0;
              },
              _doProcessBlock: function (a, b) {
                a[b] ^= g.call(this);
              },
              keySize: 8,
              ivSize: 0
            });
            function g() {
              var a = this._S;
              var b = this._i;
              var c = this._j;
              var d = 0;
              for (var e = 0; e < 4; e++) {
                b = (b + 1) % 256;
                c = (c + a[b]) % 256;
                var f = a[b];
                a[b] = a[c];
                a[c] = f;
                d |= a[(a[b] + a[c]) % 256] << 24 - e * 8;
              }
              this._i = b;
              this._j = c;
              return d;
            }
            b.RC4 = d._createHelper(f);
            var h = e.RC4Drop = f.extend({
              cfg: f.cfg.extend({
                drop: 192
              }),
              _doReset: function () {
                f._doReset.call(this);
                for (var a = this.cfg.drop; a > 0; a--) {
                  g.call(this);
                }
              }
            });
            b.RC4Drop = d._createHelper(h);
          })();
          return a.RC4;
        });
      }
    });
    var qj = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), Ri(), Si(), aj(), bj());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          (function () {
            var b = a;
            var c = b.lib;
            var d = c.StreamCipher;
            var e = b.algo;
            var f = [];
            var g = [];
            var h = [];
            var i = e.Rabbit = d.extend({
              _doReset: function () {
                var a = this._key.words;
                var b = this.cfg.iv;
                for (var c = 0; c < 4; c++) {
                  a[c] = (a[c] << 8 | a[c] >>> 24) & 16711935 | (a[c] << 24 | a[c] >>> 8) & 4278255360;
                }
                var d = this._X = [a[0], a[3] << 16 | a[2] >>> 16, a[1], a[0] << 16 | a[3] >>> 16, a[2], a[1] << 16 | a[0] >>> 16, a[3], a[2] << 16 | a[1] >>> 16];
                var e = this._C = [a[2] << 16 | a[2] >>> 16, a[0] & 4294901760 | a[1] & 65535, a[3] << 16 | a[3] >>> 16, a[1] & 4294901760 | a[2] & 65535, a[0] << 16 | a[0] >>> 16, a[2] & 4294901760 | a[3] & 65535, a[1] << 16 | a[1] >>> 16, a[3] & 4294901760 | a[0] & 65535];
                this._b = 0;
                for (var c = 0; c < 4; c++) {
                  j.call(this);
                }
                for (var c = 0; c < 8; c++) {
                  e[c] ^= d[c + 4 & 7];
                }
                if (b) {
                  var f = b.words;
                  var g = f[0];
                  var h = f[1];
                  var i = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360;
                  var k = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360;
                  var l = i >>> 16 | k & 4294901760;
                  var m = k << 16 | i & 65535;
                  e[0] ^= i;
                  e[1] ^= l;
                  e[2] ^= k;
                  e[3] ^= m;
                  e[4] ^= i;
                  e[5] ^= l;
                  e[6] ^= k;
                  e[7] ^= m;
                  for (var c = 0; c < 4; c++) {
                    j.call(this);
                  }
                }
              },
              _doProcessBlock: function (a, b) {
                var c = this._X;
                j.call(this);
                f[0] = c[0] ^ c[5] >>> 16 ^ c[3] << 16;
                f[1] = c[2] ^ c[7] >>> 16 ^ c[5] << 16;
                f[2] = c[4] ^ c[1] >>> 16 ^ c[7] << 16;
                f[3] = c[6] ^ c[3] >>> 16 ^ c[1] << 16;
                for (var d = 0; d < 4; d++) {
                  f[d] = (f[d] << 8 | f[d] >>> 24) & 16711935 | (f[d] << 24 | f[d] >>> 8) & 4278255360;
                  a[b + d] ^= f[d];
                }
              },
              blockSize: 4,
              ivSize: 2
            });
            function j() {
              var a = this._X;
              var b = this._C;
              for (var c = 0; c < 8; c++) {
                g[c] = b[c];
              }
              b[0] = b[0] + 1295307597 + this._b | 0;
              b[1] = b[1] + 3545052371 + (b[0] >>> 0 < g[0] >>> 0 ? 1 : 0) | 0;
              b[2] = b[2] + 886263092 + (b[1] >>> 0 < g[1] >>> 0 ? 1 : 0) | 0;
              b[3] = b[3] + 1295307597 + (b[2] >>> 0 < g[2] >>> 0 ? 1 : 0) | 0;
              b[4] = b[4] + 3545052371 + (b[3] >>> 0 < g[3] >>> 0 ? 1 : 0) | 0;
              b[5] = b[5] + 886263092 + (b[4] >>> 0 < g[4] >>> 0 ? 1 : 0) | 0;
              b[6] = b[6] + 1295307597 + (b[5] >>> 0 < g[5] >>> 0 ? 1 : 0) | 0;
              b[7] = b[7] + 3545052371 + (b[6] >>> 0 < g[6] >>> 0 ? 1 : 0) | 0;
              this._b = b[7] >>> 0 < g[7] >>> 0 ? 1 : 0;
              for (var c = 0; c < 8; c++) {
                var d = a[c] + b[c];
                var e = d & 65535;
                var f = d >>> 16;
                var i = ((e * e >>> 17) + e * f >>> 15) + f * f;
                var j = ((d & 4294901760) * d | 0) + ((d & 65535) * d | 0);
                h[c] = i ^ j;
              }
              a[0] = h[0] + (h[7] << 16 | h[7] >>> 16) + (h[6] << 16 | h[6] >>> 16) | 0;
              a[1] = h[1] + (h[0] << 8 | h[0] >>> 24) + h[7] | 0;
              a[2] = h[2] + (h[1] << 16 | h[1] >>> 16) + (h[0] << 16 | h[0] >>> 16) | 0;
              a[3] = h[3] + (h[2] << 8 | h[2] >>> 24) + h[1] | 0;
              a[4] = h[4] + (h[3] << 16 | h[3] >>> 16) + (h[2] << 16 | h[2] >>> 16) | 0;
              a[5] = h[5] + (h[4] << 8 | h[4] >>> 24) + h[3] | 0;
              a[6] = h[6] + (h[5] << 16 | h[5] >>> 16) + (h[4] << 16 | h[4] >>> 16) | 0;
              a[7] = h[7] + (h[6] << 8 | h[6] >>> 24) + h[5] | 0;
            }
            b.Rabbit = d._createHelper(i);
          })();
          return a.Rabbit;
        });
      }
    });
    var rj = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit-legacy.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), Ri(), Si(), aj(), bj());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], d);
          } else {
            d(c.CryptoJS);
          }
        })(a, function (a) {
          (function () {
            var b = a;
            var c = b.lib;
            var d = c.StreamCipher;
            var e = b.algo;
            var f = [];
            var g = [];
            var h = [];
            var i = e.RabbitLegacy = d.extend({
              _doReset: function () {
                var a = this._key.words;
                var b = this.cfg.iv;
                var c = this._X = [a[0], a[3] << 16 | a[2] >>> 16, a[1], a[0] << 16 | a[3] >>> 16, a[2], a[1] << 16 | a[0] >>> 16, a[3], a[2] << 16 | a[1] >>> 16];
                var d = this._C = [a[2] << 16 | a[2] >>> 16, a[0] & 4294901760 | a[1] & 65535, a[3] << 16 | a[3] >>> 16, a[1] & 4294901760 | a[2] & 65535, a[0] << 16 | a[0] >>> 16, a[2] & 4294901760 | a[3] & 65535, a[1] << 16 | a[1] >>> 16, a[3] & 4294901760 | a[0] & 65535];
                this._b = 0;
                for (var e = 0; e < 4; e++) {
                  j.call(this);
                }
                for (var e = 0; e < 8; e++) {
                  d[e] ^= c[e + 4 & 7];
                }
                if (b) {
                  var f = b.words;
                  var g = f[0];
                  var h = f[1];
                  var i = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360;
                  var k = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360;
                  var l = i >>> 16 | k & 4294901760;
                  var m = k << 16 | i & 65535;
                  d[0] ^= i;
                  d[1] ^= l;
                  d[2] ^= k;
                  d[3] ^= m;
                  d[4] ^= i;
                  d[5] ^= l;
                  d[6] ^= k;
                  d[7] ^= m;
                  for (var e = 0; e < 4; e++) {
                    j.call(this);
                  }
                }
              },
              _doProcessBlock: function (a, b) {
                var c = this._X;
                j.call(this);
                f[0] = c[0] ^ c[5] >>> 16 ^ c[3] << 16;
                f[1] = c[2] ^ c[7] >>> 16 ^ c[5] << 16;
                f[2] = c[4] ^ c[1] >>> 16 ^ c[7] << 16;
                f[3] = c[6] ^ c[3] >>> 16 ^ c[1] << 16;
                for (var d = 0; d < 4; d++) {
                  f[d] = (f[d] << 8 | f[d] >>> 24) & 16711935 | (f[d] << 24 | f[d] >>> 8) & 4278255360;
                  a[b + d] ^= f[d];
                }
              },
              blockSize: 4,
              ivSize: 2
            });
            function j() {
              var a = this._X;
              var b = this._C;
              for (var c = 0; c < 8; c++) {
                g[c] = b[c];
              }
              b[0] = b[0] + 1295307597 + this._b | 0;
              b[1] = b[1] + 3545052371 + (b[0] >>> 0 < g[0] >>> 0 ? 1 : 0) | 0;
              b[2] = b[2] + 886263092 + (b[1] >>> 0 < g[1] >>> 0 ? 1 : 0) | 0;
              b[3] = b[3] + 1295307597 + (b[2] >>> 0 < g[2] >>> 0 ? 1 : 0) | 0;
              b[4] = b[4] + 3545052371 + (b[3] >>> 0 < g[3] >>> 0 ? 1 : 0) | 0;
              b[5] = b[5] + 886263092 + (b[4] >>> 0 < g[4] >>> 0 ? 1 : 0) | 0;
              b[6] = b[6] + 1295307597 + (b[5] >>> 0 < g[5] >>> 0 ? 1 : 0) | 0;
              b[7] = b[7] + 3545052371 + (b[6] >>> 0 < g[6] >>> 0 ? 1 : 0) | 0;
              this._b = b[7] >>> 0 < g[7] >>> 0 ? 1 : 0;
              for (var c = 0; c < 8; c++) {
                var d = a[c] + b[c];
                var e = d & 65535;
                var f = d >>> 16;
                var i = ((e * e >>> 17) + e * f >>> 15) + f * f;
                var j = ((d & 4294901760) * d | 0) + ((d & 65535) * d | 0);
                h[c] = i ^ j;
              }
              a[0] = h[0] + (h[7] << 16 | h[7] >>> 16) + (h[6] << 16 | h[6] >>> 16) | 0;
              a[1] = h[1] + (h[0] << 8 | h[0] >>> 24) + h[7] | 0;
              a[2] = h[2] + (h[1] << 16 | h[1] >>> 16) + (h[0] << 16 | h[0] >>> 16) | 0;
              a[3] = h[3] + (h[2] << 8 | h[2] >>> 24) + h[1] | 0;
              a[4] = h[4] + (h[3] << 16 | h[3] >>> 16) + (h[2] << 16 | h[2] >>> 16) | 0;
              a[5] = h[5] + (h[4] << 8 | h[4] >>> 24) + h[3] | 0;
              a[6] = h[6] + (h[5] << 16 | h[5] >>> 16) + (h[4] << 16 | h[4] >>> 16) | 0;
              a[7] = h[7] + (h[6] << 8 | h[6] >>> 24) + h[5] | 0;
            }
            b.RabbitLegacy = d._createHelper(i);
          })();
          return a.RabbitLegacy;
        });
      }
    });
    var sj = Di({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/index.js"(a, b) {
        'use strict';

        (function (c, d, e) {
          if (typeof a === "object") {
            b.exports = a = d(Ni(), Oi(), Pi(), Qi(), Ri(), Si(), Ti(), Ui(), Vi(), Wi(), Xi(), Yi(), Zi(), $i(), _i(), aj(), bj(), cj(), dj(), ej(), fj(), gj(), hj(), ij(), jj(), kj(), lj(), mj(), nj(), oj(), pj(), qj(), rj());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy"], d);
          } else {
            c.CryptoJS = d(c.CryptoJS);
          }
        })(a, function (a) {
          return a;
        });
      }
    });
    var tj = {
      ESC: 322,
      F1: 288,
      F2: 289,
      F3: 170,
      F5: 166,
      F6: 167,
      F7: 168,
      F8: 169,
      F9: 56,
      F10: 57,
      "~": 243,
      "#1": 157,
      "#2": 158,
      "#3": 160,
      "#4": 164,
      "#5": 165,
      "#6": 159,
      "#7": 161,
      "#8": 162,
      "#9": 163,
      "-": 84,
      "=": 83,
      BACKSPACE: 177,
      TAB: 37,
      Q: 44,
      W: 32,
      E: 38,
      R: 45,
      T: 245,
      Y: 246,
      U: 303,
      P: 199,
      ENTER: 18,
      CAPS: 137,
      A: 34,
      S: 8,
      D: 9,
      F: 23,
      G: 47,
      H: 74,
      K: 311,
      L: 182,
      LEFTSHIFT: 21,
      Z: 20,
      X: 73,
      C: 26,
      V: 0,
      B: 29,
      N: 249,
      M: 244,
      ",": 82,
      ".": 81,
      LEFTCTRL: 36,
      LEFTALT: 19,
      SPACE: 22,
      RIGHTCTRL: 70,
      HOME: 213,
      PAGEUP: 10,
      PAGEDOWN: 11,
      DELETE: 178,
      LEFT: 174,
      RIGHT: 175,
      TOP: 27,
      DOWN: 173,
      NENTER: 201,
      N4: 108,
      N5: 60,
      N6: 107,
      "N+": 96,
      "N-": 97,
      N7: 117,
      N8: 61,
      N9: 118
    };
    var uj = {};
    var vj = {
      MathUtils: () => Dk
    };
    Ei(uj, vj);
    var wj;
    var xj;
    var yj = class a {
      constructor(a, b, c) {
        Ji(this, wj);
        const d = Mi(this, wj, xj).call(this, a, b, c);
        this.x = d.x;
        this.y = d.y;
        this.z = d.z;
      }
      equals(a, b, c) {
        const d = Mi(this, wj, xj).call(this, a, b, c);
        return this.x === d.x && this.y === d.y && this.z === d.z;
      }
      add(a, b, c, d) {
        let e = Mi(this, wj, xj).call(this, a, b, c);
        this.x += d ? e.x * d : e.x;
        this.y += d ? e.y * d : e.y;
        this.z += d ? e.z * d : e.z;
        return this;
      }
      addScalar(a) {
        if (typeof a !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x += a;
        this.y += a;
        this.z += a;
        return this;
      }
      sub(a, b, c, d) {
        const e = Mi(this, wj, xj).call(this, a, b, c);
        this.x -= d ? e.x * d : e.x;
        this.y -= d ? e.y * d : e.y;
        this.z -= d ? e.z * d : e.z;
        return this;
      }
      subScalar(a) {
        if (typeof a !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x -= a;
        this.y -= a;
        this.z -= a;
        return this;
      }
      multiply(a, b, c) {
        const d = Mi(this, wj, xj).call(this, a, b, c);
        this.x *= d.x;
        this.y *= d.y;
        this.z *= d.z;
        return this;
      }
      multiplyScalar(a) {
        if (typeof a !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x *= a;
        this.y *= a;
        this.z *= a;
        return this;
      }
      divide(a, b, c) {
        const d = Mi(this, wj, xj).call(this, a, b, c);
        this.x /= d.x;
        this.y /= d.y;
        this.z /= d.z;
        return this;
      }
      divideScalar(a) {
        if (typeof a !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x /= a;
        this.y /= a;
        this.z /= a;
        return this;
      }
      round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        return this;
      }
      floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        return this;
      }
      ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        return this;
      }
      getCenter(b, c, d) {
        const e = Mi(this, wj, xj).call(this, b, c, d);
        return new a((this.x + e.x) / 2, (this.y + e.y) / 2, (this.z + e.z) / 2);
      }
      getDistance(a, b, c) {
        const [d, e, f] = a instanceof Array ? a : typeof a === "object" ? [a.x, a.y, a.z] : [a, b, c];
        if (typeof d !== "number" || typeof e !== "number" || typeof f !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [g, h, i] = [this.x - d, this.y - e, this.z - f];
        return Math.sqrt(g * g + h * h + i * i);
      }
      toArray(a) {
        if (typeof a === "number") {
          return [parseFloat(this.x.toFixed(a)), parseFloat(this.y.toFixed(a)), parseFloat(this.z.toFixed(a))];
        }
        return [this.x, this.y, this.z];
      }
      toJSON(a) {
        if (typeof a === "number") {
          return {
            x: parseFloat(this.x.toFixed(a)),
            y: parseFloat(this.y.toFixed(a)),
            z: parseFloat(this.z.toFixed(a))
          };
        }
        var b = {
          x: this.x,
          y: this.y,
          z: this.z
        };
        return b;
      }
      toString(a) {
        return JSON.stringify(this.toJSON(a));
      }
    };
    wj = new WeakSet();
    xj = function (a, b, c) {
      let d = {
        x: 0,
        y: 0,
        z: 0
      };
      if (a instanceof yj) {
        d = a;
      } else if (a instanceof Array) {
        var e = {
          x: a[0],
          y: a[1],
          z: a[2]
        };
        d = e;
      } else if (typeof a === "object") {
        d = a;
      } else {
        var f = {
          x: a,
          y: b,
          z: c
        };
        d = f;
      }
      if (typeof d.x !== "number" || typeof d.y !== "number" || typeof d.z !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return d;
    };
    var zj = yj;
    var Aj;
    var Bj;
    var Cj = class {
      constructor(a) {
        Ji(this, Aj, undefined);
        Ji(this, Bj, undefined);
        Ki(this, Bj, a ?? 5);
        Ki(this, Aj, new Map());
      }
      setTTL(a) {
        Ki(this, Bj, a);
      }
      set(a, b, c) {
        Ii(this, Aj).set(a, {
          value: b,
          expiration: Date.now() + (c ?? Ii(this, Bj)) * 1000
        });
        return this;
      }
      get(a, b = false) {
        const c = Ii(this, Aj).get(a);
        const d = c ? b ? true : c.expiration > Date.now() : false;
        if (!c || !d) {
          if (c) {
            Ii(this, Aj).delete(a);
          }
          return;
        }
        return c.value;
      }
      has(a, b = false) {
        const c = Ii(this, Aj).get(a);
        const d = c ? b ? true : c.expiration > Date.now() : false;
        if (c && !d) {
          Ii(this, Aj).delete(a);
        }
        return d;
      }
      delete(a) {
        return Ii(this, Aj).delete(a);
      }
      clear() {
        Ii(this, Aj).clear();
      }
      values(a = false) {
        const b = [];
        const c = Date.now();
        for (const d of Ii(this, Aj).values()) {
          if (a || d.expiration > c) {
            b.push(d.value);
          }
        }
        return b;
      }
      keys(a = false) {
        const b = [];
        const c = Date.now();
        for (const [d, e] of Ii(this, Aj).entries()) {
          if (a || e.expiration > c) {
            b.push(d);
          }
        }
        return b;
      }
      entries(a = false) {
        const b = [];
        const c = Date.now();
        for (const [d, e] of Ii(this, Aj).entries()) {
          if (a || e.expiration > c) {
            b.push([d, e.value]);
          }
        }
        return b;
      }
    };
    Aj = new WeakMap();
    Bj = new WeakMap();
    var Dj;
    var Ej;
    var Fj;
    var Gj;
    var Hj;
    var Ij;
    var Jj;
    var Kj;
    var Lj;
    var Mj;
    var Nj;
    var Oj;
    var Pj;
    var Qj;
    var Rj;
    var Sj;
    var Tj;
    var Uj;
    var Vj;
    var Wj;
    var Xj;
    var Yj;
    var Zj = class {
      constructor(a, b, c, d, e, f = 30, g = false) {
        Ji(this, Pj);
        Ji(this, Rj);
        Ji(this, Tj);
        Ji(this, Vj);
        Ji(this, Xj);
        Ji(this, Dj, undefined);
        Ji(this, Ej, undefined);
        Ji(this, Fj, undefined);
        Ji(this, Gj, undefined);
        Ji(this, Hj, undefined);
        Ji(this, Ij, undefined);
        Ji(this, Jj, undefined);
        Ji(this, Kj, undefined);
        Ji(this, Lj, undefined);
        Ji(this, Mj, undefined);
        Ji(this, Nj, undefined);
        Ji(this, Oj, undefined);
        Ki(this, Dj, a);
        Ki(this, Ej, d);
        Ki(this, Fj, e);
        Ki(this, Gj, b);
        Ki(this, Hj, c);
        Ki(this, Ij, g);
        Ki(this, Jj, f);
        Ki(this, Lj, Ii(this, Ej).x / f);
        Ki(this, Mj, Ii(this, Ej).y / f);
        Ki(this, Kj, Ii(this, Lj) * Ii(this, Mj));
        Ki(this, Nj, Mi(this, Pj, Qj).call(this, Ii(this, Dj), Ii(this, Jj), Ii(this, Lj), Ii(this, Mj), Ii(this, Ij)));
        Ki(this, Oj, Mi(this, Rj, Sj).call(this, Ii(this, Nj), Ii(this, Kj)));
      }
      get cells() {
        return Ii(this, Nj);
      }
      get cellSize() {
        return Ii(this, Jj);
      }
      get cellWidth() {
        return Ii(this, Lj);
      }
      get cellHeight() {
        return Ii(this, Mj);
      }
      get gridArea() {
        return Ii(this, Oj);
      }
      get gridCoverage() {
        return Ii(this, Oj) / Ii(this, Fj) * 100;
      }
      isPointInsideGrid(a) {
        var b;
        const c = a.x - Ii(this, Gj).x;
        const d = a.y - Ii(this, Gj).y;
        const e = Math.floor(c * Ii(this, Jj) / Ii(this, Ej).x);
        const f = Math.floor(d * Ii(this, Jj) / Ii(this, Ej).y);
        let g = (b = Ii(this, Nj)[e]) == null ? undefined : b[f];
        if (!g && Ii(this, Ij)) {
          g = Mi(this, Vj, Wj).call(this, e, f, Ii(this, Lj), Ii(this, Mj), Ii(this, Dj));
          Ii(this, Nj)[e][f] = g;
          if (!g) {
            return false;
          }
          Ki(this, Oj, Ii(this, Oj) + Ii(this, Kj));
        }
        return g ?? false;
      }
    };
    Dj = new WeakMap();
    Ej = new WeakMap();
    Fj = new WeakMap();
    Gj = new WeakMap();
    Hj = new WeakMap();
    Ij = new WeakMap();
    Jj = new WeakMap();
    Kj = new WeakMap();
    Lj = new WeakMap();
    Mj = new WeakMap();
    Nj = new WeakMap();
    Oj = new WeakMap();
    Pj = new WeakSet();
    Qj = function (a, b, c, d, e) {
      const f = {};
      for (let g = 0; g < b; g++) {
        f[g] = {};
        if (e) {
          continue;
        }
        for (let e = 0; e < b; e++) {
          const b = Mi(this, Vj, Wj).call(this, g, e, c, d, a);
          if (!b) {
            continue;
          }
          f[g][e] = true;
        }
      }
      return f;
    };
    Rj = new WeakSet();
    Sj = function (a, b) {
      let c = 0;
      for (const d in a) {
        for (const e in a[d]) {
          c += b;
        }
      }
      return c;
    };
    Tj = new WeakSet();
    Uj = function (a, b, c, d) {
      const e = [];
      const f = a * c + Ii(this, Gj).x;
      const g = b * d + Ii(this, Gj).y;
      e.push(new uk(f, g));
      e.push(new uk(f + c, g));
      e.push(new uk(f + c, g + d));
      e.push(new uk(f, g + d));
      return e;
    };
    Vj = new WeakSet();
    Wj = function (a, b, c, d, e) {
      const f = Mi(this, Tj, Uj).call(this, a, b, c, d);
      let g = false;
      for (const h of f) {
        const a = Mk.MathUtils.windingNumber(h, e);
        if (a !== 0) {
          g = true;
          break;
        }
      }
      if (!g) {
        return false;
      }
      for (let g = 0; g < f.length; g++) {
        const a = f[g];
        const b = f[(g + 1) % f.length];
        for (let c = 0; c < e.length; c++) {
          const d = e[c];
          const f = e[(c + 1) % e.length];
          if (Mi(this, Xj, Yj).call(this, a, b, d, f)) {
            return false;
          }
        }
      }
      return true;
    };
    Xj = new WeakSet();
    Yj = function (a, b, c, d) {
      const e = (b.x - a.x) * (d.y - c.y) - (b.y - a.y) * (d.x - c.x);
      const f = (a.y - c.y) * (d.x - c.x) - (a.x - c.x) * (d.y - c.y);
      const g = (a.y - c.y) * (b.x - a.x) - (a.x - c.x) * (b.y - a.y);
      if (e === 0) {
        return f === 0 && g === 0;
      }
      const h = f / e;
      const i = g / e;
      return h >= 0 && h <= 1 && i >= 0 && i <= 1;
    };
    var $j;
    var _j;
    var ak;
    var bk;
    var ck;
    var dk;
    var ek;
    var fk;
    var gk;
    var hk;
    var ik;
    var jk;
    var kk;
    var lk;
    var mk;
    var nk;
    var ok;
    var pk;
    var qk = class {
      constructor(a, b = undefined, c = undefined) {
        if (b === undefined) b = {};
        if (c === undefined) c = {};
        Ji(this, gk);
        Ji(this, ik);
        Ji(this, kk);
        Ji(this, mk);
        Ji(this, ok);
        Ji(this, $j, undefined);
        Ji(this, _j, undefined);
        Ji(this, ak, undefined);
        Ji(this, bk, undefined);
        Ji(this, ck, undefined);
        Ji(this, dk, undefined);
        Ji(this, ek, undefined);
        Ji(this, fk, undefined);
        Ki(this, $j, Mk.getUUID());
        Ki(this, _j, a);
        Ki(this, ak, Mi(this, gk, hk).call(this, a));
        Ki(this, bk, Mi(this, ik, jk).call(this, a));
        Ki(this, ck, Mi(this, ok, pk).call(this, a));
        Ki(this, dk, Mi(this, mk, nk).call(this, Ii(this, ak), Ii(this, bk)));
        Ki(this, ek, Mi(this, kk, lk).call(this, Ii(this, ak), Ii(this, bk)));
        this.options = b;
        this.data = c;
        if (!this.options.useGrid && !this.options.useLazyGrid) {
          return;
        }
        Ki(this, fk, new Zj(Ii(this, _j), Ii(this, ak), Ii(this, bk), Ii(this, dk), Ii(this, ck), b.gridCellSize, b.useLazyGrid));
      }
      get id() {
        return Ii(this, $j);
      }
      get center() {
        return Ii(this, ek);
      }
      get min() {
        return Ii(this, ak);
      }
      get max() {
        return Ii(this, bk);
      }
      get points() {
        return [...Ii(this, _j)];
      }
      isPointInside(a) {
        if (a.x < Ii(this, ak).x || a.x > Ii(this, bk).x) {
          return false;
        } else if (a.y < Ii(this, ak).y || a.y > Ii(this, bk).y) {
          return false;
        }
        if ((this.options.minZ || this.options.maxZ) && a instanceof zj) {
          const b = this.options.minZ ?? -Infinity;
          const c = this.options.maxZ ?? Infinity;
          if (a.z < b || a.z > c) {
            return false;
          }
        }
        if ((this.options.useGrid || this.options.useLazyGrid) && Ii(this, fk)) {
          return Ii(this, fk).isPointInsideGrid(a);
        }
        const b = Mk.MathUtils.windingNumber(a, Ii(this, _j));
        return b !== 0;
      }
      addPoint(a) {
        Ii(this, _j).push(a);
      }
      removePoint(a) {
        const b = Ii(this, _j).findIndex(b => b.x === a.x && b.y === a.y);
        if (b === -1) {
          return;
        }
        Ii(this, _j).splice(b, 1);
      }
      removeLastPoint() {
        Ii(this, _j).pop();
      }
      recalculate() {
        Ki(this, ak, Mi(this, gk, hk).call(this, Ii(this, _j)));
        Ki(this, bk, Mi(this, ik, jk).call(this, Ii(this, _j)));
        Ki(this, ck, Mi(this, ok, pk).call(this, Ii(this, _j)));
        Ki(this, dk, Mi(this, mk, nk).call(this, Ii(this, ak), Ii(this, bk)));
        Ki(this, ek, Mi(this, kk, lk).call(this, Ii(this, ak), Ii(this, bk)));
        if (!this.options.useGrid) {
          return;
        }
        Ki(this, fk, new Zj(Ii(this, _j), Ii(this, ak), Ii(this, bk), Ii(this, dk), Ii(this, ck), this.options.gridCellSize, this.options.useLazyGrid));
      }
    };
    $j = new WeakMap();
    _j = new WeakMap();
    ak = new WeakMap();
    bk = new WeakMap();
    ck = new WeakMap();
    dk = new WeakMap();
    ek = new WeakMap();
    fk = new WeakMap();
    gk = new WeakSet();
    hk = function (a) {
      let b = Number.MAX_SAFE_INTEGER;
      let c = Number.MAX_SAFE_INTEGER;
      for (const d of a) {
        b = Math.min(b, d.x);
        c = Math.min(c, d.y);
      }
      return new uk(b, c);
    };
    ik = new WeakSet();
    jk = function (a) {
      let b = Number.MIN_SAFE_INTEGER;
      let c = Number.MIN_SAFE_INTEGER;
      for (const d of a) {
        b = Math.max(b, d.x);
        c = Math.max(c, d.y);
      }
      return new uk(b, c);
    };
    kk = new WeakSet();
    lk = function (a, b) {
      const c = b.add(a);
      return c.divideScalar(2);
    };
    mk = new WeakSet();
    nk = function (a, b) {
      return b.sub(a);
    };
    ok = new WeakSet();
    pk = function (a) {
      let b = 0;
      for (let c = 0, d = a.length - 1; c < a.length; d = c++) {
        const e = a[c];
        const f = a[d];
        b += e.x * f.y;
        b -= e.y * f.x;
      }
      return Math.abs(b / 2);
    };
    var rk;
    var sk;
    var tk = class a {
      constructor(a, b) {
        Ji(this, rk);
        const c = Mi(this, rk, sk).call(this, a, b);
        this.x = c.x;
        this.y = c.y;
      }
      equals(a, b) {
        const c = Mi(this, rk, sk).call(this, a, b);
        return this.x === c.x && this.y === c.y;
      }
      add(b, c, d) {
        const e = Mi(this, rk, sk).call(this, b, c);
        const f = this.x + (d ? e.x * d : e.x);
        const g = this.y + (d ? e.y * d : e.y);
        return new a(f, g);
      }
      addScalar(b) {
        if (typeof b !== "number") {
          throw new Error("Invalid scalar");
        }
        const c = this.x + b;
        const d = this.y + b;
        return new a(c, d);
      }
      sub(b, c, d) {
        const e = Mi(this, rk, sk).call(this, b, c);
        const f = this.x - (d ? e.x * d : e.x);
        const g = this.y - (d ? e.y * d : e.y);
        return new a(f, g);
      }
      subScalar(b) {
        if (typeof b !== "number") {
          throw new Error("Invalid scalar");
        }
        const c = this.x - b;
        const d = this.y - b;
        return new a(c, d);
      }
      multiply(b, c) {
        const d = Mi(this, rk, sk).call(this, b, c);
        const e = this.x * d.x;
        const f = this.y * d.y;
        return new a(e, f);
      }
      multiplyScalar(b) {
        if (typeof b !== "number") {
          throw new Error("Invalid scalar");
        }
        const c = this.x * b;
        const d = this.y * b;
        return new a(c, d);
      }
      divide(b, c) {
        const d = Mi(this, rk, sk).call(this, b, c);
        const e = this.x / d.x;
        const f = this.y / d.y;
        return new a(e, f);
      }
      divideScalar(b) {
        if (typeof b !== "number") {
          throw new Error("Invalid scalar");
        }
        const c = this.x / b;
        const d = this.y / b;
        return new a(c, d);
      }
      round() {
        const b = Math.round(this.x);
        const c = Math.round(this.y);
        return new a(b, c);
      }
      floor() {
        const b = Math.floor(this.x);
        const c = Math.floor(this.y);
        return new a(b, c);
      }
      ceil() {
        const b = Math.ceil(this.x);
        const c = Math.ceil(this.y);
        return new a(b, c);
      }
      getCenter(b, c) {
        const d = Mi(this, rk, sk).call(this, b, c);
        return new a((this.x + d.x) / 2, (this.y + d.y) / 2);
      }
      getDistance(a, b) {
        const [c, d] = a instanceof Array ? a : typeof a === "object" ? [a.x, a.y] : [a, b];
        if (typeof c !== "number" || typeof d !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [e, f] = [this.x - c, this.y - d];
        return Math.sqrt(e * e + f * f);
      }
      toArray(a) {
        if (typeof a === "number") {
          return [parseFloat(this.x.toFixed(a)), parseFloat(this.y.toFixed(a))];
        }
        return [this.x, this.y];
      }
      toJSON(a) {
        if (typeof a === "number") {
          return {
            x: parseFloat(this.x.toFixed(a)),
            y: parseFloat(this.y.toFixed(a))
          };
        }
        var b = {
          x: this.x,
          y: this.y
        };
        return b;
      }
      toString(a) {
        return JSON.stringify(this.toJSON(a));
      }
    };
    rk = new WeakSet();
    sk = function (a, b) {
      let c = {
        x: 0,
        y: 0
      };
      if (a instanceof tk || a instanceof zj) {
        c = a;
      } else if (a instanceof Array) {
        var d = {
          x: a[0],
          y: a[1]
        };
        c = d;
      } else if (typeof a === "object") {
        c = a;
      } else {
        var e = {
          x: a,
          y: b
        };
        c = e;
      }
      if (typeof c.x !== "number" || typeof c.y !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return c;
    };
    var uk = tk;
    var vk = (a, b, c) => {
      return Math.min(Math.max(a, b), c);
    };
    var wk = (a, b, c) => {
      return b[0] + (c - a[0]) * (b[1] - b[0]) / (a[1] - a[0]);
    };
    var xk = ([a, b, c], [d, e, f]) => {
      const [g, h, i] = [a - d, b - e, c - f];
      return Math.sqrt(g * g + h * h + i * i);
    };
    var yk = (a, b) => {
      if (b) {
        return Math.floor(Math.random() * (b - a + 1) + a);
      } else {
        return Math.floor(Math.random() * a);
      }
    };
    var zk = (a, b) => {
      if (a instanceof uk) {
        return a;
      } else if (a instanceof zj) {
        return new uk(a);
      } else if (a instanceof Array) {
        return new uk(a);
      } else if (typeof a === "object") {
        return new uk(a);
      }
      if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new uk(a, b);
    };
    var Ak = (a, b, c) => {
      if (a instanceof zj) {
        return a;
      } else if (a instanceof Array) {
        return new zj(a);
      } else if (typeof a === "object") {
        return new zj(a);
      }
      if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new zj(a, b, c);
    };
    var Bk = (a, b) => {
      let c = 0;
      const d = (a, b, c) => {
        return (b.x - a.x) * (c.y - a.y) - (c.x - a.x) * (b.y - a.y);
      };
      for (let e = 0; e < b.length; e++) {
        const f = b[e];
        const g = b[(e + 1) % b.length];
        if (f.y <= a.y) {
          if (g.y > a.y && d(f, g, a) > 0) {
            c++;
          }
        } else if (g.y <= a.y && d(f, g, a) < 0) {
          c--;
        }
      }
      return c;
    };
    var Ck = {
      clamp: vk,
      getMapRange: wk,
      getDistance: xk,
      getRandomNumber: yk,
      parseVector2: zk,
      parseVector3: Ak,
      windingNumber: Bk
    };
    var Dk = Ck;
    function Ek(a, b) {
      const c = "_";
      const d = Fk((b, c, ...d) => {
        return a(b, ...d);
      }, b);
      return {
        get: function (...a) {
          return d.get(c, ...a);
        },
        reset: function () {
          d.reset(c);
        }
      };
    }
    function Fk(a, b) {
      const c = b.timeToLive || 60000;
      const d = {};
      async function e(b, ...e) {
        let f = d[b];
        if (!f) {
          f = {
            value: null,
            lastUpdated: 0
          };
          d[b] = f;
        }
        const g = Date.now();
        if (f.lastUpdated === 0 || g - f.lastUpdated > c) {
          const [c, d] = await a(f, b, ...e);
          if (c) {
            f.lastUpdated = g;
            f.value = d;
          }
          return d;
        }
        return await new Promise(a => setTimeout(() => a(f.value), 0));
      }
      return {
        get: async function (a, ...b) {
          return await e(a, ...b);
        },
        reset: function (a) {
          const b = d[a];
          if (b) {
            b.lastUpdated = 0;
          }
        }
      };
    }
    function Gk() {
      if (globalThis && typeof globalThis.crypto === "object") {
        return o();
      } else {
        return new Zf(4).toString();
      }
    }
    function Hk(a) {
      return D(a, D.URL);
    }
    function Ik(a, b) {
      return new Promise((c, d) => {
        const e = Date.now();
        const f = setInterval(() => {
          const d = Date.now() - e > b;
          if (a() || d) {
            clearInterval(f);
            return c(d);
          }
        }, 1);
      });
    }
    function Jk(a) {
      return new Promise(b => setTimeout(() => b(), a));
    }
    function Kk() {
      return Jk(0);
    }
    var Lk = {
      cache: Ek,
      cacheableMap: Fk,
      waitForCondition: Ik,
      getUUID: Gk,
      getStringHash: Hk,
      wait: Jk,
      waitForNextFrame: Kk,
      deflate: Pf,
      inflate: Tf,
      ...uj
    };
    var Mk = Lk;
    var Nk = (a => {
      a[a.hat = 0] = "hat";
      a[a.mask = 1] = "mask";
      a[a.glasses = 2] = "glasses";
      a[a.armor = 3] = "armor";
      a[a.shoes = 4] = "shoes";
      a[a.idcard = 5] = "idcard";
      a[a.mobilephone = 6] = "mobilephone";
      a[a.keyring = 7] = "keyring";
      a[a.bankcard = 8] = "bankcard";
      a[a.backpack = 9] = "backpack";
      return a;
    })(Nk || {});
    var Ok = {};
    var Pk = (a, b) => "__cfx_export_" + a + "_" + b;
    var Qk = new Proxy((a, b) => {
      const c = (a, ...c) => {
        const d = b(...c);
        if (d instanceof Promise) {
          d.then(b => a(b));
        } else {
          a(d);
        }
      };
      const d = GetCurrentResourceName();
      if (d == undefined) {
        throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
      }
      on(Pk(d, a), a => {
        a(c);
      });
    }, {
      apply: (a, b, c) => {
        a(...c);
      },
      get: (a, b) => {
        if (Ok[b] == undefined) {
          Ok[b] = {};
        }
        return new Proxy({}, {
          get: (a, c) => {
            const d = c + "_async";
            return (...a) => {
              return new Promise(async (e, f) => {
                const g = await Mk.waitForCondition(() => GetResourceState(b) === "started", 60000);
                if (g) {
                  return f("Resource " + b + " is not running");
                }
                if (Ok[b][d] === undefined) {
                  emit(Pk(b, c), a => {
                    Ok[b][d] = a;
                  });
                  const a = await Mk.waitForCondition(() => Ok[b][d] !== undefined, 1000);
                  if (a) {
                    return f("Failed to get export " + c + " from resource " + b);
                  }
                }
                try {
                  Ok[b][d](e, ...a);
                } catch (a) {
                  f(a);
                }
              });
            };
          }
        });
      }
    });
    var Rk = new Proxy((a, b) => {
      const c = GetCurrentResourceName();
      if (c == undefined) {
        throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
      } else if (typeof b !== "function") {
        throw new Error("Callback is not a function");
      } else if (typeof a !== "string") {
        throw new Error("Export name must be a string");
      }
      on(Pk(c, a), a => {
        a(b);
      });
    }, {
      apply: (a, b, c) => {
        a(...c);
      },
      get: (a, b) => {
        if (Ok[b] == undefined) {
          Ok[b] = {};
        }
        return new Proxy({}, {
          get: (a, c) => {
            const d = c + "_sync";
            if (Ok[b][d] === undefined) {
              emit(Pk(b, c), a => {
                Ok[b][d] = a;
              });
              if (Ok[b][d] === undefined) {
                if (GetResourceState(b) !== "started") {
                  throw new Error("Resource " + b + " is not running");
                } else {
                  throw new Error("No such export " + c + " in resource " + b);
                }
              }
            }
            return (...a) => {
              try {
                return Ok[b][d](...a);
              } catch (a) {
                throw new Error("An error occurred while calling export " + c + " of resource " + b + " - see above for details");
              }
            };
          }
        });
      }
    });
    on("onResourceStop", a => Ok[a] = undefined);
    var Sk = {
      Async: Qk,
      Sync: Rk
    };
    var Tk = Sk;
    var Uk = Gi(sj());
    var Vk;
    var Wk;
    var Xk;
    var Yk;
    var Zk;
    var $k;
    var _k;
    var al;
    var bl;
    var cl;
    var dl;
    var el;
    var fl;
    var gl;
    var hl;
    var il;
    var jl;
    var kl;
    var ll;
    var ml;
    var nl = class {
      constructor(a, b) {
        Ji(this, Zk);
        Ji(this, _k);
        Ji(this, bl);
        Ji(this, dl);
        Ji(this, fl);
        Ji(this, hl);
        Ji(this, jl);
        Ji(this, ll);
        Ji(this, Vk, undefined);
        Ji(this, Wk, undefined);
        Ji(this, Xk, undefined);
        Ji(this, Yk, {});
        const c = Mi(this, fl, gl).call(this, a);
        const d = Mi(this, jl, kl).call(this, c, b);
        const [e, f, g] = d.split(":").map(a => a.length > 0 ? a : undefined);
        Ki(this, Vk, e);
        Ki(this, Wk, f);
        Ki(this, Xk, g);
      }
      hashString(a) {
        var b;
        const c = Ii(this, Zk, $k);
        const d = (b = Ii(this, Yk)[c]) == null ? undefined : b[a];
        if (d) {
          return d;
        }
        if (!Ii(this, Yk)[c]) {
          Ii(this, Yk)[c] = {};
        }
        const e = Mi(this, dl, el).call(this, (0, Uk.HmacMD5)(a, c).toString());
        Ii(this, Yk)[c][a] = e;
        if (IsDuplicityVersion()) {}
        return e;
      }
      encode(a) {
        let b;
        const c = Ii(this, bl, cl);
        try {
          b = Mi(this, hl, il).call(this, JSON.stringify(a), c);
        } catch (a) {}
        return b;
      }
      decode(a) {
        let b;
        const c = Ii(this, _k, al);
        try {
          b = JSON.parse(Mi(this, jl, kl).call(this, a, c));
        } catch (a) {
          console.error("Failed to decode payload");
        }
        return b;
      }
    };
    Vk = new WeakMap();
    Wk = new WeakMap();
    Xk = new WeakMap();
    Yk = new WeakMap();
    Zk = new WeakSet();
    $k = function () {
      return Ii(this, Vk) ?? Mi(this, ll, ml).call(this);
    };
    _k = new WeakSet();
    al = function () {
      return Ii(this, Wk) ?? Mi(this, ll, ml).call(this);
    };
    bl = new WeakSet();
    cl = function () {
      return Ii(this, Xk) ?? Mi(this, ll, ml).call(this);
    };
    dl = new WeakSet();
    el = function (a) {
      if (typeof a !== "string") {
        return "";
      }
      return Uk.enc.Base64.stringify(Uk.enc.Utf8.parse(a));
    };
    fl = new WeakSet();
    gl = function (a) {
      if (typeof a !== "string") {
        return "";
      }
      return Uk.enc.Utf8.stringify(Uk.enc.Base64.parse(a));
    };
    hl = new WeakSet();
    il = function (a, b) {
      if (typeof a !== "string" || typeof b !== "string") {
        return "";
      }
      return Uk.AES.encrypt(a, b).toString();
    };
    jl = new WeakSet();
    kl = function (a, b) {
      if (typeof a !== "string" || typeof b !== "string") {
        return "";
      }
      return Uk.AES.decrypt(a, b).toString(Uk.enc.Utf8);
    };
    ll = new WeakSet();
    ml = function (a = 128) {
      return Uk.lib.WordArray.random(a / 8).toString();
    };
    var ol;
    var pl = class {
      constructor() {
        Ji(this, ol, undefined);
        const a = GetCurrentResourceName();
        const b = Mk.getStringHash("__npx_sdk:" + a + ":token");
        const c = GetConvar(b, "");
        Ki(this, ol, new nl(c, "0x52406080"));
      }
      on(a, b) {
        const c = Ii(this, ol).hashString(a);
        return on(c, b);
      }
      onNet(a, b) {
        const c = Ii(this, ol).hashString(a);
        onNet(c, b);
        const d = Ii(this, ol).hashString(a + "-c");
        onNet(d, a => {
          const c = Mk.inflate(a);
          const d = msgpack_unpack(c);
          return b(...d);
        });
      }
      emit(a, ...b) {
        const c = Ii(this, ol).hashString(a);
        return emit(c, ...b);
      }
      emitNet(a, ...b) {
        let c = msgpack_pack(b);
        let d = c.length;
        const e = Ii(this, ol).hashString(a);
        if (d < 16000) {
          TriggerServerEventInternal(e, c, c.length);
        } else {
          TriggerLatentServerEventInternal(e, c, c.length, 128000);
        }
      }
    };
    ol = new WeakMap();
    var ql = new pl();
    var rl = {
      warning: 1,
      log: 2,
      error: 3,
      debug: 4
    };
    var sl = GetConvar(GetCurrentResourceName() + "_logLevel", "");
    var tl = GetConvar("sv_loglevel", "warning");
    (() => {
      tl = (sl == null ? undefined : sl.length) > 0 ? sl : tl;
      if (!rl[tl]) {
        throw new Error("Invalid log level: " + tl);
      }
    })();
    var ul = () => rl[tl] >= rl.warning;
    var vl = () => rl[tl] >= rl.log;
    var wl = () => rl[tl] >= rl.error;
    var xl = () => tl === "debug";
    var yl = {
      warning: (a, ...b) => {
        if (!ul()) {
          return;
        }
      },
      log: (a, ...b) => {
        if (!vl()) {
          return;
        }
      },
      debug: (a, ...b) => {
        if (!xl()) {
          return;
        }
      },
      error: (a, ...b) => {
        if (!wl()) {
          return;
        }
      }
    };
    var zl;
    var Al;
    var Bl;
    var Cl;
    var Dl;
    var El;
    var Fl;
    var Gl;
    var Hl;
    var Il;
    var Jl;
    var Kl = class {
      constructor() {
        Ji(this, El);
        Ji(this, Gl);
        Ji(this, Il);
        Ji(this, zl, undefined);
        Ji(this, Al, undefined);
        Ji(this, Bl, undefined);
        Ji(this, Cl, undefined);
        Ji(this, Dl, undefined);
        Ki(this, zl, false);
        Ki(this, Al, new Map());
        Ki(this, Bl, GetGameTimer());
        Ki(this, Cl, GetCurrentResourceName());
        const a = Mk.getStringHash("__npx_sdk:" + Ii(this, Cl) + ":token");
        const b = GetConvar(a, "");
        Ki(this, Dl, new nl(b, "0x52406080"));
        Mi(this, Il, Jl).call(this);
      }
      register(a, b) {
        Mi(this, El, Fl).call(this, "__rpc_req:" + a, async (c, d) => {
          let e;
          let f;
          const g = GetInvokingResource();
          if (g) {
            return;
          }
          const h = Ii(this, Dl).decode(c);
          if (!(h == null ? undefined : h.id) || !(h == null ? undefined : h.origin)) {
            return yl.error("[RPC] " + a + " - Invalid metadata received");
          }
          try {
            e = await b(...d);
            f = true;
          } catch (a) {
            e = a.message;
            f = false;
          }
          Mi(this, Gl, Hl).call(this, "__rpc_res:" + h.origin, h.id, [f, e]);
        });
      }
      execute(a, ...b) {
        const c = {
          id: ++Li(this, Bl)._,
          origin: Ii(this, Cl)
        };
        const d = new Promise((b, d) => {
          let e = setTimeout(() => d(new Error("RPC timed out | " + a)), 60000);
          var f = {
            resolve: b,
            reject: d,
            timeout: e
          };
          Ii(this, Al).set(c.id, f);
        });
        d.finally(() => Ii(this, Al).delete(c.id));
        Mi(this, Gl, Hl).call(this, "__rpc_req:" + a, Ii(this, Dl).encode(c), b);
        return d;
      }
      executeCustom(a, b, ...c) {
        const d = {
          id: ++Li(this, Bl)._,
          origin: Ii(this, Cl)
        };
        const e = new Promise((c, e) => {
          let f = setTimeout(() => e(new Error("RPC timed out | " + a)), b.timeout ?? 60000);
          var g = {
            resolve: c,
            reject: e,
            timeout: f
          };
          Ii(this, Al).set(d.id, g);
        });
        e.finally(() => Ii(this, Al).delete(d.id));
        Mi(this, Gl, Hl).call(this, "__rpc_req:" + a, Ii(this, Dl).encode(d), c);
        return e;
      }
    };
    zl = new WeakMap();
    Al = new WeakMap();
    Bl = new WeakMap();
    Cl = new WeakMap();
    Dl = new WeakMap();
    El = new WeakSet();
    Fl = function (a, b) {
      const c = Ii(this, Dl).hashString(a);
      onNet(c, b);
      const d = Ii(this, Dl).hashString(a + "-c");
      onNet(d, a => {
        const c = Mk.inflate(a);
        const d = msgpack_unpack(c);
        return b(...d);
      });
    };
    Gl = new WeakSet();
    Hl = function (a, ...b) {
      let c = msgpack_pack(b);
      let d = c.length;
      const e = Ii(this, Dl).hashString(a);
      if (d < 16000) {
        TriggerServerEventInternal(e, c, c.length);
      } else {
        TriggerLatentServerEventInternal(e, c, c.length, 128000);
      }
    };
    Il = new WeakSet();
    Jl = function () {
      if (Ii(this, zl)) {
        return yl.error("SDK RPC handlers already initialized");
      }
      Mi(this, El, Fl).call(this, "__rpc_res:" + Ii(this, Cl), (a, [b, c]) => {
        const d = Ii(this, Al).get(a);
        if (!d) {
          return;
        }
        clearTimeout(d.timeout);
        if (b) {
          d.resolve(c);
        } else {
          d.reject(new Error(c));
        }
      });
      Ki(this, zl, true);
      yl.debug("SDK RPC handlers initialized");
    };
    var Ll = new Kl();
    var Ml = Gi(sj());
    var Nl = (a = 128) => {
      return Ml.lib.WordArray.random(a / 8).toString();
    };
    var Ol = (a, b) => {
      if (typeof a !== "string" || typeof b !== "string") {
        return "";
      }
      return Ml.AES.encrypt(a, b).toString();
    };
    var Pl = (a, b) => {
      if (typeof a !== "string" || typeof b !== "string") {
        return "";
      }
      return Ml.AES.decrypt(a, b).toString(Ml.enc.Utf8);
    };
    var Ql = a => {
      if (typeof a !== "string") {
        return "";
      }
      return Ml.enc.Base64.stringify(Ml.enc.Utf8.parse(a));
    };
    var Rl = (a, b) => {
      return Ql((0, Ml.HmacMD5)(a, b).toString());
    };
    var Sl = {};
    var Tl = (a, b = undefined) => {
      if (b === undefined) b = Nl();
      if (Sl[a] === undefined) {
        Sl[a] = Rl(a, b);
      }
      return Sl[a];
    };
    var Ul = (a, b = undefined) => {
      if (b === undefined) b = Nl();
      try {
        return Ol(JSON.stringify(a), b);
      } catch (a) {
        console.error("Failed to encode payload");
      }
    };
    var Vl = (a, b = undefined) => {
      if (b === undefined) b = Nl();
      try {
        return JSON.parse(Pl(a, b));
      } catch (a) {
        console.error("Failed to decode payload");
      }
    };
    var Wl;
    var Xl;
    var Yl;
    var Zl;
    var $l;
    var _l;
    var am;
    var bm;
    var cm;
    var dm;
    var em;
    var fm;
    var gm;
    var hm;
    var im;
    var jm;
    var km;
    var lm;
    var mm = class {
      constructor() {
        Ji(this, cm);
        Ji(this, em);
        Ji(this, gm);
        Ji(this, im);
        Ji(this, km);
        Ji(this, Wl, undefined);
        Ji(this, Xl, undefined);
        Ji(this, Yl, undefined);
        Ji(this, Zl, undefined);
        Ji(this, $l, undefined);
        Ji(this, _l, undefined);
        Ji(this, am, undefined);
        Ji(this, bm, undefined);
        Ki(this, Wl, GetCurrentResourceName());
        Ki(this, Xl, Nl(64));
        Ki(this, Yl, Nl(64));
        Ki(this, Zl, Nl(64));
        Ki(this, $l, false);
        Ki(this, _l, 0);
        Ki(this, am, []);
        Ki(this, bm, new Map());
        Mi(this, cm, dm).call(this, "__npx_sdk:init", Mi(this, km, lm).bind(this));
      }
      async register(a, b) {
        Mi(this, em, fm).call(this, "__nui_req:" + a, async (c, d) => {
          let e;
          let f;
          const g = Vl(c, Ii(this, Yl));
          if (!(g == null ? undefined : g.id) || !(g == null ? undefined : g.resource)) {
            return yl.error("[NUI] " + a + " - Invalid metadata received");
          }
          try {
            e = await b(...d);
            f = true;
          } catch (a) {
            e = a.message;
            f = false;
          }
          Mi(this, im, jm).call(this, "__nui_res:" + g.resource, g.id, [f, e]);
        });
      }
      remove(a) {
        const b = Tl("__nui_req:" + a, Ii(this, Xl));
        UnregisterRawNuiCallback(b);
      }
      async execute(a, ...b) {
        const c = {
          id: ++Li(this, _l)._,
          resource: Ii(this, Wl)
        };
        const d = new Promise((b, d) => {
          let e;
          if (Ii(this, $l)) {
            e = setTimeout(() => d(new Error("RPC timed out | " + a)), 60000);
          } else {
            e = 0;
          }
          var f = {
            resolve: b,
            reject: d,
            timeout: e
          };
          Ii(this, bm).set(c.id, f);
        });
        d.finally(() => Ii(this, bm).delete(c.id));
        if (!Ii(this, $l)) {
          var e = {
            type: "execute",
            event: "__nui_req:" + a,
            metadata: c,
            args: b
          };
          Ii(this, am).push(e);
        } else {
          Mi(this, im, jm).call(this, "__nui_req:" + a, Ul(c, Ii(this, Zl)), b);
        }
        return d;
      }
    };
    Wl = new WeakMap();
    Xl = new WeakMap();
    Yl = new WeakMap();
    Zl = new WeakMap();
    $l = new WeakMap();
    _l = new WeakMap();
    am = new WeakMap();
    bm = new WeakMap();
    cm = new WeakSet();
    dm = function (a, b) {
      RegisterNuiCallback(a, ({
        args: a
      }, c) => {
        c(true);
        return b(...a);
      });
    };
    em = new WeakSet();
    fm = function (a, b) {
      if (Ii(this, $l)) {
        const c = Tl(a, Ii(this, Xl));
        return Mi(this, cm, dm).call(this, c, b);
      }
      var c = {
        type: "on",
        event: a,
        callback: b
      };
      Ii(this, am).push(c);
    };
    gm = new WeakSet();
    hm = function (a, ...b) {
      var c = {
        event: a,
        args: b
      };
      SendNuiMessage(JSON.stringify(c, null));
    };
    im = new WeakSet();
    jm = function (a, ...b) {
      if (Ii(this, $l)) {
        const c = Tl(a, Ii(this, Xl));
        return Mi(this, gm, hm).call(this, c, ...b);
      }
      var c = {
        type: "emit",
        event: a,
        args: b
      };
      Ii(this, am).push(c);
    };
    km = new WeakSet();
    lm = async function () {
      if (Ii(this, $l)) {
        return yl.error("[NUI] SDK already initialized");
      }
      Ki(this, $l, true);
      Mi(this, em, fm).call(this, "__nui_res:" + Ii(this, Wl), (a, [b, c]) => {
        const d = Ii(this, bm).get(a);
        if (!d) {
          return yl.error("[NUI] Invalid response received");
        }
        clearTimeout(d.timeout);
        if (b) {
          d.resolve(c);
        } else {
          d.reject(c);
        }
      });
      Mi(this, gm, hm).call(this, "__npx_sdk:ready", Ql(Ii(this, Xl) + ":" + Ii(this, Yl) + ":" + Ii(this, Zl)));
      yl.debug("[NUI] SDK initialized");
      for (const a of Ii(this, am)) {
        if (a.type === "on") {
          Mi(this, em, fm).call(this, a.event, a.callback);
        } else if (a.type === "emit") {
          setTimeout(() => Mi(this, im, jm).call(this, a.event, ...a.args), 1000);
        } else if (a.type === "execute") {
          const b = Ii(this, bm).get(a.metadata.id);
          if (!b) {
            yl.error("[RPC] " + a.event + " - Failed to execute queued RPC call");
            continue;
          }
          b.timeout = setTimeout(() => b.reject(new Error("RPC timed out | " + a.event)), 60000);
          setTimeout(() => Mi(this, im, jm).call(this, a.event, Ul(a.metadata, Ii(this, Zl)), a.args), 1000);
        }
      }
    };
    var nm;
    var om;
    var pm;
    var qm = class {
      constructor(a) {
        Ji(this, nm, undefined);
        Ji(this, om, undefined);
        Ji(this, pm, new Map());
        Ki(this, nm, a);
        Ki(this, om, false);
        const b = GetCurrentResourceName();
        on("onResourceStop", a => {
          if (a === b) {
            for (const [a, b] of Ii(this, pm).entries()) {
              Tk.Sync[Ii(this, nm)].removeNuiEvent(a);
            }
          }
        });
        on("onResourceStart", async a => {
          if (a === Ii(this, nm)) {
            await Mk.waitForCondition(() => GetResourceState(Ii(this, nm)) === "started", 10000);
            if (Ii(this, om)) {
              for (const [a, b] of Ii(this, pm).entries()) {
                Tk.Sync[Ii(this, nm)].removeNuiEvent(a);
                this.register(a, b);
              }
            }
            Ki(this, om, true);
          }
          if (a === b) {
            await Mk.waitForCondition(() => GetResourceState(Ii(this, nm)) === "started", 10000);
            Ki(this, om, true);
          }
        });
      }
      async execute(a, ...b) {
        return await Tk.Async[Ii(this, nm)].sendNuiEvent(a, b);
      }
      async register(a, b) {
        await Mk.waitForCondition(() => Ii(this, om), 10000);
        const c = Tk.Sync[Ii(this, nm)].registerNuiEvent(a, b);
        if (c) {
          Ii(this, pm).set(a, b);
        }
      }
    };
    nm = new WeakMap();
    om = new WeakMap();
    pm = new WeakMap();
    var rm = class {
      constructor() {
        const a = async (a, b) => {
          return await um.execute(a, ...b);
        };
        Tk.Async("sendNuiEvent", a);
        const b = (a, b) => {
          um.register(a, b);
          return true;
        };
        Tk.Sync("registerNuiEvent", b);
        const c = a => {
          um.remove(a);
        };
        Tk.Sync("removeNuiEvent", c);
      }
    };
    var sm = null && qm;
    var tm = null && rm;
    var um = new mm();
    var vm;
    var wm;
    var xm;
    var ym = class {
      constructor() {
        Ji(this, vm, undefined);
        Ji(this, wm, undefined);
        Ji(this, xm, undefined);
        Ki(this, xm, false);
        um.register("__npx_sdk:sockets:init", async () => {
          yl.debug("Sockets", "Initializing sockets...");
          if (Ii(this, xm)) {
            return {
              url: Ii(this, vm),
              API_KEY: Ii(this, wm)
            };
          }
          const a = await new Promise(a => {
            emit("__npx_core:sockets:init", a);
          });
          if (!(a == null ? undefined : a.API_URL) || !(a == null ? undefined : a.API_KEY)) {
            return;
          }
          Ki(this, vm, a.API_URL);
          Ki(this, wm, a.API_KEY);
          Ki(this, xm, true);
          yl.debug("Sockets", "Sockets initialized.");
          return a;
        });
      }
      register(a, b) {
        um.execute("__npx_sdk:sockets:register", a);
        um.register("__npx_sdk:sockets:pipe:" + a, async a => {
          return b(a);
        });
      }
      async execute(a, b) {
        return um.execute("__npx_sdk:sockets:execute", a, b);
      }
    };
    vm = new WeakMap();
    wm = new WeakMap();
    xm = new WeakMap();
    var zm = new ym();
    var Am = {
      HasItem: async (a, b) => {
        return await globalThis.exports.inventory.HasItem(a, b);
      },
      GetItemStacks: async (a, b) => {
        return await globalThis.exports.inventory.GetItemStacks(a, b);
      },
      GetAllItemStacks: async a => {
        return await globalThis.exports.inventory.GetAllItemStacks(a);
      },
      GetItemList: async () => {
        return await globalThis.exports.inventory.GetItemList();
      },
      GetPlayerInventories: async () => {
        return await globalThis.exports.inventory.GetPlayerInventories();
      },
      GetWeaponsList: () => {
        return globalThis.exports.inventory.GetWeaponsList();
      },
      GetWeapon: a => {
        return globalThis.exports.inventory.GetWeapon(a);
      },
      OpenInventory: (a, b) => {
        globalThis.exports.inventory.OpenInventory(a, b);
      },
      UseBodySlot: a => {
        return Tk.Async.inventory.UseBodySlot(a);
      },
      SetBodySlotDisabled: (a, b, c) => {
        Tk.Sync.inventory.SetBodySlotDisabled(a, b, c);
      },
      IsBodySlotDisabled: (a, b) => {
        return Tk.Sync.inventory.IsBodySlotDisabled(a, b);
      }
    };
    var Bm = {};
    var Cm = {
      Cache: () => Cj,
      PolyZone: () => qk,
      Thread: () => Dm,
      Vector2: () => uk,
      Vector3: () => zj
    };
    Ei(Bm, Cm);
    var Dm = class {
      constructor(a, b, c = "interval") {
        this.callback = a;
        this.delay = b;
        this.mode = c;
        this.scheduled = {};
        this.tick = 0;
        this.data = {};
        this.active = false;
        this.aborted = false;
        this.hooks = new Map([["active", []], ["preStop", []], ["preStart", []], ["afterStop", []], ["afterStart", []], ["stopAborted", []], ["startAborted", []]]);
      }
      get isActive() {
        return this.active;
      }
      async start() {
        if (this.active) {
          return;
        }
        this.aborted = false;
        this.scheduled = {};
        const a = this.hooks.get("preStart") ?? [];
        try {
          for (const b of a) {
            if (!this.aborted) {
              await b.call(this);
            }
          }
        } catch (a) {
          this.aborted = true;
        }
        if (this.aborted) {
          try {
            const a = this.hooks.get("startAborted") ?? [];
            for (const b of a) {
              await b.call(this);
            }
          } catch (a) {}
          return;
        }
        this.active = true;
        const b = this.hooks.get("active") ?? [];
        switch (this.mode) {
          case "tick":
            {
              this.threadId = setTick(async () => {
                this.tick += 1;
                try {
                  await this.callback.call(this);
                  for (const a of b) {
                    await a.call(this);
                  }
                } catch (a) {}
                if (this.delay > 0) {
                  await new Promise(a => setTimeout(a, this.delay));
                }
              });
              break;
            }
          case "interval":
            {
              this.threadId = setInterval(async () => {
                this.tick += 1;
                try {
                  await this.callback.call(this);
                  for (const a of b) {
                    await a.call(this);
                  }
                } catch (a) {}
              }, this.delay);
              break;
            }
          case "timeout":
            {
              const a = () => {
                if (this.active) {
                  this.threadId = setTimeout(async () => {
                    this.tick += 1;
                    try {
                      await this.callback.call(this);
                      for (const a of b) {
                        await a.call(this);
                      }
                    } catch (a) {}
                    return a();
                  }, this.delay);
                }
              };
              a();
              break;
            }
        }
        const c = this.hooks.get("afterStart") ?? [];
        try {
          for (const a of c) {
            await a.call(this);
          }
        } catch (a) {}
      }
      async stop() {
        if (!this.active) {
          return;
        }
        const a = this.hooks.get("preStop") ?? [];
        try {
          for (const b of a) {
            if (!this.aborted) {
              await b.call(this);
            }
          }
        } catch (a) {
          this.aborted = true;
        }
        this.active = false;
        switch (this.mode) {
          case "tick":
            {
              clearTick(this.threadId);
              break;
            }
          case "interval":
            {
              clearInterval(this.threadId);
              break;
            }
          case "timeout":
            {
              clearTimeout(this.threadId);
              break;
            }
        }
        if (this.aborted) {
          try {
            const a = this.hooks.get("stopAborted") ?? [];
            for (const b of a) {
              await b.call(this);
            }
          } catch (a) {}
          return;
        }
        const b = this.hooks.get("afterStop") ?? [];
        try {
          for (const a of b) {
            await a.call(this);
          }
        } catch (a) {}
      }
      abort() {
        this.aborted = true;
      }
      addHook(a, b) {
        var c;
        if ((c = this.hooks.get(a)) == null) {
          undefined;
        } else {
          c.push(b);
        }
      }
      setNextTick(a, b) {
        this.scheduled[a] = this.tick + b;
      }
      canTick(a) {
        return this.scheduled[a] === undefined || this.tick >= this.scheduled[a];
      }
    };
    var Em = {};
    var Fm = {
      GetEntityStateValue: () => Im,
      GetPlayerStateValue: () => Lm,
      RegisterStatebagChangeHandler: () => Nm,
      SetEntityStateValue: () => Jm,
      SetPlayerStateValue: () => Mm
    };
    Ei(Em, Fm);
    var Gm = new Cj(5000);
    function Hm(a) {
      let b = Gm.get("ent-" + a + "}");
      if (b) {
        return b;
      }
      b = Entity(a);
      Gm.set("ent-" + a + "}", b);
      return b;
    }
    function Im(a, b) {
      const c = Hm(a);
      return c.state[b];
    }
    function Jm(a, b, c, d = false) {
      const e = Hm(a);
      e.state.set(b, c, d);
    }
    function Km(a) {
      let b = Gm.get("ply-" + a + "}");
      if (b) {
        return b;
      }
      b = Player(a);
      Gm.set("ply-" + a + "}", b);
      return b;
    }
    function Lm(a, b) {
      const c = Km(a);
      return c.state[b];
    }
    function Mm(a, b, c, d = false) {
      const e = Km(a);
      e.state.set(b, c, d);
    }
    function Nm(a, b, c, d) {
      return AddStateBagChangeHandler(a, null, async function (a, e, f, g, h) {
        if (c && !h) {
          return;
        }
        const i = a.startsWith("player");
        const j = parseInt(a.substring(7));
        const k = i ? GetPlayerFromStateBagName(a) : GetEntityFromStateBagName(a);
        if (!k) {
          return;
        }
        const l = i ? NetworkGetPlayerIndexFromPed(k) === PlayerId() : NetworkGetEntityOwner(k) === PlayerId();
        if (b && !l) {
          return;
        }
        d(j, k, f);
      });
    }
    var Om = {};
    var Pm = {
      GetFuelLevel: () => Xm,
      GetIdentifier: () => Um,
      GetMetadata: () => Tm,
      HasKey: () => Sm,
      IsVinScratched: () => Vm,
      SwapSeat: () => Wm,
      TurnOffEngine: () => Rm,
      TurnOnEngine: () => Qm
    };
    Ei(Om, Pm);
    function Qm(a) {
      Tk.Sync["np-vehicles"].TurnOnEngine(a);
    }
    function Rm(a) {
      Tk.Sync["np-vehicles"].TurnOffEngine(a);
    }
    function Sm(a) {
      return Tk.Sync["np-vehicles"].HasVehicleKey(a);
    }
    function Tm(a, b) {
      const c = Im(a, "data");
      if (b) {
        if (c == null) {
          return undefined;
        } else {
          return c[b];
        }
      } else {
        return c;
      }
    }
    function Um(a) {
      return Im(a, "vin");
    }
    function Vm(a) {
      return Im(a, "vinScratched");
    }
    function Wm(a, b) {
      Tk.Sync["np-vehicles"].SwapVehicleSeat(a, b);
    }
    function Xm(a) {
      return Tm(a, "fuel") ?? 0;
    }
    var Ym = async a => {
      const b = typeof a === "number" ? a : GetHashKey(a);
      if (HasModelLoaded(b)) {
        return true;
      }
      RequestModel(b);
      const c = await Mk.waitForCondition(() => HasModelLoaded(b), 3000);
      return !c;
    };
    var Zm = async a => {
      if (HasAnimDictLoaded(a)) {
        return true;
      }
      RequestAnimDict(a);
      const b = await Mk.waitForCondition(() => HasAnimDictLoaded(a), 3000);
      return !b;
    };
    var $m = async a => {
      if (HasClipSetLoaded(a)) {
        return true;
      }
      RequestClipSet(a);
      const b = await Mk.waitForCondition(() => HasClipSetLoaded(a), 3000);
      return !b;
    };
    var _m = async a => {
      if (HasStreamedTextureDictLoaded(a)) {
        return true;
      }
      RequestStreamedTextureDict(a, true);
      const b = await Mk.waitForCondition(() => HasStreamedTextureDictLoaded(a), 3000);
      return !b;
    };
    var an = async (a, b, c) => {
      const d = typeof a === "number" ? a : GetHashKey(a);
      if (HasWeaponAssetLoaded(d)) {
        return true;
      }
      RequestWeaponAsset(d, b, c);
      const e = await Mk.waitForCondition(() => HasWeaponAssetLoaded(d), 3000);
      return !e;
    };
    var bn = async a => {
      if (HasNamedPtfxAssetLoaded(a)) {
        return true;
      }
      RequestNamedPtfxAsset(a);
      const b = await Mk.waitForCondition(() => HasNamedPtfxAssetLoaded(a), 3000);
      return !b;
    };
    var cn = {
      loadModel: Ym,
      loadTexture: _m,
      loadAnim: Zm,
      loadClipSet: $m,
      loadWeaponAsset: an,
      loadNamedPtfxAsset: bn
    };
    var dn = cn;
    var en = (a, ...b) => {
      switch (a) {
        case "coord":
          {
            const [a, c, d] = b;
            return AddBlipForCoord(a, c, d);
          }
        case "area":
          {
            const [a, c, d, e, f] = b;
            return AddBlipForArea(a, c, d, e, f);
          }
        case "radius":
          {
            const [a, c, d, e] = b;
            return AddBlipForRadius(a, c, d, e);
          }
        case "pickup":
          {
            const [a] = b;
            return AddBlipForPickup(a);
          }
        case "entity":
          {
            const [a] = b;
            return AddBlipForEntity(a);
          }
        default:
          {
            console.error(new Error("Invalid Blip Type"));
            return 0;
          }
      }
    };
    var fn = (a, b, c, d, e, f, g, h) => {
      if (typeof c === "number") {
        SetBlipSprite(a, c);
      }
      if (typeof d === "number") {
        SetBlipColour(a, d);
      }
      if (typeof e === "number") {
        SetBlipAlpha(a, e);
      }
      if (typeof f === "number") {
        SetBlipScale(a, f);
      }
      if (typeof g === "boolean") {
        SetBlipRoute(a, g);
      }
      if (typeof h === "boolean") {
        SetBlipAsShortRange(a, h);
      }
      if (typeof b === "string") {
        BeginTextCommandSetBlipName("STRING");
        AddTextComponentString(b);
        EndTextCommandSetBlipName(a);
      }
    };
    var gn = {
      createBlip: en,
      applyBlipSettings: fn
    };
    var hn = gn;
    var jn = new Set();
    var kn = new Map();
    var ln = new Set();
    var mn = (a, b) => {
      return jn.has(b ? a + "-" + b : a);
    };
    var nn = (a, b) => {
      const c = a + "-enter";
      const d = kn.get(c) ?? [];
      if (!kn.has(c)) {
        kn.set(c, d);
      }
      d.push(b);
    };
    var pn = (a, b) => {
      const c = a + "-exit";
      const d = kn.get(c) ?? [];
      if (!kn.has(c)) {
        kn.set(c, d);
      }
      d.push(b);
    };
    var qn = (a, b, c, d, e = undefined) => {
      if (e === undefined) e = {};
      var f = {
        ...d
      };
      f.data = e;
      f.id = a;
      const g = f;
      g.data.id = a;
      exports["np-polyzone"].AddPolyZone(b, c, g);
    };
    var rn = (a, b, c, d, e, f, g = undefined) => {
      if (g === undefined) g = {};
      var h = {
        ...f
      };
      h.data = g;
      h.id = a;
      const i = h;
      i.data.id = a;
      exports["np-polyzone"].AddBoxZone(b, c, d, e, i);
    };
    var sn = (a, b, c, d, e, f, g = undefined) => {
      if (g === undefined) g = {};
      var h = {
        ...f
      };
      h.data = g;
      h.id = a;
      const i = h;
      i.data.id = a;
      exports["np-polytarget"].AddBoxZone(b, c, d, e, i);
    };
    var tn = (a, b, c, d, e, f = undefined) => {
      if (f === undefined) f = {};
      var g = {
        ...e
      };
      g.data = f;
      g.id = a;
      const h = g;
      h.data.id = a;
      exports["np-polyzone"].AddCircleZone(b, c, d, h);
    };
    var un = (a, b, c, d, e, f = undefined) => {
      if (f === undefined) f = {};
      var g = {
        ...e
      };
      g.data = f;
      g.id = a;
      const h = g;
      h.data.id = a;
      exports["np-polytarget"].AddCircleZone(b, c, d, h);
    };
    var vn = (a, b, c, d, e = undefined) => {
      if (e === undefined) e = {};
      var f = {
        ...d
      };
      f.data = e;
      const g = f;
      g.data.id = a;
      exports["np-polyzone"].AddEntityZone(b, c, g);
    };
    var wn = (a, b) => {
      exports["np-polyzone"].RemoveZone(a, b);
      jn.delete(a + "-" + b);
      ln.delete(a);
    };
    var xn = a => {
      ln.add(a);
    };
    var yn = {
      isActive: mn,
      onEnter: nn,
      onExit: pn,
      addPolyZone: qn,
      addBoxZone: rn,
      addBoxTarget: sn,
      addCircleZone: tn,
      addCircleTarget: un,
      addEntityZone: vn,
      removeZone: wn,
      setAsNetworked: xn
    };
    var zn = yn;
    var An = (a, b, c) => {
      globalThis.exports["np-interact"].AddPeekEntryByModel(a, b, c);
    };
    var Bn = (a, b, c) => {
      globalThis.exports["np-interact"].AddPeekEntryByPolyTarget(a, b, c);
    };
    var Cn = (a, b, c) => {
      globalThis.exports["np-interact"].AddPeekEntryByFlag(a, b, c);
    };
    var Dn = (a, b, c) => {
      globalThis.exports["np-interact"].AddPeekEntryByEntityType(a, b, c);
    };
    var En = (a, b, c, d) => {
      var e = {
        id: a,
        coords: [b.x, b.y, b.z],
        options: c,
        context: d
      };
      const f = e;
      globalThis.exports.interactions.AddInteraction(f);
    };
    var Fn = (a, b, c, d) => {
      var e = {
        id: a,
        options: c,
        context: d
      };
      const f = e;
      globalThis.exports.interactions.AddInteractionByModel(b, f);
    };
    var Gn = (a, b, c) => {
      var d = {
        id: a,
        options: b,
        context: c
      };
      const e = d;
      e.context.isPlayer = true;
      globalThis.exports.interactions.AddPedInteraction(e);
    };
    var Hn = (a, b, c) => {
      var d = {
        id: a,
        options: b,
        context: c
      };
      const e = d;
      globalThis.exports.interactions.AddPedInteraction(e);
    };
    var In = (a, b, c) => {
      var d = {
        id: a,
        options: b,
        context: c
      };
      const e = d;
      globalThis.exports.interactions.AddVehicleInteraction(e);
    };
    var Jn = a => {
      globalThis.exports.interactions.RemoveInteraction(a);
    };
    var Kn = a => {
      globalThis.exports.interactions.RemoveVehicleInteraction(a);
    };
    var Ln = a => {
      globalThis.exports.interactions.RemovePedInteraction(a);
    };
    var Mn = (a, b, c = false, d = null, e = true, f = null) => {
      return new Promise(g => {
        globalThis.exports["np-taskbar"].taskBar(a, b, c, e, f, false, g, d == null ? undefined : d.distance, d == null ? undefined : d.entity);
      });
    };
    var Nn = (a, b, c, d) => {
      return new Promise(e => {
        globalThis.exports["np-phone"].DoPhoneConfirmation(a, b, c, e, d);
      });
    };
    var On = (a, b, c = true, d = "home-screen") => {
      var e = {
        action: "notification",
        target_app: d,
        title: a,
        body: b,
        show_even_if_app_active: c
      };
      var f = {
        source: "np-nui",
        app: "phone",
        data: e
      };
      globalThis.exports["np-ui"].SendUIMessage(f);
    };
    var Pn = (a, b, c, d, e, f, g = 0, h = true) => {
      SetTextColour(d[0], d[1], d[2], d[3]);
      if (h) {
        SetTextOutline();
      }
      SetTextScale(0, e);
      SetTextFont(f ?? 0);
      SetTextJustification(g);
      if (g === 2) {
        SetTextWrap(0, 0.575);
      }
      SetTextEntry("STRING");
      AddTextComponentString(c ?? "Dummy text");
      EndTextCommandDisplayText(a, b);
    };
    var Qn = (a, b, c, d, e = 4, f = true, g) => {
      SetDrawOrigin(a.x, a.y, a.z, 0);
      const h = Math.max(Dk.getMapRange([0, 10], [0.4, 0.25], b), 0.1);
      Pn(0, 0, c, d, h, e, 0, f);
      if (g) {
        DrawRect(0.002, g.height / 2, g.width, g.height, g.color[0], g.color[1], g.color[2], g.color[3]);
      }
      ClearDrawOrigin();
    };
    var Rn = (a, b, c, d) => {
      globalThis.exports.contacts.open(a, b, c, d, true);
    };
    var Sn = {
      addPeekEntryByModel: An,
      addPeekEntryByTarget: Bn,
      addPeekEntryByFlag: Cn,
      addPeekEntryByType: Dn,
      addInteraction: En,
      addInteractionByModel: Fn,
      addPlayerInteraction: Gn,
      addPedInteraction: Hn,
      addVehicleInteraction: In,
      removeInteraction: Jn,
      removePlayerInteraction: Ln,
      removePedInteraction: Ln,
      removeVehicleInteraction: Kn,
      taskBar: Mn,
      phoneConfirmation: Nn,
      phoneNotification: On,
      drawText: Pn,
      drawText3D: Qn,
      customContact: Rn
    };
    var Tn = Sn;
    var Un = async a => {
      return globalThis.exports["np-heists"].BankMinigame(a);
    };
    var Vn = async a => {
      return globalThis.exports["np-heists"].DDRMinigame(a);
    };
    var Wn = async a => {
      return globalThis.exports.skillchecks.DirectionMinigame(a);
    };
    var Xn = async () => {
      return globalThis.exports.skillchecks.DrillingMinigame();
    };
    var Yn = async a => {
      return globalThis.exports.skillchecks.FlipMinigame(a);
    };
    var Zn = async a => {
      return globalThis.exports.skillchecks.FloodMinigame(a);
    };
    var $n = async a => {
      return globalThis.exports.skillchecks.TaskBarMinigame(a.difficulty, a.gap, a.iterations, a.useReverse);
    };
    var _n = async a => {
      return globalThis.exports["np-heists"].MazeMinigame(a);
    };
    var ao = async a => {
      return globalThis.exports.skillchecks.CrackSafe(a.locks);
    };
    var bo = async a => {
      return globalThis.exports.skillchecks.SameMinigame(a);
    };
    var co = async a => {
      return globalThis.exports["np-heists"].ThermiteMinigame(a);
    };
    var eo = async a => {
      return globalThis.exports.skillchecks.UntangleMinigame(a);
    };
    var fo = async a => {
      return globalThis.exports["np-heists"].VarMinigame(a);
    };
    var go = async a => {
      return globalThis.exports.skillchecks.WordsMinigame(a);
    };
    var ho = async a => {
      return globalThis.exports.skillchecks.AlphabetMinigame(a);
    };
    var io = async a => {
      return globalThis.exports.skillchecks.LockpickMinigame(a);
    };
    var jo = {
      BankMinigame: Un,
      DDRMinigame: Vn,
      DirectionMinigame: Wn,
      DrillingMinigame: Xn,
      FlipMinigame: Yn,
      FloodMinigame: Zn,
      TaskBarMinigame: $n,
      MazeMinigame: _n,
      CrackSafe: ao,
      SameMinigame: bo,
      ThermiteMinigame: co,
      UntangleMinigame: eo,
      VarMinigame: fo,
      WordsMinigame: go,
      AlphabetMinigame: ho,
      LockpickMinigame: io
    };
    var ko = jo;
    var lo = {
      async hasPermission(a, b = undefined) {
        if (b === undefined) b = {};
        return await exports.permissions.hasPermission(a, b);
      },
      async getUserPermissions() {
        return await exports.permissions.getUserPermissions();
      },
      async getCharPermissions(a) {
        return await exports.permissions.getCharPermissions();
      },
      async getTotalPermissions() {
        return await exports.permissions.getTotalPermissions();
      }
    };
    var mo = {
      RegisterAction: (a, b, c) => {
        return Tk.Sync.contacts.RegisterAction(a, b, c);
      }
    };
    var no = {
      RegisterEditorHandlerClient: async a => {
        return await globalThis.exports.editor.RegisterEditorHandlerClient(a);
      }
    };
    var oo;
    var po;
    var qo;
    var ro;
    var so;
    var to;
    var uo;
    var vo;
    var wo;
    var xo;
    var yo = class {
      constructor(a) {
        Ji(this, wo);
        Ji(this, oo, undefined);
        Ji(this, po, undefined);
        Ji(this, qo, undefined);
        Ji(this, ro, undefined);
        Ji(this, so, undefined);
        Ji(this, to, undefined);
        Ji(this, uo, false);
        Ji(this, vo, []);
        const b = pi.parse(a);
        Ki(this, oo, b.codename);
        Ki(this, po, b.version);
        Ki(this, qo, GetCurrentResourceName());
        Ki(this, ro, "exter_radar");
        emit("__npx_core:handshake", b, Mi(this, wo, xo).bind(this));
        um.register("__npx_core:handshake", async a => {
          if (a.codename !== Ii(this, oo)) {
            return;
          }
          const b = await Mk.waitForCondition(() => Ii(this, uo), 10000);
          if (b) {
            return;
          }
          return {
            API_URL: Ii(this, so),
            API_KEY: Ii(this, to)
          };
        });
      }
      get codename() {
        return Ii(this, oo);
      }
      get version() {
        return Ii(this, po);
      }
      get isReady() {
        return Ii(this, uo);
      }
      onReady(a) {
        if (Ii(this, uo)) {
          a();
        } else {
          Ii(this, vo).push(a);
        }
      }
    };
    oo = new WeakMap();
    po = new WeakMap();
    qo = new WeakMap();
    ro = new WeakMap();
    so = new WeakMap();
    to = new WeakMap();
    uo = new WeakMap();
    vo = new WeakMap();
    wo = new WeakSet();
    xo = async function (a) {
      Ki(this, so, a.API_URL);
      Ki(this, to, a.API_KEY);
      Ki(this, uo, true);
      for (const b of Ii(this, vo)) {
        b();
      }
    };
    /*! Bundled license information:
    crypto-js/ripemd160.js:
    (** @preserve
    (c) 2012 by Cédric Mesnil. All rights reserved.
    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    *)
    crypto-js/mode-ctr-gladman.js:
    (** @preserve
    * Counter block mode compatible with  Dr Brian Gladman fileenc.c
    * derived from CryptoJS.mode.CTR
    * Jan Hruby jhruby.web@gmail.com
    *)
    */
    ;
    function zo(a, b) {
      if (b == null || b > a.length) {
        b = a.length;
      }
      for (var c = 0, d = new Array(b); c < b; c++) {
        d[c] = a[c];
      }
      return d;
    }
    function Ao(a) {
      if (Array.isArray(a)) {
        return a;
      }
    }
    function Bo(a, b, c) {
      if (b in a) {
        var d = {
          value: c,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(a, b, d);
      } else {
        a[b] = c;
      }
      return a;
    }
    function Co(a, b) {
      var c = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (c == null) {
        return;
      }
      var d = [];
      var e = true;
      var f = false;
      var g;
      var h;
      try {
        for (c = c.call(a); !(e = (g = c.next()).done); e = true) {
          d.push(g.value);
          if (b && d.length === b) {
            break;
          }
        }
      } catch (a) {
        f = true;
        h = a;
      } finally {
        try {
          if (!e && c.return != null) {
            c.return();
          }
        } finally {
          if (f) {
            throw h;
          }
        }
      }
      return d;
    }
    function Do() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function Eo(a, b) {
      return Ao(a) || Co(a, b) || Fo(a, b) || Do();
    }
    function Fo(a, b) {
      if (!a) {
        return;
      }
      if (typeof a === "string") {
        return zo(a, b);
      }
      var c = Object.prototype.toString.call(a).slice(8, -1);
      if (c === "Object" && a.constructor) {
        c = a.constructor.name;
      }
      if (c === "Map" || c === "Set") {
        return Array.from(c);
      }
      if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) {
        return zo(a, b);
      }
    }
    function Go(a) {
      var b = Yq[a];
      if (b.Xmit) {
        b.Speed = "000";
        b.Fast = "000";
      } else {
        b.Speed = "OFF";
        b.Fast = "   ";
      }
      b.Dir = null;
      b.FastSpeed = -1;
      b.FastLocked = false;
      um.execute("exter_radar:setData", Bo({}, a, Yq[a]));
    }
    function Ho(a) {
      var b = Yq[a];
      if (b.Xmit) {
        b.Fast = "000";
        b.FastSpeed = -1;
        b.FastLocked = false;
        um.execute("exter_radar:setData", Bo({}, a, Yq[a]));
      }
    }
    function Io(a, b) {
      if (DoesEntityExist(a)) {
        return true;
      } else {
        return false;
      }
    }
    function Jo(a) {
      if (Yq.speedType === "mph") {
        return Math.round(GetEntitySpeed(a) * 2.236936);
      } else {
        return Math.round(GetEntitySpeed(a) * 3.6);
      }
    }
    function Ko(a, b) {
      emit("DoShortHudText", a, b);
    }
    function Lo(a) {
      return (a + 180) % 360;
    }
    function Mo(a, b, c) {
      var d = a - c / 2;
      var e = a + c / 2;
      var f = Lo(a);
      var g = f - c / 2;
      var h = f + c / 2;
      if (b > d && b < e) {
        return true;
      } else if (b > g && b < h) {
        return false;
      } else {
        return null;
      }
    }
    function No(a, b, c) {
      var d = StartShapeTestCapsule(b[0], b[1], b[2], c[0], c[1], c[2], 2, 10, a, 7);
      var e = Eo(GetShapeTestResult(d), 5);
      var f = e[0];
      var g = e[1];
      var h = e[2];
      var i = e[3];
      var j = e[4];
      return j;
    }
    ;
    var Oo = Object.defineProperty;
    var Po = (a, b) => {
      for (var c in b) {
        Oo(a, c, {
          get: b[c],
          enumerable: true
        });
      }
    };
    var Qo = (a, b, c) => {
      if (!b.has(a)) {
        throw TypeError("Cannot " + c);
      }
    };
    var Ro = (a, b, c) => {
      Qo(a, b, "read from private field");
      if (c) {
        return c.call(a);
      } else {
        return b.get(a);
      }
    };
    var So = (a, b, c) => {
      if (b.has(a)) {
        throw TypeError("Cannot add the same private member more than once");
      }
      if (b instanceof WeakSet) {
        b.add(a);
      } else {
        b.set(a, c);
      }
    };
    var To = (a, b, c, d) => {
      Qo(a, b, "write to private field");
      if (d) {
        d.call(a, c);
      } else {
        b.set(a, c);
      }
      return c;
    };
    var Uo = (a, b, c) => {
      Qo(a, b, "access private method");
      return c;
    };
    var Vo = {
      ESC: 322,
      F1: 288,
      F2: 289,
      F3: 170,
      F5: 166,
      F6: 167,
      F7: 168,
      F8: 169,
      F9: 56,
      F10: 57,
      "~": 243,
      "#1": 157,
      "#2": 158,
      "#3": 160,
      "#4": 164,
      "#5": 165,
      "#6": 159,
      "#7": 161,
      "#8": 162,
      "#9": 163,
      "-": 84,
      "=": 83,
      BACKSPACE: 177,
      TAB: 37,
      Q: 44,
      W: 32,
      E: 38,
      R: 45,
      T: 245,
      Y: 246,
      U: 303,
      P: 199,
      ENTER: 18,
      CAPS: 137,
      A: 34,
      S: 8,
      D: 9,
      F: 23,
      G: 47,
      H: 74,
      K: 311,
      L: 182,
      LEFTSHIFT: 21,
      Z: 20,
      X: 73,
      C: 26,
      V: 0,
      B: 29,
      N: 249,
      M: 244,
      ",": 82,
      ".": 81,
      LEFTCTRL: 36,
      LEFTALT: 19,
      SPACE: 22,
      RIGHTCTRL: 70,
      HOME: 213,
      PAGEUP: 10,
      PAGEDOWN: 11,
      DELETE: 178,
      LEFT: 174,
      RIGHT: 175,
      TOP: 27,
      DOWN: 173,
      NENTER: 201,
      N4: 108,
      N5: 60,
      N6: 107,
      "N+": 96,
      "N-": 97,
      N7: 117,
      N8: 61,
      N9: 118
    };
    var Wo = {};
    var Xo = {
      MathUtils: () => dq
    };
    Po(Wo, Xo);
    var Yo;
    var Zo;
    var $o = class a {
      constructor(a, b, c) {
        So(this, Yo);
        const d = Uo(this, Yo, Zo).call(this, a, b, c);
        this.x = d.x;
        this.y = d.y;
        this.z = d.z;
      }
      equals(a, b, c) {
        const d = Uo(this, Yo, Zo).call(this, a, b, c);
        return this.x === d.x && this.y === d.y && this.z === d.z;
      }
      add(a, b, c, d) {
        let e = Uo(this, Yo, Zo).call(this, a, b, c);
        this.x += d ? e.x * d : e.x;
        this.y += d ? e.y * d : e.y;
        this.z += d ? e.z * d : e.z;
        return this;
      }
      addScalar(a) {
        if (typeof a !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x += a;
        this.y += a;
        this.z += a;
        return this;
      }
      sub(a, b, c, d) {
        const e = Uo(this, Yo, Zo).call(this, a, b, c);
        this.x -= d ? e.x * d : e.x;
        this.y -= d ? e.y * d : e.y;
        this.z -= d ? e.z * d : e.z;
        return this;
      }
      subScalar(a) {
        if (typeof a !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x -= a;
        this.y -= a;
        this.z -= a;
        return this;
      }
      multiply(a, b, c) {
        const d = Uo(this, Yo, Zo).call(this, a, b, c);
        this.x *= d.x;
        this.y *= d.y;
        this.z *= d.z;
        return this;
      }
      multiplyScalar(a) {
        if (typeof a !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x *= a;
        this.y *= a;
        this.z *= a;
        return this;
      }
      divide(a, b, c) {
        const d = Uo(this, Yo, Zo).call(this, a, b, c);
        this.x /= d.x;
        this.y /= d.y;
        this.z /= d.z;
        return this;
      }
      divideScalar(a) {
        if (typeof a !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x /= a;
        this.y /= a;
        this.z /= a;
        return this;
      }
      round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        return this;
      }
      floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        return this;
      }
      ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        return this;
      }
      getCenter(b, c, d) {
        const e = Uo(this, Yo, Zo).call(this, b, c, d);
        return new a((this.x + e.x) / 2, (this.y + e.y) / 2, (this.z + e.z) / 2);
      }
      getDistance(a, b, c) {
        const [d, e, f] = a instanceof Array ? a : typeof a === "object" ? [a.x, a.y, a.z] : [a, b, c];
        if (typeof d !== "number" || typeof e !== "number" || typeof f !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [g, h, i] = [this.x - d, this.y - e, this.z - f];
        return Math.sqrt(g * g + h * h + i * i);
      }
      toArray(a) {
        if (typeof a === "number") {
          return [parseFloat(this.x.toFixed(a)), parseFloat(this.y.toFixed(a)), parseFloat(this.z.toFixed(a))];
        }
        return [this.x, this.y, this.z];
      }
      toJSON(a) {
        if (typeof a === "number") {
          return {
            x: parseFloat(this.x.toFixed(a)),
            y: parseFloat(this.y.toFixed(a)),
            z: parseFloat(this.z.toFixed(a))
          };
        }
        var b = {
          x: this.x,
          y: this.y,
          z: this.z
        };
        return b;
      }
      toString(a) {
        return JSON.stringify(this.toJSON(a));
      }
    };
    Yo = new WeakSet();
    Zo = function (a, b, c) {
      let d = {
        x: 0,
        y: 0,
        z: 0
      };
      if (a instanceof $o) {
        d = a;
      } else if (a instanceof Array) {
        var e = {
          x: a[0],
          y: a[1],
          z: a[2]
        };
        d = e;
      } else if (typeof a === "object") {
        d = a;
      } else {
        var f = {
          x: a,
          y: b,
          z: c
        };
        d = f;
      }
      if (typeof d.x !== "number" || typeof d.y !== "number" || typeof d.z !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return d;
    };
    var _o = $o;
    var ap;
    var bp;
    var cp = class {
      constructor(a) {
        So(this, ap, undefined);
        So(this, bp, undefined);
        To(this, bp, a ?? 5);
        To(this, ap, new Map());
      }
      setTTL(a) {
        To(this, bp, a);
      }
      set(a, b, c) {
        Ro(this, ap).set(a, {
          value: b,
          expiration: Date.now() + (c ?? Ro(this, bp)) * 1000
        });
        return this;
      }
      get(a, b = false) {
        const c = Ro(this, ap).get(a);
        const d = c ? b ? true : c.expiration > Date.now() : false;
        if (!c || !d) {
          if (c) {
            Ro(this, ap).delete(a);
          }
          return;
        }
        return c.value;
      }
      has(a, b = false) {
        const c = Ro(this, ap).get(a);
        const d = c ? b ? true : c.expiration > Date.now() : false;
        if (c && !d) {
          Ro(this, ap).delete(a);
        }
        return d;
      }
      delete(a) {
        return Ro(this, ap).delete(a);
      }
      clear() {
        Ro(this, ap).clear();
      }
      values(a = false) {
        const b = [];
        const c = Date.now();
        for (const d of Ro(this, ap).values()) {
          if (a || d.expiration > c) {
            b.push(d.value);
          }
        }
        return b;
      }
      keys(a = false) {
        const b = [];
        const c = Date.now();
        for (const [d, e] of Ro(this, ap).entries()) {
          if (a || e.expiration > c) {
            b.push(d);
          }
        }
        return b;
      }
      entries(a = false) {
        const b = [];
        const c = Date.now();
        for (const [d, e] of Ro(this, ap).entries()) {
          if (a || e.expiration > c) {
            b.push([d, e.value]);
          }
        }
        return b;
      }
    };
    ap = new WeakMap();
    bp = new WeakMap();
    var dp;
    var ep;
    var fp;
    var gp;
    var hp;
    var ip;
    var jp;
    var kp;
    var lp;
    var mp;
    var np;
    var op;
    var pp;
    var qp;
    var rp;
    var sp;
    var tp;
    var up;
    var vp;
    var wp;
    var xp;
    var yp;
    var zp = class {
      constructor(a, b, c, d, e, f = 30, g = false) {
        So(this, pp);
        So(this, rp);
        So(this, tp);
        So(this, vp);
        So(this, xp);
        So(this, dp, undefined);
        So(this, ep, undefined);
        So(this, fp, undefined);
        So(this, gp, undefined);
        So(this, hp, undefined);
        So(this, ip, undefined);
        So(this, jp, undefined);
        So(this, kp, undefined);
        So(this, lp, undefined);
        So(this, mp, undefined);
        So(this, np, undefined);
        So(this, op, undefined);
        To(this, dp, a);
        To(this, ep, d);
        To(this, fp, e);
        To(this, gp, b);
        To(this, hp, c);
        To(this, ip, g);
        To(this, jp, f);
        To(this, lp, Ro(this, ep).x / f);
        To(this, mp, Ro(this, ep).y / f);
        To(this, kp, Ro(this, lp) * Ro(this, mp));
        To(this, np, Uo(this, pp, qp).call(this, Ro(this, dp), Ro(this, jp), Ro(this, lp), Ro(this, mp), Ro(this, ip)));
        To(this, op, Uo(this, rp, sp).call(this, Ro(this, np), Ro(this, kp)));
      }
      get cells() {
        return Ro(this, np);
      }
      get cellSize() {
        return Ro(this, jp);
      }
      get cellWidth() {
        return Ro(this, lp);
      }
      get cellHeight() {
        return Ro(this, mp);
      }
      get gridArea() {
        return Ro(this, op);
      }
      get gridCoverage() {
        return Ro(this, op) / Ro(this, fp) * 100;
      }
      isPointInsideGrid(a) {
        var b;
        const c = a.x - Ro(this, gp).x;
        const d = a.y - Ro(this, gp).y;
        const e = Math.floor(c * Ro(this, jp) / Ro(this, ep).x);
        const f = Math.floor(d * Ro(this, jp) / Ro(this, ep).y);
        let g = (b = Ro(this, np)[e]) == null ? undefined : b[f];
        if (!g && Ro(this, ip)) {
          g = Uo(this, vp, wp).call(this, e, f, Ro(this, lp), Ro(this, mp), Ro(this, dp));
          Ro(this, np)[e][f] = g;
          if (!g) {
            return false;
          }
          To(this, op, Ro(this, op) + Ro(this, kp));
        }
        return g ?? false;
      }
    };
    dp = new WeakMap();
    ep = new WeakMap();
    fp = new WeakMap();
    gp = new WeakMap();
    hp = new WeakMap();
    ip = new WeakMap();
    jp = new WeakMap();
    kp = new WeakMap();
    lp = new WeakMap();
    mp = new WeakMap();
    np = new WeakMap();
    op = new WeakMap();
    pp = new WeakSet();
    qp = function (a, b, c, d, e) {
      const f = {};
      for (let g = 0; g < b; g++) {
        f[g] = {};
        if (e) {
          continue;
        }
        for (let e = 0; e < b; e++) {
          const b = Uo(this, vp, wp).call(this, g, e, c, d, a);
          if (!b) {
            continue;
          }
          f[g][e] = true;
        }
      }
      return f;
    };
    rp = new WeakSet();
    sp = function (a, b) {
      let c = 0;
      for (const d in a) {
        for (const e in a[d]) {
          c += b;
        }
      }
      return c;
    };
    tp = new WeakSet();
    up = function (a, b, c, d) {
      const e = [];
      const f = a * c + Ro(this, gp).x;
      const g = b * d + Ro(this, gp).y;
      e.push(new Wp(f, g));
      e.push(new Wp(f + c, g));
      e.push(new Wp(f + c, g + d));
      e.push(new Wp(f, g + d));
      return e;
    };
    vp = new WeakSet();
    wp = function (a, b, c, d, e) {
      const f = Uo(this, tp, up).call(this, a, b, c, d);
      let g = false;
      for (const h of f) {
        const a = mq.MathUtils.windingNumber(h, e);
        if (a !== 0) {
          g = true;
          break;
        }
      }
      if (!g) {
        return false;
      }
      for (let g = 0; g < f.length; g++) {
        const a = f[g];
        const b = f[(g + 1) % f.length];
        for (let c = 0; c < e.length; c++) {
          const d = e[c];
          const f = e[(c + 1) % e.length];
          if (Uo(this, xp, yp).call(this, a, b, d, f)) {
            return false;
          }
        }
      }
      return true;
    };
    xp = new WeakSet();
    yp = function (a, b, c, d) {
      const e = (b.x - a.x) * (d.y - c.y) - (b.y - a.y) * (d.x - c.x);
      const f = (a.y - c.y) * (d.x - c.x) - (a.x - c.x) * (d.y - c.y);
      const g = (a.y - c.y) * (b.x - a.x) - (a.x - c.x) * (b.y - a.y);
      if (e === 0) {
        return f === 0 && g === 0;
      }
      const h = f / e;
      const i = g / e;
      return h >= 0 && h <= 1 && i >= 0 && i <= 1;
    };
    var Ap;
    var Bp;
    var Cp;
    var Dp;
    var Ep;
    var Fp;
    var Gp;
    var Hp;
    var Ip;
    var Jp;
    var Kp;
    var Lp;
    var Mp;
    var Np;
    var Op;
    var Pp;
    var Qp;
    var Rp;
    var Sp = class {
      constructor(a, b = undefined, c = undefined) {
        if (b === undefined) b = {};
        if (c === undefined) c = {};
        So(this, Ip);
        So(this, Kp);
        So(this, Mp);
        So(this, Op);
        So(this, Qp);
        So(this, Ap, undefined);
        So(this, Bp, undefined);
        So(this, Cp, undefined);
        So(this, Dp, undefined);
        So(this, Ep, undefined);
        So(this, Fp, undefined);
        So(this, Gp, undefined);
        So(this, Hp, undefined);
        To(this, Ap, mq.getUUID());
        To(this, Bp, a);
        To(this, Cp, Uo(this, Ip, Jp).call(this, a));
        To(this, Dp, Uo(this, Kp, Lp).call(this, a));
        To(this, Ep, Uo(this, Qp, Rp).call(this, a));
        To(this, Fp, Uo(this, Op, Pp).call(this, Ro(this, Cp), Ro(this, Dp)));
        To(this, Gp, Uo(this, Mp, Np).call(this, Ro(this, Cp), Ro(this, Dp)));
        this.options = b;
        this.data = c;
        if (!this.options.useGrid && !this.options.useLazyGrid) {
          return;
        }
        To(this, Hp, new zp(Ro(this, Bp), Ro(this, Cp), Ro(this, Dp), Ro(this, Fp), Ro(this, Ep), b.gridCellSize, b.useLazyGrid));
      }
      get id() {
        return Ro(this, Ap);
      }
      get center() {
        return Ro(this, Gp);
      }
      get min() {
        return Ro(this, Cp);
      }
      get max() {
        return Ro(this, Dp);
      }
      get points() {
        return [...Ro(this, Bp)];
      }
      isPointInside(a) {
        if (a.x < Ro(this, Cp).x || a.x > Ro(this, Dp).x) {
          return false;
        } else if (a.y < Ro(this, Cp).y || a.y > Ro(this, Dp).y) {
          return false;
        }
        if ((this.options.minZ || this.options.maxZ) && a instanceof _o) {
          const b = this.options.minZ ?? -Infinity;
          const c = this.options.maxZ ?? Infinity;
          if (a.z < b || a.z > c) {
            return false;
          }
        }
        if ((this.options.useGrid || this.options.useLazyGrid) && Ro(this, Hp)) {
          return Ro(this, Hp).isPointInsideGrid(a);
        }
        const b = mq.MathUtils.windingNumber(a, Ro(this, Bp));
        return b !== 0;
      }
      addPoint(a) {
        Ro(this, Bp).push(a);
      }
      removePoint(a) {
        const b = Ro(this, Bp).findIndex(b => b.x === a.x && b.y === a.y);
        if (b === -1) {
          return;
        }
        Ro(this, Bp).splice(b, 1);
      }
      removeLastPoint() {
        Ro(this, Bp).pop();
      }
      recalculate() {
        To(this, Cp, Uo(this, Ip, Jp).call(this, Ro(this, Bp)));
        To(this, Dp, Uo(this, Kp, Lp).call(this, Ro(this, Bp)));
        To(this, Ep, Uo(this, Qp, Rp).call(this, Ro(this, Bp)));
        To(this, Fp, Uo(this, Op, Pp).call(this, Ro(this, Cp), Ro(this, Dp)));
        To(this, Gp, Uo(this, Mp, Np).call(this, Ro(this, Cp), Ro(this, Dp)));
        if (!this.options.useGrid) {
          return;
        }
        To(this, Hp, new zp(Ro(this, Bp), Ro(this, Cp), Ro(this, Dp), Ro(this, Fp), Ro(this, Ep), this.options.gridCellSize, this.options.useLazyGrid));
      }
    };
    Ap = new WeakMap();
    Bp = new WeakMap();
    Cp = new WeakMap();
    Dp = new WeakMap();
    Ep = new WeakMap();
    Fp = new WeakMap();
    Gp = new WeakMap();
    Hp = new WeakMap();
    Ip = new WeakSet();
    Jp = function (a) {
      let b = Number.MAX_SAFE_INTEGER;
      let c = Number.MAX_SAFE_INTEGER;
      for (const d of a) {
        b = Math.min(b, d.x);
        c = Math.min(c, d.y);
      }
      return new Wp(b, c);
    };
    Kp = new WeakSet();
    Lp = function (a) {
      let b = Number.MIN_SAFE_INTEGER;
      let c = Number.MIN_SAFE_INTEGER;
      for (const d of a) {
        b = Math.max(b, d.x);
        c = Math.max(c, d.y);
      }
      return new Wp(b, c);
    };
    Mp = new WeakSet();
    Np = function (a, b) {
      const c = b.add(a);
      return c.divideScalar(2);
    };
    Op = new WeakSet();
    Pp = function (a, b) {
      return b.sub(a);
    };
    Qp = new WeakSet();
    Rp = function (a) {
      let b = 0;
      for (let c = 0, d = a.length - 1; c < a.length; d = c++) {
        const e = a[c];
        const f = a[d];
        b += e.x * f.y;
        b -= e.y * f.x;
      }
      return Math.abs(b / 2);
    };
    var Tp;
    var Up;
    var Vp = class a {
      constructor(a, b) {
        So(this, Tp);
        const c = Uo(this, Tp, Up).call(this, a, b);
        this.x = c.x;
        this.y = c.y;
      }
      equals(a, b) {
        const c = Uo(this, Tp, Up).call(this, a, b);
        return this.x === c.x && this.y === c.y;
      }
      add(b, c, d) {
        const e = Uo(this, Tp, Up).call(this, b, c);
        const f = this.x + (d ? e.x * d : e.x);
        const g = this.y + (d ? e.y * d : e.y);
        return new a(f, g);
      }
      addScalar(b) {
        if (typeof b !== "number") {
          throw new Error("Invalid scalar");
        }
        const c = this.x + b;
        const d = this.y + b;
        return new a(c, d);
      }
      sub(b, c, d) {
        const e = Uo(this, Tp, Up).call(this, b, c);
        const f = this.x - (d ? e.x * d : e.x);
        const g = this.y - (d ? e.y * d : e.y);
        return new a(f, g);
      }
      subScalar(b) {
        if (typeof b !== "number") {
          throw new Error("Invalid scalar");
        }
        const c = this.x - b;
        const d = this.y - b;
        return new a(c, d);
      }
      multiply(b, c) {
        const d = Uo(this, Tp, Up).call(this, b, c);
        const e = this.x * d.x;
        const f = this.y * d.y;
        return new a(e, f);
      }
      multiplyScalar(b) {
        if (typeof b !== "number") {
          throw new Error("Invalid scalar");
        }
        const c = this.x * b;
        const d = this.y * b;
        return new a(c, d);
      }
      divide(b, c) {
        const d = Uo(this, Tp, Up).call(this, b, c);
        const e = this.x / d.x;
        const f = this.y / d.y;
        return new a(e, f);
      }
      divideScalar(b) {
        if (typeof b !== "number") {
          throw new Error("Invalid scalar");
        }
        const c = this.x / b;
        const d = this.y / b;
        return new a(c, d);
      }
      round() {
        const b = Math.round(this.x);
        const c = Math.round(this.y);
        return new a(b, c);
      }
      floor() {
        const b = Math.floor(this.x);
        const c = Math.floor(this.y);
        return new a(b, c);
      }
      ceil() {
        const b = Math.ceil(this.x);
        const c = Math.ceil(this.y);
        return new a(b, c);
      }
      getCenter(b, c) {
        const d = Uo(this, Tp, Up).call(this, b, c);
        return new a((this.x + d.x) / 2, (this.y + d.y) / 2);
      }
      getDistance(a, b) {
        const [c, d] = a instanceof Array ? a : typeof a === "object" ? [a.x, a.y] : [a, b];
        if (typeof c !== "number" || typeof d !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [e, f] = [this.x - c, this.y - d];
        return Math.sqrt(e * e + f * f);
      }
      toArray(a) {
        if (typeof a === "number") {
          return [parseFloat(this.x.toFixed(a)), parseFloat(this.y.toFixed(a))];
        }
        return [this.x, this.y];
      }
      toJSON(a) {
        if (typeof a === "number") {
          return {
            x: parseFloat(this.x.toFixed(a)),
            y: parseFloat(this.y.toFixed(a))
          };
        }
        var b = {
          x: this.x,
          y: this.y
        };
        return b;
      }
      toString(a) {
        return JSON.stringify(this.toJSON(a));
      }
    };
    Tp = new WeakSet();
    Up = function (a, b) {
      let c = {
        x: 0,
        y: 0
      };
      if (a instanceof Vp || a instanceof _o) {
        c = a;
      } else if (a instanceof Array) {
        var d = {
          x: a[0],
          y: a[1]
        };
        c = d;
      } else if (typeof a === "object") {
        c = a;
      } else {
        var e = {
          x: a,
          y: b
        };
        c = e;
      }
      if (typeof c.x !== "number" || typeof c.y !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return c;
    };
    var Wp = Vp;
    var Xp = (a, b, c) => {
      return Math.min(Math.max(a, b), c);
    };
    var Yp = (a, b, c) => {
      return b[0] + (c - a[0]) * (b[1] - b[0]) / (a[1] - a[0]);
    };
    var Zp = ([a, b, c], [d, e, f]) => {
      const [g, h, i] = [a - d, b - e, c - f];
      return Math.sqrt(g * g + h * h + i * i);
    };
    var $p = (a, b) => {
      if (b) {
        return Math.floor(Math.random() * (b - a + 1) + a);
      } else {
        return Math.floor(Math.random() * a);
      }
    };
    var _p = (a, b) => {
      if (a instanceof Wp) {
        return a;
      } else if (a instanceof _o) {
        return new Wp(a);
      } else if (a instanceof Array) {
        return new Wp(a);
      } else if (typeof a === "object") {
        return new Wp(a);
      }
      if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new Wp(a, b);
    };
    var aq = (a, b, c) => {
      if (a instanceof _o) {
        return a;
      } else if (a instanceof Array) {
        return new _o(a);
      } else if (typeof a === "object") {
        return new _o(a);
      }
      if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new _o(a, b, c);
    };
    var bq = (a, b) => {
      let c = 0;
      const d = (a, b, c) => {
        return (b.x - a.x) * (c.y - a.y) - (c.x - a.x) * (b.y - a.y);
      };
      for (let e = 0; e < b.length; e++) {
        const f = b[e];
        const g = b[(e + 1) % b.length];
        if (f.y <= a.y) {
          if (g.y > a.y && d(f, g, a) > 0) {
            c++;
          }
        } else if (g.y <= a.y && d(f, g, a) < 0) {
          c--;
        }
      }
      return c;
    };
    var cq = {
      clamp: Xp,
      getMapRange: Yp,
      getDistance: Zp,
      getRandomNumber: $p,
      parseVector2: _p,
      parseVector3: aq,
      windingNumber: bq
    };
    var dq = cq;
    function eq(a, b) {
      const c = "_";
      const d = fq((b, c, ...d) => {
        return a(b, ...d);
      }, b);
      return {
        get: function (...a) {
          return d.get(c, ...a);
        },
        reset: function () {
          d.reset(c);
        }
      };
    }
    function fq(a, b) {
      const c = b.timeToLive || 60000;
      const d = {};
      async function e(b, ...e) {
        let f = d[b];
        if (!f) {
          f = {
            value: null,
            lastUpdated: 0
          };
          d[b] = f;
        }
        const g = Date.now();
        if (f.lastUpdated === 0 || g - f.lastUpdated > c) {
          const [c, d] = await a(f, b, ...e);
          if (c) {
            f.lastUpdated = g;
            f.value = d;
          }
          return d;
        }
        return await new Promise(a => setTimeout(() => a(f.value), 0));
      }
      return {
        get: async function (a, ...b) {
          return await e(a, ...b);
        },
        reset: function (a) {
          const b = d[a];
          if (b) {
            b.lastUpdated = 0;
          }
        }
      };
    }
    function gq() {
      if (globalThis && typeof globalThis.crypto === "object") {
        return o();
      } else {
        return new Zf(4).toString();
      }
    }
    function hq(a) {
      return D(a, D.URL);
    }
    function iq(a, b) {
      return new Promise((c, d) => {
        const e = Date.now();
        const f = setInterval(() => {
          const d = Date.now() - e > b;
          if (a() || d) {
            clearInterval(f);
            return c(d);
          }
        }, 1);
      });
    }
    function jq(a) {
      return new Promise(b => setTimeout(() => b(), a));
    }
    function kq() {
      return jq(0);
    }
    var lq = {
      cache: eq,
      cacheableMap: fq,
      waitForCondition: iq,
      getUUID: gq,
      getStringHash: hq,
      wait: jq,
      waitForNextFrame: kq,
      deflate: Pf,
      inflate: Tf,
      ...Wo
    };
    var mq = lq;
    var nq = (a => {
      a[a.hat = 0] = "hat";
      a[a.mask = 1] = "mask";
      a[a.glasses = 2] = "glasses";
      a[a.armor = 3] = "armor";
      a[a.shoes = 4] = "shoes";
      a[a.idcard = 5] = "idcard";
      a[a.mobilephone = 6] = "mobilephone";
      a[a.keyring = 7] = "keyring";
      a[a.bankcard = 8] = "bankcard";
      a[a.backpack = 9] = "backpack";
      return a;
    })(nq || {});
    ;
    function oq(a, b, c, d, e, f, g) {
      try {
        var h = a[f](g);
        var i = h.value;
      } catch (a) {
        c(a);
        return;
      }
      if (h.done) {
        b(i);
      } else {
        Promise.resolve(i).then(d, e);
      }
    }
    function pq(a) {
      return function () {
        var b = this;
        var c = arguments;
        return new Promise(function (d, e) {
          var f = a.apply(b, c);
          function g(a) {
            oq(f, d, e, g, h, "next", a);
          }
          function h(a) {
            oq(f, d, e, g, h, "throw", a);
          }
          g(undefined);
        });
      };
    }
    function qq(a, b) {
      var c;
      var d;
      var e;
      var f;
      var g = {
        label: 0,
        sent: function () {
          if (e[0] & 1) {
            throw e[1];
          }
          return e[1];
        },
        trys: [],
        ops: []
      };
      f = {
        next: h(0),
        throw: h(1),
        return: h(2)
      };
      if (typeof Symbol === "function") {
        f[Symbol.iterator] = function () {
          return this;
        };
      }
      return f;
      function h(a) {
        return function (b) {
          return i([a, b]);
        };
      }
      function i(f) {
        if (c) {
          throw new TypeError("Generator is already executing.");
        }
        while (g) {
          try {
            c = 1;
            if (d && (e = f[0] & 2 ? d.return : f[0] ? d.throw || ((e = d.return) && e.call(d), 0) : d.next) && !(e = e.call(d, f[1])).done) {
              return e;
            }
            d = 0;
            if (e) {
              f = [f[0] & 2, e.value];
            }
            switch (f[0]) {
              case 0:
              case 1:
                e = f;
                break;
              case 4:
                g.label++;
                var h = {
                  value: f[1],
                  done: false
                };
                return h;
              case 5:
                g.label++;
                d = f[1];
                f = [0];
                continue;
              case 7:
                f = g.ops.pop();
                g.trys.pop();
                continue;
              default:
                if (!(e = g.trys, e = e.length > 0 && e[e.length - 1]) && (f[0] === 6 || f[0] === 2)) {
                  g = 0;
                  continue;
                }
                if (f[0] === 3 && (!e || f[1] > e[0] && f[1] < e[3])) {
                  g.label = f[1];
                  break;
                }
                if (f[0] === 6 && g.label < e[1]) {
                  g.label = e[1];
                  e = f;
                  break;
                }
                if (e && g.label < e[2]) {
                  g.label = e[2];
                  g.ops.push(f);
                  break;
                }
                if (e[2]) {
                  g.ops.pop();
                }
                g.trys.pop();
                continue;
            }
            f = b.call(a, g);
          } catch (a) {
            f = [6, a];
            d = 0;
          } finally {
            c = e = 0;
          }
        }
        if (f[0] & 5) {
          throw f[1];
        }
        var i = {
          value: f[0] ? f[1] : undefined,
          done: true
        };
        return i;
      }
    }
    var ilzexter = false;
    var sq;
    if (Config.FrameWork === "qbcore") {
      onNet("QBCore:Client:OnPlayerLoaded", function () {
        sq = Oa.Functions.GetPlayerData().job;
        if (Config.PoliceJobs[sq.name]) {
          ilzexter = true;
        }
      });
      onNet("QBCore:Client:SetDuty", function (a) {
        sq = a;
        if (Config.PoliceJobs[sq.name]) {
          ilzexter = true;
        }
      });
      onNet("QBCore:Client:OnJobUpdate", function (a) {
        sq = a;
        if (Config.PoliceJobs[sq.name]) {
          ilzexter = true;
        }
      });
    } else if (Config.FrameWork === "esx") {
      onNet("esx:setjobstatus", function (job) {
        if (Config.PoliceJobs[job]) {ilzexter = true;}
      })
    }
    else if (Config.FrameWork === "np-base") {
      onNet("nowIsCop", function (a) {
        a(ilzexter);
      });
      onNet("police:noLongerCop", function () {
        ilzexter = false;
      });
      onNet("np-jobmanager:playerBecameJob", function (job) {
        if (job === "police" || Config.PoliceJobs[job]) {
          ilzexter = true;
        } else {
          ilzexter = false;
        }
      });
    }
    on("baseevents:enteredVehicle", function (a) {
      if (Yq.exter_radarEnabled) {
        Qq.start();
      }
    });
    on("baseevents:leftVehicle", function () {
      Qq.stop();
    });
    onNet("exter_radar:alarm", pq(function () {
      return qq(this, function (a) {
        switch (a.label) {
          case 0:
            PlaySoundFrontend(-1, "Beep_Green", "DLC_HEIST_HACKING_SNAKE_SOUNDS", true);
            return [4, mq.wait(100)];
          case 1:
            a.sent();
            PlaySoundFrontend(-1, "Beep_Red", "DLC_HEIST_HACKING_SNAKE_SOUNDS", true);
            return [4, mq.wait(100)];
          case 2:
            a.sent();
            PlaySoundFrontend(-1, "Beep_Green", "DLC_HEIST_HACKING_SNAKE_SOUNDS", true);
            return [4, mq.wait(100)];
          case 3:
            a.sent();
            PlaySoundFrontend(-1, "Beep_Red", "DLC_HEIST_HACKING_SNAKE_SOUNDS", true);
            return [4, mq.wait(100)];
          case 4:
            a.sent();
            return [2];
        }
      });
    }));
    onNet("wk:disableexter_radar", function () {
      Yq.exter_radarEnabled = false;
      var a = {
        exter_radarEnabled: Yq.exter_radarEnabled
      };
      um.execute("exter_radar:setData", a);
    });
    onNet("platecheck:frontexter_radar", function () {
      if (!ilzexter) {
        return;
      }
      emitNet("np:vehicles:plateCheck", Yq.frontPlate);
    });
    onNet("platecheck:rearexter_radar", function () {
      if (!ilzexter) {
        return;
      }
      emitNet("np:vehicles:plateCheck", Yq.rearPlate);
    });
    onNet("startSpeedo", function () {
      var a = PlayerPedId();
      if (!ilzexter) {
        return;
      }
      if (IsPedSittingInAnyVehicle(a)) {
        Yq.exter_radarEnabled = !Yq.exter_radarEnabled;
        if (Yq.exter_radarEnabled) {
          Ko("exter_radar enabled.", 5);
        } else {
          Ko("exter_radar disabled.", 5);
        }
        Go("fwd");
        Go("bwd");
        var b = {
          exter_radarEnabled: Yq.exter_radarEnabled,
          fwd: Yq.fwd,
          bwd: Yq.bwd
        };
        um.execute("exter_radar:setData", b);
        Qq.start();
      } else {
        Ko("You must be in a vehicle to use the exter_radar.", 5);
      }
    });
    ;
    function tq(a, b, c, d, e, f, g) {
      try {
        var h = a[f](g);
        var i = h.value;
      } catch (a) {
        c(a);
        return;
      }
      if (h.done) {
        b(i);
      } else {
        Promise.resolve(i).then(d, e);
      }
    }
    function uq(a) {
      return function () {
        var b = this;
        var c = arguments;
        return new Promise(function (d, e) {
          var f = a.apply(b, c);
          function g(a) {
            tq(f, d, e, g, h, "next", a);
          }
          function h(a) {
            tq(f, d, e, g, h, "throw", a);
          }
          g(undefined);
        });
      };
    }
    function vq(a, b) {
      if (!(a instanceof b)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function wq(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        d.enumerable = d.enumerable || false;
        d.configurable = true;
        if ("value" in d) {
          d.writable = true;
        }
        Object.defineProperty(a, d.key, d);
      }
    }
    function xq(a, b, c) {
      if (b) {
        wq(a.prototype, b);
      }
      if (c) {
        wq(a, c);
      }
      return a;
    }
    function yq(a, b, c) {
      if (b in a) {
        var d = {
          value: c,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(a, b, d);
      } else {
        a[b] = c;
      }
      return a;
    }
    function zq(a, b) {
      var c;
      var d;
      var e;
      var f;
      var g = {
        label: 0,
        sent: function () {
          if (e[0] & 1) {
            throw e[1];
          }
          return e[1];
        },
        trys: [],
        ops: []
      };
      f = {
        next: h(0),
        throw: h(1),
        return: h(2)
      };
      if (typeof Symbol === "function") {
        f[Symbol.iterator] = function () {
          return this;
        };
      }
      return f;
      function h(a) {
        return function (b) {
          return i([a, b]);
        };
      }
      function i(f) {
        if (c) {
          throw new TypeError("Generator is already executing.");
        }
        while (g) {
          try {
            c = 1;
            if (d && (e = f[0] & 2 ? d.return : f[0] ? d.throw || ((e = d.return) && e.call(d), 0) : d.next) && !(e = e.call(d, f[1])).done) {
              return e;
            }
            d = 0;
            if (e) {
              f = [f[0] & 2, e.value];
            }
            switch (f[0]) {
              case 0:
              case 1:
                e = f;
                break;
              case 4:
                g.label++;
                var h = {
                  value: f[1],
                  done: false
                };
                return h;
              case 5:
                g.label++;
                d = f[1];
                f = [0];
                continue;
              case 7:
                f = g.ops.pop();
                g.trys.pop();
                continue;
              default:
                if (!(e = g.trys, e = e.length > 0 && e[e.length - 1]) && (f[0] === 6 || f[0] === 2)) {
                  g = 0;
                  continue;
                }
                if (f[0] === 3 && (!e || f[1] > e[0] && f[1] < e[3])) {
                  g.label = f[1];
                  break;
                }
                if (f[0] === 6 && g.label < e[1]) {
                  g.label = e[1];
                  e = f;
                  break;
                }
                if (e && g.label < e[2]) {
                  g.label = e[2];
                  g.ops.push(f);
                  break;
                }
                if (e[2]) {
                  g.ops.pop();
                }
                g.trys.pop();
                continue;
            }
            f = b.call(a, g);
          } catch (a) {
            f = [6, a];
            d = 0;
          } finally {
            c = e = 0;
          }
        }
        if (f[0] & 5) {
          throw f[1];
        }
        var i = {
          value: f[0] ? f[1] : undefined,
          done: true
        };
        return i;
      }
    }
    var Aq = function () {
      'use strict';

      function a() {
        vq(this, a);
      }
      xq(a, null, [{
        key: "Init",
        value: function a() {
          exports['focusmanager'].RegisterFocusHandler(function (a, b) {
            SetNuiFocus(a, b);
          });
          um.register("exter_radar:toggle", this.toggle.bind(this));
          um.register("exter_radar:closeController", this.closeController.bind(this));
          um.register("exter_radar:setLimit", this.setLimit.bind(this));
          um.register("exter_radar:selectMode", this.selectMode.bind(this));
          um.register("exter_radar:toggleXmit", this.toggleXmit.bind(this));
          um.register("exter_radar:lockfastReset", this.lockfastReset.bind(this));
          um.register("exter_radar:plateLock", this.plateLock.bind(this));
        }
      }, {
        key: "toggle",
        value: function a() {
          return uq(function () {
            return zq(this, function (a) {
              emit("startSpeedo");
              return [2];
            });
          })();
        }
      }, {
        key: "openController",
        value: function a() {
          exports['focusmanager'].SetUIFocus(true, true);
          um.execute("exter_radar:openController");
        }
      }, {
        key: "closeController",
        value: function a() {
          return uq(function () {
            return zq(this, function (a) {
              exports['focusmanager'].SetUIFocus(false, false);
              return [2];
            });
          })();
        }
      }, {
        key: "setLimit",
        value: function b(a) {
          return uq(function () {
            return zq(this, function (b) {
              Yq.fastLimit = a;
              var c = {
                fastLimit: Yq.fastLimit
              };
              um.execute("exter_radar:setData", c);
              return [2];
            });
          })();
        }
      }, {
        key: "selectMode",
        value: function c(a, b) {
          return uq(function () {
            return zq(this, function (c) {
              Yq[a].Mode = b;
              um.execute("exter_radar:setData", yq({}, a, Yq[a]));
              return [2];
            });
          })();
        }
      }, {
        key: "toggleXmit",
        value: function b(a) {
          return uq(function () {
            return zq(this, function (b) {
              Yq[a].Xmit = !Yq[a].Xmit;
              Go(a);
              if (!Yq[a].Xmit) {
                Yq[a].Mode = "none";
              } else {
                Yq[a].Mode = "same";
              }
              um.execute("exter_radar:setData", yq({}, a, Yq[a]));
              return [2];
            });
          })();
        }
      }, {
        key: "lockfastReset",
        value: function b(a) {
          return uq(function () {
            return zq(this, function (a) {
              Ho("fwd");
              Ho("bwd");
              Ko("Lockfast Reset", 5);
              return [2];
            });
          })();
        }
      }, {
        key: "plateLock",
        value: function b(a) {
          return uq(function () {
            return zq(this, function (a) {
              Yq.lockPlates = !Yq.lockPlates;
              if (Yq.lockPlates) {
                Ko("Plate locking enabled.", 5);
              } else {
                Ko("Plate locking disabled.", 5);
              }
              var b = {
                lockPlates: Yq.lockPlates
              };
              um.execute("exter_radar:setData", b);
              return [2];
            });
          })();
        }
      }]);
      return a;
    }();
    ;
    function Bq(a, b) {
      if (!(a instanceof b)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function Cq(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        d.enumerable = d.enumerable || false;
        d.configurable = true;
        if ("value" in d) {
          d.writable = true;
        }
        Object.defineProperty(a, d.key, d);
      }
    }
    function Dq(a, b, c) {
      if (b) {
        Cq(a.prototype, b);
      }
      if (c) {
        Cq(a, c);
      }
      return a;
    }
    var Eq = function () {
      'use strict';

      function a() {
        Bq(this, a);
      }
      Dq(a, null, [{
        key: "Init",
        value: function a() {
          RegisterCommand("+exter_radarSettings", this.exter_radarSettings.bind(this), false);
          RegisterCommand("-exter_radarSettings", function () {}, false);
          globalThis.exports["np-keybinds"].registerKeyMapping("exter_radar", "Gov", "exter_radar Settings", "+exter_radarSettings", "-exter_radarSettings", "M");
          RegisterCommand("+quickexter_radar", this.quickexter_radar.bind(this), false);
          RegisterCommand("-quickexter_radar", function () {}, false);
          globalThis.exports["np-keybinds"].registerKeyMapping("quickexter_radar", "Gov", "exter_radar On/Off", "+quickexter_radar", "-quickexter_radar", "LEFT");
          RegisterCommand("+resetexter_radar", this.resetexter_radar.bind(this), false);
          RegisterCommand("-resetexter_radar", function () {}, false);
          globalThis.exports["np-keybinds"].registerKeyMapping("resetexter_radar", "Gov", "Reset exter_radar", "+resetexter_radar", "-resetexter_radar", "GRAVE");
          RegisterCommand("+runPlatef", this.runPlateFront.bind(this), false);
          RegisterCommand("-runPlatef", function () {}, false);
          globalThis.exports["np-keybinds"].registerKeyMapping("runPlatef", "Gov", "Run Plate (Front)", "+runPlatef", "-runPlatef", "UP");
          RegisterCommand("+runPlateb", this.runPlateBack.bind(this), false);
          RegisterCommand("-runPlateb", function () {}, false);
          globalThis.exports["np-keybinds"].registerKeyMapping("runPlateb", "Gov", "Run Plate (Back)", "+runPlateb", "-runPlateb", "DOWN");
        }
      }, {
        key: "exter_radarSettings",
        value: function a() {
          if (!this.isCopAndInVeh()) {
            return;
          }
          Aq.openController();
        }
      }, {
        key: "quickexter_radar",
        value: function a() {
          if (!this.isCopAndInVeh()) {
            return;
          }
          emit("startSpeedo");
        }
      }, {
        key: "resetexter_radar",
        value: function a() {
          if (!this.isCopAndInVeh()) {
            return;
          }
          Go("fwd");
          Go("bwd");
          Ho("fwd");
          Ho("bwd");
        }
      }, {
        key: "runPlateFront",
        value: function a() {
          if (!this.isCopAndInVeh()) {
            return;
          }
          emit("platecheck:frontexter_radar");
        }
      }, {
        key: "runPlateBack",
        value: function a() {
          if (!this.isCopAndInVeh()) {
            return;
          }
          emit("platecheck:rearexter_radar");
        }
      }, {
        key: "isCopAndInVeh",
        value: function a() {
          var b = PlayerPedId();
          var c = IsPedSittingInAnyVehicle(b);
          if (!c) {
            return false;
          }
          return ilzexter;
        }
      }]);
      return a;
    }();
    ;
    function Fq(a, b) {
      if (b == null || b > a.length) {
        b = a.length;
      }
      for (var c = 0, d = new Array(b); c < b; c++) {
        d[c] = a[c];
      }
      return d;
    }
    function Gq(a) {
      if (Array.isArray(a)) {
        return a;
      }
    }
    function Hq(a, b, c, d, e, f, g) {
      try {
        var h = a[f](g);
        var i = h.value;
      } catch (a) {
        c(a);
        return;
      }
      if (h.done) {
        b(i);
      } else {
        Promise.resolve(i).then(d, e);
      }
    }
    function Iq(a) {
      return function () {
        var b = this;
        var c = arguments;
        return new Promise(function (d, e) {
          var f = a.apply(b, c);
          function g(a) {
            Hq(f, d, e, g, h, "next", a);
          }
          function h(a) {
            Hq(f, d, e, g, h, "throw", a);
          }
          g(undefined);
        });
      };
    }
    function Jq(a, b, c) {
      if (b in a) {
        var d = {
          value: c,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(a, b, d);
      } else {
        a[b] = c;
      }
      return a;
    }
    function Kq(a, b) {
      var c = a == null ? null : typeof Symbol !== "undefined" && a[Symbol.iterator] || a["@@iterator"];
      if (c == null) {
        return;
      }
      var d = [];
      var e = true;
      var f = false;
      var g;
      var h;
      try {
        for (c = c.call(a); !(e = (g = c.next()).done); e = true) {
          d.push(g.value);
          if (b && d.length === b) {
            break;
          }
        }
      } catch (a) {
        f = true;
        h = a;
      } finally {
        try {
          if (!e && c.return != null) {
            c.return();
          }
        } finally {
          if (f) {
            throw h;
          }
        }
      }
      return d;
    }
    function Lq() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function Mq(a, b) {
      return Gq(a) || Kq(a, b) || Nq(a, b) || Lq();
    }
    function Nq(a, b) {
      if (!a) {
        return;
      }
      if (typeof a === "string") {
        return Fq(a, b);
      }
      var c = Object.prototype.toString.call(a).slice(8, -1);
      if (c === "Object" && a.constructor) {
        c = a.constructor.name;
      }
      if (c === "Map" || c === "Set") {
        return Array.from(c);
      }
      if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) {
        return Fq(a, b);
      }
    }
    function Oq(a, b) {
      var c;
      var d;
      var e;
      var f;
      var g = {
        label: 0,
        sent: function () {
          if (e[0] & 1) {
            throw e[1];
          }
          return e[1];
        },
        trys: [],
        ops: []
      };
      f = {
        next: h(0),
        throw: h(1),
        return: h(2)
      };
      if (typeof Symbol === "function") {
        f[Symbol.iterator] = function () {
          return this;
        };
      }
      return f;
      function h(a) {
        return function (b) {
          return i([a, b]);
        };
      }
      function i(f) {
        if (c) {
          throw new TypeError("Generator is already executing.");
        }
        while (g) {
          try {
            c = 1;
            if (d && (e = f[0] & 2 ? d.return : f[0] ? d.throw || ((e = d.return) && e.call(d), 0) : d.next) && !(e = e.call(d, f[1])).done) {
              return e;
            }
            d = 0;
            if (e) {
              f = [f[0] & 2, e.value];
            }
            switch (f[0]) {
              case 0:
              case 1:
                e = f;
                break;
              case 4:
                g.label++;
                var h = {
                  value: f[1],
                  done: false
                };
                return h;
              case 5:
                g.label++;
                d = f[1];
                f = [0];
                continue;
              case 7:
                f = g.ops.pop();
                g.trys.pop();
                continue;
              default:
                if (!(e = g.trys, e = e.length > 0 && e[e.length - 1]) && (f[0] === 6 || f[0] === 2)) {
                  g = 0;
                  continue;
                }
                if (f[0] === 3 && (!e || f[1] > e[0] && f[1] < e[3])) {
                  g.label = f[1];
                  break;
                }
                if (f[0] === 6 && g.label < e[1]) {
                  g.label = e[1];
                  e = f;
                  break;
                }
                if (e && g.label < e[2]) {
                  g.label = e[2];
                  g.ops.push(f);
                  break;
                }
                if (e[2]) {
                  g.ops.pop();
                }
                g.trys.pop();
                continue;
            }
            f = b.call(a, g);
          } catch (a) {
            f = [6, a];
            d = 0;
          } finally {
            c = e = 0;
          }
        }
        if (f[0] & 5) {
          throw f[1];
        }
        var i = {
          value: f[0] ? f[1] : undefined,
          done: true
        };
        return i;
      }
    }
    var Pq = new yo({
      codename: "exter_radar",
      version: "0.0.0"
    });
    setImmediate(function () {
      Aq.Init();
      Eq.Init();
    });
    var Qq = new Bm.Thread(function () {}, 200);
    var Rq = null;
    var Sq = null;
    var Tq;
    var Uq;
    var Vq = {
      x: -10,
      y: 35,
      z: 0
    };
    var Wq = {
      x: 0,
      y: -35,
      z: 0
    };
    var Xq = {
      x: -10,
      y: -35,
      z: 0
    };
    var Yq = {
      exter_radarEnabled: false,
      patrolSpeed: "000",
      speedType: Config.SpeedType,
      fwd: {
        PrevVeh: 0,
        Xmit: true,
        Mode: "same",
        Speed: "000",
        Fast: "000",
        FastLocked: false,
        Dir: null,
        FastSpeed: -1,
        Veh: 0,
        angles: (Tq = {}, Jq(Tq, "same", {
          x: 0,
          y: 35,
          z: 0
        }), Jq(Tq, "opp", Vq), Tq)
      },
      bwd: {
        PrevVeh: 0,
        Xmit: true,
        Mode: "opp",
        Speed: "OFF",
        Fast: "OFF",
        FastLocked: false,
        Dir: null,
        FastSpeed: -1,
        Veh: 0,
        angles: (Uq = {}, Jq(Uq, "same", Wq), Jq(Uq, "opp", Xq), Uq)
      },
      fastResetLimit: 150,
      fastLimit: 80,
      lockBeep: true,
      frontPlate: null,
      rearPlate: null,
      lockPlates: false
    };
    Qq.addHook("preStart", function () {
      um.execute("exter_radar:setData", Yq);
    });
    Qq.addHook("active", Iq(function () {
      var a;
      var b;
      var c;
      var d;
      var e;
      var f;
      var g;
      var h;
      var i;
      var j;
      var k;
      var l;
      var m;
      var n;
      var o;
      var p;
      var q;
      var r;
      var s;
      var t;
      var u;
      var v;
      var w;
      var x;
      var y;
      var z;
      return Oq(this, function (A) {
        if (Yq.exter_radarEnabled) {
          a = PlayerPedId();
          if (IsPedSittingInAnyVehicle(a)) {
            b = GetVehiclePedIsIn(a, false);
            c = Jo(b);
            Yq.patrolSpeed = c.toString().padStart(3, "0");
            d = GetEntityCoords(b, true);
            e = Math.round(GetEntityHeading(b));
            f = ["fwd", "bwd"];
            g = true;
            h = false;
            i = undefined;
            try {
              for (j = f[Symbol.iterator](); !(g = (k = j.next()).done); g = true) {
                l = k.value;
                m = Yq[l];
                n = l === "fwd" ? "frontPlate" : "rearPlate";
                if (m.Xmit) {
                  o = Yq[l].angles[m.Mode];
                  p = GetOffsetFromEntityInWorldCoords(b, o.x, o.y, o.z);
                  q = [p[0], p[1], p[2]];
                  r = Mq(GetGroundZFor_3dCoord(q[0], q[1], q[2] + 500, false), 2);
                  s = r[0];
                  t = r[1];
                  if (q[2] < t && t <= d[2] + 1) {
                    q[2] = t + 0.5;
                  }
                  u = No(b, d, q);
                  if (DoesEntityExist(u) && IsEntityAVehicle(u)) {
                    v = Jo(u);
                    w = Math.round(GetEntityHeading(u));
                    x = Mo(e, w, 100);
                    m.Speed = v.toString().padStart(3, "0");
                    m.Dir = x;
                    if (v > Yq.fastLimit && !m.FastLocked && !Yq.lockPlates) {
                      if (Yq.lockBeep) {
                        PlaySoundFrontend(-1, "Beep_Red", "DLC_HEIST_HACKING_SNAKE_SOUNDS", true);
                      }
                      m.FastSpeed = v;
                      m.FastLocked = true;
                      Yq[n] = GetVehicleNumberPlateText(u);
                    } else if (v > m.FastSpeed && !Yq.lockPlates) {
                      m.FastSpeed = v;
                      Yq[n] = GetVehicleNumberPlateText(u);
                    }
                    m.Fast = m.FastSpeed.toString().padStart(3, "0");
                    m.Veh = u;
                  }
                }
                y = l === "fwd" ? Rq : Sq;
                z = Yq[n];
                if (m.Veh && (!y || y !== z)) {
                  if (l === "fwd") {
                    Rq = z;
                  } else {
                    Sq = z;
                  }
                  um.execute("exter_radar:setData", Jq({}, n, z + " " + (Yq.lockPlates ? " (L)" : "")));
                }
              }
            } catch (a) {
              h = true;
              i = a;
            } finally {
              try {
                if (!g && j.return != null) {
                  j.return();
                }
              } finally {
                if (h) {
                  throw i;
                }
              }
            }
            var B = {
              patrolSpeed: Yq.patrolSpeed,
              fwd: Yq.fwd,
              bwd: Yq.bwd
            };
            um.execute("exter_radar:setData", B);
          }
        } else {
          Qq.stop();
        }
        return [2];
      });
    }));
    Qq.addHook("afterStop", function () {
      um.execute("exter_radar:setData", {
        exter_radarEnabled: false
      });
    });
  })();
})();