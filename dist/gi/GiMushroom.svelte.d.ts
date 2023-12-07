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
export type GiMushroomProps = typeof __propDef.props;
export type GiMushroomEvents = typeof __propDef.events;
export type GiMushroomSlots = typeof __propDef.slots;
export default class GiMushroom extends SvelteComponentTyped<GiMushroomProps, GiMushroomEvents, GiMushroomSlots> {
}
export {};
