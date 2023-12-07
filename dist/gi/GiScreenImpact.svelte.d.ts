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
export type GiScreenImpactProps = typeof __propDef.props;
export type GiScreenImpactEvents = typeof __propDef.events;
export type GiScreenImpactSlots = typeof __propDef.slots;
export default class GiScreenImpact extends SvelteComponentTyped<GiScreenImpactProps, GiScreenImpactEvents, GiScreenImpactSlots> {
}
export {};
