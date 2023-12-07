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
export type GiExplosiveMeetingProps = typeof __propDef.props;
export type GiExplosiveMeetingEvents = typeof __propDef.events;
export type GiExplosiveMeetingSlots = typeof __propDef.slots;
export default class GiExplosiveMeeting extends SvelteComponentTyped<GiExplosiveMeetingProps, GiExplosiveMeetingEvents, GiExplosiveMeetingSlots> {
}
export {};
