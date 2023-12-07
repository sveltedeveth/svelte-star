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
export type IoMdWatchProps = typeof __propDef.props;
export type IoMdWatchEvents = typeof __propDef.events;
export type IoMdWatchSlots = typeof __propDef.slots;
export default class IoMdWatch extends SvelteComponentTyped<IoMdWatchProps, IoMdWatchEvents, IoMdWatchSlots> {
}
export {};
