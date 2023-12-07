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
export type FaCommentsProps = typeof __propDef.props;
export type FaCommentsEvents = typeof __propDef.events;
export type FaCommentsSlots = typeof __propDef.slots;
export default class FaComments extends SvelteComponentTyped<FaCommentsProps, FaCommentsEvents, FaCommentsSlots> {
}
export {};
