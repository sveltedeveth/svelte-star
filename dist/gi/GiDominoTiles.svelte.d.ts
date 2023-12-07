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
export type GiDominoTilesProps = typeof __propDef.props;
export type GiDominoTilesEvents = typeof __propDef.events;
export type GiDominoTilesSlots = typeof __propDef.slots;
export default class GiDominoTiles extends SvelteComponentTyped<GiDominoTilesProps, GiDominoTilesEvents, GiDominoTilesSlots> {
}
export {};
