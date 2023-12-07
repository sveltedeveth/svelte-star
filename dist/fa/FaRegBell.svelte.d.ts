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
export type FaRegBellProps = typeof __propDef.props;
export type FaRegBellEvents = typeof __propDef.events;
export type FaRegBellSlots = typeof __propDef.slots;
export default class FaRegBell extends SvelteComponentTyped<FaRegBellProps, FaRegBellEvents, FaRegBellSlots> {
}
export {};
