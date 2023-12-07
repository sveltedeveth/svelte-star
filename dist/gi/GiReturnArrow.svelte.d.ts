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
export type GiReturnArrowProps = typeof __propDef.props;
export type GiReturnArrowEvents = typeof __propDef.events;
export type GiReturnArrowSlots = typeof __propDef.slots;
export default class GiReturnArrow extends SvelteComponentTyped<GiReturnArrowProps, GiReturnArrowEvents, GiReturnArrowSlots> {
}
export {};
