# Lab 8 - Starter

1) I think it is important to set it up in a github action that runs whenever code is pushed to ensure that any changes saved to the repository work as expected, however it is also useful to run them in your local environment so that you aren't needlessly committing work that doesn't pass test cases.

2) E2E testing you write a test case which interacts with the DOM, if the function directly changes something on the page you could use it to make sure its working by checking that the output on the page is correct, however there could be another issue with it appear on the page correctly while the function you want to test is actually working.  Unit testing will show whether that specific unit, or function, is functioning correctly

3) You would probably use E2E testing in this case.

4) You could use unit testing to test a function that is part of the messaging pipeline which truncates the message length to max message len.

