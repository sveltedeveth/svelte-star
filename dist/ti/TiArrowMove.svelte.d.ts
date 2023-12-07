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
export type TiArrowMoveProps = typeof __propDef.props;
export type TiArrowMoveEvents = typeof __propDef.events;
export type TiArrowMoveSlots = typeof __propDef.slots;
export default class TiArrowMove extends SvelteComponentTyped<TiArrowMoveProps, TiArrowMoveEvents, TiArrowMoveSlots> {
}
export {};
