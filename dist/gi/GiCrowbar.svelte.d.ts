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
export type GiCrowbarProps = typeof __propDef.props;
export type GiCrowbarEvents = typeof __propDef.events;
export type GiCrowbarSlots = typeof __propDef.slots;
export default class GiCrowbar extends SvelteComponentTyped<GiCrowbarProps, GiCrowbarEvents, GiCrowbarSlots> {
}
export {};
