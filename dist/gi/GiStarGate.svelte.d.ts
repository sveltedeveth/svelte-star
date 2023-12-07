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
export type GiStarGateProps = typeof __propDef.props;
export type GiStarGateEvents = typeof __propDef.events;
export type GiStarGateSlots = typeof __propDef.slots;
export default class GiStarGate extends SvelteComponentTyped<GiStarGateProps, GiStarGateEvents, GiStarGateSlots> {
}
export {};
