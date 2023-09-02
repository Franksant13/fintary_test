type Props = {
    title: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const JsonPlaceholder = ({ title, value, onChange }: Props): JSX.Element => {
    return(
        <div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <textarea
            value={value}
            onChange={onChange}
            className="border rounded p-2 mt-2 ml-2 mr-2"
            style={{ backgroundColor: 'lightgray', color: 'black', width: '350px', height: '450px' }}
            />
        </div>
    );
}