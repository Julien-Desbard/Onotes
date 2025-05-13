# méthode

For a quick example, let’s assume we have this form:

<form>
  <label for="email">Email</label>
  <input type="email" name="email" id="email" />

  <button type="submit">Submit</button>
</form>

To handle submissions in JavaScript, we can use the FormData API like this:

```js
function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const value = data.get('email');

  console.log({ value });
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
```
