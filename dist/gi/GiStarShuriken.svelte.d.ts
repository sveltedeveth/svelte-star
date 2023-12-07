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
export type GiStarShurikenProps = typeof __propDef.props;
export type GiStarShurikenEvents = typeof __propDef.events;
export type GiStarShurikenSlots = typeof __propDef.slots;
export default class GiStarShuriken extends SvelteComponentTyped<GiStarShurikenProps, GiStarShurikenEvents, GiStarShurikenSlots> {
}
export {};
