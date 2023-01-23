import { Button } from "react-bootstrap"
import React from "react"
import { Card } from "react-bootstrap"
import { formatCurrency } from "../../utilities/formatCurrency"
import { CiCircleRemove } from "react-icons/ci"
import { useShoppingCart } from "../../context/ShoppingCartContext"

type CatalogueItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function CatalogueItem({ id, name, price, imgUrl}: CatalogueItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)
    return (
        <Card className="h-100">
            <Card.Img 
                variant="top" 
                src={imgUrl} 
                height="250px" 
                style={{objectFit: "cover"}}
                className="p-2"
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-start text-start mb-4">
                    <span className="fs-5">{name}</span>
                </Card.Title>
                <div className="mt-auto d-flex flex-column justify-content-between align-items-center">
                    <span className="fs-6 text-muted">{formatCurrency (price)}</span>
                    {/* {quantity === 0 ? <Button style={{width: "1.5rem", height: "1.5rem"}} className="rounded-circle" variant="danger" onClick={() => increaseCartQuantity}>+ add TO CART</Button> */}
                    {quantity === 0 ? ( 
                        <Button className="w-100" onClick={() => increaseCartQuantity(id)}>+ add TO CART</Button>
                    ) : <div className="d-flex align-items-center flex-column" style={{gap:".5rem"}}>
                        <div className="d-flex align-items-center justify-content-center" style={{gap:".5rem"}}>
                            <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                            <div>
                                <span className="fs-3">{quantity}</span> in cart
                            </div>
                            <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                            
                            <Button variant='danger' size="sm" onClick={() => removeFromCart}>remove</Button>
                        </div>
                        </div>}
                </div>
            </Card.Body>
        </Card>
    )
}