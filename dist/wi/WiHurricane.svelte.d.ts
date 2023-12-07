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
export type WiHurricaneProps = typeof __propDef.props;
export type WiHurricaneEvents = typeof __propDef.events;
export type WiHurricaneSlots = typeof __propDef.slots;
export default class WiHurricane extends SvelteComponentTyped<WiHurricaneProps, WiHurricaneEvents, WiHurricaneSlots> {
}
export {};
