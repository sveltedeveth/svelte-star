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
export type GiHighGrassProps = typeof __propDef.props;
export type GiHighGrassEvents = typeof __propDef.events;
export type GiHighGrassSlots = typeof __propDef.slots;
export default class GiHighGrass extends SvelteComponentTyped<GiHighGrassProps, GiHighGrassEvents, GiHighGrassSlots> {
}
export {};
