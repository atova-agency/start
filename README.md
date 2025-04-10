# start

Atova's Way                   | Their way
------------------------------|-------------------------------
Timeboxed proof of concept    | People and Collaboration Over Processes and Tools
Documented working Demo       | Functional Product Over Extensive Documentation
Talk is cheap. Trust the Demo | Customer Partnership Over Contractual Details
Get what you pay for          | Adaptability to Change Over Rigid Planning
‍

## Tailwindcss 4


```sh
curl -O https://github.com/tailwindlabs/tailwindcss/releases/download/v4.1.3/tailwindcss-linux-x64
mv tailwindcss-linux-x64 ~/bin/tailwindcss
chmod +x ~/bin/tailwindcss
```


```js
// filename: static/css/twd_in.css

@import "tailwindcss" source("../..");

```

```sh
tailwindcss --input twd_in.css --output twd_atova.css --cwd static/css/
```

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        ...
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
...
        <!-- for quick dev only
                <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
        -->
        <link rel="stylesheet" href="static/css/twd_atova.css">
        
```
