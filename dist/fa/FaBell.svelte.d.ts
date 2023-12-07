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
export type FaBellProps = typeof __propDef.props;
export type FaBellEvents = typeof __propDef.events;
export type FaBellSlots = typeof __propDef.slots;
export default class FaBell extends SvelteComponentTyped<FaBellProps, FaBellEvents, FaBellSlots> {
}
export {};
