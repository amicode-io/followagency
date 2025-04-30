import { defineStore } from "pinia";
import { ref, unref } from "vue";
const useAuth = defineStore("auth", () => {
  const isAuth = ref(false);
  const verify = async (password = "") => {
    isAuth.value = false;
    const res = await $fetch("/api/auth", {
      method: "POST",
      body: {
        password: unref(password)
      }
    });
    if (res == null ? void 0 : res.success) {
      success();
    } else {
      error();
    }
    return res;
  };
  const success = () => {
    console.log("Success");
    isAuth.value = true;
  };
  const error = () => {
    isAuth.value = false;
  };
  return {
    isAuth,
    verify,
    success,
    error
  };
});
export {
  useAuth as u
};
//# sourceMappingURL=auth-CGpOd4hY.js.map
