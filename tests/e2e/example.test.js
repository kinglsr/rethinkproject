import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Index page`// declare the fixture
    .page `http://localhost:8080`;  // specify the start page

const helloWorld = Selector('.hello');

// Create a new test(description, function(testController): <Promise>)
test('Paragraph contains "Hello World!"', async t => {
    // Select the paragraph element under the body.
    // Must use promises (async / await  here) for communication with the browser.
    const helloWorldText = await new Selector('.hello > h1');

    // Assert that the inner text of the paragraph is "Hello World!"
    await t.expect(helloWorldText.innerText).eql('Welcome to Your Vue.js App');
  });