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
export type FaPuzzlePieceProps = typeof __propDef.props;
export type FaPuzzlePieceEvents = typeof __propDef.events;
export type FaPuzzlePieceSlots = typeof __propDef.slots;
export default class FaPuzzlePiece extends SvelteComponentTyped<FaPuzzlePieceProps, FaPuzzlePieceEvents, FaPuzzlePieceSlots> {
}
export {};
