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
export type GiSuperMushroomProps = typeof __propDef.props;
export type GiSuperMushroomEvents = typeof __propDef.events;
export type GiSuperMushroomSlots = typeof __propDef.slots;
export default class GiSuperMushroom extends SvelteComponentTyped<GiSuperMushroomProps, GiSuperMushroomEvents, GiSuperMushroomSlots> {
}
export {};
