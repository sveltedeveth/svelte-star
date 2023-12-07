import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FaRupeeSignProps = typeof __propDef.props;
export type FaRupeeSignEvents = typeof __propDef.events;
export type FaRupeeSignSlots = typeof __propDef.slots;
export default class FaRupeeSign extends SvelteComponentTyped<FaRupeeSignProps, FaRupeeSignEvents, FaRupeeSignSlots> {
}
export {};
