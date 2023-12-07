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
export type FaRegCommentsProps = typeof __propDef.props;
export type FaRegCommentsEvents = typeof __propDef.events;
export type FaRegCommentsSlots = typeof __propDef.slots;
export default class FaRegComments extends SvelteComponentTyped<FaRegCommentsProps, FaRegCommentsEvents, FaRegCommentsSlots> {
}
export {};
