import "next/dynamic";

const { exchanges } = dynamic(() => import("utils/cryptoApi"), {
    ssr: false,
  })

export default function SupportedExchanges() {
    return (
        <div>
            hi
            <div>
                {exchanges}
            </div>
        </div>

    )
};