type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: 'btn_dark_green'
}
const Button = ( {type, title, icon, variant} : ButtonProps) => {
    return (
        <button
            className={`flexCenter  gap-3 rounded-full border ${variant}`}
            type = {type}
        >
            Log In
        </button>
    )
}
export default Button
