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
export type IoMdGlassesProps = typeof __propDef.props;
export type IoMdGlassesEvents = typeof __propDef.events;
export type IoMdGlassesSlots = typeof __propDef.slots;
export default class IoMdGlasses extends SvelteComponentTyped<IoMdGlassesProps, IoMdGlassesEvents, IoMdGlassesSlots> {
}
export {};
