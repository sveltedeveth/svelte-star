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
export type GiDrillProps = typeof __propDef.props;
export type GiDrillEvents = typeof __propDef.events;
export type GiDrillSlots = typeof __propDef.slots;
export default class GiDrill extends SvelteComponentTyped<GiDrillProps, GiDrillEvents, GiDrillSlots> {
}
export {};
