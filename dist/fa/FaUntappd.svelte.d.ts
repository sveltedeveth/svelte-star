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
export type FaUntappdProps = typeof __propDef.props;
export type FaUntappdEvents = typeof __propDef.events;
export type FaUntappdSlots = typeof __propDef.slots;
export default class FaUntappd extends SvelteComponentTyped<FaUntappdProps, FaUntappdEvents, FaUntappdSlots> {
}
export {};
