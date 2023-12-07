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
export type GiImpactPointProps = typeof __propDef.props;
export type GiImpactPointEvents = typeof __propDef.events;
export type GiImpactPointSlots = typeof __propDef.slots;
export default class GiImpactPoint extends SvelteComponentTyped<GiImpactPointProps, GiImpactPointEvents, GiImpactPointSlots> {
}
export {};
