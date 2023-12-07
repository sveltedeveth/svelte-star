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
export type IoMdShareProps = typeof __propDef.props;
export type IoMdShareEvents = typeof __propDef.events;
export type IoMdShareSlots = typeof __propDef.slots;
export default class IoMdShare extends SvelteComponentTyped<IoMdShareProps, IoMdShareEvents, IoMdShareSlots> {
}
export {};
