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
export type MdUnarchiveProps = typeof __propDef.props;
export type MdUnarchiveEvents = typeof __propDef.events;
export type MdUnarchiveSlots = typeof __propDef.slots;
export default class MdUnarchive extends SvelteComponentTyped<MdUnarchiveProps, MdUnarchiveEvents, MdUnarchiveSlots> {
}
export {};
