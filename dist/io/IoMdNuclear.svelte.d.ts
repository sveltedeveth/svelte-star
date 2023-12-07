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
export type IoMdNuclearProps = typeof __propDef.props;
export type IoMdNuclearEvents = typeof __propDef.events;
export type IoMdNuclearSlots = typeof __propDef.slots;
export default class IoMdNuclear extends SvelteComponentTyped<IoMdNuclearProps, IoMdNuclearEvents, IoMdNuclearSlots> {
}
export {};
