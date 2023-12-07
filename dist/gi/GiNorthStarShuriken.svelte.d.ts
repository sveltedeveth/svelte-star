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
export type GiNorthStarShurikenProps = typeof __propDef.props;
export type GiNorthStarShurikenEvents = typeof __propDef.events;
export type GiNorthStarShurikenSlots = typeof __propDef.slots;
export default class GiNorthStarShuriken extends SvelteComponentTyped<GiNorthStarShurikenProps, GiNorthStarShurikenEvents, GiNorthStarShurikenSlots> {
}
export {};
