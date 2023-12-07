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
export type MdWatchProps = typeof __propDef.props;
export type MdWatchEvents = typeof __propDef.events;
export type MdWatchSlots = typeof __propDef.slots;
export default class MdWatch extends SvelteComponentTyped<MdWatchProps, MdWatchEvents, MdWatchSlots> {
}
export {};
