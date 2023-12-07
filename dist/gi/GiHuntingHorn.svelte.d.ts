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
export type GiHuntingHornProps = typeof __propDef.props;
export type GiHuntingHornEvents = typeof __propDef.events;
export type GiHuntingHornSlots = typeof __propDef.slots;
export default class GiHuntingHorn extends SvelteComponentTyped<GiHuntingHornProps, GiHuntingHornEvents, GiHuntingHornSlots> {
}
export {};
