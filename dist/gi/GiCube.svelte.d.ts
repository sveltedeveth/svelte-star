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
export type GiCubeProps = typeof __propDef.props;
export type GiCubeEvents = typeof __propDef.events;
export type GiCubeSlots = typeof __propDef.slots;
export default class GiCube extends SvelteComponentTyped<GiCubeProps, GiCubeEvents, GiCubeSlots> {
}
export {};
