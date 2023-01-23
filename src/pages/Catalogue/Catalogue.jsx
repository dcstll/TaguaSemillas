import { Col, Row } from "react-bootstrap"
import { CatalogueItem } from "../../Components/CatalogueItem/CatalogueItem"
import catalogueItems from "../../data/items.json"

function Catalogue() {
  return (
    <>
      <h1>Catalogue</h1>
      <Row md={3} xs={2} lg={4} className="g-3">
        {catalogueItems.map(item =>(
          <Col key={item.id}>
            <CatalogueItem {...item}/>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Catalogue