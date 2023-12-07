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
export type FaConciergeBellProps = typeof __propDef.props;
export type FaConciergeBellEvents = typeof __propDef.events;
export type FaConciergeBellSlots = typeof __propDef.slots;
export default class FaConciergeBell extends SvelteComponentTyped<FaConciergeBellProps, FaConciergeBellEvents, FaConciergeBellSlots> {
}
export {};
