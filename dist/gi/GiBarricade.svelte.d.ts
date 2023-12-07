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
export type GiBarricadeProps = typeof __propDef.props;
export type GiBarricadeEvents = typeof __propDef.events;
export type GiBarricadeSlots = typeof __propDef.slots;
export default class GiBarricade extends SvelteComponentTyped<GiBarricadeProps, GiBarricadeEvents, GiBarricadeSlots> {
}
export {};
