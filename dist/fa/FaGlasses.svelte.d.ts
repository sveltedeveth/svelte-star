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
export type FaGlassesProps = typeof __propDef.props;
export type FaGlassesEvents = typeof __propDef.events;
export type FaGlassesSlots = typeof __propDef.slots;
export default class FaGlasses extends SvelteComponentTyped<FaGlassesProps, FaGlassesEvents, FaGlassesSlots> {
}
export {};
