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
export type GiMountainCaveProps = typeof __propDef.props;
export type GiMountainCaveEvents = typeof __propDef.events;
export type GiMountainCaveSlots = typeof __propDef.slots;
export default class GiMountainCave extends SvelteComponentTyped<GiMountainCaveProps, GiMountainCaveEvents, GiMountainCaveSlots> {
}
export {};
