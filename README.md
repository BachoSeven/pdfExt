## Open PDFs externally in Chrome

A simple manifest v3 extension which exists solely to let me open a PDF in zathura through a custom script; thought up in a hot afternoon with @aziis98 (his version [here](https://github.com/aziis98/ext-open-pdf)).

It uses a custom `wza:` protocol which I use since I can then redirect it to my [wza](wza) script which opens the PDF in my favourite reader, [Zathura](https://pwmt.org/projects/zathura).

Fun tip: to make this work super smoothly, you can tweak Chrom{e|ium}'s policies slightly in order to never ask for permission to open the PDF externally through this custom
protocol:

Create a random `.json` file in
- `/etc/opt/chrome/policies/managed` for Chrome,
- or `/etc/chromium/policies/managed` for Chromium, and write the following in it:

``` json
{
    "URLAllowlist": [
        "wza:*"
    ]
}

```

Sources for the above:
- https://support.google.com/chrome/a/answer/7532419#zippy=%2Clinux
- https://askubuntu.com/questions/1176389/xdg-open-without-an-option-to-remember
- https://www.chromium.org/administrators/configuring-policy-for-extensions/
