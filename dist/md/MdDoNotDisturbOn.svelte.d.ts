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
export type MdDoNotDisturbOnProps = typeof __propDef.props;
export type MdDoNotDisturbOnEvents = typeof __propDef.events;
export type MdDoNotDisturbOnSlots = typeof __propDef.slots;
export default class MdDoNotDisturbOn extends SvelteComponentTyped<MdDoNotDisturbOnProps, MdDoNotDisturbOnEvents, MdDoNotDisturbOnSlots> {
}
export {};
