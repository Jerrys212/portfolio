"use client";

import { useEffect } from "react";

import { notifyVisit } from "@/actions/visit/notify-visit";

export const VisitPing = () => {
    useEffect(() => {
        if (process.env.NODE_ENV !== "production") return;
        void notifyVisit();
    }, []);

    return null;
};
