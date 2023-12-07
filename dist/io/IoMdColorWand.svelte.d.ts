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
export type IoMdColorWandProps = typeof __propDef.props;
export type IoMdColorWandEvents = typeof __propDef.events;
export type IoMdColorWandSlots = typeof __propDef.slots;
export default class IoMdColorWand extends SvelteComponentTyped<IoMdColorWandProps, IoMdColorWandEvents, IoMdColorWandSlots> {
}
export {};
