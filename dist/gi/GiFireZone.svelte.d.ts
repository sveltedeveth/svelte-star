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
export type GiFireZoneProps = typeof __propDef.props;
export type GiFireZoneEvents = typeof __propDef.events;
export type GiFireZoneSlots = typeof __propDef.slots;
export default class GiFireZone extends SvelteComponentTyped<GiFireZoneProps, GiFireZoneEvents, GiFireZoneSlots> {
}
export {};
