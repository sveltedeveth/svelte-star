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
export type MdTerrainProps = typeof __propDef.props;
export type MdTerrainEvents = typeof __propDef.events;
export type MdTerrainSlots = typeof __propDef.slots;
export default class MdTerrain extends SvelteComponentTyped<MdTerrainProps, MdTerrainEvents, MdTerrainSlots> {
}
export {};
