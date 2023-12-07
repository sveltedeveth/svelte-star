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
export type FaRegSurpriseProps = typeof __propDef.props;
export type FaRegSurpriseEvents = typeof __propDef.events;
export type FaRegSurpriseSlots = typeof __propDef.slots;
export default class FaRegSurprise extends SvelteComponentTyped<FaRegSurpriseProps, FaRegSurpriseEvents, FaRegSurpriseSlots> {
}
export {};
