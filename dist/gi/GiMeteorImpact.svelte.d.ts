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
export type GiMeteorImpactProps = typeof __propDef.props;
export type GiMeteorImpactEvents = typeof __propDef.events;
export type GiMeteorImpactSlots = typeof __propDef.slots;
export default class GiMeteorImpact extends SvelteComponentTyped<GiMeteorImpactProps, GiMeteorImpactEvents, GiMeteorImpactSlots> {
}
export {};
