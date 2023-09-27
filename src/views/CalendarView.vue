<template>
  <div class="calendar">
    <div class="calendar--title">
      Calendar
    </div>
    <div class="calendar--desk">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, consequuntur deserunt ea fugit inventore itaque nisi repellat tempora tenetur totam? Amet deserunt, doloribus magni maxime minus molestias, nisi odio odit quaerat quasi rem suscipit tempora, vero vitae voluptates! Aspernatur commodi cum cupiditate eum quia, ratione vel? Accusamus accusantium aperiam asperiores commodi consequuntur ducimus harum illum impedit ipsam libero maiores nam nesciunt nobis, officiis omnis optio, perferendis quam quas reiciendis repellendus rerum sed sequi sint sit sunt suscipit tempore ut veritatis vero voluptate? Accusantium dicta ducimus eaque earum eveniet ex, expedita libero nam quaerat quos rem repudiandae ut, vero, voluptatem voluptatibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi deserunt expedita maxime officiis possimus quaerat quia sed sit sunt, ullam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cumque deleniti deserunt dolor eius, et eveniet harum in ipsum labore molestias nihil officia officiis perspiciatis porro qui quidem velit voluptas! Animi architecto earum iure laborum nesciunt soluta ullam unde. Sed!
      </p>
    </div>
    <div class="calendar--btn">
      <button @click="counter--">-</button>
      <span>{{ counter }}</span>
      <button @click="counter++">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarView",
  data() {
    return {
      counter: 1,
    }
  }
};
</script>

<style lang="scss" scoped>
.calendar {
    max-width: 800px;
    background: #f0f0f0;
    padding: 20px;
    margin: 0 auto;
    &--title {
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    &--desk {
        font-size: 14px;
    }
    &--btn {
        button {
            font-weight: bold;
            font-size: 20px;
        }
        span {
            padding: 0 10px;
            font-weight: bold;
            font-size: 18px;
        }
    }
}
</style>
