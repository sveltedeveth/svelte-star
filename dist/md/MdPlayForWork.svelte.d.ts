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
export type MdPlayForWorkProps = typeof __propDef.props;
export type MdPlayForWorkEvents = typeof __propDef.events;
export type MdPlayForWorkSlots = typeof __propDef.slots;
export default class MdPlayForWork extends SvelteComponentTyped<MdPlayForWorkProps, MdPlayForWorkEvents, MdPlayForWorkSlots> {
}
export {};
