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
export type FaSchlixProps = typeof __propDef.props;
export type FaSchlixEvents = typeof __propDef.events;
export type FaSchlixSlots = typeof __propDef.slots;
export default class FaSchlix extends SvelteComponentTyped<FaSchlixProps, FaSchlixEvents, FaSchlixSlots> {
}
export {};
