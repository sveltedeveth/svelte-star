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
export type FaXingProps = typeof __propDef.props;
export type FaXingEvents = typeof __propDef.events;
export type FaXingSlots = typeof __propDef.slots;
export default class FaXing extends SvelteComponentTyped<FaXingProps, FaXingEvents, FaXingSlots> {
}
export {};
