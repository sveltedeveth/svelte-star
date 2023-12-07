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
export type FaChalkboardProps = typeof __propDef.props;
export type FaChalkboardEvents = typeof __propDef.events;
export type FaChalkboardSlots = typeof __propDef.slots;
export default class FaChalkboard extends SvelteComponentTyped<FaChalkboardProps, FaChalkboardEvents, FaChalkboardSlots> {
}
export {};
