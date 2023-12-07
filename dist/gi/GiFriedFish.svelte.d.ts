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
export type GiFriedFishProps = typeof __propDef.props;
export type GiFriedFishEvents = typeof __propDef.events;
export type GiFriedFishSlots = typeof __propDef.slots;
export default class GiFriedFish extends SvelteComponentTyped<GiFriedFishProps, GiFriedFishEvents, GiFriedFishSlots> {
}
export {};
