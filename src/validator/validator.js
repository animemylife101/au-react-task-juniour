const data = {
    password: null
}

export const requiredFieldCreator = (type) => (value) => {
    return value ? undefined : `Введите ${type}`;
}


export const minLengthCreator = (length) => (value) => {
    if ((value && value.length) < length) {
        return `Используйте не менее ${length} символов`;
    } else {
        data.password = value;
        return undefined;
    }
}

export const emailCheck = (value) => {
    return value.includes('@') ? undefined : 'Неверный E-mail';
}


export const repeatPasswordCheck = (value) => {
    return value != data.password ? 'Пароли не совпадают' : undefined;
}

