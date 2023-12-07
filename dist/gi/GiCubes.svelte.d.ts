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
export type GiCubesProps = typeof __propDef.props;
export type GiCubesEvents = typeof __propDef.events;
export type GiCubesSlots = typeof __propDef.slots;
export default class GiCubes extends SvelteComponentTyped<GiCubesProps, GiCubesEvents, GiCubesSlots> {
}
export {};
