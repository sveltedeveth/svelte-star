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
export type FaWhmcsProps = typeof __propDef.props;
export type FaWhmcsEvents = typeof __propDef.events;
export type FaWhmcsSlots = typeof __propDef.slots;
export default class FaWhmcs extends SvelteComponentTyped<FaWhmcsProps, FaWhmcsEvents, FaWhmcsSlots> {
}
export {};
