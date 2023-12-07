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
export type GiDogBowlProps = typeof __propDef.props;
export type GiDogBowlEvents = typeof __propDef.events;
export type GiDogBowlSlots = typeof __propDef.slots;
export default class GiDogBowl extends SvelteComponentTyped<GiDogBowlProps, GiDogBowlEvents, GiDogBowlSlots> {
}
export {};
