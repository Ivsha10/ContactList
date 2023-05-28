const Footer = () => {
    const today = new Date();
    return (
        <footer>
            Copyright &copy; Ivan Djuricic {today.getFullYear()}
        </footer>
    )
}

export default Footer
