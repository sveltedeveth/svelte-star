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
export type MdChildFriendlyProps = typeof __propDef.props;
export type MdChildFriendlyEvents = typeof __propDef.events;
export type MdChildFriendlySlots = typeof __propDef.slots;
export default class MdChildFriendly extends SvelteComponentTyped<MdChildFriendlyProps, MdChildFriendlyEvents, MdChildFriendlySlots> {
}
export {};
