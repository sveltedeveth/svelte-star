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
export type GiHolyGrailProps = typeof __propDef.props;
export type GiHolyGrailEvents = typeof __propDef.events;
export type GiHolyGrailSlots = typeof __propDef.slots;
export default class GiHolyGrail extends SvelteComponentTyped<GiHolyGrailProps, GiHolyGrailEvents, GiHolyGrailSlots> {
}
export {};
