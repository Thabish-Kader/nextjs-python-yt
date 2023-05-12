# Next Js + Python Automation

## Child processes spawn(), fork() and exec()

<img align="left" alt="next js" width="50px" style="padding-right:10px;" src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" />
<img align="left" alt="python" width="50px" style="padding-right:10px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" />

<br/>
<br/>
<br/>
A very small project to learn how to execute python script in Next js.

## Learning outcomes

-   exec() runs in the same instance of the terminal whereas spawn() and fork() run in different instancce
-   useing spawn() and fork() is better when haveing large outputs.

## Usecases for fork(), spawn() and exec()

-   fork() : used to create Node.js process to run a <ins>**sperate module**</ins> and can communicate with the parent process useing message channels. Used for long running processes

-   spawn() : used to run commands and scripts in a <ins>**new**</ins> instance of terminal. Used for long processes and large output

-   exec : useused to run commands and scripts in the <ins>**same**</ins> instance of terminal. Used for short processes

### Resources

-   [Child processes](https://www.javatpoint.com/nodejs-child-process)
