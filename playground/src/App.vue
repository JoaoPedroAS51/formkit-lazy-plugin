<script setup>
const fetchData = () => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          name: {
            firstName: 'Joe',
            lastName: 'Doe'
          },
          flavors: ['chocolate', 'strawberry'],
          address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            zip: '10001'
          }
        }),
      3000
    )
  )
}

async function submit(data) {
  console.log({ data });
  await new Promise((r) => setTimeout(r, 1000))
  alert(`${data.name.firstName}, you form was submitted! 🎉`)
}
</script>

<template>
  <div class="your-first-form">
    <img
      src="https://pro.formkit.com/logo.svg"
      alt="FormKit Logo"
      width="244"
      height="50"
      class="logo"
    />
    <FormKit type="form" #default="{ value }" :lazy="fetchData" @submit="submit">

      <FormKit type="group" name="name">
        <FormKit type="text" name="firstName" label="First name" help="What is your first name?" />
        <FormKit type="text" name="lastName" label="First name" help="What is your last name?" />
      </FormKit>
      <FormKit
        type="checkbox"
        name="flavors"
        label="Favorite ice cream flavors"
        :options="{
          vanilla: 'Vanilla',
          chocolate: 'Chocolate',
          strawberry: 'Strawberry',
          'mint-chocolate-chip': 'Mint Chocolate Chip',
          'rocky-road': 'Rocky Road',
          'cookie-dough': 'Cookie Dough',
          pistachio: 'Pistachio'
        }"
        validation="required|min:2"
      />
      <FormKit type="group" name="address">
        <FormKit type="text" name="street" label="Street"/>
        <FormKit type="text" name="city" label="city"/>
        <FormKit type="text" name="state" label="state"/>
        <FormKit type="text" name="zip" label="zip"/>
      </FormKit>

      <FormKit
        type="checkbox"
        name="agree"
        label="I agree FormKit is the best form authoring framework."
      />
      <pre>{{ value }}</pre>
    </FormKit>
  </div>
</template>

<style scoped>
.your-first-form {
  width: calc(100% - 2em);
  max-width: 480px;
  box-sizing: border-box;
  padding: 2em;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.1);
  border-radius: 0.5em;
  margin: 4em auto;
}

.logo {
  width: 150px;
  height: auto;
  display: block;
  margin: 0 auto 2em auto;
}
pre {
  background-color: rgba(0, 100, 250, 0.1);
  padding: 1em;
}
</style>
