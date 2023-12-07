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
export type FaEnvelopeProps = typeof __propDef.props;
export type FaEnvelopeEvents = typeof __propDef.events;
export type FaEnvelopeSlots = typeof __propDef.slots;
export default class FaEnvelope extends SvelteComponentTyped<FaEnvelopeProps, FaEnvelopeEvents, FaEnvelopeSlots> {
}
export {};
