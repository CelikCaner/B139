import { useState } from "react";
import { Container, Form, ListGroup } from "react-bootstrap";
import studentsData from "../../assets/data/students.json";

const FilterList = () => {
    const [search, setSearch] = useState("");

    const filteredStudents = search === ""
        ? studentsData
        : studentsData.filter((student) => student.name.toLowerCase().includes(search.toLowerCase()));

    
    return (
        <Container>
            <h2>LISTE FILTRELEME</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Isme Gore Listele</Form.Label>
                    <Form.Control type="text"
                        placeholder="Ara..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Form.Group>
            </Form>
            <ListGroup>
                {
                    filteredStudents.map((student) => (
                        <ListGroup.Item key={student.id} className="d-flex text-center" >
                            <p className="col-8 text-start m-0">{student.name}</p>
                            <p className="col-2 m-0">{student.age}</p>
                            <p className="col-2 m-0">{student.grade}</p>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>

        </Container>
    )
}

export default FilterList