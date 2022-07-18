interface IProps {
    people: {
      name: string;
      age: number;
      url: string;
      note?: string;
    }[]
  }

const List: React.FC<IProps> = ({people}) => {
    return (
        <div>
            I am a List
        </div>
    )
}

export default List
