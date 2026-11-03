'use client';

import { usePickList } from "./PickListContext";

export default function PickListBadge() {
    const { count } = usePickList();
    return (
        <span className="ml-2 inline-flex items-center justify-center rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
            {count}
        </span>
    );
}
                