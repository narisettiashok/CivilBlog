export const PASSWORD_REGEX = {
    regex: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,15})/,
    statement: "Must contain at least 8 characters, 1 number and 1 a special character"
}