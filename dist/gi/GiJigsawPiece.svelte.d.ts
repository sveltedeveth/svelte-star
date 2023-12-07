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
export type GiJigsawPieceProps = typeof __propDef.props;
export type GiJigsawPieceEvents = typeof __propDef.events;
export type GiJigsawPieceSlots = typeof __propDef.slots;
export default class GiJigsawPiece extends SvelteComponentTyped<GiJigsawPieceProps, GiJigsawPieceEvents, GiJigsawPieceSlots> {
}
export {};
