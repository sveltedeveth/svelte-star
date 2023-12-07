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
export type GiIceCubeProps = typeof __propDef.props;
export type GiIceCubeEvents = typeof __propDef.events;
export type GiIceCubeSlots = typeof __propDef.slots;
export default class GiIceCube extends SvelteComponentTyped<GiIceCubeProps, GiIceCubeEvents, GiIceCubeSlots> {
}
export {};
