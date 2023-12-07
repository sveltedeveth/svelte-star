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
export type GiPieceSkullProps = typeof __propDef.props;
export type GiPieceSkullEvents = typeof __propDef.events;
export type GiPieceSkullSlots = typeof __propDef.slots;
export default class GiPieceSkull extends SvelteComponentTyped<GiPieceSkullProps, GiPieceSkullEvents, GiPieceSkullSlots> {
}
export {};
