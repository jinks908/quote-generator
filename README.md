
#  Random Quote Generator

  A simple script that reads a random quote from a text file and displays it on an `HTML` page.

  

##  Usage

  

The quotes are displayed on `quotes.html` within `<p  id="quote"></p>`. The function `displayRandomQuote()` is called from the `scripts.js` file.

Note that this script requires a server. If you wish to run locally, you can use [LiveServer](https://github.com/ritwickdey/vscode-live-server), or simply enter the following command in your terminal and load up `localhost:8000` in your browser:

```
$ python3 -m http.server
```

If you are runnning an older version of Python, you can use

```
$ python -m SimpleHTTPServer
```


##  Quote source
  

The default filename for the quotes is `quotations.txt` and the script assumes it is in the same directory, otherwise you will need to specify the path. Depending on your text file, the quotes will need to be separated by a regular delimiter, whether it is a newline, empty line, etc. The script uses `'\n\n'` by default. This means that each quote in your file must be separated by an empty line, such as:

  
```
 "Never put off till tomorrow what you can do the day after tomorrow." - Mark Twain
 
 "All of us are self-made. But only the successful will admit it." — Earl Nightingale
```

If you wish to have the script read from a list that is separated by a character or symbol, you will need to replace the `data.split('\n\n')` method in the `scripts.js` file with whatever your delimiter is.

  

##  Changing the duration

 
The initial duration is 15 seconds (15000 ms), and afterward the number of characters determines the duration of each quote. The default setting is approximately 66 milliseconds per character. So a quote with 300 characters will display for 20000 ms (or 20 seconds). If you wish to change this ratio, you can do so by editing the `displayDuration` variable in the `// Set duration display` section of `scripts.js`. Just change the `'0.015'` to whatever fraction you want. However, please note that there needs to be a minimum display duration in order for the fade animations to work since they take time to run. The current minimum is 12 seconds for any quote less than 200 characters.


You can also opt for a fixed duration where each quote is displayed for the same amount of time. To do this, simply comment out or remove the `// Set display durations` section and just change the global variables at the top of the script. Again, keep in mind that the fade delays may need to be adjusted as well depending on what you set. As a general rule of thumb, the `fadeOutRmoveDelay` variable must be 1 second (1000 ms) longer than the `displayDuration`.


If you want to increase/decrease the length of the fade animation themselves, you can change the `.fade-in` and `.fade-out` durations in the `style.css` file. Again, make sure everything is timed correctly for all of this to work. The default values are set to 1 second fades.

  

##  Optional button control

  

Alternatively, you can choose to use buttons to generate the next random quote or go back to the previous quote. To do this, you will need to uncomment the indicated lines in both `quotes.html` and `scripts.js`. As of version 1.0, only the fade-in animations work with button control, not fade-out animations.
