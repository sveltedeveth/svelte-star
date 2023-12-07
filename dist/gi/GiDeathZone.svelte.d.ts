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
export type GiDeathZoneProps = typeof __propDef.props;
export type GiDeathZoneEvents = typeof __propDef.events;
export type GiDeathZoneSlots = typeof __propDef.slots;
export default class GiDeathZone extends SvelteComponentTyped<GiDeathZoneProps, GiDeathZoneEvents, GiDeathZoneSlots> {
}
export {};
