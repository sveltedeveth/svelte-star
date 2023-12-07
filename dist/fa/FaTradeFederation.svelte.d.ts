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
export type FaTradeFederationProps = typeof __propDef.props;
export type FaTradeFederationEvents = typeof __propDef.events;
export type FaTradeFederationSlots = typeof __propDef.slots;
export default class FaTradeFederation extends SvelteComponentTyped<FaTradeFederationProps, FaTradeFederationEvents, FaTradeFederationSlots> {
}
export {};
