type NewComponentType = {
    students: StudentType[]
}
type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <table>
            {topCars.map((el, index) => {
                return (
                    <>
                        <tr>
                            <th>id</th>
                            <th>manufacturer</th>
                            <th>model</th>
                        </tr>
                        <tr>
                            <td>{index+1}</td>
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                        </tr>
                    </>

                )
            })}
        </table>
    )

}