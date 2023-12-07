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
export type FaPassportProps = typeof __propDef.props;
export type FaPassportEvents = typeof __propDef.events;
export type FaPassportSlots = typeof __propDef.slots;
export default class FaPassport extends SvelteComponentTyped<FaPassportProps, FaPassportEvents, FaPassportSlots> {
}
export {};
