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
export type FaRegEnvelopeProps = typeof __propDef.props;
export type FaRegEnvelopeEvents = typeof __propDef.events;
export type FaRegEnvelopeSlots = typeof __propDef.slots;
export default class FaRegEnvelope extends SvelteComponentTyped<FaRegEnvelopeProps, FaRegEnvelopeEvents, FaRegEnvelopeSlots> {
}
export {};
