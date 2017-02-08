![demo](http://i.giphy.com/FYXDf8VQ89ljq.gif)

# ngx-superbindex

Like [ngx-autoindex](http://nginx.org/en/docs/http/ngx_http_autoindex_module.html), but superb!

* Theme by [base16](https://chriskempson.github.io/base16/#eighties)
* Monospaced type
* Minimal UI
* Search as you type

## Requirements

[nginx](http://nginx.org/) with the [xslt](http://nginx.org/en/docs/http/ngx_http_xslt_module.html) module. On Mac with [Homebrew](http://brew.sh/) it's as easy as:

```bash
brew tap homebrew/nginx
brew install nginx-full --with-xslt
```

## Usage

1. Download [`superbindex.xslt`](https://github.com/gibatronic/ngx-superbindex/releases/download/v1.1.0/superbindex.xslt) into your root directory.

2. Add the following lines to your `nginx.conf` location:
   ```nginx
   location / {
       autoindex on;
       autoindex_format xml;

       xslt_stylesheet /path/to/root/directory/superbindex.xslt;
   }
   ```

3. Restart nginx with `nginx -s reload` and *voilà*!
