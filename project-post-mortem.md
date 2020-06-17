## Project Post Mortem
Post mortems are important to understand about what happened in a project and actively think about what you learned.

Post-mortems are meant to be a blame-less space open to objective conversation about what went well and what could be improved.

Even in the examples below, where tens of millions of dollars could be lost, the best approach is to think through the series of events that led to the outcome.

Large mistakes are almost never the fault of the developer, but of the sytems and processes in place to prevent errors and problems.

[https://github.com/danluu/post-mortems](https://github.com/danluu/post-mortems)
https://blog.codinghorror.com/the-project-postmortem/



### What to Bring
Please answer the following questions. Take at least 30 minutes to prepare.

#### Approach and Process

1. What in my process and approach to this project would I do differently next time?

- I slightly mis-scoped and had to rip out my schema after the soft launch oops.

1. What in my process and approach to this project went well that I would repeat next time?

- I managed to keep in mind things I wanted to build on process-wise from my previous projects and I think it felt a lot tidier in general this time. Like keeping more on-task and not ending up wandering all over code-wise then having a really messy commit.

--

#### Code and Code Design

1. What in my code and program design in the project would I do differently next time?

- I feel like I ended up with a fairly large chunk of functions in the top level component and didn't figure out if I could have moved some of them into their lower level components.

- I'd have liked to figure out functional components and hooks but erred on the side of completion for this project.

1. What in my code and program design in the project went well? Is there anything I would do the same next time?

- I took care to find ways of doing things by using modules (either npm or gem) instead of using manual includes where possible and I think that really helped with making something that deployed smoothly.

  For each, please include code examples.
  1. Code snippet up to 20 lines.
  2. Code design documents or architecture drawings / diagrams.

#### SEI Unit 4 Post Mortem
1. What habits did I use during SEI that helped me, that I will take on to my future coding projects?

- Spending some time on a research spike right at the start helped, I felt I spent a lot less time during the coding phase finding out how to e.g. integrate libraries.

2. What habits did I have during SEI I can improve on that I will try to change on future projects?

- I think I tend to think in terms of just the schema/data and gauging effort on that; this definitely caused me a small amount of grief this time.

3. How is the overall level of the course overall? (instruction, course materials, etc.)

- I had such a good time all in all. 
