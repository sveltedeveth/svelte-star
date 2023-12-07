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
export type GiFloatingCrystalProps = typeof __propDef.props;
export type GiFloatingCrystalEvents = typeof __propDef.events;
export type GiFloatingCrystalSlots = typeof __propDef.slots;
export default class GiFloatingCrystal extends SvelteComponentTyped<GiFloatingCrystalProps, GiFloatingCrystalEvents, GiFloatingCrystalSlots> {
}
export {};
