import Plantmenu from "@/app/shared/components/plant";

export default function Page({ params }: { params: { item_id: string } }) {
    return (
        <Plantmenu item_id={params.item_id} />
    )
}
