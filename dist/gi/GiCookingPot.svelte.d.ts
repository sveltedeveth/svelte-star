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
export type GiCookingPotProps = typeof __propDef.props;
export type GiCookingPotEvents = typeof __propDef.events;
export type GiCookingPotSlots = typeof __propDef.slots;
export default class GiCookingPot extends SvelteComponentTyped<GiCookingPotProps, GiCookingPotEvents, GiCookingPotSlots> {
}
export {};
