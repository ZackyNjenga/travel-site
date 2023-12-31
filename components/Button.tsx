type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
}
const Button = ( {type, title, icon, variant, full} : ButtonProps) => {
    return (
        <button
            className={`flexCenter  gap-3
             rounded-full border ${variant} ${full && 'w-full'}`}

            type = {type}
        >
            Log In
        </button>
    )
}
export default Button
