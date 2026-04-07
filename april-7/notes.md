# Day 17: Forms and JavaScript

## Topics

Back in i211, we talked about "servers" and "*server-side rendering*". But today in JavaScript, we want to talk about forms as a way that a user could interact with our application, and do all of the processing "*client-side*".
f

## Forms in HTML

Template that we'll start from is that we have a form, perhaps with a name, and a submit button which triggers some behavior.

```html
<form action="" method="get">
    <button type="submit">Submit</button>
</form>
```

## Input types that we can work with

This is not a good use of a "text" field, but this demonstrates that we use the `id` and the `name` fields as a way to specify the data we collect in a form.

```html
<form action="" method="get">

    <label for="birthday">What is your birthday?</label>
    <input type="text" name="birthday" id="birthday">

    <button type="submit">Submit</button>
</form>
```

## What *is* the default behavior of a form?

```js
event.preventDefault();
```

By default: forms were not invented with JavaScript in mind, so by default: the behavior is that they were sending data from the front end to a back end for Python/Perl/Scheme (side note the original version of Reddit was written in Common Lisp).