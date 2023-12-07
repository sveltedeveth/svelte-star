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
export type FaRegAngryProps = typeof __propDef.props;
export type FaRegAngryEvents = typeof __propDef.events;
export type FaRegAngrySlots = typeof __propDef.slots;
export default class FaRegAngry extends SvelteComponentTyped<FaRegAngryProps, FaRegAngryEvents, FaRegAngrySlots> {
}
export {};
