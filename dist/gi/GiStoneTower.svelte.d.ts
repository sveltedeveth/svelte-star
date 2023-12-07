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
export type GiStoneTowerProps = typeof __propDef.props;
export type GiStoneTowerEvents = typeof __propDef.events;
export type GiStoneTowerSlots = typeof __propDef.slots;
export default class GiStoneTower extends SvelteComponentTyped<GiStoneTowerProps, GiStoneTowerEvents, GiStoneTowerSlots> {
}
export {};
