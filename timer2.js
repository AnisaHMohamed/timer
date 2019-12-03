
// The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');
stdin.on('data', (key) => {
  const numList = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  if (key === 'b') {
    process.stdout.write('\x07');
  } else if (key === '\u0003') { // \u0003 maps to ctrl+c input
    console.log("Thanks for using me, ciao!")
    process.exit();
  } else if (numList.includes(key)) {
    setTimeout(() => {
      process.stdout.write('\x07')

      console.log(`setting timer for ${key} seconds...`)
    }, key * 1000);
  }
}
);

// The user can press b and it should beep right away
