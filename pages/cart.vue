<template>
  <div>
    <app-cart-steps />
    <hr />
    <h1 class="center">Ваша корзина</h1>

    <section v-if="cartUIStatus === 'idle'">
      <app-cart-display />
    </section>

    <section v-else-if="cartUIStatus === 'loading'" class="loader">
      <app-loader />
    </section>

    <section v-else-if="cartUIStatus === 'success'" class="success">
      <h2>Успешно!</h2>
      <p>Спасибо за покупку. Товар скоро поступит на ваш игровой аккаунт</p>
      <p>Что то еще?</p>
      <button class="pay-with-stripe">
        <nuxt-link exact to="/">Вернуться на главную</nuxt-link>
      </button>
    </section>

    <section v-else-if="cartUIStatus === 'failure'">
      <p>Ой, что-то пошло не так. Перенаправление в корзину, чтобы попробовать еще раз.</p>
    </section>

    <app-sales-boxes />
  </div>
</template>

<script>
import AppLoader from "~/components/AppLoader.vue";
import AppCartSteps from "~/components/AppCartSteps.vue";
import AppSalesBoxes from "~/components/AppSalesBoxes.vue";
import AppCartDisplay from "~/components/AppCartDisplay.vue";
import { mapState } from "vuex";

export default {
  components: {
    AppCartDisplay,
    AppSalesBoxes,
    AppCartSteps,
    AppLoader
  },
  computed: {
    ...mapState(["cartUIStatus"])
  }
};
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
}

.success {
  text-align: center;
}
</style>