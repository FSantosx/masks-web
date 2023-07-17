const handleMask = (event) => {
    let input = event.target
    input.value = mascaraTel(input.value)
}

const mascaraTel = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}

const handleMaskCpf = (event) => {
    let input = event.target
    input.value = mascaraCpf(input.value)
}

const mascaraCpf = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d)/, "$1-$2")
    return value
}

const handleMaskCnpj = (event) => {
    let input = event.target
    input.value = mascaraCnpj(input.value)
}

const mascaraCnpj = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d)/, "$1/$2")
    value = value.replace(/(\d{4})(\d)/, "$1-$2")
    return value
}

const handleMaskRg = (event) => {
    let input = event.target
    input.value = mascaraRg(input.value)
}

const mascaraRg = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d)/, "$1-$2")

    return value
}