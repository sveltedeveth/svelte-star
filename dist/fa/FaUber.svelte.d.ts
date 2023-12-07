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
export type FaUberProps = typeof __propDef.props;
export type FaUberEvents = typeof __propDef.events;
export type FaUberSlots = typeof __propDef.slots;
export default class FaUber extends SvelteComponentTyped<FaUberProps, FaUberEvents, FaUberSlots> {
}
export {};
