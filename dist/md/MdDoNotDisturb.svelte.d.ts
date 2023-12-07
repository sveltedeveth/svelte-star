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
export type MdDoNotDisturbProps = typeof __propDef.props;
export type MdDoNotDisturbEvents = typeof __propDef.events;
export type MdDoNotDisturbSlots = typeof __propDef.slots;
export default class MdDoNotDisturb extends SvelteComponentTyped<MdDoNotDisturbProps, MdDoNotDisturbEvents, MdDoNotDisturbSlots> {
}
export {};
