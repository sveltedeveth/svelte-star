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
export type GiTunePitchProps = typeof __propDef.props;
export type GiTunePitchEvents = typeof __propDef.events;
export type GiTunePitchSlots = typeof __propDef.slots;
export default class GiTunePitch extends SvelteComponentTyped<GiTunePitchProps, GiTunePitchEvents, GiTunePitchSlots> {
}
export {};
