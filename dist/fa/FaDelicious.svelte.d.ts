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
export type FaDeliciousProps = typeof __propDef.props;
export type FaDeliciousEvents = typeof __propDef.events;
export type FaDeliciousSlots = typeof __propDef.slots;
export default class FaDelicious extends SvelteComponentTyped<FaDeliciousProps, FaDeliciousEvents, FaDeliciousSlots> {
}
export {};
