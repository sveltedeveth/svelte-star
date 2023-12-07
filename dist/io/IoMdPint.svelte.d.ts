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
export type IoMdPintProps = typeof __propDef.props;
export type IoMdPintEvents = typeof __propDef.events;
export type IoMdPintSlots = typeof __propDef.slots;
export default class IoMdPint extends SvelteComponentTyped<IoMdPintProps, IoMdPintEvents, IoMdPintSlots> {
}
export {};
