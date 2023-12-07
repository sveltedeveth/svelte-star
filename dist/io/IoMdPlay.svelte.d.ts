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
export type IoMdPlayProps = typeof __propDef.props;
export type IoMdPlayEvents = typeof __propDef.events;
export type IoMdPlaySlots = typeof __propDef.slots;
export default class IoMdPlay extends SvelteComponentTyped<IoMdPlayProps, IoMdPlayEvents, IoMdPlaySlots> {
}
export {};
