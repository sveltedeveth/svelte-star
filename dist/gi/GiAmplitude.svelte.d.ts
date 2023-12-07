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
export type GiAmplitudeProps = typeof __propDef.props;
export type GiAmplitudeEvents = typeof __propDef.events;
export type GiAmplitudeSlots = typeof __propDef.slots;
export default class GiAmplitude extends SvelteComponentTyped<GiAmplitudeProps, GiAmplitudeEvents, GiAmplitudeSlots> {
}
export {};
