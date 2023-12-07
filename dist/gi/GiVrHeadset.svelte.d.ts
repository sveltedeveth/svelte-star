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
export type GiVrHeadsetProps = typeof __propDef.props;
export type GiVrHeadsetEvents = typeof __propDef.events;
export type GiVrHeadsetSlots = typeof __propDef.slots;
export default class GiVrHeadset extends SvelteComponentTyped<GiVrHeadsetProps, GiVrHeadsetEvents, GiVrHeadsetSlots> {
}
export {};
