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
export type MdDetailsProps = typeof __propDef.props;
export type MdDetailsEvents = typeof __propDef.events;
export type MdDetailsSlots = typeof __propDef.slots;
export default class MdDetails extends SvelteComponentTyped<MdDetailsProps, MdDetailsEvents, MdDetailsSlots> {
}
export {};
