# md2html
指定したMarkdownファイルをHTMLに変換して出力するCLIツール。Node.jsの練習用。

## Usage
### --name
```
$ ./md2html --name
```
package.jsonのnameから、このCLIツールの名前を取得し、標準出力する。

### --convert
```
$ ./md2html --convert=./target.md
```
`target.md`の部分に変換したいMarkdownファイルのパスを指定すると、`target.html`を出力する。
