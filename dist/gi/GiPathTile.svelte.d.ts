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
export type GiPathTileProps = typeof __propDef.props;
export type GiPathTileEvents = typeof __propDef.events;
export type GiPathTileSlots = typeof __propDef.slots;
export default class GiPathTile extends SvelteComponentTyped<GiPathTileProps, GiPathTileEvents, GiPathTileSlots> {
}
export {};
