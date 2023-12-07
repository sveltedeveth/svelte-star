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
export type GiAcidTubeProps = typeof __propDef.props;
export type GiAcidTubeEvents = typeof __propDef.events;
export type GiAcidTubeSlots = typeof __propDef.slots;
export default class GiAcidTube extends SvelteComponentTyped<GiAcidTubeProps, GiAcidTubeEvents, GiAcidTubeSlots> {
}
export {};
