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
export type MdRowingProps = typeof __propDef.props;
export type MdRowingEvents = typeof __propDef.events;
export type MdRowingSlots = typeof __propDef.slots;
export default class MdRowing extends SvelteComponentTyped<MdRowingProps, MdRowingEvents, MdRowingSlots> {
}
export {};
