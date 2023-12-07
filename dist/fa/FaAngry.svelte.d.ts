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
export type FaAngryProps = typeof __propDef.props;
export type FaAngryEvents = typeof __propDef.events;
export type FaAngrySlots = typeof __propDef.slots;
export default class FaAngry extends SvelteComponentTyped<FaAngryProps, FaAngryEvents, FaAngrySlots> {
}
export {};
