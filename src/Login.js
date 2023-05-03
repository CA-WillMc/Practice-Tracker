import React from "react";

export default function User(props) {
  function handleLoginClick() {
    //check login
    props.onLogin();
  }

  return (
    <>
      <div id="wraper-login">
        <div class="l-form">
          <form action="" class="form">
            <div class="form__div">
              <input
                type="text"
                class="form__input"
                id="username"
                placeholder=" "
              />
              <label for="" class="form__label">
                Username
              </label>
            </div>

            <div class="form__div">
              <input
                type="password"
                id="password"
                class="form__input"
                placeholder=" "
              />
              <label for="" class="form__label">
                Password
              </label>
            </div>

            <input
              type="button"
              class="form__button"
              value="Sign In"
              onClick={handleLoginClick}
            />
          </form>
        </div>
      </div>
    </>
  );
}
