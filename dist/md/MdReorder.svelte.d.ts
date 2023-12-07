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
export type MdReorderProps = typeof __propDef.props;
export type MdReorderEvents = typeof __propDef.events;
export type MdReorderSlots = typeof __propDef.slots;
export default class MdReorder extends SvelteComponentTyped<MdReorderProps, MdReorderEvents, MdReorderSlots> {
}
export {};
