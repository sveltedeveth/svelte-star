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
export type IoMdPricetagProps = typeof __propDef.props;
export type IoMdPricetagEvents = typeof __propDef.events;
export type IoMdPricetagSlots = typeof __propDef.slots;
export default class IoMdPricetag extends SvelteComponentTyped<IoMdPricetagProps, IoMdPricetagEvents, IoMdPricetagSlots> {
}
export {};
