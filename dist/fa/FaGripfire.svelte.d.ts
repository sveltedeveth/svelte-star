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
export type FaGripfireProps = typeof __propDef.props;
export type FaGripfireEvents = typeof __propDef.events;
export type FaGripfireSlots = typeof __propDef.slots;
export default class FaGripfire extends SvelteComponentTyped<FaGripfireProps, FaGripfireEvents, FaGripfireSlots> {
}
export {};
