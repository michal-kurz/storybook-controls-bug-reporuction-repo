This branch demonstrates a synthetic-event issue with actions for automatically-generated controls, **on  version 6.4.0-rc.6** . The scenario is simple:

 - npm i && npm run storybook
 - open story TooltipXX 
 - open console
 - hover the "Hover me!" element and wait until synthetic errors apper
 
Make sure not to leave the element until execution thread unclogs and errors appear in console. Leaving and re-hovering seems to keep it busy and it can take a very long time before they actually log.
