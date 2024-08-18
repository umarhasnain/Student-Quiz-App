 const htmlQuestions = [
    {
      question: "Choose the correct HTML element for the largest heading:",
      option1: "<heading>",
      option2: "<h6>",
      option3: "<h1>",
      option4: "<head>",
      correctOption: "<h1>",
    },
    {
      question: "What does HTML stand for?",
      option1: "Hyperlinks and Text Markup Language",
      option2: "Home Tool Markup Language",
      option3: "Hyper Text Markup Language",
      option4: "Hyperlinking Text Markup Language",
      correctOption: "Hyper Text Markup Language",
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      option1: "<lb>",
      option2: "<break>",
      option3: "<br>",
      option4: "<ln>",
      correctOption: "<br>",
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      option1: "font",
      option2: "styles",
      option3: "style",
      option4: "class",
      correctOption: "style",
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      option1: "<css>",
      option2: "<script>",
      option3: "<style>",
      option4: "<head>",
      correctOption: "<style>",
    },
    {
      question: "Which is the correct HTML element to define emphasized text?",
      option1: "<i>",
      option2: "<em>",
      option3: "<italic>",
      option4: "<strong>",
      correctOption: "<em>",
    },
    {
      question:
        "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
      option1: "src",
      option2: "title",
      option3: "alt",
      option4: "href",
      correctOption: "alt",
    },
    {
      question: "How can you create an ordered list?",
      option1: "<ul>",
      option2: "<ol>",
      option3: "<list>",
      option4: "<dl>",
      correctOption: "<ol>",
    },
    // {
    //   question: "Which HTML element defines navigation links?",
    //   option1: "<nav>",
    //   option2: "<navigate>",
    //   option3: "<navigate>",
    //   option4: "<navlink>",
    //   correctOption: "<nav>",
    // },
    // {
    //   question: "What is the correct HTML element for playing video files?",
    //   option1: "<media>",
    //   option2: "<video>",
    //   option3: "<movie>",
    //   option4: "<film>",
    //   correctOption: "<video>",
    // },
    // {
    //   question: "How can you make a numbered list?",
    //   option1: "<list>",
    //   option2: "<dl>",
    //   option3: "<ul>",
    //   option4: "<ol>",
    //   correctOption: "<ol>",
    // },
    // {
    //   question:
    //     "Which HTML element is used to specify a footer for a document or section?",
    //   option1: "<bottom>",
    //   option2: "<footer>",
    //   option3: "<foot>",
    //   option4: "<section>",
    //   correctOption: "<footer>",
    // },
    // {
    //   question: "What is the correct HTML element for inserting an image?",
    //   option1: "<img>",
    //   option2: "<image>",
    //   option3: "<pic>",
    //   option4: "<photo>",
    //   correctOption: "<img>",
    // },
    // {
    //   question: "Which doctype is correct for HTML5?",
    //   option1: "<!DOCTYPE html>",
    //   option2: "<!DOCTYPE HTML5>",
    //   option3: '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 5.0//EN">',
    //   option4: "<!DOCTYPE html5>",
    //   correctOption: "<!DOCTYPE html>",
    // },
    // {
    //   question: "Who is making the Web standards?",
    //   option1: "Google",
    //   option2: "The World Wide Web Consortium",
    //   option3: "Microsoft",
    //   option3: "Apple",
    //   correctOption: "The World Wide Web Consortium",
    // },
    // {
    //   question: "Which character is used to indicate an end tag?",
    //   option1: "*",
    //   option2: "/",
    //   option3: "<",
    //   option4: "^",
    //   correctOption: "/",
    // },
    // {
    //   question: "How can you open a link in a new tab/browser window?",
    //   option1: '<a href="url" new>',
    //   option2: '<a href="url" target="_blank">',
    //   option3: '<a href="url" target="new">',
    //   option4: '<a href="url" target="new_tab">',
    //   correctOption: '<a href="url" target="_blank">',
    // },
    // {
    //   question: "Which HTML element is used to define important text?",
    //   option1: "<b>",
    //   option2: "<strong>",
    //   option3: "<i>",
    //   option4: "<important>",
    //   correctOption: "<strong>",
    // },
    // {
    //   question:
    //     "Which HTML element is used to define a block of text that has been quoted from another source?",
    //   option1: "<blockquote>",
    //   option2: "<q>",
    //   option3: "<quote>",
    //   option4: "<cite>",
    //   correctOption: "<blockquote>",
    // },
    // {
    //   question: "Which HTML element is used to define a table?",
    //   option1: "<tbl>",
    //   option2: "<table>",
    //   option3: "<t>",
    //   option4: "<tab>",
    //   correctOption: "<table>",
    // },
    // {
    //   question: "Which HTML element is used to define a list item?",
    //   option1: "<li>",
    //   option2: "<list>",
    //   option3: "<item>",
    //   option4: "<ul>",
    //   correctOption: "<li>",
    // },
    // {
    //   question: "Which HTML element is used to define a division or a section?",
    //   option1: "<div>",
    //   option2: "<sec>",
    //   option3: "<section>",
    //   option4: "<divs>",
    //   correctOption: "<div>",
    // },
    // {
    //   question: "What is the correct HTML for making a text input field?",
    //   option1: '<input type="textfield">',
    //   option2: "<textinput>",
    //   option3: "<textfield>",
    //   option4: '<input type="text">',
    //   correctOption: '<input type="text">',
    // },
    // {
    //   question:
    //     "Which HTML attribute is used to specify that an input field must be filled out?",
    //   option1: "placeholder",
    //   option2: "formvalidate",
    //   option3: "required",
    //   option4: "validate",
    //   correctOption: "required",
    // },
    // {
    //   question:
    //     "Which HTML element is used to define the document title that is shown in the browser’s title bar or on the page’s tab?",
    //   option1: "<meta>",
    //   option2: "<title>",
    //   option3: "<head>",
    //   option4: "<link>",
    //   correctOption: "<title>",
    // },
  ];
  
  const cssQuizQuestion = [
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      option1: "<css>",
      option2: "<script>",
      option3: "<style>",
      option4: "<head>",
      correctOption: "<style>",
    },
    {
      question: "Which CSS property is used to change the background color?",
      option1: "color",
      option2: "bgcolor",
      option3: "background-color",
      option4: "bg-color",
      correctOption: "background-color",
    },
    {
      question: "What does CSS stand for?",
      option1: "Creative Style Sheets",
      option2: "Cascading Style Sheets",
      option3: "Computer Style Sheets",
      option4: "Colorful Style Sheets",
      correctOption: "Cascading Style Sheets",
    },
    {
      question: "Which property is used to change the text color of an element?",
      option1: "font-color",
      option2: "text-color",
      option3: "color",
      option4: "fgcolor",
      correctOption: "color",
    },
    {
      question: "Which CSS property controls the text size?",
      option1: "font-style",
      option2: "text-size",
      option3: "font-size",
      option4: "text-style",
      correctOption: "font-size",
    },
    {
      question: "Which property is used to make the text bold?",
      option1: "font-weight",
      option2: "text-decoration",
      option3: "font-style",
      option4: "font-bold",
      correctOption: "font-weight",
    },
    {
      question: "How do you make each word in a text start with a capital letter?",
      option1: "text-transform: capitalize",
      option2: "text-style: capitalize",
      option3: "transform: capitalize",
      option4: "font-transform: capitalize",
      correctOption: "text-transform: capitalize",
    },
    {
      question: "Which CSS property is used to change the font of an element?",
      option1: "font-family",
      option2: "font-weight",
      option3: "font-style",
      option4: "font-text",
      correctOption: "font-family",
    },
    {
      question: "Which property is used to align text to the center?",
      option1: "vertical-align",
      option2: "text-align",
      option3: "align-center",
      option4: "align-text",
      correctOption: "text-align",
    },
    {
      question: "How do you select an element with the id 'example' in CSS?",
      option1: "#example",
      option2: ".example",
      option3: "example",
      option4: "*example",
      correctOption: "#example",
    },
    {
      question: "How do you select all elements with the class name 'example'?",
      option1: "#example",
      option2: ".example",
      option3: "example",
      option4: "*example",
      correctOption: ".example",
    },
    {
      question: "Which property is used to change the spacing between letters?",
      option1: "spacing",
      option2: "letter-spacing",
      option3: "text-spacing",
      option4: "font-spacing",
      correctOption: "letter-spacing",
    },
    {
      question: "Which CSS property controls the space between lines of text?",
      option1: "line-height",
      option2: "text-height",
      option3: "spacing",
      option4: "line-spacing",
      correctOption: "line-height",
    },
    {
      question: "How do you display hyperlinks without an underline?",
      option1: "text-decoration: none",
      option2: "text-decoration: no-underline",
      option3: "hyperlink: none",
      option4: "text-underline: none",
      correctOption: "text-decoration: none",
    },
    {
      question: "How do you make a list that lists its items with squares?",
      option1: "list-style-type: square",
      option2: "list-style: square",
      option3: "list-type: square",
      option4: "list-style-shape: square",
      correctOption: "list-style-type: square",
    },
    {
      question: "Which property is used to set the margin of an element?",
      option1: "spacing",
      option2: "margin",
      option3: "padding",
      option4: "border",
      correctOption: "margin",
    },
    {
      question: "Which CSS property adds space inside the border of an element?",
      option1: "margin",
      option2: "padding",
      option3: "spacing",
      option4: "border-spacing",
      correctOption: "padding",
    },
    {
      question: "How do you make a border rounded?",
      option1: "border-shape: round",
      option2: "border-radius",
      option3: "border-round",
      option4: "border-curve",
      correctOption: "border-radius",
    },
    {
      question: "Which CSS property controls the order of flex items?",
      option1: "flex-direction",
      option2: "order",
      option3: "flex-order",
      option4: "item-order",
      correctOption: "order",
    },
    {
      question: "What is the default value of the position property?",
      option1: "static",
      option2: "relative",
      option3: "absolute",
      option4: "fixed",
      correctOption: "static",
    },
    {
      question: "How do you make a flex container?",
      option1: "display: flex",
      option2: "display: grid",
      option3: "display: block",
      option4: "display: inline",
      correctOption: "display: flex",
    },
    {
      question: "Which CSS property is used to hide an element?",
      option1: "visibility: hidden",
      option2: "display: none",
      option3: "opacity: 0",
      option4: "element-hide",
      correctOption: "display: none",
    },
    {
      question: "Which property is used to set the width of an element?",
      option1: "width",
      option2: "height",
      option3: "size",
      option4: "dimension",
      correctOption: "width",
    },
    {
      question: "Which property is used to control the overflow of an element?",
      option1: "overflow",
      option2: "scroll",
      option3: "hidden",
      option4: "auto",
      correctOption: "overflow",
    },
    {
      question: "How do you set the shadow of an element?",
      option1: "shadow",
      option2: "box-shadow",
      option3: "text-shadow",
      option4: "element-shadow",
      correctOption: "box-shadow",
    }
  ];
  

export {htmlQuestions , cssQuizQuestion};