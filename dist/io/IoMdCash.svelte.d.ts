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
export type IoMdCashProps = typeof __propDef.props;
export type IoMdCashEvents = typeof __propDef.events;
export type IoMdCashSlots = typeof __propDef.slots;
export default class IoMdCash extends SvelteComponentTyped<IoMdCashProps, IoMdCashEvents, IoMdCashSlots> {
}
export {};
