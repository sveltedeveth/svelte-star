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
export type IoMdSwapProps = typeof __propDef.props;
export type IoMdSwapEvents = typeof __propDef.events;
export type IoMdSwapSlots = typeof __propDef.slots;
export default class IoMdSwap extends SvelteComponentTyped<IoMdSwapProps, IoMdSwapEvents, IoMdSwapSlots> {
}
export {};
