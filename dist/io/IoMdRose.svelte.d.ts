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
export type IoMdRoseProps = typeof __propDef.props;
export type IoMdRoseEvents = typeof __propDef.events;
export type IoMdRoseSlots = typeof __propDef.slots;
export default class IoMdRose extends SvelteComponentTyped<IoMdRoseProps, IoMdRoseEvents, IoMdRoseSlots> {
}
export {};
