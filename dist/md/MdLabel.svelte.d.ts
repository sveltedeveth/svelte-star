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
export type MdLabelProps = typeof __propDef.props;
export type MdLabelEvents = typeof __propDef.events;
export type MdLabelSlots = typeof __propDef.slots;
export default class MdLabel extends SvelteComponentTyped<MdLabelProps, MdLabelEvents, MdLabelSlots> {
}
export {};
