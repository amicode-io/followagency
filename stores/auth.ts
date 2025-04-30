import {defineStore} from "pinia";

export const useAuth = defineStore("auth", () => {
  const isAuth: Ref<boolean> = ref(false);

  const verify = async (password: Ref<string> | string = "") => {
    isAuth.value = false;

    const res = await $fetch("/api/auth", {
      method: "POST",
      body: {
        password: unref(password),
      },
    });

    if (res?.success) {
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
    error,
  };
});
