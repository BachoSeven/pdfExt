## Open PDFs externally in Chrome

A simple manifest v3 extension which exists solely to let me open a pdf in zathura through a custom script; thought up in a hot afternoon with @aziis98 (his version [here](https://github.com/aziis98/ext-open-pdf)).

Fun tip: to make this work super smoothly, you can tweak Chrom{e|ium}'s policies slightly:

Create a random `.json` file in
- `/etc/opt/chrome/policies/managed` for Chrome,
- or `/etc/chromium/policies/managed` for Chromium, and write the following in it:

``` json
{
    "ExternalProtocolDialogShowAlwaysOpenCheckbox": true,
    "URLAllowlist": [
        "wza:*"
    ]
}

```

Sources for the above:
- https://support.google.com/chrome/a/answer/7532419#zippy=%2Clinux
- https://askubuntu.com/questions/1176389/xdg-open-without-an-option-to-remember
- https://www.chromium.org/administrators/configuring-policy-for-extensions/
