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
export type FaCcVisaProps = typeof __propDef.props;
export type FaCcVisaEvents = typeof __propDef.events;
export type FaCcVisaSlots = typeof __propDef.slots;
export default class FaCcVisa extends SvelteComponentTyped<FaCcVisaProps, FaCcVisaEvents, FaCcVisaSlots> {
}
export {};
