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
export type GiEnvelopeProps = typeof __propDef.props;
export type GiEnvelopeEvents = typeof __propDef.events;
export type GiEnvelopeSlots = typeof __propDef.slots;
export default class GiEnvelope extends SvelteComponentTyped<GiEnvelopeProps, GiEnvelopeEvents, GiEnvelopeSlots> {
}
export {};
