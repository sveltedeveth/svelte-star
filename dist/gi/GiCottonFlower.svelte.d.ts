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
export type GiCottonFlowerProps = typeof __propDef.props;
export type GiCottonFlowerEvents = typeof __propDef.events;
export type GiCottonFlowerSlots = typeof __propDef.slots;
export default class GiCottonFlower extends SvelteComponentTyped<GiCottonFlowerProps, GiCottonFlowerEvents, GiCottonFlowerSlots> {
}
export {};
