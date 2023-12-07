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
export type FaLinkedinProps = typeof __propDef.props;
export type FaLinkedinEvents = typeof __propDef.events;
export type FaLinkedinSlots = typeof __propDef.slots;
export default class FaLinkedin extends SvelteComponentTyped<FaLinkedinProps, FaLinkedinEvents, FaLinkedinSlots> {
}
export {};
