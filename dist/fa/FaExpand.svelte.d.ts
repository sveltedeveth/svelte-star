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
export type FaExpandProps = typeof __propDef.props;
export type FaExpandEvents = typeof __propDef.events;
export type FaExpandSlots = typeof __propDef.slots;
export default class FaExpand extends SvelteComponentTyped<FaExpandProps, FaExpandEvents, FaExpandSlots> {
}
export {};
