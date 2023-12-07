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
export type GiSlicedMushroomProps = typeof __propDef.props;
export type GiSlicedMushroomEvents = typeof __propDef.events;
export type GiSlicedMushroomSlots = typeof __propDef.slots;
export default class GiSlicedMushroom extends SvelteComponentTyped<GiSlicedMushroomProps, GiSlicedMushroomEvents, GiSlicedMushroomSlots> {
}
export {};
