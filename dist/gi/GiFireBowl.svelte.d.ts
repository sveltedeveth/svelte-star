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
export type GiFireBowlProps = typeof __propDef.props;
export type GiFireBowlEvents = typeof __propDef.events;
export type GiFireBowlSlots = typeof __propDef.slots;
export default class GiFireBowl extends SvelteComponentTyped<GiFireBowlProps, GiFireBowlEvents, GiFireBowlSlots> {
}
export {};
