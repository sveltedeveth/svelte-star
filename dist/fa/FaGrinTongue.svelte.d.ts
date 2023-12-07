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
export type FaGrinTongueProps = typeof __propDef.props;
export type FaGrinTongueEvents = typeof __propDef.events;
export type FaGrinTongueSlots = typeof __propDef.slots;
export default class FaGrinTongue extends SvelteComponentTyped<FaGrinTongueProps, FaGrinTongueEvents, FaGrinTongueSlots> {
}
export {};
