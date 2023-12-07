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
export type GiGooeyImpactProps = typeof __propDef.props;
export type GiGooeyImpactEvents = typeof __propDef.events;
export type GiGooeyImpactSlots = typeof __propDef.slots;
export default class GiGooeyImpact extends SvelteComponentTyped<GiGooeyImpactProps, GiGooeyImpactEvents, GiGooeyImpactSlots> {
}
export {};
