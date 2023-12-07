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
export type MdBorderTopProps = typeof __propDef.props;
export type MdBorderTopEvents = typeof __propDef.events;
export type MdBorderTopSlots = typeof __propDef.slots;
export default class MdBorderTop extends SvelteComponentTyped<MdBorderTopProps, MdBorderTopEvents, MdBorderTopSlots> {
}
export {};
