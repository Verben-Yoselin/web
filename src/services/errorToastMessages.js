export function translateErrorMessage(message) {
    const translations = {
        "The ci field is required.": "El campo del CI es obligatorio.",
        "The email field is required.": "El campo del correo electrónico es obligatorio.",
        "The password field is required.": "El campo de la contraseña es obligatorio.",
        "The email has already been taken.": "El correo electrónico ya está registrado.",
        "The ci has already been taken.": "El carnet de identidad ya está registrado.",
        "The ci must be a number.": "El carnet de identidad solo puede contener números.",
        "La confirmación del campo password no coincide.": "Las contraseñas no coinciden.",
        "The password confirmation does not match.": "Las contraseñas no coinciden.",
        "The password field confirmation does not match.": "Las contraseñas no coinciden.",
        "The password must be at least 8 characters.": "La contraseña debe tener al menos 8 caracteres.",
        "Fail to Fetch": "Error por parte del servidor, inténtelo nuevamente más tarde.",
        "Failed to fetch": "Error por parte del servidor, inténtelo nuevamente más tarde.",
    };

    return translations[message] || message;
}