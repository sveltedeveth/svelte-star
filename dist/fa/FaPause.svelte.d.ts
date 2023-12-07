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
export type FaPauseProps = typeof __propDef.props;
export type FaPauseEvents = typeof __propDef.events;
export type FaPauseSlots = typeof __propDef.slots;
export default class FaPause extends SvelteComponentTyped<FaPauseProps, FaPauseEvents, FaPauseSlots> {
}
export {};
