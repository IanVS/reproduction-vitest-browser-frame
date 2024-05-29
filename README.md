Steps to reproduce:

1. `pnpm i`
2. `pnpm test:run`
3. Open the browser at the url shown
4. Inspect the page, see the error in the console:

```
Refused to display 'http://localhost:5173/' in a frame because it set 'X-Frame-Options' to 'deny'.
```
