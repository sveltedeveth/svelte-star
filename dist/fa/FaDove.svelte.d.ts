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
export type FaDoveProps = typeof __propDef.props;
export type FaDoveEvents = typeof __propDef.events;
export type FaDoveSlots = typeof __propDef.slots;
export default class FaDove extends SvelteComponentTyped<FaDoveProps, FaDoveEvents, FaDoveSlots> {
}
export {};
