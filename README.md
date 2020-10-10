# ngx-superbindex

<img align="right" hspace="16" vspace="16" src="https://i.giphy.com/media/zMrfG2vm1JXscCI7Ka/source.gif" width="267" height="572">

Like [ngx-autoindex](http://nginx.org/en/docs/http/ngx_http_autoindex_module.html), but superb!

* Single, standalone file
* Automatic light-dark theme
* Colors by [base16](http://chriskempson.com/projects/base16/)
* Monospaced type
* Minimal UI
* Search as you type
* Easily override colors through parameters
* Works in every modern browser and gracefully degrades in Internet Explorer and Safari

## Requirements

[nginx](http://nginx.org/) with the [xslt](http://nginx.org/en/docs/http/ngx_http_xslt_module.html) module. On Mac with [Homebrew](http://brew.sh/) it's as easy as:

```bash
brew tap denji/nginx
brew install nginx-full --with-xslt
```

## Usage

1. Download [`superbindex.xslt`](https://github.com/gibatronic/ngx-superbindex/releases/latest) into your root directory.

2. Add the following lines to your `nginx.conf` location:
   ```nginx
   location / {
       autoindex on;
       autoindex_format xml;

       xslt_stylesheet /path/to/root/directory/superbindex.xslt;
   }
   ```

3. Restart nginx with `nginx -s reload` and *voilà*!

## Color theme

A different color theme may be used by adding the following parameters:

```nginx
location / {
    xslt_string_param color-base00 '#002635';
    xslt_string_param color-base07 '#fafaf8';
    xslt_string_param color-base0D '#5dd7b9';
    xslt_string_param color-base0E '#9a70a4';
}
```

Browse other themes here: [base16 scheme repositories](https://github.com/chriskempson/base16#scheme-repositories)
