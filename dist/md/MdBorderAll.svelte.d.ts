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
export type MdBorderAllProps = typeof __propDef.props;
export type MdBorderAllEvents = typeof __propDef.events;
export type MdBorderAllSlots = typeof __propDef.slots;
export default class MdBorderAll extends SvelteComponentTyped<MdBorderAllProps, MdBorderAllEvents, MdBorderAllSlots> {
}
export {};
