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
export type GiDominoMaskProps = typeof __propDef.props;
export type GiDominoMaskEvents = typeof __propDef.events;
export type GiDominoMaskSlots = typeof __propDef.slots;
export default class GiDominoMask extends SvelteComponentTyped<GiDominoMaskProps, GiDominoMaskEvents, GiDominoMaskSlots> {
}
export {};
