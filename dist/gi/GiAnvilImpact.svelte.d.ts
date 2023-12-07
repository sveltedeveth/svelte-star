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
export type GiAnvilImpactProps = typeof __propDef.props;
export type GiAnvilImpactEvents = typeof __propDef.events;
export type GiAnvilImpactSlots = typeof __propDef.slots;
export default class GiAnvilImpact extends SvelteComponentTyped<GiAnvilImpactProps, GiAnvilImpactEvents, GiAnvilImpactSlots> {
}
export {};
