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
export type MdQueuePlayNextProps = typeof __propDef.props;
export type MdQueuePlayNextEvents = typeof __propDef.events;
export type MdQueuePlayNextSlots = typeof __propDef.slots;
export default class MdQueuePlayNext extends SvelteComponentTyped<MdQueuePlayNextProps, MdQueuePlayNextEvents, MdQueuePlayNextSlots> {
}
export {};
