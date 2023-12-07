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
export type GiLightningArcProps = typeof __propDef.props;
export type GiLightningArcEvents = typeof __propDef.events;
export type GiLightningArcSlots = typeof __propDef.slots;
export default class GiLightningArc extends SvelteComponentTyped<GiLightningArcProps, GiLightningArcEvents, GiLightningArcSlots> {
}
export {};
