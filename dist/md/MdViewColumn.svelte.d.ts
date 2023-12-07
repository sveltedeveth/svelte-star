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
export type MdViewColumnProps = typeof __propDef.props;
export type MdViewColumnEvents = typeof __propDef.events;
export type MdViewColumnSlots = typeof __propDef.slots;
export default class MdViewColumn extends SvelteComponentTyped<MdViewColumnProps, MdViewColumnEvents, MdViewColumnSlots> {
}
export {};
