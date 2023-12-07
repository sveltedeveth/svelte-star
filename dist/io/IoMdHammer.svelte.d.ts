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
export type IoMdHammerProps = typeof __propDef.props;
export type IoMdHammerEvents = typeof __propDef.events;
export type IoMdHammerSlots = typeof __propDef.slots;
export default class IoMdHammer extends SvelteComponentTyped<IoMdHammerProps, IoMdHammerEvents, IoMdHammerSlots> {
}
export {};
