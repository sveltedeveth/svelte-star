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
export type FaTreeProps = typeof __propDef.props;
export type FaTreeEvents = typeof __propDef.events;
export type FaTreeSlots = typeof __propDef.slots;
export default class FaTree extends SvelteComponentTyped<FaTreeProps, FaTreeEvents, FaTreeSlots> {
}
export {};
