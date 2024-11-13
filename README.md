# The Design web 

**Setup**

Install Sass:
`npm install -g sass`

Install Typescript:
`npm install -g typescript`

**Compile and run a single file**

`tsc sample.ts` This will compile a single Typescript file into a Javascript file.

`node sample.js` Next, you can run thw generated Javascript file using NodeJs. 


**Running**

The command below will compile all `.scss` files from the `./sass` folder and put it inside the `./css` folder as `.css` files.

`sass --watch sass:css`

The command bellow will compile all `.ts` files inside the `./ts` folder  and put it inside the `./js` folder as `.js` files.

`tsc -w`

## Contributing 
Follow the steps below in order to create your own page on The Design Web.

1. Fork this repo to your own GitHub account
2. Clone the repo
3. Run the `sass` command above to compile the CSS assets. 
4. Create a new folder with the name of your styling and design guidelines, be creative in this one. Note: Replace spaces with a dash (-). 
5. Inside your folder create an `index.html` file. 
6. Inside the sass folder create a file named `<your-styleguide-name>.scss`. 
7. Reference the `.css` equivalent inside your `index.html` file. 
8. Add your page to the `main.ts` file.
9. Compile the typescript files.
10. Most important step: Design your styleguide, have fun with this!
11. When finished, checkout to a new branch with git.
12. Push the the changes to your new branch. 
13. Go to the forked repo on GitHub, on your account. 
14. Create a new pull request to merge with the main repository. 
15. Wait unitl the owner approves your request.
16. See your changes live on the [Website](https://stevenkoerts.nl/TheDesignWeb).


##  Done?
Let's practice your Typescript skills! 

**Exercise**

1. Create a new file inside the `./ts` folder, name it `<your-styleguide-name>.ts`.
2. Reference the JavaSript equivalent of this file inside your `index.html` file. 

Create a Typescript `interface` or `type` called `Counter` with the following attributes: 
- Counter of type `number` which represents the current state of the counter
- Name of type `string` which holds the name or title what the counter is counting for
- Steps of type `number` this holds the number of how fast the counter should increment or decrement
- Pointer of type `boolean` if the pointer is `true` then the counter will increment, else decrement.
- Freeze of type `boolean` this is a bonus functionality to make the counter stop counting

The interface has the following methods: 
- `Increment(): void`, which increments the counter by the given steps. 
- `Decrement(): void`, which decrements the counter by the given steps. 
- `Faster(): void`, this will make the counter count faster, by incrementing the steps attribute.
- `SlowDown(): void`, this will make the counter count slower.
- `StopTheTime(): void`, this will make the counter stop counting.

Next implement the interface by using a `const`.

If you have implemented all the methods then show the counter state on an HTML page. 
Where all of the methods are mapped to a button and the actions are invoked when the user clicks on a button.

Can you create a counter that counts automatically with a given time interval?

**Can you React?** 

> If you are done with the plain HTML implementation can you build a version using React? https://react.dev/ What are the main differences? To what problem does React provide a solution? 

