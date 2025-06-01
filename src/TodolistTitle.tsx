
type TitleTypes = {
    title: string
};


export const TodolistTitle = ({title}: TitleTypes) => {
    return (
        <h3>{title}</h3>
    );
};