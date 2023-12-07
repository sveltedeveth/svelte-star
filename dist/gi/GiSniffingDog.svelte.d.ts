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
export type GiSniffingDogProps = typeof __propDef.props;
export type GiSniffingDogEvents = typeof __propDef.events;
export type GiSniffingDogSlots = typeof __propDef.slots;
export default class GiSniffingDog extends SvelteComponentTyped<GiSniffingDogProps, GiSniffingDogEvents, GiSniffingDogSlots> {
}
export {};
