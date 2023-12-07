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
export type GiSpottedMushroomProps = typeof __propDef.props;
export type GiSpottedMushroomEvents = typeof __propDef.events;
export type GiSpottedMushroomSlots = typeof __propDef.slots;
export default class GiSpottedMushroom extends SvelteComponentTyped<GiSpottedMushroomProps, GiSpottedMushroomEvents, GiSpottedMushroomSlots> {
}
export {};
