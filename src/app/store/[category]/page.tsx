interface CategoryProps {
    params: {
        category: string
    }
}

export default function Category(props: CategoryProps) {
    const { category } = props.params;
    console.log(category);

    return (
        <h1>caterory: {category}</h1>
    );
};