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
export type MdDraftsProps = typeof __propDef.props;
export type MdDraftsEvents = typeof __propDef.events;
export type MdDraftsSlots = typeof __propDef.slots;
export default class MdDrafts extends SvelteComponentTyped<MdDraftsProps, MdDraftsEvents, MdDraftsSlots> {
}
export {};
