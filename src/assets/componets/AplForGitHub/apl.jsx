
export const Apl = async () => {
const data =await fetch('https://api.github.com/users/PranavRasal')
return data.json()
}
