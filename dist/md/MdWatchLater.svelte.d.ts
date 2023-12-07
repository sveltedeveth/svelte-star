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
export type MdWatchLaterProps = typeof __propDef.props;
export type MdWatchLaterEvents = typeof __propDef.events;
export type MdWatchLaterSlots = typeof __propDef.slots;
export default class MdWatchLater extends SvelteComponentTyped<MdWatchLaterProps, MdWatchLaterEvents, MdWatchLaterSlots> {
}
export {};
