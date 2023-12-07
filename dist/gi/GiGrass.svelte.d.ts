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
export type GiGrassProps = typeof __propDef.props;
export type GiGrassEvents = typeof __propDef.events;
export type GiGrassSlots = typeof __propDef.slots;
export default class GiGrass extends SvelteComponentTyped<GiGrassProps, GiGrassEvents, GiGrassSlots> {
}
export {};
