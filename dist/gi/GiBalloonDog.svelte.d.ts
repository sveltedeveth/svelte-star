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
export type GiBalloonDogProps = typeof __propDef.props;
export type GiBalloonDogEvents = typeof __propDef.events;
export type GiBalloonDogSlots = typeof __propDef.slots;
export default class GiBalloonDog extends SvelteComponentTyped<GiBalloonDogProps, GiBalloonDogEvents, GiBalloonDogSlots> {
}
export {};
