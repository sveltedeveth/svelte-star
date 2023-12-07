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
export type IoMdPinProps = typeof __propDef.props;
export type IoMdPinEvents = typeof __propDef.events;
export type IoMdPinSlots = typeof __propDef.slots;
export default class IoMdPin extends SvelteComponentTyped<IoMdPinProps, IoMdPinEvents, IoMdPinSlots> {
}
export {};
