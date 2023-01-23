import { useShoppingCart } from "../../context/ShoppingCartContext"
import catalogueItems from "../../data/items.json"
import { Stack, Button } from "react-bootstrap"
import React from "react"
import { formatCurrency } from "../../utilities/formatCurrency"

type CartItemProps = {
    id:number
    quantity: number
}

function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = catalogueItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center" >
            <img src={item.imgUrl} style={{width: "125px", height:"125px", objectFit:"cover" }} />
            <div className="me-auto">
                <div>
                    {item.name} {quantity > 1 && <span className="text-muted" style={{ fontSize: ".65rem" }}>x{quantity}</span>}
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                    {formatCurrency(item.price)}
                </div>
                <div>{formatCurrency(item.price * quantity)}</div>
                <Button variant="outlin-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
            </div>
        </Stack>
    )
}

export default CartItem